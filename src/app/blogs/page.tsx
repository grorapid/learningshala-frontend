import { getBlog } from "@/app/utils/get-blog-by-slug";
import Blogsearch from "../common/sections/Blog/Blogsearch";
import Typography from "../common/atoms/Typography";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { IoIosArrowForward } from "react-icons/io";
import { APP_ROUTES } from "../utils/app-routes";

const Blogpage = async () => {
  const page = await getBlog();
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 col-span-3 md:col-span-2">
      {page?.data?.map((item: any, index: number) => {
        const backgroundImage = getStrapiMedia(
          item?.attributes?.image?.data?.attributes?.url
        );
        return (
          <div
            key={index}
            className="flex flex-col justify-start items-start"
          >
            <div className="w-full h-60 bg-gray-200">
              {backgroundImage && (
                <Image
                  width={500}
                  height={500}
                  src={backgroundImage || ""}
                  className="w-full h-60 object-cover"
                  alt="image"
                />
              )}
            </div>
            <div className="p-4 w-full border rounded-b-sm">
            <Link   href={APP_ROUTES.blogs(item?.attributes?.slug)}>  <Typography
                variant="body1"
                component={"h6"}
                className="font-medium hover:text-brand-primary-blue-main text-brand-text-title"
              >
                {item?.attributes?.title}
              </Typography></Link>
              <Typography
                variant="body2"
                className="font-normal my-3 text-brand-text-primary"
              >
                <span className="font-normal">Author :</span>{" "}
                {item?.attributes?.author}
              </Typography>
              <Typography
                variant="body2"
                className="font-normal text-brand-text-primary"
              >
                <span className="font-normal"> Last Upadate : </span>{" "}
                {item?.attributes?.updatedAt.slice(0, 10)}
              </Typography>
              <Typography
                variant="body2"
                className="font-normal my-3 text-brand-text-title"
              >
                {item?.attributes?.shortDescription}
              </Typography>
              <Link
                className="text-sm md:text-base flex justify-start items-center font-semibold mt-3 hover:underline  text-brand-primary-blue-main cursor-pointer"
                href={APP_ROUTES.blogs(item?.attributes?.slug)}
              >
                Read The Article <IoIosArrowForward />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Blogpage;
