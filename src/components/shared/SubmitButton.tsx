import React from "react";
type buttonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
};
const Button = ({ onClick, label }: buttonProps) => {
  return (
    <div className=" col-start-11 col-span-2 flex justify-end">
      <button
        type="submit"
        className=" border p-3 bg-violet-400 rounded text-black hover:bg-violet-500"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
