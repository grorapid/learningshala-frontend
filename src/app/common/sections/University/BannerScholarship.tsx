import Typography from "@/app/common/atoms/Typography";
import React from "react";
import Button from "@/app/common/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import image from "../../../../../public/images/universityPage/overview/Schollorship Image.png";
import { APP_ROUTES } from "@/app/utils/app-routes";
import { getStrapiMedia } from "@/app/utils/api-helpers";

const BannerScolarship = ({ title, subtitle, cta, img }: any) => {
  const backgroundImage = img ? getStrapiMedia(img) : null;
  return (
    <div
      className="bg-brand-background-footer md:roundedlg:rounded flex overflow-hidden md:justify-between justify-center lg:justify-between items-center w-full "
      style={
        backgroundImage
          ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }
          : {}
      }
    >
      <div className={`lg:w-1/2 md:w-8/12 w-full p-8  ${!img ? 'md:p-0': ''} flex flex-col  md:justify-start lg:justify-start justify-center items-center lg:items-start md:items-start lg:ml-8 md:ml-8 mx-3  md:space-y-2 space-y-4 lg:space-y-4`}>
        <div className="text-brand-accent-white text-3xl lg:text-start md:text-start text-center font-extrabold">
          {title ?? `Earn up to 100% scholarship`}
        </div>
        <Typography
          variant="body1"
          className="text-brand-accent-white lg:text-start md:text-start text-center font-normal"
        >
          {subtitle ??
            `Skollege offers an option to earn up to 100% scholarship to selected
          students based on the test results. Be the first to grab it now`}
        </Typography>
        <Link href={`${APP_ROUTES.lead}?source=soclarshipbanner`}>
          <Button
            size="medium"
            element="div"
            className="text-white w-40 bg-brand-primary-blue-main hover:text-black text-center"
          >
            {cta ?? `Enroll now`}
          </Button>
        </Link>
      </div>
      {!img && (
        <Image
          className=" lg:w-[370px] md:block hidden md:w-72 md:h-52 lg:h-[260px]"
          src={image}
          alt="image"
        />
      )}
    </div>
  );
};

export default BannerScolarship;
