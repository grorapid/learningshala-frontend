"use client"
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import TopUniversitiesMobile from "./TopUniversitiesMobile";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ProgramMenuMobile from "./ProgramMobile";
import ResourseMobile from "./ResourseMobile";

const MobileNavbar = ({ courses, university, articles, globalData }: any) => {
  const pathname = usePathname();
  const [active, setActive] = useState<boolean>(false);
  const [nav, setNav] = useState(false);
  const handleCloseNav = () => {
    setNav(!nav);
  };
  const handleNavigation = (value: boolean) => {
    setNav(value);
  };
  return (
    <>
      <div className="md:hidden flex gap-4 justify-center items-center">
        <Link
          href={`${pathname}?search=true`}
          className="cursor-pointer bg-brand-background-blue rounded p-2"
        >
          <MagnifyingGlassIcon
            fontSize={"28px"}
            className="h-4 w-4 text-brand-primary-blue-main"
          />
        </Link>
        <div onClick={handleCloseNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-full h-full ease-in-out duration-500 mt-16 bg-white"
            : "ease-in-out duration-500 fixed left-[-100%] mt-20"
        }
      >
        <li className="container mx-auto my-4">
          <ProgramMenuMobile
            nav={nav}
            title={"Explore Programs"}
            courses={courses}
            articles={articles}
            university={university}
            handleNav={handleNavigation}
            setOtherActive={(value: boolean) => setActive(value)}
          />
        </li>
        <li className="container mx-auto my-4">
          <TopUniversitiesMobile
            nav={nav}
            title={"Top Universities"}
            courses={courses}
            university={university}
            article={articles}
            handleNav={handleNavigation}
            setOtherActive={(value: boolean) => setActive(value)}
          />
        </li>
        <li className="container mx-auto my-4">
          <ResourseMobile
            title={"Resources"}
            courses={courses}
            university={university}
            globalData={globalData}
            handleNav={handleNavigation}
            active={active}
            setActive={setActive}
          />
        </li>
      </ul>
    </>
  );
};

export default MobileNavbar;
