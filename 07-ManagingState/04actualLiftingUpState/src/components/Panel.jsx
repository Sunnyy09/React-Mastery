import React from "react";

function Panel({ title, children, isActive, onShow }) {
  //move this state from child to parent component and passing it as a prop in child component
  //   const [isActive, setIsActive] = useState(false);
  return (
    <section className="text-center">
      <h3 className="mt-4 text-lg text-[#27296d] font-semibold">{title}</h3>
      <button
        className="bg-[#a393eb] text-[#f5c7f7] px-2 mt-1 rounded hover:ring-2 hover:bg-[#5e63b6]"
        onClick={onShow}
      >
        {isActive ? null : "Show"}
      </button>
      {isActive ? (
        <p className="mt-3 text-[#5e63b6] py-2 px-4">{children}</p>
      ) : null}
    </section>
  );
}

export default Panel;
