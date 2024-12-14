import React from "react";

function AddTask({ handleAddTask }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const text = event.target.elements[0].value; // Extract input value
        handleAddTask(text);
        event.target.reset();
      }}
      className="w-full flex justify-center items-center mt-5"
    >
      <input
        type="text"
        className="w-3/5 py-1 px-1 font-semibold outline-none rounded-l"
      />
      <button
        className="bg-[#f6eedf] font-semibold px-2 py-1 rounded-r hover:bg-gray-300"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddTask;
