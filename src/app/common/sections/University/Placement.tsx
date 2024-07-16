import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import company1 from "../../../../../public/images/universityPage/overview/company1.png";
import Image from "next/image";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { Placementdata } from "../../Interfaces";
import RichTextEditor from "../../components/RichTextEditor";
interface Placement {
  data: Placementdata;
  name: string;
  title?:string;
}
const Placement = ({ data, name, title }: Placement) => {
  return (
    data && (
      <div className="  my-3 flex flex-col justify-center items-center ">
        <div className="   space-y-3 w-full my-4">
          <Typography variant="h3" component={"h3"} className="font-bold">
            {title ?? `${name} Placements`}
          </Typography>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2  gap-3 md:rounded lg:rounded w-full   my-4">
        {data?.placementStats?.No_of_recruiters &&  <div className="bg-brand-background-blue  lg:p-5 md:p-5 p-2 my-2 ">
            <Typography
              variant="h3"
              component={"h3"}
              className="text-brand-primary-blue-main font-bold"
            >
              {data?.placementStats?.No_of_recruiters}
            </Typography>
            <Typography
              variant="body2"
              className="text-brand-text-title font-semibold"
            >
              Recruiters from IITs/IIMs/NITs
            </Typography>
          </div>}

          {data?.placementStats?.Promotion_recieved && <div className="bg-brand-background-blue lg:p-5 md:p-5 p-2 my-2 ">
            <Typography
              variant="h3"
              component={"h3"}
              className="text-brand-primary-blue-main font-bold"
            >
              {data?.placementStats?.Promotion_recieved}
            </Typography>
            <Typography
              variant="body2"
              className="text-brand-text-title font-semibold"
            >
              Promotion Recieved
            </Typography>
          </div>}
        {data?.placementStats?.Student_placed &&  <div className="bg-brand-background-blue lg:p-5 md:p-5 p-2 my-2  ">
            <Typography
              variant="h3"
              component={"h3"}
              className="text-brand-primary-blue-main font-bold"
            >
              {data?.placementStats?.Student_placed}
            </Typography>
            <Typography
              variant="body2"
              className="text-brand-text-title font-semibold"
            >
              Students Placed
            </Typography>
          </div>}
        </div>
        <div className="w-full">
          <Typography
            variant="h5"
            component={"h5"}
            className="font-semibold text-brand-text-title"
          >
            Placement Statistics
          </Typography>
          <div className="my-4  border-2 border-brand-background-blue">
            {data?.placementStats?.stats?.map((item, index) => (
              <div
                key={item.id}
                className={`flex justify-between  p-4 items-center ${
                  index % 2 === 0 ? "bg-white" : "bg-brand-background-blue"
                }`}
              >
                <Typography
                  variant="body2"
                  fontWeight="normal"
                  className="w-1/2"
                >
                  {item.key}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="normal"
                  className="w-1/3"
                >
                  {item.value}
                </Typography>
              </div>
            ))}
          </div>
          <Typography variant="body2">
            <RichTextEditor
              htmlContent={data?.placementStats?.placement_richtext}
            />
          </Typography>
        </div>
        <div className="w-full my-6">
          <Typography
            variant="h5"
            component={"h5"}
            className="font-semibold text-brand-text-title"
          >
            Our Placement Partners
          </Typography>
          <Typography
            variant="body2"
            className="font-normal mt-4 text-brand-text-title"
          >
            Worried about your finances? We have got you covered with some of
            the best loan providers in the country
          </Typography>
        </div>
        <div className="grid w-full  md:grid-cols-6 grid-cols-4 xl:grid-cols-6 lg:grid-cols-6 gap-2">
          {data?.placementStats?.placement_partners?.data?.map(
            (item, index) => {
              const image = getStrapiMedia(item?.attributes?.url);
              return (
                <div
                  key={item.id}
                  className="py-2 px-4  bg-white  border   flex justify-center items-center  "
                >
                  <Image
                    src={image || ""}
                    className=" lg:w-40 lg:h-20"
                    alt={item?.attributes?.alternativeText ?? "placements"}
                    width={100}
                    height={100}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    )
  );
};

export default Placement;
