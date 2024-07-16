"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileFooter = () => {
  const pathname = usePathname();
  return (
    <div className="fixed md:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-20">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link
          href={"/"}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
        >
          <svg
            className="w-5 h-5 mb-2 text-brand-footer-icon  group-hover:text-brand-primary-blue-main"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="text-sm text-brand-footer-icon  group-hover:text-brand-primary-blue-main">
            Home
          </span>
        </Link>
        <Link
          href={`${pathname}/?search=true`}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
        >
          <svg
            className="w-5 h-5 mb-2 text-brand-footer-icon  group-hover:text-brand-primary-blue-main"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>

          <span className="text-sm text-brand-footer-icon group:text-brand-primary-blue-main">
            Search
          </span>
        </Link>
        <Link
          href="/universities"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
        >
          <svg
            className="w-5 h-5 mb-2 text-brand-footer-icon group-hover:text-brand-primary-blue-main"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
            <path
              fillRule="evenodd"
              d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
              clipRule="evenodd"
            />
            <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
          </svg>

          <span className="text-sm text-brand-footer-icon  group-hover:text-brand-primary-blue-main">
            Universities
          </span>
        </Link>
        <Link
          href={"/courses"}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
        >
          <svg
            className="w-5 h-5 mb-2 text-brand-footer-icon  group-hover:text-brand-primary-blue-main"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>

          <span className="text-sm text-brand-footer-icon  group-hover:text-brand-primary-blue-main">
            Courses
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
