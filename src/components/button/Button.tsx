import React, { useRef, useState } from "react";

type ButtonProps = {
  onSubmit?: (e: React.FormEvent) => void;
  text: string;
  SendSvg?: React.FC;
  Loader?: React.FC;
  loading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onSubmit,
  text,
  SendSvg: SendSvgComponent,
  loading = false,
  Loader: LoaderComponent,
  disabled = false,
}) => {
  const SendSvg = SendSvgComponent || (() => null);
  const Loader = LoaderComponent || (() => null);
  return (
    <button
      className="button button--flex"
      disabled={disabled}
      onClick={onSubmit}
    >
      {text}
      {loading ? <Loader /> : <SendSvg />}
      {/* {!loading ? <SendSvg /> : <Loader />} */}
      {/* {!loading ? <Loader /> : <SendSvg />} */}
    </button>
  );
};
export default Button;
