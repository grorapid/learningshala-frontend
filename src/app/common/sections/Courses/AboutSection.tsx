import Image from "next/image";
import Typography from "../../atoms/Typography";
import Views from "../../components/Views";
import Button from "../../atoms/Button";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { AboutCourse } from "../../Interfaces";
import Modal from "../../atoms/Modal";
import Link from "next/link";
import RichTextEditor from "../../components/RichTextEditor";



export type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const AboutSection = ({ data, showModal, pathname }: {data: AboutCourse, showModal: any, pathname: any}) => {
  return (
    <div className="lg:mt-10">
      <div className="pb-7 flex flex-col gap-2">
        <Typography variant="h4" className="font-bold text-brand-text-title">
        About this Course
        </Typography>

        <Views views={data?.views} />
      </div>
      <div className="md:flex md:justify-between md:gap-5">
        <div className="pb-3 w-full">
          {data?.course_highlights?.map((data: any) => {
            const img1 = getStrapiMedia(data?.icon?.data?.attributes?.url);
            return (
              <div key={data.id} className="bg-brand-background-blue mb-3">
                <div className="flex justify-start items-center gap-4 p-4">
                  <Image
                    unoptimized
                    src={img1 || ""}
                    alt={data?.icon?.data?.attributes?.name}
                    width={data?.icon?.data?.attributes?.width}
                    height={data?.icon?.data?.attributes.height}
                    className="h-[22px] w-[22px] md:h-[28px] md:w-[28px]"
                  />
                  <div className="flex flex-col gap-1">
                    <Typography variant="body1" className="font-bold">
                      {data?.title}
                    </Typography>
                    <Typography variant="body2" className="font-normal">
                      {data?.description}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col h-auto gap-2 w-full items-center">
          <Typography variant="body2" className="font-normal">
         
            <RichTextEditor htmlContent={data?.short_description} />
          </Typography>
         
          <Link href={`${pathname}?modal=true`}>
          <Button  element="div" variant="text" size="medium" className="">
        Show more
      </Button></Link>
      {showModal && <Modal  data={data.long_description} />}
          
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
