"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image from "../../../../../public/images/skollege.png";
import { useSearchParams } from "next/navigation";
import NavbarOtherSection from "./OtherSection";

const Navbar = ({ globalData }: any) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  return (
    <header>
      {!search ? (
        <div className="w-screen shadow-sm bg-white h-20 fixed top-0 z-50">
          <div className="flex justify-between items-center container mx-auto h-full">
            <Link href="/" className="h-6 md:h-7 w-auto">
              <Image
                alt="logo"
                src={image}
                className="w-auto h-full object-cover"
              />
            </Link>
            <NavbarOtherSection globalData={globalData} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Navbar;
