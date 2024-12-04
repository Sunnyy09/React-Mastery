import React, { useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    name: "John Doe",
    artwork: {
      title: "Blue nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleTitleChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };

  const handleCityChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  };

  const hanleImageChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  };

  return (
    <form className="flex flex-wrap justify-center items-center space-y-2">
      <label className="text-white w-full" htmlFor="name">
        Name:
        <input
          className="w-full text-gray-7 00 py-1 px-2 rounded"
          type="text"
          name="name"
          placeholder="Enter your name:"
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label className="text-white w-full" htmlFor="title">
        Title:
        <input
          className="w-full text-gray-700 py-1 px-2 rounded"
          type="text"
          name="title"
          placeholder="Enter your title:"
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label className="text-white w-full" htmlFor="city">
        City:
        <input
          className="w-full text-gray-700 py-1 px-2 rounded"
          type="text"
          name="city"
          placeholder="Enter your city:"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label className="text-white w-full" htmlFor="image">
        Image:
        <input
          className="w-full text-gray-700 py-1 px-2 rounded mb-3"
          type="text"
          name="image"
          placeholder="Enter image url:"
          value={person.artwork.image}
          onChange={hanleImageChange}
        />
      </label>

      <p className="text-blue-400 text-xl">
        {person.artwork.title} by {person.name} (located in{" "}
        {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
        className="w-60 h-40"
      />
    </form>
  );
}

export default Form;
