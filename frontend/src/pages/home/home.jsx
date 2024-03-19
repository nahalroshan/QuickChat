import React from "react";
import Logo from "../home/new.png";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-900 h-screen text-white">
      <div className="mx-auto  max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl justify-center text-center">
          <div className="flex justify-center items-center ">
            <img className="h-40 w-40" src={Logo} alt="" />
          </div>

          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-9xl">
            QuickChat
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            "Connect, Chat, and Collaborate"
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              className="block w-3/4 rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
              onClick={() => {
                navigate("/chat-window");
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
