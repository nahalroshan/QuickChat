import React from "react";

function Conversation() {
  return (
    <div>
      <div className="bg-grey-lighter flex-1 overflow-auto">
        <div className="px-3 flex items-center bg-grey-light cursor-pointer">
          <div>
            <img
              className="h-12 w-12 rounded-full"
              src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
            />
          </div>
          <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
            <div className="flex items-bottom justify-between">
              <p className="text-grey-darkest">New Movie! Expendables 4</p>
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
