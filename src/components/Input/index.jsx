import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcOutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  srcFillGray50: "bg-gray_50",
  srcOutlineGray300_1: "border border-gray_300 border-solid",
  OutlineGray400: "border border-gray_400 border-solid",
  FillGray50: "bg-gray_50",
  OutlineGray400_1: "border border-gray_400 border-solid",
};
const shapes = {
  srcRoundedBorder15: "rounded-[15px]",
  srcRoundedBorder8: "rounded-lg",
  RoundedBorder8: "rounded-lg",
  RoundedBorder15: "rounded-[15px]",
};
const sizes = {
  smSrc: "px-[9px] py-2.5",
  mdSrc: "p-4",
  sm: "pb-[13px] pt-4 px-[13px]",
  md: "p-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder15",
    "srcRoundedBorder8",
    "RoundedBorder8",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineGray300",
    "srcFillGray50",
    "srcOutlineGray300_1",
    "OutlineGray400",
    "FillGray50",
    "OutlineGray400_1",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
