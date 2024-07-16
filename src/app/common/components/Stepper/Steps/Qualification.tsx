import Typography from "@/app/common/atoms/Typography";
import CustomOption from "./StepContainer/Option";

const Qualification = ({ formik5, options }: any) => {
  return (
    <div className="mx-auto w-full md:w-11/12 xl:w-10/12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 rounded">
        {options?.map((item: any) => (
          <CustomOption
            name={"qualification"}
            required={true}
            key={item}
            value={item}
            checked={formik5.values.qualification === item}
            handleChange={formik5.handleChange}
            option={item}
            
          >
            <Typography
              variant="body1"
              className={`font-semibold text-center px-1 ${
                formik5.values.qualification === item
                  ? "text-brand-primary-blue-main"
                  : `text-brand-text-primary`
              }`}
            >
              {item}
            </Typography>
          </CustomOption>
        ))}
      </div>
    </div>
  );
};

export default Qualification;
