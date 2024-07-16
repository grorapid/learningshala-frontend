import BannerVarient1 from "@/app/common/sections/University/BannerVarient1";
import NewsArticles from "@/app/common/sections/University/NewsArticles";
import Typography from "@/app/common/atoms/Typography";
import { getUniversityBySlug } from "@/app/utils/get-university-by-slug";
import Programs from "@/app/common/components/Programs";
import Colleges from "@/app/common/sections/Admission/Colleges";
import UniversityNavigation from "@/app/common/sections/University/UniversityNavigation";
import RichTextEditor from "@/app/common/components/RichTextEditor";

const Courses = async ({ params }: any) => {
  const { university } = params;
  const page = await getUniversityBySlug(university);
  return (
    <div>
      {page && (
        <div>
          <BannerVarient1 data={page?.data[0]?.attributes} />
          <UniversityNavigation university={false} data={{}} />
          <Typography
            variant="body2"
            className="container text-brand-text-primary mx-auto mt-10 font-medium"
          >
            {`This page is last updated at ${page?.data[0]?.attributes?.updatedAt.slice(
              0,
              10
            )}`}
          </Typography>
          <Typography
            variant="h3"
            className="container mx-auto my-12 font-bold"
          >
            Programs Offered By {page?.data[0]?.attributes?.name}
          </Typography>
          <Typography variant="body2" className="container mx-auto my-7">
            <RichTextEditor
              htmlContent={page?.data[0]?.attributes?.aboutUniversity}
            />
          </Typography>
          {page?.data[0]?.attributes?.sk_course_types?.data?.length > 0 && (
            <Typography
              variant="h3"
              className="container mx-auto my-14 font-bold"
            >
              All Programs Offered By {page?.data[0]?.attributes?.name}
            </Typography>
          )}
          {page?.data[0]?.attributes?.sk_course_types?.data?.length > 0 && (
            <div className="container mx-auto">
              <Programs
                params={params.university}
                data={page?.data[0]?.attributes}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Courses;
