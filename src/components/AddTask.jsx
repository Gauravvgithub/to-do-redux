import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../features/Slice";
import Clock from "./Clock";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      description,
      status,
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-3" style={{ color: "#124c81" }}>
        Add New Task
      </h2>
      <Clock />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Titile"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
          rows="3"
        ></textarea>
      </div>
      <div className="mb-4">
        <select
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full text-white py-2 bg-blue-500 rounded-md hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
