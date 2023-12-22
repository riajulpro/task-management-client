import { useState } from "react";
import ViewDetailsModal from "../../../components/shared/task/ViewDetailsModal";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditModal from "../../../components/shared/task/EditModal";
import toast from "react-hot-toast";
import axios from "axios";

const TaskBar = ({ task, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isEditOpen, setIsEditOpen] = useState(false);

  const editModal = () => {
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
  };

  const deleteTheTask = async (data) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/tasks/${task._id}`
      );

      // Show success toast
      toast.success("Task deleted successfully");

      refetch();

      console.log("Task deleted successfully:", response.data);
    } catch (error) {
      // Show error toast
      toast.error("Error deleting task");

      console.error("Error deleting task:", error.message);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md p-2 mt-1 cursor-pointer hover:scale-[1.015] duration-150 flex gap-1 justify-between items-center">
        <span onClick={openModal} className="mr-auto">
          {task.title}
        </span>
        <button
          onClick={editModal}
          className="cursor-pointer hover:text-violet-600 duration-150"
        >
          <FaEdit className="bg-gray-100 p-1 rounded-md h-6 w-6" />
        </button>
        <button
          onClick={deleteTheTask}
          className="cursor-pointer hover:text-violet-600 duration-150"
        >
          <MdDelete className="bg-gray-100 p-1 rounded-md h-6 w-6" />
        </button>
      </div>

      <ViewDetailsModal task={task} isOpen={isModalOpen} onClose={closeModal} />
      <EditModal
        task={task}
        isOpen={isEditOpen}
        onClose={closeEditModal}
        refetch={refetch}
      />
    </>
  );
};

export default TaskBar;
