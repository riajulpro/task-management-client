import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";
import useTasksData from "../../data/useTasksData";
import TaskBar from "./Tasks/TaskBar";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const { tasks, refetch, loading } = useTasksData();

  if (loading) {
    return "Please wait...";
  }

  const myTask = tasks?.filter((task) => task.createdBy === user.email) || [];

  console.log(myTask);

  const toDo = myTask.filter((task) => task.status === "todo") || [];
  const onGoing = myTask.filter((task) => task.status === "on-going") || [];
  const completed = myTask.filter((task) => task.status === "complete") || [];

  return (
    <div className="m-5 grid grid-cols-1 md:grid-cols-3 gap-2">
      <div>
        <div className="bg-white shadow-md border-b-2 border-red-500 p-2 font-bold uppercase text-lg">
          TODO List
        </div>
        {toDo.map((task) => (
          <TaskBar key={task._id} task={task} refetch={refetch} />
        ))}
      </div>
      <div>
        <div className="bg-white shadow-md border-b-2 border-red-500 p-2 font-bold uppercase text-lg">
          Ongoing Task
        </div>
        {onGoing.map((task) => (
          <TaskBar key={task._id} task={task} refetch={refetch} />
        ))}
      </div>
      <div>
        <div className="bg-white shadow-md border-b-2 border-red-500 p-2 font-bold uppercase text-lg">
          Completed Task
        </div>
        {completed.map((task) => (
          <TaskBar key={task._id} task={task} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
