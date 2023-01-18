import React from "react";

const PasswordInput = () => {
  return (
    <div className="col-span-12 flex flex-col">
      <label>Password</label>
      <input
        className=" mt-2 p-2 border rounded bg-transparent border-violet-400"
        type="password"
      />
    </div>
  );
};

export default PasswordInput;
