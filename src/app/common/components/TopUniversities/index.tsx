"use client";
import { getUniversity } from "@/app/utils/get-university-by-slug";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/app-routes";

const TopUniversities = () => {
  const [university, setUniversity] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    const university = await getUniversity();
    setUniversity(university?.data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  if (loading && !university?.length) {
    return <div>Loading...</div>;
  }
  if (!loading && !university?.length) {
    return <></>;
  }
  return (
    <div>
      <Typography variant="h4" className="font-semibold text-brand-text-title">
        Top University people search
      </Typography>
      <div className="flex flex-col space-y-4 my-6">
        {university
          ?.filter((item: any) => item?.attributes?.topuniversity == true)
          ?.slice(0, 5)
          ?.map((item: any, index: number) => (
            <div key={index}>
              <Link href={APP_ROUTES.universityPage(item?.attributes?.slug)}>
                <div
                  className="text-sm md:text-base hover:underline hover:text-brand-primary-blue-main font-medium"
                  key={index}
                >
                  {item?.attributes?.name}
                </div>
              </Link>
              <div className="h-[1px] w-full my-3 bg-gray-200"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopUniversities;
