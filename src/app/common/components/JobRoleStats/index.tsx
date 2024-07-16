import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";

const JobRoleStats = () => {
  const learners = 2000000;
  return (
    <div>
      <div className="bg-white mt-4">
        <div className="p-4 shadow-md">
          <Typography
            variant="body1"
            className="font-normal text-brand-text-title"
          >
            Words aren&apos;t enough, we let numbers do the talking.
          </Typography>
          <Typography
            variant="h6"
            className="font-bold text-brand-primary-blue-main pt-1"
          >
            Ranked 12th in top universities
          </Typography>
        </div>
      </div>
      <div className="bg-white mt-4">
        <div className="p-4 shadow-md">
          <Typography
            variant="body1"
            className="font-normal text-brand-text-title"
          >
            Over
          </Typography>
          <Typography
            variant="h6"
            className="font-bold text-brand-primary-blue-main pt-1"
          >
            {learners.toLocaleString("en-IN")}
          </Typography>
          <Typography
            variant="body1"
            className="font-normal text-brand-text-title"
          >
            Registered Learners
          </Typography>
        </div>
      </div>
      <div className="bg-white mt-4">
        <div className="p-4 shadow-md">
          <Typography
            variant="h6"
            className="font-bold text-brand-primary-blue-main pt-1"
          >
            INR 73 LPA
          </Typography>
          <Typography
            variant="body1"
            className="font-normal text-brand-text-title"
          >
            Highest Salary Offered
          </Typography>
        </div>
      </div>
      <div className="bg-white mt-4">
        <div className="p-4 shadow-md">
          <Typography
            variant="h6"
            className="font-bold text-brand-primary-blue-main pt-1"
          >
            50%
          </Typography>
          <Typography
            variant="body1"
            className="font-normal text-brand-text-title"
          >
            Highest Salary Offered
          </Typography>
        </div>
      </div>
      <div className="bg-white mt-4">
        <div className="p-4 shadow-md">
          <Typography
            variant="h6"
            className="font-bold text-brand-primary-blue-main pt-1"
          >
            83% Learners
          </Typography>
          <Typography
            variant="body1"
            className="font-normal text-brand-text-title"
          >
            Get positive career growth
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default JobRoleStats;
