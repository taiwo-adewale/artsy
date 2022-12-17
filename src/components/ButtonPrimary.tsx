import React from "react";

type Props = {
  children: React.ReactNode;
  fontSize?: string;
  px?: string;
  py?: string;
  borderRadius?: string;
};

const ButtonPrimary = ({ children, fontSize, px, py, borderRadius }: Props) => {
  const styles = {
    fontSize: fontSize ?? "1rem",
    paddingLeft: px ?? "3rem",
    paddingRight: px ?? "3rem",
    paddingTop: py ?? "0.8rem",
    paddingBottom: py ?? "0.8rem",
    borderRadius: borderRadius ?? "0.3rem",
  };

  return (
    <button style={styles} className="bg-btnPrimary text-white">
      {children}
    </button>
  );
};

export default ButtonPrimary;
