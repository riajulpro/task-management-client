/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import { useDrag } from "react-dnd";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegCircleCheck, FaTrash } from "react-icons/fa6";

const TaskCard = ({ task, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [clickedTask, setClickedTask] = useState({});
  const { title, backgroundColor, _id, status } = task;

  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  const handleTaskModal = (task) => {
    console.log(task);
    setClickedTask(task);
    setShowModal(true);
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDeleteTask = (id) => {
    console.log(id);
    axios.delete(`https://rp-task-m.vercel.app/tasks/${id}`).then((data) => {
      console.log(data.data);
      refetch();
      if (data.data.deletedCount > 0) {
        toast.error("Task has been deleted");
      }
    });
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const splitData = data.priority.split(" ");

    if (data.title.length > 70) {
      toast.error("Title cannot be more than 70 characters");
      return;
    }

    if (data.description.length > 200) {
      toast.error("Description cannot be more than 200 characters");
      return;
    }
    const newTask = {
      title: data.title,
      description: data.description,
      deadline: data.date,
      status: "to-do",
      priority: splitData[0],
      backgroundColor: splitData[1],
    };

    axios
      .post("https://rp-task-m.vercel.app/tasks", newTask)
      .then((res) => {
        console.log(res.data);
        refetch();
        if (res.data.insertedId) {
          reset();
          setModal(false);
          toast.success(`${data.title} task added`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <h1
          ref={drag}
          onClick={() => handleTaskModal(task)}
          className={`p-3 flex-[11] flex justify-between cursor-pointer transform transition-transform duration-300 hover:scale-95 text-white rounded-3xl mb-1 ${
            isDragging ? "opacity-25" : "opacity-100"
          }`}
          style={cardStyle}
        >
          <span>{title}</span>
          {status === "on-going" && (
            <span className="loading loading-spinner text-black"></span>
          )}
          {status === "complete" && (
            <span>
              <FaRegCircleCheck className="text-xl text-[#12e71d] font-bold"></FaRegCircleCheck>
            </span>
          )}
        </h1>
        <button
          onClick={() => handleDeleteTask(_id)}
          className="btn btn-xs flex-1"
        >
          <FaTrash className="text-red-600"></FaTrash>
        </button>
      </div>

      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div
            className="modal-box text-white"
            style={{ backgroundColor: clickedTask.backgroundColor }}
          >
            <h3 className="font-bold text-lg">{clickedTask.title}</h3>
            <p className="py-1">{clickedTask.description}</p>
            <div className="flex justify-between items-center">
              <p className="py-1"> Deadline: {clickedTask.deadline}</p>
              <p>Priority: {clickedTask.priority}</p>
            </div>
            <p>Status: {clickedTask.status}</p>
            <div className="modal-action">
              <div method="dialog" className="space-x-5">
                <button onClick={() => setModal(true)} className="btn">
                  Edit
                </button>
                <button onClick={() => setShowModal(false)} className="btn">
                  Close
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}

      {modal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  {...register("title")}
                  placeholder="title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  {...register("description")}
                  placeholder="Task description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    {...register("date")}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Priority</span>
                  </label>
                  <select
                    name="Priority"
                    {...register("priority")}
                    className="select select-bordered w-full"
                  >
                    <option disabled selected>
                      Select Priority
                    </option>
                    <option value="high #EA3A77">High</option>
                    <option value="moderate #FF02F0">Moderate</option>
                    <option value="low #AA6AE2">Low</option>
                  </select>
                </div>
              </div>
              <div className="modal-action">
                <div method="dialog" className="space-x-5">
                  <button className="btn btn-primary text-white">Add</button>
                  <button
                    onClick={() => setModal(false)}
                    className="btn bg-red-500 text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default TaskCard;
