import React from "react";
import Messages from "./messages";
import { IoMdSend } from "react-icons/io";

function MessageContainer() {
  return (
    <div>
      <div className="h-screen flex flex-col rounded-md bg-gray-900">
        <div className="flex m-4 p-2 flex-row rounded-lg rounded-xl ">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 className="text-lg font-semibold text-slate-100 ml-2  ">
            John Doe
          </h1>
        </div>
        <div
          className="flex flex-col overflow-y-auto p-4 bg-gray-900  h-3/4"
          style={{
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            scrollBehavior: "smooth",
          }}
        >
          <Messages />
          <Messages />
          <Messages />
          <Messages />
        </div>
        <div className="flex flex-row ">
          <label className="w-4/5 m-2 justify-center flex   input input-bordered flex items-center bg-gray-900 gap-2">
            <input type="text" className="grow" placeholder="" />
          </label>
          <IoMdSend className="h-8 m-4 w-10" />
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;
