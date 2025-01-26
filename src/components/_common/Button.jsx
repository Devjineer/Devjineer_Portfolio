import React from "react";
import IconWrapper from "./IconWrapper";

const getBtnVariant = (variant) => {
  switch (variant) {
    case "secondary":
      return "bg-transparent border-b-3 border-gray-400";
    default:
      return "bg-black text-white";
  }
};

const Button = ({ styling, text, variant, iconLeft, iconRight, iconStyle }) => {
  return (
    <button
      className={`btn-padded flex-together cursor-pointer rounded-sm ${styling} ${getBtnVariant(
        variant
      )}`}
    >
      {iconLeft && (
        <IconWrapper src={iconLeft} styling={iconStyle} addedIconStyles="" />
      )}
      {text && text}
      {iconRight && (
        <IconWrapper src={iconRight} styling={iconStyle} addedIconStyles="" />
      )}
    </button>
  );
};

export const SecondaryButton = (props) => {
  return <Button {...props} variant="secondary" />;
};

export default Button;
