import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import ProgramMenu from "./ProgramMenu";
import Link from "next/link";
import Resourse from "./Resourse";
import TopUniversitiesMenu from "./TopUniversitiesMenu";

/**
 * 
 * @param courses, university articles global data
 * @returns navbar in tab and larger screen
 */
const DesktopNavbar = ({ courses, university, articles, globalData }: any) => {

  return (
    <React.Fragment>
      <ul className="hidden md:flex md:items-center md:gap-6">
        <li>
          <ProgramMenu
            title={"Explore Programs"}
            courses={courses}
            articles={articles}
          />
        </li>
        <li>
          <TopUniversitiesMenu
            title={"Top Universities"}
            university={university}
            article={articles}
          />
        </li>
        <li>
          <Resourse
            title={"Resources"}
            globalData={globalData}
          />
        </li>

        <li className="bg-brand-background-blue rounded cursor-pointer p-2">
          <Link href={"/?search=true"}>
            <MagnifyingGlassIcon className="h-5 w-5 text-brand-primary-blue-main" />
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default DesktopNavbar;
