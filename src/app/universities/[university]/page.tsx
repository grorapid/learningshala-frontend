import PopularArticles from "@/app/common/sections/University/PopularArticles";
import NewsArticles from "@/app/common/sections/University/NewsArticles";
import BannerVarient1 from "@/app/common/sections/University/BannerVarient1";
import Placement from "@/app/common/sections/University/Placement";
import FinacialAid from "@/app/common/sections/University/FinancialAid";
import UniversityIntro from "@/app/common/sections/University/Universityintro";
import SampleDegree from "@/app/common/sections/University/SampleDegree";
import Programs from "@/app/common/components/Programs";
import Examination from "@/app/common/sections/University/Examination";
import { getUniversityBySlug } from "@/app/utils/get-university-by-slug";
import CoursesFees from "@/app/common/sections/University/Courses";
import ProgramOffered from "@/app/common/sections/University/ProgramOffered";
import Typography from "@/app/common/atoms/Typography";
import UniversityNavigation from "@/app/common/sections/University/UniversityNavigation";
import TalkToExperts from "@/app/common/components/TalkToExpert";
import TestimonialText from "@/app/common/components/TextTestimonials";
import TableOfContent from "@/app/common/sections/University/TableOfContent";
import Colleges from "@/app/common/sections/Admission/Colleges";
import BannerScolarship from "@/app/common/sections/University/BannerScholarship";
import React from "react";
import RichTextEditor from "@/app/common/components/RichTextEditor";
import Button from "@/app/common/atoms/Button";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/app-routes";
import FAQUniversity from "@/app/common/components/FaqUniversity";

