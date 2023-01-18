import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="flex justify-end gap-6">
        <SecondaryButton onClick={() => navigate("/login")} label="Log in" />
        <Button
          onClick={() => navigate("/createAccount")}
          label="Create Account"
        />
      </nav>
      <h1 className="mb-10 text-center text-violet-400 text-4xl">
        Train with me
      </h1>
    </header>
  );
};

export default Header;
