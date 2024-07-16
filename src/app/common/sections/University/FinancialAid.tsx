import Typography from "../../atoms/Typography";
import Image from "next/image";
import Link from "next/link";
import Button from "../../atoms/Button";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { FinancialAiddata } from "../../Interfaces";
import { APP_ROUTES } from "@/app/utils/app-routes";
interface Finance {
  data: FinancialAiddata;
}
const FinacialAid = ({ data }: Finance) => {
  return (
    data && (
      <div className="flex bg-brand-background-blue flex-col pb-8 w-full lg:flex-row mt-3  md:flex-row">
        <div className="container mx-auto flex md:flex-row flex-col">
          <div className=" mr-1 lg:py-[40px] md:py-[40px] w-full md:pr-7 md:w-1/2  pt-6 space-y-6 ">
            <Typography variant="h3" component={"h3"} className="font-bold">
              Financial Aids
            </Typography>
            <div className="space-y-3 mt-5">
              <Typography
                variant="h5"
                component={"h5"}
                className="font-bold  text-brand-primary-blue-main"
              >
                Scolarships
              </Typography>
              <Typography
                variant="body1"
                
                className="font-normal  text-brand-text-dark"
              >
                {data?.financialAid?.scholarshiptext}
              </Typography>
            </div>
            <div className="bg-white p-2 h-44 lg:h-60 md:h-52 overflow-y-scroll space-y-2 cd">
              {data?.financialAid?.scolarship?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between p-2 py-3 bg-brand-background-blue items-center "
                >
                  <div className="space-y-1">
                    <Typography
                      variant="body1"
                      
                      className="font-bold text-brand-text-title"
                    >
                      {item?.scholarship_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      
                      className="font-normal text-gray-500"
                    >
                      Deadline: {item?.deadline}
                    </Typography>
                  </div>
                  <div>
                    <Link href={APP_ROUTES.aiSuggest}>
                      <Button
                        element="div"
                        type="button"
                        size="small"
                        className="text-white lg:text-base md:text-base text-sm font-normal  bg-brand-primary-blue-main hover:text-white"
                      >
                        {`Apply Now`}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-background-blue md:pl-7 w-full md:w-1/2 lg:py-[84px] md:py-[84px] mt-3 py-5   space-y-3">
            <Typography
              variant="h5"
              component={"h5"}
              className="font-bold mt-2 text-brand-primary-blue-main"
            >
              {`Loan Partners`}
            </Typography>
            <Typography
              variant="body1"
              
              className="font-normal  text-brand-text-dark"
            >
              {data?.financialAid?.loanpartner}
            </Typography>
            <div className="grid grid-cols-3 gap-4 ">
              {data?.financialAid?.loanpartnerslogo?.data?.map(
                (item, index) => {
                  const image = getStrapiMedia(item?.attributes?.url);
                  return (
                    <div
                      key={item?.attributes?.alternativeText ?? index}
                      className="bg-white flex justify-center items-center px-2 my-1 py-2"
                    >
                      <div className="h-12 lg:h-14 w-auto">
                        <Image
                          width={100}
                          height={48}
                          src={image || ""}
                          alt={item?.attributes?.alternativeText ?? 'financial-aid'}
                          className="w-auto h-full"
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FinacialAid;
