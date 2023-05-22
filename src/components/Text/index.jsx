import React from "react";

const sizeClasses = {
  xs: "font-normal text-[10px]",
  s: "font-medium text-xs",
  md: "font-medium text-sm",
  lg: "font-semibold text-base",
  xl: "font-medium text-lg",
  "2xl": "font-semibold text-xl",
  "3xl": "font-semibold text-2xl md:text-[22px] sm:text-xl",
  "4xl": "font-semibold md:text-3xl sm:text-[28px] text-[32px]",
  "5xl": "font-semibold sm:text-3xl md:text-[32px] text-[34px]",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
