import React, { useRef, useState } from "react";
import Loader from "../loading/Loader";
import SendSvg from "../loading/SendSvg";

type ButtonProps = {
  onSubmit: () => void;
  text: string;
  loading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onSubmit,
  text,
  loading,
  disabled,
}) => {
  return (
    <button className="button button--flex" disabled={loading}>
      Send Message
      <SendSvg />
      <Loader />
    </button>
  );
};
export default Button;
