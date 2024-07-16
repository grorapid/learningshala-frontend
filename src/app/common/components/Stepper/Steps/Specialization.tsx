import Typography from "@/app/common/atoms/Typography";
import CustomOption from "./StepContainer/Option";
const CourseSpecialization = ({ formik3, handleEnable, options }: any) => {
  return (
    <div className="mx-auto w-full md:w-11/12 xl:w-10/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center gap-4 rounded">
      {options?.map((item: any) => {
        return (
          <CustomOption
            name={"course_specialization"}
            handleEnable={handleEnable}
            value={item}
            option={item}
            required={true}
            key={item}
            checked={formik3.values.course_specialization === item}
            handleChange={formik3.handleChange}
          >
            <Typography
              variant="body1"
              className={`font-semibold text-center ${
                formik3.values.course_specialization === item
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

export default CourseSpecialization;
