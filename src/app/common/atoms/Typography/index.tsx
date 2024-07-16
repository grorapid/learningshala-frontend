"use client"
import React, { ElementType, ReactNode, createElement } from "react";

interface TypographyProps extends JSX.IntrinsicAttributes {
  component?: ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  text?: string;
  className?: string;
  fontWeight?: string;
  children?: string | ReactNode;
}

const VariantMap = {
  h1: {
    className: "text-3xl md:text-4xl lg:text-5xl",
  },
  h2: { className: "text-2xl md:text-3xl lg:text-4xl" },
  h3: {
    className: "text-xl md:text-2xl lg:text-3xl",
  },
  h4: {
    className: "text-lg md:text-xl lg:text-2xl",
  },
  h5: {
    className: "text-base md:text-lg lg:text-xl",
  },
  h6: {
    className: "text-sm md:text-base lg:text-lg",
  },
  body1: { className: "text-sm md:text-base lg:text-lg" },
  body2: { className: "text-xs md:text-sm lg:text-base" },
};

const Typography = ({
  component = "div",
  variant = "body1",
  fontWeight,
  text,
  className,
  ...props
}: TypographyProps) => {
  const newclassName = `${VariantMap[variant ?? "body1"]
    ?.className} ${className} ${fontWeight ? `font-${fontWeight}` : ""}`;
  return createElement(
    component,
    {
      className: `${newclassName}`,
      ...props,
    },
    text ?? props.children
  );
};

export default Typography;
