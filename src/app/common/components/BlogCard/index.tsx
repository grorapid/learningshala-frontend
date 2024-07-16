import Typography from "../../atoms/Typography";
import Image from "next/image";
import { Newsdata } from "../../Interfaces";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import RichTextEditor from "../RichTextEditor";

interface News {
  data: Newsdata;
}
const BlogCard = ({ data }: News) => {
  const img = getStrapiMedia(data?.image?.data?.attributes?.url);
  return (
    <div>
      {img && (
        <div className="">
        <Image
          width={900}
          height={700}
          src={img || ""}
          className=" w-full "
          alt={data?.image?.data?.attributes?.alternativeText ?? "blogs"}
        />
        </div>
      )}
      {data?.title && (
        <Typography
          variant="h3"
          className="font-bold mt-8 text-brand-text-title"
        >
          {data?.title ?? ""}
        </Typography>
      )}
      {data?.author && (
        <Typography
          variant="body2"
          className="font-semibold my-2 text-brand-text-title"
        >
          {`Author: `}
          <span className="text-brand-text-primary">{data?.author ?? ""}</span>
        </Typography>
      )}
      {data?.updatedAt && (
        <Typography
          variant="body2"
          className="font-bold  text-brand-text-title"
        >
          {`Last Updated: `}
          <span className="text-brand-text-primary">
            {data?.updatedAt?.slice(0, 10) ?? ""}
          </span>
        </Typography>
      )}
      {data?.content && (
        <Typography
          variant="body2"
          className="font-normal mt-8 text-brand-text-title"
        >
          <RichTextEditor htmlContent={data?.content ?? ""} />
        </Typography>
      )}
    </div>
  );
};

export default BlogCard;
