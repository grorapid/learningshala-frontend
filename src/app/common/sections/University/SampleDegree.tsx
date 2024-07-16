"use client"
import React, { useState } from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import MyModal from "../../molecules/modal";
import { SampleDegreeData } from "../../Interfaces";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { getStrapiMedia } from "@/app/utils/api-helpers";
interface SampleDegree {
  data: SampleDegreeData;
}
const SampleDegree = ({ data }: SampleDegree) => {
  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "sample-degree",
  });
  const onButtonClick = () => {
    const pdfUrl = data?.sampleCertificate?.data?.attributes?.url;
    const link = document.createElement("a");
    link.href = pdfUrl ?? '#';
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [open, setOpen] = useState<boolean>(false);
  const image =
    data && getStrapiMedia(data?.sampleCertificate?.data?.attributes?.url);

  return (
    <div className="bg-brand-primary-blue-main">
      <div className="container mx-auto my-8 ">
        <div className="py-10 flex justify-between mx-auto  items-center">
          <div>
            <Typography
              variant="h2"
              component={"h4"}
              className="font-bold my-3 text-brand-accent-white"
            >
              {`View Sample Degree`}
            </Typography>
            <Typography
              variant="body2"
              className="font-normal my-3 text-brand-accent-white"
            >
              {`${data?.name}'s Sample Online Degree`}
            </Typography>
          </div>
          <Button
            size="medium"
            onClick={() => setOpen(true)}
            className=" bg-brand-accent-white flex justify-center items-center text-base border border-white font-bold  text-brand-primary-blue-main "
          >
            View
          </Button>
        </div>
        <MyModal open={open} close={() => setOpen(false)}>
          <div className="fixed inset-5 mt-20 md:w-1/2 w-11/12   rounded max-w-[1000px] max-h-[500px] mx-auto bg-white overflow-y-auto">
            <div
              className={`flex flex-col p-8 justify-center items-center  bg-brand-background-blue`}
            >
              <span
                onClick={() => setOpen(false)}
                className="flex justify-center my-4 items-center text-lg cursor-pointer  self-end text-white bg-gray-500 font-bold h-5 w-5 rounded-full"
              >
                <AiOutlineClose />
              </span>

              <Image
                ref={componentRef}
                className="w-[300px]"
                width={100}
                height={100}
                src={image || ""}
                alt={data?.sampleCertificate?.data?.attributes?.alternativeText ?? 'degree'}
              />

              <Typography
                variant="h4"
                component={"h4"}
                className="font-bold my-10 text-brand-text-title"
              >
                {`Sample Degree for ${data?.name}`}
              </Typography>
              <div className="flex justify-center items-center space-x-5">
                <Button
                  type="button"
                  variant="text"
                  size="medium"
                  color="primary"
                  onClick={onButtonClick}
                  className="border  font-bold border-brand-primary-blue-main"
                >
                  Download
                </Button>
                <Button
                  onClick={handlePrint}
                  type="button"
                  variant="text"
                  size="medium"
                  color="primary"
                  className="border font-bold border-brand-primary-blue-main"
                >
                  Print
                </Button>
              </div>
            </div>
          </div>
        </MyModal>
      </div>
    </div>
  );
};

export default SampleDegree;
