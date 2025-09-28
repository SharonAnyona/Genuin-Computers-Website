// *********************
// Role of the component: Custom button component
// Name of the component: CustomButton.tsx
// Developer: Sharon Anyona
// Version: 1.0
// Component call: <CustomButton paddingX={paddingX} paddingY={paddingY} text={text} buttonType={buttonType} customWidth={customWidth} textSize={textSize} />
// Input parameters: CustomButtonProps interface
// Output: custom button component
// *********************


import React from "react";

interface CustomButtonProps {
  // Old props
  paddingX?: number;
  paddingY?: number;
  text?: string;
  buttonType?: "submit" | "reset" | "button";
  customWidth?: string;
  textSize?: string;

  // New props
  title?: string;
  containerStyles?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  // old props
  paddingX,
  paddingY,
  text,
  buttonType = "button",
  customWidth,
  textSize,

  // new props
  title,
  containerStyles,
  disabled = false,
  onClick,
  type,
}) => {
  // Decide what label to show
  const label = title || text || "Button";

  return (
    <button
      type={type || buttonType}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${customWidth && customWidth !== "no" ? `w-${customWidth}` : ""}
        ${paddingX ? `px-${paddingX}` : ""}
        ${paddingY ? `py-${paddingY}` : ""}
        ${textSize ? `text-${textSize}` : ""}
        uppercase bg-white border border-gray-300 font-bold text-red-600 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2
        ${containerStyles || ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default CustomButton;

