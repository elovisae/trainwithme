import React from "react";
type secondaryButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
};
const SecondaryButton = ({ onClick, label }: secondaryButtonProps) => {
  return (
    <button
      className="mt-10 border p-2 border-violet-400 rounded text-violet-400 hover:bg-neutral-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
