import Typography from "@/app/common/atoms/Typography";
import CustomOption from "./StepContainer/Option";

const WorkStatus = ({ formik4, handleEnable, options }: any) => {
  return (
    <div className="mx-auto w-full md:w-1/2 xl:w-1/3">
      <div className="grid grid-cols-2 md:w-11/12 gap-4 justify-center">
        {options?.map((item: any) => {
          return (
            <CustomOption
              key={item.label}
              handleEnable={handleEnable}
              option={item}
              name="is_working"
              value={item.value}
              required={true}
              checked={formik4.values.is_working === item.value}
              handleChange={formik4.handleChange}
            >
              <Typography
                variant="body1"
                className={`font-semibold text-center px-6 ${
                  formik4.values.is_working === item.value
                    ? "text-brand-primary-blue-main"
                    : "text-brand-text-primary"
                }`}
              >
                {item.label}
              </Typography>
            </CustomOption>
          );
        })}
      </div>
    </div>
  );
};

export default WorkStatus;
