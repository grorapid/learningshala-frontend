"use client"
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const SliderWrapper = (props: any) => {
  const { children, ...rest } = props;

  return <Slide {...rest}>{children}</Slide>;
};

export default SliderWrapper;
