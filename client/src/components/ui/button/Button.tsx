import React, { FC, InputHTMLAttributes } from "react";
import Loading from "../loading/Loading";

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = ({ isLoading, children }: IButton) => {
  return (
    <button className="bg-primary text-white rounded-xl transition-colors duration-300 ease-linear py-3 px-5 hover:bg-primary/60 w-full">
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default Button;
