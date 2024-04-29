import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className="bg-transparent font-semibold hover:bg-[#3e5463] text-[#3e5463] hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
      style={{
        border: "1px solid #5b7282",
        borderRadius: "2px",
        letterSpacing: ".5px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
