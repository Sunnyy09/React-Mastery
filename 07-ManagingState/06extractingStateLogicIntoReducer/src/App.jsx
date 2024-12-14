import { useState } from "react";
import "./App.css";
import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskLists from "./components/TaskLists";
import tasksReducers from "./Reducer";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: false },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
let nextId = 3;

function App() {
  const [tasks, dispatch] = useReducer(tasksReducers, initialTasks);

  function handleAddTask(text) {
    // setTasks([...tasks, { id: nextId++, text: text, done: false }]);
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleDeleteTask(id) {
    // setTasks(tasks.filter((task) => task.id !== id));
    dispatch({
      type: "deleted",
      id: id,
    });
  }

  function updateToggle(id) {
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, done: !task.done } : task
    //   )
    // );
    dispatch({
      type: "toggle",
      id: id,
    });
  }

  return (
    <>
      <h1 className="text-3xl text-[#d63447] font-bold">
        Extracting State Logic into a Reducer!
      </h1>
      <div className="flex flex-col items-center rounded-lg px-4 py-5 w-[500px] mt-8 min-h-[500px] bg-[#f57b51]">
        <h2 className="text-2xl text-[#f6eedf] font-bold underline">
          Todo List
        </h2>
        <AddTask handleAddTask={handleAddTask} />
        <TaskLists
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          updateToggle={updateToggle}
        />
      </div>
    </>
  );
}

export default App;
