import Typography from "@/app/common/atoms/Typography";
import React from "react";
import Degree from "../Degree";
import Course from "../Course";
import CourseSpecialization from "../Specialization";
import WorkStatus from "../WorkStatus";
import PersonalDetails from "../PersonalDetails";
import Thankyou from "../Thankyou";
import Qualification from "../Qualification";

const questionBank: any[] = [
  {
    question: "Which Degree/Program are you interested in?",
    options: [
      "PG Courses",
      "UG Courses",
      "Executive Courses",
      "Job Gurantee",
      "Skilling & Certificate",
      "Advance Diploma",
    ],
    type: "select",
  },
  {
    question: "Which course would you link to pursue?",
    options: [
      "B.Tech for working professionals",
      "Online BCA",
      "Online BBA",
      "Online B.com",
      "Online BA",
      "M.Tech for Professionals",
      "MBA for professionals",
    ],
    type: "async-select",
  },
  {
    question: "Select any particular specialization?",
    options: ["Computer Science", "Finance", "IOT", "Cyber security"],
    type: "async-select",
  },
  {
    question: "Are you Currently Working?",
    options: [
      { label: "Yes", value: "true" },
      { label: "No", value: "false" },
    ],
    type: "select",
  },
  {
    question: "What are your qualification?",
    options: [
      "Postgraduate",
      "Undergraduate",
      "Completed 12th",
      "Diploma Holder",
    ],
    type: "select",
  },
  {
    question: "",
    type: "form",
  },
  {
    question: "",
    type: "thankYou",
  },
];

const StepMapper: any = {
  step1: Degree,
  step2: Course,
  step3: CourseSpecialization,
  step4: WorkStatus,
  step5: Qualification,
  step6: PersonalDetails,
  step7: Thankyou,
};
const StepContainer = ({
  currentStep,
  formik1,
  formik2,
  formik3,
  formik4,
  formik5,
  formik6,
  handleEnable,
}: any) => {
  return (
    <div
      className={`min-h-[50vh] md:min-h-[60vh] container mx-auto flex flex-col`}
    >
      {questionBank[currentStep]?.question && (
        <Typography
          variant="h4"
          className="mt-4 mb-6 font-semibold text-brand-text-title text-center"
        >
          {questionBank[currentStep]?.question}
        </Typography>
      )}
      {React.createElement(StepMapper[`step${currentStep + 1}`], {
        formik1,
        formik2,
        formik3,
        formik4,
        formik5,
        formik6,
        handleEnable,
        options: questionBank[currentStep]?.options,
      })}
    </div>
  );
};
export default StepContainer;
