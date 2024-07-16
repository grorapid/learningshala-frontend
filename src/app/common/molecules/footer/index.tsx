import React from "react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const socialIcons = [
  {
    iconImageUrl: "/images/HomePage/Footer/instaa.svg",
    alt: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    iconImageUrl: "/images/HomePage/Footer/fb.svg",
    alt: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    iconImageUrl: "/images/HomePage/Footer/twitter.svg",
    alt: "twitter",
    link: "https://twitter.com/i/flow/login",
  },
  {
    iconImageUrl: "/images/HomePage/Footer/linkedIn.svg",
    alt: "linkedin",
    link: "https://in.linkedin.com/",
  },
];

const footerContactUsSection = (globalData: any) => [
  {
    key: "email",
    title: globalData?.footer_email ?? '--',
    icon: <AtSymbolIcon fontSize={24} color="white" className="h-4 w-4" />,
    href: "mailto:someone@example.com",
  },
  {
    key: "phone_number",
    title: globalData?.footer_phone_number ?? '--',
    icon: <PhoneIcon fontSize={24} color="white" className="h-4 w-4" />,
    href: "tel:123-456-7890",
  },
  {
    key: "address",
    title: globalData?.footer_address ?? "--",
    icon: <MapPinIcon fontSize={24} color="white" className="h-4 w-4" />,
    href: "#",
  },
];
const Footer = ({ globalData }: any) => {
  return (
    <div>
      <div className="bg-brand-background-footer text-brand-white py-10 ">
        <div className="md:flex md:justify-between  container mx-auto">
          {/* more to explore section starts */}

          <div className="flex flex-col space-y-4  ">
            <div className="text-white md:text-sm lg:text-lg font-bold mt-10">
              {globalData?.footer_explore_section?.title?.text}
            </div>

            <div>
              <ul className="flex flex-col space-y-2">
                {globalData?.footer_explore_section?.links?.map((link: any) => {
                  return (
                    <li key={link.title}>
                      <a
                        href={link.link ?? '#'}
                        className="group text-white transition duration-300 text-sm md:text-xs lg:text-sm font-normal"
                      >
                        {link.title}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* more to explore section ends */}

          {/* Tools and Research starts */}

          <div className="flex flex-col space-y-4  my-10  md:my-0">
            {/* <div className="text-white text-lg md:text-sm lg:text-lg font-bold sm:pt-10">
              {globalData?.footer_reserach_section?.title?.text}
            </div> */}

            <div>
              <ul className="flex flex-col space-y-2">
                {globalData?.footer_reserach_section?.links?.map(
                  (link: any) => {
                    return (
                      <li key={link.title}>
                        <a
                          href={link.link ?? '#'}
                          className="group text-white transition duration-300 text-sm md:text-xs lg:text-sm font-normal"
                        >
                          {link.title}
                          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>

          {/* Tools and Research ends */}

          {/* Best universities starts */}

          <div className="flex flex-col space-y-4  my-10  md:my-0">
            <div className="text-white text-lg md:text-sm lg:text-lg font-bold sm:pt-10">
              {globalData?.footer_best_universities_section?.title?.text}
            </div>

            <div>
              <ul className="flex flex-col space-y-2">
                {globalData?.footer_best_universities_section?.links?.map(
                  (link: any) => {
                    return (
                      <li key={link.title}>
                        <a
                          href={link.link ?? '#'}
                          className="group text-white transition duration-300 text-sm md:text-xs lg:text-sm font-normal"
                        >
                          {link.title}
                          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>

          {/* Best universities ends */}

          {/* contact us section starts */}

          <div className="flex flex-col space-y-4  my-10 md:my-0">
            <div className="text-white text-lg md:text-sm lg:text-lg font-bold sm:pt-10">
              {"Contact Us"}
            </div>

            <div className="flex flex-col my-10 space-y-5">
              {footerContactUsSection(globalData)?.map((item) => {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="flex items-center gap-2"
                  >
                    <span className="text-white h-4 w-4">{item.icon}</span>
                    <div className="text-white text-sm font-medium leading-none">
                      {item.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* contact us section ends */}
        </div>
      </div>

      {/*second footer starts */}

      <div className="bg-white flex flex-col pt-4 md:pt-10 pb-20 md:pb-10  md:flex md:justify-between">
        <div className="flex flex-col container mx-auto space-y-4 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col space-y-4">
            <Link href={"/blogs"}>
              <div className="text-zinc-800 text-sm font-bold">
                Follow our Blog
              </div>
            </Link>
            <div className=" text-zinc-800  font-normal xs:text-xs sm:text-sm">
              Copyright © 2023 Skollege. All rights reserved.
            </div>

            <div className="flex space-x-3">
           <Link  href={"/privacy-policy"}>   <div className="text-black hover:text-brand-primary-blue-main hover:underline text-sm font-semibold">
                Privacy Policy
              </div></Link> 
             <Link href={"/terms-of-use"}><div className="text-black hover:text-brand-primary-blue-main hover:underline text-sm font-semibold">
                Terms of use
              </div></Link> 
              <div className="text-black cursor-pointer hover:text-brand-primary-blue-main hover:underline text-sm font-semibold">Legal</div>
              <div className="text-black cursor-pointer hover:text-brand-primary-blue-main hover:underline text-sm font-semibold">Site Map</div>
            </div>
          </div>
          {/* social media icon section starts */}
          <div className="flex justify-start item-start ">
            {socialIcons?.map((icon) => {
              return (
                <div
                  key={icon.iconImageUrl}
                  className="mr-4 h-5 w-5 md:h-6 md:w-6"
                >
                  <Link href={icon.link} target="_blank">
                    <Image
                      height={24}
                      width={24}
                      src={icon.iconImageUrl}
                      alt={icon.alt ?? 'img'}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          {/* social media icon section ends */}
        </div>
      </div>

      {/*second footer ends */}
    </div>
  );
};

export default Footer;
