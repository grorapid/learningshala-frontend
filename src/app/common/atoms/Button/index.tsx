"use client"
import React, { ReactNode } from "react";

interface ButtonProp {
  element?: "div" | "button";
  type?: "submit" | "button" | "reset";
  variant?: "text" | "contained" | "outlined";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success"
    | string;
  children: ReactNode | string;
  className?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
  size?: "extrasmall" | "small" | "medium" | "large" | "stretched";
  id?: string;
}

const sizes = (size: string): string => {
  const buttonSize: Record<string, string> = {
    vsmall: "lg:px-2 md:px-2 lg:py-2 md:py-2 px-1 py-2",
    verysmall: "lg:px-6 md:px-6 lg:py-2 md:py-2 px-2 py-1.5 ",
    extrasmall: " px-2 py-2",
    small: "lg:px-4 md:px-4 lg:py-2 md:py-2 px-3 py-2 ",
    medium: "px-6 py-2",
    large: "px-8 py-6",
    stretched: "px-12 lg:px-16 py-2",
  };
  return buttonSize[size];
};
const variantMapping = (variant: string, color: string): string => {
  const variants: Record<string, any> = {
    text: {
      primary:
        "text-brand-primary-blue-main hover:text-brand-primary-blue-hover",
      secondary:
        "text-brand-primary-blue-main  hover:text-brand-primary-blue-hover",
      tertiary: "text-[#111E2C]  hover:text-brand-primary-blue-hover",
      error:
        "text-brand-primary-error-main hover:text-brand-primary-error-hover",
      warning:
        "text-brand-primary-warning-main hover:text-brand-primary-warning-hover",
      success:
        "text-brand-primary-success-main hover:text-brand-primary-success-hover",
      disabled: "text-white bg-gray-300 hover:bg-none border-none",
      custom: (color: string) => `text-[${color}] hover:text-[${color}]`,
    },
    contained: {
      primary:
        "bg-brand-primary-blue-main hover:bg-brand-primary-blue-hover text-white",
      secondary:
        "bg-brand-primary-blue-main  hover:bg-brand-primary-blue-hover text-white",
      tertiary: "text-[#111E2C]  hover:bg-brand-primary-blue-hover text-white",
      error:
        "bg-brand-primary-error-main hover:bg-brand-primary-error-hover text-white",
      warning:
        "bg-brand-primary-warning-main hover:bg-brand-primary-warning-hover text-white",
      success:
        "bg-brand-primary-success-main hover:bg-brand-primary-success-hover text-white",
      disabled: "text-white bg-gray-300 hover:bg-none border-none",
      custom: (color: string) => `bg-[${color}] hover:bg-[${color}] text-white`,
    },
    outlined: {
      primary:
        "text-brand-primary-blue-main hover:text-brand-primary-blue-hover bg-white border border-brand-primary-blue-main hover:border-brand-primary-blue-hover",
      secondary:
        "text-brand-primary-blue-main hover:text-brand-primary-blue-hover bg-white border border-brand-primary-blue-main hover:border-brand-primary-blue-hover",
      tertiary:
        "text-brand-primary-icon  hover:text-brand-primary-blue-hover bg-white border-[0.5px] hover:border", //hover:border-brand-primary-blue-hover
      error:
        "text-brand-primary-error-main hover:text-brand-primary-error-hover bg-white border border-brand-primary-error-main hover:border-brand-primary-error-hover",
      warning:
        "text-brand-primary-warning-main hover:text-brand-primary-warning-hover bg-white border border-brand-primary-warning-main hover:border-brand-primary-warning-hover",
      success:
        "text-brand-primary-success-main hover:text-brand-primary-success-hover bg-white border border-brand-primary-success-main hover:border-brand-primary-success-hover",
      disabled: "text-white bg-gray-300 hover:bg-none border-none",
      custom: (color: string) =>
        `text-[${color}] hover:text-[${color}] bg-white border border-[${color}]`,
    },
  };
  return variants?.[variant]?.[color]
    ? variants[variant][color]
    : variant && color
    ? variants[variant]["custom"](color)
    : "";
};
const Button = (props: ButtonProp) => {
  const {
    element= "button",
    type = "button",
    variant = "text",
    children,
    className,
    color = "primary",
    size = "medium",
    ...rest
  } = props;
  const buttonColor = variantMapping(variant, color);
  const buttonSize = sizes(size);
  return (
    <>
    {element === 'button' ?  <button
    type={type}
    className={
      `${buttonColor} ${buttonSize} rounded ${className} ${rest.disabled ? `hover:bg-none` : ''}`
    }
    {...rest}
  >
    {children}
  </button> : <div  className={
    `${buttonColor} ${buttonSize} rounded ${className} ${rest.disabled ? `hover:bg-none` : ''}`
  }
  {...rest}>{children}</div>}
   </>
  );
};

export default Button;
