import React from "react";
import { UniversityData } from "../../Interfaces";
import Typography from "../../atoms/Typography";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import UniversityCard from "../../components/UniversityCard";

interface University {
  data: UniversityData;
  show: boolean;
}

const UniversityList = ({ data, show }: University) => {
  return (
    <div className="container mx-auto">
      {show && (
        <Typography
          component={"h4"}
          className="my-5 font-semibold"
          variant="body1"
        >
          {`Showing ${data?.data?.length} results`}
        </Typography>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 xl:gap-8">
        {data?.data?.map((item: any, index: number) => {
          const bannerImage = getStrapiMedia(
            item?.attributes?.card_banner?.data?.attributes?.url
          );
          const logoImage = getStrapiMedia(
            item?.attributes?.logo?.data?.attributes?.url
          );
          return (
            <div key={item?.attributes?.name} >
              <UniversityCard
                name={item?.attributes?.name}
                title={item?.attributes?.title}
                logo={logoImage || ""}
                banner={bannerImage || ""}
                alt={item?.attributes?.logo?.data?.attributes?.alternativeText ?? item?.attributes?.name ?? 'university'}
                reviews={item?.attributes?.reviewCount}
                rating={item?.attributes?.rating}
                slug={item?.attributes?.slug}
                rank={item?.attributes?.rankTitle}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityList;
