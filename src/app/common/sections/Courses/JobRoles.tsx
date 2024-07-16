import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import JobRoleStats from "../../components/JobRoleStats";
import JobRoleGraph from "../../components/JobRoleStats/Graph";
import NavigationPill from "../../components/NavigationPill";
import CoursesFAQ from "./CoursesFAQ";
import WantToModal from "./WantToModal";

export interface JobCategories{
    id: number,
    role: string
}

const jobCategories: JobCategories[]= [
    {
        id:1,
        role: "Product Manager"
    },
    {
        id:2,
        role: "Head HR"
    },
    {
        id:3,
        role: "Chief of Staff"
    },
]

const JobRoles = () => {
  return (
    <div className="my-7 md:my-10">
      <Typography variant="h4" className="font-bold text-brand-text-title">
        Job Roles
      </Typography>
      <div className="md:flex md:gap-8">
        <div className="md:w-1/2 md:flex md:flex-col md:justify-center">
        <div className="mt-4">
          <NavigationPill 
        //roles={...jobCategories}
        />
        </div>
      <div className="hidden md:flex md:justify-center md:mt-4">
      <WantToModal />
      </div>
        </div>
        <div className="md:w-1/2">
        <JobRoleStats />
        </div>
      </div>
      
      <div className="block md:hidden">
      <WantToModal />
      </div>
    </div>
  );
};

export default JobRoles;
