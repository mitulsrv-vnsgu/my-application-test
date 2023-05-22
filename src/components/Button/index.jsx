import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder14: "rounded-[14px]",
  RoundedBorder10: "rounded-[10px]",
  CircleBorder18: "rounded-[18px]",
  icbCircleBorder15: "rounded-[15px]",
  icbCircleBorder25: "rounded-[25px]",
  icbRoundedBorder8: "rounded-lg",
  icbCircleBorder18: "rounded-[18px]",
  icbCircleBorder21: "rounded-[21px]",
};
const variants = {
  Outline: "bg-gray_900_26 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_900",
  OutlineGray100: "outline outline-[0.5px] outline-gray_100 text-black_900",
  OutlineWhiteA700:
    "outline outline-[0.5px] outline-white_A700 text-white_A700",
  FillGray900: "bg-gray_900 text-white_A700",
  Outline_1: "bg-gray_900 text-white_A700",
  FillGray100: "bg-gray_100 text-gray_500",
  FillGreen600: "bg-green_600 text-white_A700",
  OutlineGray900: "outline outline-[0.5px] outline-gray_900 text-gray_900",
  FillGray50: "bg-gray_50 text-black_900",
  FillBlack900: "bg-black_900 text-white_A700",
  icbOutline: "bg-gray_900_26",
  icbOutlineGray5003f: "bg-white_A700 shadow-bs",
  icbOutlineGray100: "outline outline-[0.5px] outline-gray_100",
  icbFillGray50: "bg-gray_50",
  icbFillWhiteA700: "bg-white_A700",
  icbFillGray90067: "bg-gray_900_67",
};
const sizes = {
  sm: "p-1.5",
  md: "p-[11px]",
  lg: "p-4",
  smIcn: "p-1.5",
  mdIcn: "p-2.5",
  lgIcn: "p-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder14",
    "RoundedBorder10",
    "CircleBorder18",
    "icbCircleBorder15",
    "icbCircleBorder25",
    "icbRoundedBorder8",
    "icbCircleBorder18",
    "icbCircleBorder21",
  ]),
  variant: PropTypes.oneOf([
    "Outline",
    "FillWhiteA700",
    "OutlineGray100",
    "OutlineWhiteA700",
    "FillGray900",
    "Outline_1",
    "FillGray100",
    "FillGreen600",
    "OutlineGray900",
    "FillGray50",
    "FillBlack900",
    "icbOutline",
    "icbOutlineGray5003f",
    "icbOutlineGray100",
    "icbFillGray50",
    "icbFillWhiteA700",
    "icbFillGray90067",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn", "lgIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
