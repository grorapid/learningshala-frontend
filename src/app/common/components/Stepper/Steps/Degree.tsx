import Typography from "@/app/common/atoms/Typography";
import Hat from "../../../../../../public/images/form/hat.png";
import Image from "next/image";
import CustomOption from "./StepContainer/Option";
const Degree = ({ formik1, handleEnable, options }: any) => {
  return (
    <div className="mx-auto  w-full md:w-11/12 xl:w-10/12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {options.map((item: any) => (
          <>
            <CustomOption
              name="course"
              required={true}
              key={item}
              id={"course"}
              handleEnable={handleEnable}
              checked={formik1.values.course === item}
              handleChange={formik1.handleChange}
              value={item}
              option={item}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={Hat}
                  alt="hat"
                  className="w-9 h-9 lg:w-14 lg:h-14"
                />
                <Typography
                  variant="body1"
                  className={`font-semibold ${
                    formik1.values.course === item
                      ? "text-brand-primary-blue-main"
                      : `text-brand-text-primary`
                  }`}
                >
                  {item}
                </Typography>
              </div>
            </CustomOption>
          </>
        ))}
      </div>
    </div>
  );
};

export default Degree;
