import Typography from "@/app/common/atoms/Typography";
import CustomOption from "./StepContainer/Option";
const Course = ({ formik2, handleEnable, options }: any) => {
  return (
    <div className="mx-auto xl:w-10/12 md:w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center gap-4 rounded">
      {options?.map((item: any) => {
        return (
          <CustomOption
            name={"course_program"}
            handleEnable={handleEnable}
            value={item}
            option={item}
            required={true}
            key={item}
            checked={formik2.values.course_program === item}
            handleChange={formik2.handleChange}
          >
            <Typography
              variant="body1"
              className={`font-semibold text-center ${
                formik2.values.course_program === item
                  ? "text-brand-primary-blue-main"
                  : `text-brand-text-primary`
              }`}
            >
              {item}
            </Typography>
          </CustomOption>
        );
      })}
    </div>
  );
};

export default Course;
