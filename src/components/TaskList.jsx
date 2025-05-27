import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, fetchTodo } from "../features/Slice";
import EditTask from "./EditTask";
import './task.css'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  //   console.log(tasks)

  if (loading) {
    return <p className="text-center text-black-300">Tasks loading ....</p>;
  }
  if (error) {
    return <p className="text-center text-black-300">There is an error</p>;
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "To Do":
        return (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
            📝 To Do
          </span>
        );
      case "In Progress":
        return (
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
            🚧 In Progress
          </span>
        );
      case "Completed":
        return (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
            ✅ Completed
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div>
      <div>
        {/* <h2>Tasks</h2> */}
        <ul className="grid grid-cols-2 gap-4" id="ul">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-grey-50 p-4 rounded-md shadow-sm flex-row justify-between items-center transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="m-2">
                <h3 className="text-wrap text-lg font-semibold text-black">
                Title: {task.title}
                </h3>
                {task.description && (
                  <p className="text-gray-700">Description: {task.description}</p>
                )}
                <p className="text-wrap mt-1 text-sm font-semibold">
                  Status: {getStatusBadge(task.status)}
                </p>
              </div>
              <div className="flex-col space-x-2">
                <EditTask task={task} />
                <button
                  className="max-h-fit mt-5 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-500"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
