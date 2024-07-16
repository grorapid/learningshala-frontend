import Typography from "../../atoms/Typography";
import { Examinationdata, ExploreByDegreedata } from "../../Interfaces";
interface Examination {
  data: Examinationdata;
}
const Examination = ({ data }: Examination) => {
  return (
    data && (
      <div className=" flex  flex-col justify-start items-start">
        <Typography
          variant="h3"
          component={"h3"}
          className=" font-bold mb-8  text-brand-text-title"
        >
          {data?.name} Online Examination Pattern
        </Typography>
        <div className="w-full p-8 bg-brand-background-blue flex flex-col justify-start items-start">
          <Typography
            variant="h6"
            component={"h6"}
            className="font-bold text-brand-text-title mb-3"
          >
            Online MBA in Finance Exam pattern
          </Typography>
          <div className="grid w-full md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-4   ">
            {data?.examinationPattern[0]?.coursePatternLinks?.map(
              (item, index) => (
                <div
                  key={index}
                  className="flex rounded justify-between  bg-brand-accent-white p-5  items-center"
                >
                  <Typography
                    variant="body2"
                    className="text-brand-text-title font-semibold"
                  >
                    {item.key}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-brand-text-title font-semibold"
                  >
                    {item.value}
                  </Typography>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Examination;
