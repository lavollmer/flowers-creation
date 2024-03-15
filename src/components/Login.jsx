import React, { useState } from "react";
import FlowerBouquet from "../assets/flowerbouquet.jpg";

const Login = () => {
  //creating a variable where state is set to "", setUsername is the function and username holds the current value of state
  const [username, setUsername] = useState("");
  //creating a variable where state is set to "", setPassword is the function and password holds the current value of state
  const [password, setPassword] = useState("");

  //handleUsername function -> value is value of the input field, e.target is the target of the event, setUsername is the function to change the state, arrow function (concise way of writing in JavaScript) based on the parameter of the event
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  //handlePassword function
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    console.log("Login clicked");
  };

  return (
    <div>
      <div className="bg-[#DBDBD5] flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src={FlowerBouquet}
            alt="Flower Bouquet Image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4 text-[#243853]">Login</h1>
          <form action="#" method="POST">
            <div className="mb-4">
              <label for="username" className="block text-gray-600">
                Username
              </label>
              <input
                // specifies input should handle text values
                type="text"
                id="username"
                placeholder="username"
                //binds the value of the username input to the username variable - value in field will be controlled by value of username variable
                value={username}
                //function to be called when field changes for username - handles change and updaates username
                onChange={handleUsername}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              ></input>
            </div>

            <div className="mb-4">
              <label for="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={setPassword}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              ></input>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              ></input>
              <label for="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>

            <div className="mb-6 text-[#243853]">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              onClick={handleLogin}
              className="bg-[#243853] hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-[#243853] text-center">
            <a href="#" className="hover:underline">
              Sign up Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
