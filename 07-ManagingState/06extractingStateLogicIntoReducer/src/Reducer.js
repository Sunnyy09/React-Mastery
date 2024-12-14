export default function tasksReducers(tasks, action) {
  if (action.type === "added") {
    return [...tasks, { id: action.id, text: action.text, done: false }];
  } else if (action.type === "deleted") {
    return tasks.filter((task) => task.id !== action.id);
  } else if (action.type === "toggle") {
    return tasks.map((task) =>
      task.id === action.id ? { ...task, done: !task.done } : task
    );
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
