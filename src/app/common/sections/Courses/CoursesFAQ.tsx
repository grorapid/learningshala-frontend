
import Typography from "../../atoms/Typography";
import BigScreenFaq from "../../components/FAQ/bigScreen";
import MobileFaq from "../../components/FAQ/mobile";



const CoursesFAQ = ({ data }: any) => {

  return (
    <div className="my-7 md:my-10">
      <Typography variant="h3" className="font-bold mb-4 md:mb-10">
        FAQ
      </Typography>
      <div className="block md:hidden">
        <MobileFaq faq={data} />
      </div>
      <div className="hidden md:block">
        <BigScreenFaq faq={data} />
      </div>
    </div>
  );
};

export default CoursesFAQ;
