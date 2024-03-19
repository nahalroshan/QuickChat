import React from "react";
import { useNavigate } from "react-router-dom";
function Conversation() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate("/message-window");
        }}
        className="justify-center bg-gray-800 max-w-20 flex m-4 items-center rounded-full mx-auto"
      >
 
      </div>
      <div
        onClick={() => {
          navigate("/message-window");
        }}
        className="bg-grey-lighter flex-1 m-4 overflow-auto"
      >
        <div className="px-3 flex items-center bg-grey-light cursor-pointer">
          <div>
            <img
              className="h-10 w-10 rounded-full"
              src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
            />
          </div>
          <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
            <div className="flex items-bottom justify-between">
              <p className="text-grey-darkest text-lg font-bold">
                Nahal Roshan
              </p>
              <p className="text-xs text-grey-darkest">12:45 pm</p>
            </div>
            <p className="text-grey-dark mt-1 text-sm">
              Get Andrés on this movie ASAP!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
