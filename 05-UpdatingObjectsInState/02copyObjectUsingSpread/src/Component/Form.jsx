import React, { useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe123@example.com",
  });

  const handleFirstNameChange = (e) => {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setPerson({ ...person, email: e.target.value });
  };

  return (
    <form className="px-4 flex flex-col items-center space-y-3">
      <label className="text-pink-400 w-full" htmlFor="firstName">
        First Name:{" "}
        <input
          className="w-full py-1 px-2 text-gray-700 outline-none rounded ring-2 ring-gray-500 shadow-md shadow-white/40"
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label className="text-pink-400 w-full" htmlFor="lastName">
        Last Name:{" "}
        <input
          className="w-full py-1 px-2 text-gray-700 outline-none rounded ring-2 ring-gray-500 shadow-md shadow-white/50"
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label className="text-pink-400 w-full" htmlFor="email">
        Email:{" "}
        <input
          className="w-full py-1 px-2 text-gray-700 outline-none rounded ring-2 mb-5 ring-gray-500 shadow-md shadow-white/50"
          type="email"
          name="email"
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p className=" text-lg text-purple-300">
        {person.firstName} {person.lastName} / {person.email}
      </p>
    </form>
  );
}

export default Form;
