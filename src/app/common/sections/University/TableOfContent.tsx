"use client"
import React, { useState } from "react";
import Typography from "../../atoms/Typography";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

const TableOfContent = ({ data }: any) => {
  const [active, setActive] = useState(true);
  const handleclick = () => {
    setActive(!active);
  };
  return (
    <div className="container border rounded mt-8 p-5 mx-auto">
      <div className="flex justify-between items-center">
        <Typography variant="h5" component={"h5"} fontWeight="semibold">
          {`Table Of Content`}
        </Typography>
        {active ? (
          <span className="cursor-pointer" onClick={handleclick}>
            <SlArrowDown />
          </span>
        ) : (
          <span className="cursor-pointer" onClick={handleclick}>
            <SlArrowUp />
          </span>
        )}
      </div>
      <div className={`${active ? "flex" : "hidden"} ${data?.table?.length ? "mt-4" : "mt-0"}  space-y-2 flex-col`}>
        {data?.table?.map((item: any) => (
          <Link key={item?.id} href={`#${item?.value}`}>
            <Typography
              variant="body2"
              fontWeight="normal"
              className="text-brand-primary-blue-main hover:underline"
            >
              {item?.key}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;
