import React, { useRef, useState } from "react";
import { addUser } from "../../redux/slices/user-clise";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const CreateUser = () => {
  const dispatch = useDispatch();

  const name = useRef("");
  const email = useRef("");
  const age = useRef(null);
  const profession = useRef("");
  const [gender, setGender] = useState("Male");

  const handleSubmit = (event) => {
    event.preventDefault();

    let newUser = {
      id: uuidv4(),
      name: name.current.value,
      email: email.current.value,
      age: age.current.value,
      profession: profession.current.value,
      gender,
    };

    dispatch(addUser(newUser));

    name.current.value = "";
    email.current.value = "";
    age.current.value = "";
    profession.current.value = "";
    setGender(null);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create New User
        </h2>
        <input
          ref={name}
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          required
        />
        <input
          ref={email}
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          required
        />
        <input
          ref={age}
          type="number"
          placeholder="Enter your age"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          required
        />
        <input
          ref={profession}
          type="text"
          placeholder="Enter your profession"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          required
        />
        <div className="space-y-3">
          <p className="text-gray-600 text-sm">Choose your gender:</p>
          <div className="flex justify-around">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-radio text-indigo-500 focus:ring-indigo-500"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
              />
              <span className="text-gray-700">Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-radio text-indigo-500 focus:ring-indigo-500"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
              />
              <span className="text-gray-700">Female</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-indigo-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
