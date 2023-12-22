import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { AuthContext } from "../../../context/Authentication";
import axios from "axios";
import toast from "react-hot-toast";

const TaskForm = () => {
  const { handleSubmit, register, reset, control, setValue } = useForm();

  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://rp-task-m.vercel.app/tasks",
        data
      );

      // Show success toast
      toast.success("Task submitted successfully");

      // Reset the form after successful submission
      reset();

      console.log("Task submitted successfully:", response.data);
    } catch (error) {
      // Show error toast
      toast.error("Error submitting task");

      console.error("Error submitting task:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto mt-3 p-4 bg-white rounded shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter title"
          // Add validation rules if needed
          {...register("title", { required: true })}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter description"
          // Add validation rules if needed
          {...register("description", { required: true })}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="deadline"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Deadline
        </label>
        <input
          type="datetime-local"
          id="deadline"
          name="deadline"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          // Add validation rules if needed
          {...register("deadline", { required: true })}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="priority"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          // Add validation rules if needed
          {...register("priority", { required: true })}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="status"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          {...register("status", { required: true })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="todo">Todo</option>
          <option value="on-going">Ongoing</option>
          <option value="complete">Complete</option>
          {/* Add other status options if needed */}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="createdBy"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Created By
        </label>
        <input
          type="text"
          id="createdBy"
          name="createdBy"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter creator's email"
          {...register("createdBy", { required: true })}
          value={user.email}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
