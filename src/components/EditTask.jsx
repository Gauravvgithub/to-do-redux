import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/Slice";

const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({id: task.id, title, description, status}))
    setIsEdit(false)
  }

  return (
    <div className="relative rounded-md  z-10">
      {isEdit ? (
        <div className="p-4 rounded-md" style={{backgroundColor:"#d6542c"}}>
          <h2 className="text-xl font-semibold mb-3 text-indigo-900">
            Edit Task
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Task Titile"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
              style={{backgroundColor:"#eda28a"}}

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
              style={{backgroundColor:"#eda28a"}}
            ></textarea>
          </div>
          <div className="mb-4">
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              style={{backgroundColor:"#eda28a"}}

            >
              <option value="To Do" className="bg-white">To Do</option>
              <option value="In Progress" className="bg-white">In Progress</option>
              <option value="Completed" className="bg-white">Completed</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-600"
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              type="submit"
              className=" bg-yellow-500 text-white py-2 px-2 rounded-md hover:bg-yellow-600"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          className="px-5 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default EditTask;
