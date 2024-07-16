import Typography from "../../atoms/Typography";
import Image from "next/image";
import { AboutData } from "../../Interfaces";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import RichTextEditor from "../../components/RichTextEditor";

interface About {
  data: AboutData;
}
const UniversityIntro = ({ data }: About) => {
  return (
    <div className="flex lg:flex-row md:flex-row my-4 flex-col  items-center">
      <div className="lg:w-8/12 md:w-8/12 w-full py-4 md:pr-4 lg:pr-20  ">
      
        <Typography
          variant="h3"
          component={"h3"}
          className="text-brand-text-title font-bold mb-4"
        >
          {`About ${data?.name}`}
        </Typography>
        <Typography
          variant="body2"
          component={"div"}
          className="my-2 tracking-wide text-brand-text-title"
        >
          <RichTextEditor
            className="ml-0"
            htmlContent={data?.aboutUniversity}
          />
        </Typography>
      </div>
      <div className=" flex flex-col  md:mt-20  md:w-4/12 lg:w-5/12 w-full  ">
        <Typography
          variant="body1"
          
          className="font-bold text-brand-text-title"
        >
          {`Approvals`}
        </Typography>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 items-center grid-cols-4 gap-3">
          {data?.approvers?.data?.map((item: any, index) => {
            const img = getStrapiMedia(item?.attributes?.url);
            return (
              <div
                key={img}
                className="h-20 w-20 md:w-32 md:h-32 flex justify-center items-center border border-gray-200 rounded-sm"
              >
                <div className="image-container h-12 lg:h-20">
                  <Image
                    key={index}
                    height={100}
                    width={100}
                    src={img || ""}
                    alt={item?.attributes?.alternativeText ?? 'approvers'}
                    className="h-full w-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UniversityIntro;
