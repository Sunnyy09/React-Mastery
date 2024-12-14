import React from "react";

function TaskLists({
  tasks,
  handleDeleteTask,
  handleUpdateTask,
  updateToggle,
}) {
  return (
    <div className="w-full mt-6 px-6 space-y-1">
      {tasks.map((task) => (
        <ul key={task.id} className="list-none w-full">
          <li className="w-full flex justify-center space-x-3">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => updateToggle(task.id)}
            />
            <p
              className={`w-full text-lg ${
                task.done ? "line-through text-gray-300" : ""
              }`}
            >
              {task.text}
            </p>
            <button
              onClick={handleUpdateTask}
              className="bg-gray-300 px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-[#d63447] text-[#f6eedf] px-2 rounded"
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default TaskLists;
