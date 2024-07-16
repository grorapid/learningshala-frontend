import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";

const WantToModal = () => {
  return (
    <div className="mb-7 mt-6 md:mt-0 md:mb-10">
      <div className="text-center flex justify-center md:gap-2">
        <Typography variant="h5" className="font-bold text-brand-text-title">
          Want to become a Product Manager
        </Typography>
      </div>
      <div className="flex justify-center items-center gap-3 mt-4 md:mt-6">
        <Button variant="contained" size="small">
          Enroll Now
        </Button>
        <Button variant="outlined" size="small">
          Download Syllabus
        </Button>
      </div>
    </div>
  );
};

export default WantToModal;
