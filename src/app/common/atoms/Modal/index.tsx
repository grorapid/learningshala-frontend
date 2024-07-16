"use client"
import Image from "next/image";
import Typography from "../../atoms/Typography";
import Views from "../../components/Views";
import Button from "../../atoms/Button";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { AboutCourse } from "../../Interfaces";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { usePathname } from "next/navigation";
import RichTextEditor from "../../components/RichTextEditor";


const Modal = ({  data }: any) => {

  const pathname=usePathname();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center content-start">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="flex items-start gap-2">
        <div className="absolute max-w-screen-xl top-[10%] md:top-[5%] 2xl:top-[10%] left-5 right-5 md:left-12 md:right-12 lg:left-20 lg:right-20 lg:mx-20 2xl:mx-auto z-10 bg-white shadow-lg mt-10 2xl:mt-14">
          <div className="bg-brand-background-blue">
            <Typography
              variant="h4"
              className="font-bold text-brand-primary-icon px-4 py-4 md:py-6 text-center"
            >
              j
            </Typography>
          </div>
          <div className=" md:px-16  md:py-6 py-4 px-8 h-[500px] md:h-[500px] 2xl:h-full overflow-auto">
            <Typography
              variant="h6"
              className="text-brand-primary-blue-main font-semibold pt-2 pb-4"
            >
              g
            </Typography>
            <RichTextEditor htmlContent={data} />

          </div>
        </div>
        <div className="absolute max-w-screen-2xl top-[10%] md:top-[5%] 2xl:top-[10%] left-5 right-1 md:right-5 lg:left-20 lg:right-20 lg:mx-10 z-10 p-6">
          <div className="flex items-start">
            <Link
              href={`${pathname}`}
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none absolute top-2 right-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px]"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM13.4142 10.5858C12.6332 9.80474 11.3668 9.80474 10.5858 10.5858C9.80474 11.3668 9.80474 12.6332 10.5858 13.4142L13.1716 16L10.5858 18.5858C9.80474 19.3668 9.80474 20.6332 10.5858 21.4142C11.3668 22.1952 12.6332 22.1952 13.4142 21.4142L16 18.8284L18.5858 21.4142C19.3668 22.1952 20.6332 22.1952 21.4142 21.4142C22.1952 20.6332 22.1952 19.3668 21.4142 18.5858L18.8284 16L21.4142 13.4142C22.1952 12.6332 22.1952 11.3668 21.4142 10.5858C20.6332 9.80474 19.3668 9.80474 18.5858 10.5858L16 13.1716L13.4142 10.5858Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