const University = async ({ params }: any) => {
  const { university } = params;
  const universityData = await getUniversityBySlug(university);
  //todo - check table of content check
  if (universityData?.data?.length === 0) return <div>No data</div>;
  return (
    <div>
      {universityData?.data?.[0]?.attributes?.contentSections?.map(
        (item: any, index: number) => {
          console.log(item?.title, item?.__component, "title------------");
          switch (item?.__component) {
            case "university.banneruniversity":
              return (
                <React.Fragment key={`university.banneruniversity-${index}`}>
                  <BannerVarient1
                    data={universityData?.data?.[0]?.attributes}
                  />
                </React.Fragment>
              );
            case "university.navigation":
              return (
                <React.Fragment key={`university.navigation-${index}`}>
                  <UniversityNavigation
                    university={true}
                    data={universityData?.data?.[0]?.attributes}
                  />
                </React.Fragment>
              );
            case "university.latest-update":
              return universityData?.data?.[0]?.attributes?.latest_updates ? (
                <div
                  className="container mx-auto"
                  key={`university.latest-update-${index}`}
                >
                  {universityData?.data?.[0]?.attributes
                    ?.latest_update_date && (
                    <Typography
                      variant="body2"
                      className="text-brand-text-primary mt-4"
                    >
                      {`${APP_ROUTES?.date(
                        universityData?.data?.[0]?.attributes
                          ?.latest_update_date
                      )}`}
                    </Typography>
                  )}
                  <Typography variant={"h3"} className="mt-4" component={"h3"}>
                    {item?.title ?? `What's New?`}
                  </Typography>
                  <RichTextEditor
                    className="mt-4"
                    htmlContent={
                      universityData?.data?.[0]?.attributes?.latest_updates
                    }
                  />
                </div>
              ) : (
                <></>
              );

            case "university.table-of-content":
              return item?.table?.length ? (
                <TableOfContent
                  key={`university.table-of-content-${index}`}
                  data={item}
                />
              ) : (
                <React.Fragment
                  key={`university.table-of-content-${index}`}
                ></React.Fragment>
              );
            case "university.about-us":
              return universityData?.data?.[0]?.attributes?.aboutUniversity ? (
                <div
                  key={`university.about-us-${index}`}
                  id="intro"
                  className="container my-7 mx-auto"
                >
                  <UniversityIntro
                    data={universityData?.data?.[0]?.attributes}
                  />
                </div>
              ) : (
                <React.Fragment
                  key={`university.about-us-${index}`}
                ></React.Fragment>
              );
            case "university.faq":
              return item?.university_faq?.length ? (
                <div
                  key={`university.faq-${index}`}
                  id="faq"
                  className=" my-7 "
                >
                  <div className="container mx-auto my-7">
                    {universityData?.data?.[0]?.attributes
                      ?.facilities_university && (
                      <Typography
                        variant={"h3"}
                        component={"h3"}
                        className="my-5"
                      >
                        {item?.title ?? `Facilities`}
                      </Typography>
                    )}
                    <Typography variant={"body2"}>
                      <RichTextEditor
                        htmlContent={
                          universityData?.data?.[0]?.attributes
                            ?.facilities_university
                        }
                      />
                    </Typography>
                  </div>
                  <FAQUniversity data={item} icon={"question"} />
                </div>
              ) : (
                <React.Fragment
                  key={`university.faq-${index}`}
                ></React.Fragment>
              );
            case "university.finacialaid":
              return universityData?.data?.[0]?.attributes?.financialAid
                ?.scolarship?.length ? (
                <div
                  key={`university.finacialaid-${index}`}
                  id="financial"
                  className="md:my-8"
                >
                  <FinacialAid data={universityData?.data?.[0]?.attributes} />
                </div>
              ) : (
                <React.Fragment
                  key={`university.finacialaid-${index}`}
                ></React.Fragment>
              );
            case "university.admission-process":
              return (
                <div
                  key={`university.admission-process-${index}`}
                  className="container flex justify-start items-start flex-col my-6 mx-auto"
                >
                  <Typography variant="h3" className="font-bold">
                    {
                      universityData?.data?.[0]?.attributes?.admissionProcess
                        ?.title
                    }
                  </Typography>
                  <Typography variant="body1" className="mt-6">
                    <RichTextEditor
                      htmlContent={
                        universityData?.data?.[0]?.attributes?.admissionProcess
                          ?.admissioncontent
                      }
                    />
                  </Typography>
                  <Link href={APP_ROUTES.universityAdmissionPage(university)}>
                    <Button
                      element="div"
                      variant="contained"
                      className="mt-4 "
                      color="primary"
                      size="small"
                    >
                      {`Know More`}
                    </Button>
                  </Link>
                </div>
              );
            case "university.sampledegree":
              return universityData?.data?.[0]?.attributes
                ?.sampleCertificate ? (
                <div key={`university.sampledegree-${index}`} id="degree">
                  <SampleDegree data={universityData?.data?.[0]?.attributes} />
                </div>
              ) : (
                <></>
              );
            case "university.popular-program":
              return universityData?.data?.[0]?.attributes?.sk_course_types
                ?.data?.length ? (
                <div
                  id="popular"
                  key={`university.popular-program-${index}`}
                  className="container md:my-8 mx-auto"
                >
                  <div className="w-full flex justify-between my-4  items-center">
                    <Typography
                      variant="h3"
                      component={"h3"}
                      className="font-bold  text-brand-text-title"
                    >
                      {item?.title ?? `Our Popular Programs and Fees`}
                    </Typography>
                  </div>
                  <Programs
                    params={university}
                    data={universityData?.data?.[0]?.attributes}
                  />
                </div>
              ) : (
                <></>
              );
            case "university.program-offered":
              return (
                <div id="program" key={`university.program-offered-${index}`}>
                  {universityData?.data?.[0]?.attributes?.sk_courses?.data
                    ?.length ? (
                    <div className="container mx-auto my-14">
                      <Typography variant="h3" className="font-bold my-7">
                        {`Programs offered by ${universityData?.data?.[0]?.attributes?.name}`}
                      </Typography>
                      <ProgramOffered
                        data={universityData?.data?.[0]?.attributes}
                      />
                      <div className="flex justify-end underline px-2 hover:text-brand-primary-blue-main">
                        <Link
                          href={APP_ROUTES.universityCoursesPage(university)}
                        >
                          view more
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            case "university.explore-by-categories":
              return universityData?.data?.[0]?.attributes.Categories?.Card
                ?.length ? (
                <div
                  id="category"
                  className="container my-7 mx-auto"
                  key={`university.explore-by-categories-${index}`}
                >
                  <CoursesFees data={universityData?.data?.[0]?.attributes} />
                </div>
              ) : (
                <></>
              );
            case "university.exampattern":
              return universityData?.data?.[0].attributes.examinationPattern[0]
                ?.coursePatternLinks?.length ? (
                <div
                  id="exam"
                  className="container md:my-8 mx-auto"
                  key={`university.exampattern-${index}`}
                >
                  <Examination data={universityData?.data?.[0].attributes} />
                </div>
              ) : (
                <></>
              );
            case "university.placements":
              return (
                <div
                  id="placement"
                  className="container my-7 mx-auto"
                  key={`university.placements-${index}`}
                >
                  {universityData?.data?.[0]?.attributes?.placementStats?.stats
                    ?.length ? (
                    <Placement
                      name={universityData?.data?.[0]?.attributes?.name}
                      data={universityData?.data?.[0]?.attributes}
                      title={item?.title}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              );
            case "university.testimonial":
              return (
                <div
                  id="student"
                  className="my-8"
                  key={`university.testimonial-${index}`}
                >
                  {universityData?.data?.[0]?.attributes
                    ?.sk_university_testimonials?.data?.[0]?.attributes?.cards
                    ?.length ? (
                    <TestimonialText
                      title={item?.title}
                      show={false}
                      data={
                        universityData?.data?.[0]?.attributes
                          ?.sk_university_testimonials?.data?.[0]?.attributes
                      }
                    />
                  ) : (
                    <></>
                  )}
                </div>
              );

            case "university.scolarship":
              console.log(universityData?.data?.[0]?.attributes?.financialAid
                ?.scholarship_banner?.background?.data?.attributes?.url, '11oooooooo7878787')
              return (
                <div
                  className="md:container md:my-8 mx-auto"
                  key={`university.scolarship-${index}`}
                >
                  {universityData?.data?.[0]?.attributes?.financialAid
                    ?.scholarship_richtext && (
                    <Typography
                      variant={"h3"}
                      className="font-bold text-brand-text-title"
                    >
                      {item?.title ?? `Scholarship`}
                    </Typography>
                  )}
                  <Typography variant="body2" className="my-6">
                    <RichTextEditor
                      htmlContent={
                        universityData?.data?.[0]?.attributes?.financialAid
                          ?.scholarship_richtext
                      }
                    />
                  </Typography>
                  <BannerScolarship
                    title={universityData?.data?.[0]?.attributes?.financialAid
                      ?.scholarship_banner?.title}
                    subtitle={universityData?.data?.[0]?.attributes?.financialAid
                      ?.scholarship_banner?.subtitle}
                    cta={universityData?.data?.[0]?.attributes?.financialAid
                      ?.scholarship_banner?.cta}
                    img={universityData?.data?.[0]?.attributes?.financialAid
                      ?.scholarship_banner?.background?.data?.attributes?.url}
                  />
                </div>
              );
            case "university.fees":
              return (
                <div className="container mx-auto my-7">
                  {universityData?.data?.[0]?.attributes?.course_fees && (
                    <Typography variant="h3" component={"h3"}>
                      {item?.title ?? `Courses Fee`}
                    </Typography>
                  )}
                  <RichTextEditor
                    className="mt-5"
                    htmlContent={
                      universityData?.data?.[0]?.attributes?.course_fees
                    }
                  />
                </div>
              );
            case "university.talk-to-expert":
              return (
                <div
                  id="expert"
                  className="md:my-8"
                  key={`university.talk-to-expert-${index}`}
                >
                  {universityData?.data?.[0]?.attributes?.expert?.data
                    ?.attributes?.expert?.length > 0 && (
                    <Typography
                      variant="h3"
                      component={"h3"}
                      fontWeight="bold"
                      className="container mx-auto"
                    >
                      {item?.title ?? `Talk To Experts`}
                    </Typography>
                  )}
                  {universityData?.data?.[0]?.attributes?.expert?.data
                    ?.attributes?.expert?.length ? (
                    <TalkToExperts
                      data={universityData?.data?.[0]?.attributes}
                      title={item?.title}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              );
            case "university.news-updates":
              return (
                <div key={`university.talk-to-expert-${index}`}>
                  <div className="container my-7 mx-auto">
                    {universityData?.data?.[0]?.attributes
                      ?.sk_university_articles?.data?.length ? (
                      <PopularArticles
                        data={
                          universityData?.data?.[0]?.attributes
                            ?.sk_university_articles?.data
                        }
                        title={item?.title}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );

            default:
              return null;
          }
        }
      )}
    </div>
  );
};

export default University;
