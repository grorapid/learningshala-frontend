import React from "react";
import Typography from "../../atoms/Typography";

const Eligibility = ({ data }: any) => {
  return (
    <div className="container my-7 space-y-6 mx-auto">
     {data && <Typography className="font-bold" variant="h3">
        Eligibility & Selection
      </Typography>}
     {data &&  <Typography variant="body1" fontWeight="normal">
        Check below the eligibility and selection criteria of various UG and PG
        courses related to {data?.university?.data?.attributes?.name} course
        admissions {data?.year}:
      </Typography> }
      <div className="border">
        <div className="grid   grid-cols-4 ">
          <Typography
            variant="body1"
            className="font-extrabold pl-3 md:pl-8  p-4  border"
          >
            Popular Courses
          </Typography>
          <Typography
            variant="body1"
            className="font-extrabold  pl-3 md:pl-8  p-4 border"
          >
            Tuition Fees
          </Typography>
          <Typography
            variant="body1"
            className="font-extrabold pl-3 md:pl-8 p-4 border col-span-2"
          >
            Eligilibity
          </Typography>
        </div>
        {data?.university?.data?.attributes?.sk_course_types?.data?.map(
          (item: any) => (
            <div key={item?.attributes?.name} className="grid   grid-cols-4 ">
              <Typography
                variant="body1"
                className="font-bold text-brand-primary-blue-main  pl-3 md:pl-8 p-2 md:p-6  border"
              >
                {item?.attributes?.name}
              </Typography>
              <Typography
                variant="body1"
                className="font-normal pl-3 md:pl-8 p-2 md:p-6 border"
              >
                ₹ {item?.attributes?.sk_university_fee?.data?.attributes?.fees}
              </Typography>
              <Typography
                variant="body1"
                className="font-normal pl-3 md:pl-8 p-2 md:p-6 border col-span-2"
              >
                {item?.attributes?.eligibility}
              </Typography>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Eligibility;
