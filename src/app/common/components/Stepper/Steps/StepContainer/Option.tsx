import React from "react";

const CustomOption = (props: any) => {
  const {
    required,
    value,
    handleEnable,
    checked,
    handleChange,
    children,
    name,
  } = props;
  return (
    <>
      <label
        onClick={handleEnable}
        className={` p-2  h-40 lg:h-44
      cursor-pointer border rounded shadow flex items-center justify-center
    ${
      checked
        ? "border-brand-primary-blue-hover"
        : `border-gray-300 hover:border-brand-primary-blue-hover`
    }
    `}
      >
        <input
          type="radio"
          name={name}
          required={true}
          value={value}
          checked={checked}
          onChange={handleChange}
          className="sr-only"
        />
        {children}
      </label>

      
    </>
  );
};

export default CustomOption;
