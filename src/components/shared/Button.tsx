import React from "react";
type buttonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
};
const Button = ({ onClick, label }: buttonProps) => {
  return (
    <button
      className="mt-10 border p-2 bg-violet-400 rounded text-black hover:bg-violet-500 w-fit"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
