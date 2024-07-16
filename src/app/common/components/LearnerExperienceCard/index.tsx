import Image from "next/image";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import bgImg from "../../../../../public/images/CoursesPage/collegegirl.png";
const LearnerExperienceCard = ({
  image,
  name,
  content,
  course,
  specialization,
}: any) => {
  const img = getStrapiMedia(image?.data?.attributes?.url);
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className=" w-[98%]  h-80 md:w-80 lg:w-72 rounded-md backdrop-grayscale  flex items-end  "
    >
      <div className=" w-full p-4">
        <Typography variant="body2" className="text-white w-11/12 font-normal">
          {content}
        </Typography>
        <Typography
          variant="body1"
          className="text-white my-4 w-11/12 font-bold"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          className="text-white font-normal w-11/12  "
        >
          {course},{specialization}
        </Typography>
      </div>
    </div>
  );
};
export default LearnerExperienceCard;
