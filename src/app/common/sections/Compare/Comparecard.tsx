"use client";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Link from "next/link";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import {
  getCourseForCompare,
  getCourseForNotCompare,
} from "@/app/utils/get-course-by-slug";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import MyModal from "../../molecules/modal";
import BannerScolarship from "../University/BannerScholarship";
import { APP_ROUTES } from "@/app/utils/app-routes";
import RootLoading from "@/app/loading";

const Comparecard = (value: any) => {
  const [compare, setCompare] = useState<[]>();
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<number>();
  const [data, setData] = useState<string[]>();
  const [slug, setSlug] = useState<string[]>([]);

  const getdata = async () => {
    
   
    const p = value?.value?.replace(/%26/g, ",").split(",");
    const page = await getCourseForCompare(p[0], p[1], p[2]);
    setData(page?.data);
    const d = p.filter((item: any) => item !== "");
    setSlug(d);
  };

  const handleopen = async () => {
    const page1 = await getCourseForNotCompare(slug[0], slug[1], slug[2]);
    setCompare(page1?.data);
    setOpen(!open);
  };

  const handleadd = async (val: string) => {
    slug.push(val);

    addingdata();
  };

  const addingdata = async () => {
    const page = await getCourseForCompare(slug[0], slug[1], slug[2]);
    setData(page?.data);

    setOpen(!open);
  };
  const handleremove = (value: number) => {
    const arr: any = data?.filter((item: any, index: number) => index != value);

    setData(arr);
    const arrr: any = slug?.filter(
      (item: any, index: number) => index != value
    );
    setSlug(arrr);
  };

  useEffect(() => {
   
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="my-6">
      <Typography
        variant="h4"
        className="font-bold text-brand-primary-blue-main"
      >
        Compare the courses
      </Typography>
      <div className="flex  overflow-x-scroll md:overflow-auto gap-1 my-6 border ">
        <div className=" w-[250px] md:w-1/4 ">
          <div className=" border-gray-200 border-b flex px-4 justify-center md:w-full w-[150px]  h-60 items-center "></div>

          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-60  flex items-center  justify-start`}
          >
            <Typography variant="body1">Sample Certificate</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Fee</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Approvals</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Credit Points</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Eligibility</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Syllabus</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b h-40  flex items-center  justify-start`}
          >
            <Typography variant="body1">Placement</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Duration</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Education Mode</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Education Pattern</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Online Classes</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Placement Assistance</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Industry Ready</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Pros</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">NAAC Score</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">NIRF Ranking</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">WES Approval</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">EMI Facility</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          >
            <Typography variant="body1">Blog</Typography>
          </div>
          <div
            className={` pl-3 border-gray-200 font-bold border-b  h-24  flex items-center  justify-start`}
          ></div>
        </div>

        {data &&
          data?.map((item: any, index: number) => {
            const logoImage = getStrapiMedia(
              item?.attributes?.university?.data?.attributes?.logo.data
                ?.attributes?.url
            );
            const sampleCertificate = getStrapiMedia(
              item?.attributes?.university?.data?.attributes?.sampleCertificate
                ?.data?.attributes?.url
            );

            return (
              <div
                key={index}
                className={` ${
                  show == index ? "hidden" : "flex"
                } font-normal  flex-col md:w-1/4 bg-brand-primary-table-header `}
              >
                <div
                  className={` border-gray-200 border-b md:w-full   flex flex-col justify-center h-60 items-center `}
                >
                  <Typography
                    className="flex justify-center   items-center font-semibold"
                    variant="body1"
                  >
                    <span
                      onClick={() => handleremove(index)}
                      className="flex justify-center cursor-pointer mr-2  items-center text-2xl  "
                    >
                      <IoMdCloseCircle />
                    </span>
                    Remove
                  </Typography>
                  <div className="image-container h-24 my-3 w-full flex items-center justify-center">
                    <Image
                      src={logoImage || ""}
                      alt="img"
                      width={100}
                      height={48}
                      className="h-[60%] w-[70%]"
                    />
                  </div>
                  <Typography variant="body1" fontWeight="normal">
                    {item?.attributes?.shortform}
                  </Typography>
                </div>
                <div className="border-gray-200 border-b flex px-4  justify-center h-60 items-center ">
                  <Image
                    src={sampleCertificate || ""}
                    alt="img"
                    height={100}
                    width={100}
                    className="w-60 h-48"
                  />
                </div>
                <div className=" border-gray-200 border-b flex px-4 justify-center h-24 items-center ">
                  <Button
                    variant="contained"
                    className="small"
                    color="primary"
                  >
                    {`Rs ${item?.attributes?.sk_university_fee?.data?.attributes.fees}/Sem`}
                  </Button>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography
                    variant="body2"
                    className="max-h-20 text-center overflow-hidden"
                  >
                    {item?.attributes?.approvals}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography
                    variant="body2"
                    className="max-h-14 text-center overflow-hidden"
                  >
                    {item?.attributes?.credit_points}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography
                    variant="body2"
                    className="text-center max-h-20 overflow-hidden"
                  >
                    {item?.attributes?.eligibility}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2"></Typography>
                </div>
                <div className=" border-gray-200 border-b h-40 px-4  flex justify-center items-center  ">
                  <div className="grid grid-cols-2   md:grid-cols-3 gap-4">
                    {item?.attributes?.university?.data?.attributes?.placementStats?.placement_partners?.data
                      ?.slice(0, 6)
                      .map((item: any, index: number) => {
                        const img = getStrapiMedia(item?.attributes?.url);
                        return (
                          <div key={index} className="">
                            <Image
                              src={img || ""}
                              alt="image"
                              width={100}
                              className="h-10
                               w-full"
                              height={100}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.duration}{" "}
                    {item?.attributes?.durationUnit}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.education_mode}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.exam_pattern}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.online_class}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.placement_assistance}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.industry_ready}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.pros}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.NAAC_Score}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.nirf_ranking}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.wes_approval}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Typography variant="body2" className="max-h-14 text-center">
                    {item?.attributes?.emi_facility}
                  </Typography>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Link
                    href={APP_ROUTES.blogs(
                      item?.attributes?.sk_university_article?.data?.[0]
                        ?.attributes?.slug
                    )}
                  >
                    <Typography
                      variant="body2"
                      className="underline max-h-14 text-center text-brand-primary-blue-main"
                    >
                      Link
                    </Typography>
                  </Link>
                </div>
                <div className=" border-gray-200 border-b h-24 flex px-4 justify-center items-center ">
                  <Link
                    href={`/universities/${item?.attributes?.university?.data?.attributes?.slug}/courses/${item?.attributes?.sk_course_type?.data?.attributes?.slug}/${item?.attributes?.slug}`}
                  >
                    <Button
                      element="div"
                      variant="outlined"
                      color="primary"
                      size="medium"
                      className="text-lg font-bold"
                    >
                      Know More
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        {data && data?.length < 3 ? (
          <div className="">
            <div className="w-[150px] md:w-11/12 mx-auto flex flex-col items-center   my-12">
              <Typography className=" text-center">
                Select one more program to compare
              </Typography>
              <Button
                onClick={handleopen}
                color="primary"
                variant="outlined"
                className=" mt-4"
                size="extrasmall"
              >
                Add More
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <BannerScolarship />
      <MyModal open={open} close={() => setOpen(false)}>
        <div className="fixed inset-5 mt-20 w-11/12 p-7 rounded max-w-[1000px] max-h-[500px] mx-auto bg-white overflow-y-auto">
          <div className="flex justify-between w-full items-center">
            <div className="flex justify-center w-full items-center">
              <Typography className="font-bold  my-5" variant="h5">
                Compare Courses
              </Typography>
            </div>
            <div
              onClick={(e) => setOpen(false)}
              className="bg-brand-primary-blue-main flex justify-center items-center rounded-full cursor-pointer -mt-8 text-xl font-extrabold text-white  h-6 w-6"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-1 md:gap-3">
            {compare &&
              compare?.map((item: any, index: number) => {
                const image = getStrapiMedia(
                  item?.attributes?.university?.data?.attributes?.logo?.data
                    ?.attributes?.url
                );

                return (
                  <div key={index}>
                    <div className="grid grid-cols-1   rounded  gap-2 w-full  border border-gray-200    bg-brand-accent-white p-2  ">
                      <div className="flex items-start ml-3 justify-start  ">
                        <Image
                          className="h-10 md:h-12 w-32 md:w-36"
                          src={image || ""}
                          width={100}
                          height={100}
                          alt="image"
                        />
                      </div>
                      <div className="flex col-span-3 w-full md:flex-row flex-col md:items-center  ">
                        <div className="flex flex-col space-y-1  justify-center md:ml-3 items-start ">
                          <Typography
                            variant="h6"
                            component={"h6"}
                            className="font-semibold text-brand-text-title"
                          >
                            {item?.attributes?.name}
                          </Typography>

                          <div className="flex flex-col justify-start  items-start">
                            <Typography
                              variant="body2"
                              className="font-semibold flex justify-start items-center text-brand-primary-blue-main"
                            >
                              Program:
                              <Typography
                                variant="body2"
                                className="font-semibold ml-1 md:ml-2 md:mt-0 mt-1 text-brand-text-title"
                              >
                                {
                                  item?.attributes?.sk_course_program?.data
                                    ?.attributes?.name
                                }
                              </Typography>
                            </Typography>
                          </div>
                          <Typography
                            variant="body2"
                            className="font-semibold flex justify-start items-center text-brand-primary-blue-main"
                          >
                            Fee Starting from:
                            <Typography
                              variant="body2"
                              className="font-semibold ml-1 md:ml-2 mt-1 text-brand-text-title"
                            >
                              ₹
                              {
                                item?.attributes?.sk_university_fee?.data
                                  ?.attributes.fees
                              }
                            </Typography>
                          </Typography>
                        </div>
                      </div>
                      <div className="mx-auto">
                        <Button
                          size="small"
                          onClick={(e) => {
                            handleadd(item?.attributes?.slug);
                          }}
                          className="border  my-3 text-brand-text-title border-brand-text-title font-semibold"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </MyModal>
    </div>
  );
};

export default Comparecard;
