import { getAdmisssion } from "@/app/utils/get-search-by-tag";
import Banner from "../../../common/sections/Courses/Banner";
import Typography from "../../../common/atoms/Typography";
import Eligibility from "@/app/common/components/Eligibility";
import CourseAdmission from "../../../common/components/CourseAdmission";
import FAQAdmission from "../../../common/components/FAQAdmission";
import NewsArticles from "@/app/common/sections/University/NewsArticles";
import Colleges from "@/app/common/sections/Admission/Colleges";
import UniversityNavigation from "@/app/common/sections/University/UniversityNavigation";
import RichTextEditor from "@/app/common/components/RichTextEditor";
import { APP_ROUTES } from "@/app/utils/app-routes";

const AdmisssionProcess = async ({ params }: any) => {
  const { university } = params;
  const universityData = await getAdmisssion(university)
  if (universityData?.data?.length === 0) return <div>No data</div>;

  return (
    <div>
      <div>
        <Banner
          admission={true}
          course={false}
          program={false}
          data={universityData?.data[0]?.attributes}
        />
      </div>
      <UniversityNavigation data={{}} />
      <div className="container space-y-9 mx-auto">
        <div>
         {universityData?.data?.[0]?.attributes?.whatsnew && <Typography variant={"h3"} component={"h3"} className="font-bold  mt-6">
          Latest News
          </Typography>}
            <RichTextEditor className={"text-brand-text-primary mt-3"} htmlContent={universityData?.data?.[0]?.attributes?.whatsnew}/>
        </div>
        <Typography variant="body2" className="text-brand-text-primary mt-10">
          {`${APP_ROUTES?.date(universityData?.data[0]?.attributes?.updatedAt)}`}
        </Typography>
        <Typography variant="h3" className="font-bold ">
          {universityData?.data[0]?.attributes?.admissionprocess_heading}
        </Typography>
        <Typography variant="body2" className="font-normal text-justify ">
         <RichTextEditor htmlContent={universityData?.data[0]?.attributes?.content} />
        </Typography>
      </div>
      {universityData?.data[0]?.attributes?.university?.data?.attributes?.sk_course_types
        ?.data?.length > 0 && <Eligibility data={universityData?.data[0]?.attributes} />}
      {universityData?.data[0]?.attributes?.university?.data?.attributes?.sk_course_types
        ?.data?.length > 0 && (
        <CourseAdmission data={universityData?.data[0]?.attributes} />
      )}
      {universityData?.data[0]?.attributes?.faq_admission[0]?.questions?.length > 0 && (
        <FAQAdmission data={universityData?.data[0]?.attributes} />
      )}
    </div>
  );
};

export default AdmisssionProcess;
