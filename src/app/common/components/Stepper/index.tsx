"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import Button from "../../atoms/Button";
import { API_URL } from "@/app/utils/api-urls";
import ProgressBar from "./ProgressBar";
import StepContainer from "./Steps/StepContainer";
const totalSteps = 6;
//a mapper that displays the component attached to the step number

//final step form initial input
const initialInput = {
  fullname: "",
  email: "",
  dob: "",
  mobile_number: "",
  state_id: "",
  city_id: "",
};

//validation schema for personal detail page
const formSchema = yup.object().shape({
  fullname: yup.string().nullable().required("Name is required"),
  email: yup.string().email().nullable().required("Email is required"),
  dob: yup.date()
  .max(new Date()).required("DOB is required"),
  mobile_number: yup
    .string()
    .matches(/^(?:\+\d{1,2}\s?)?\d{10}$/, "Phone number is not valid").required("phone number is required"),
  state_id: yup.string().nullable().required("State is required"),
  city_id: yup.string().nullable().required("City is required"),
});
const courseschema = yup.object().shape({
  course: yup.string().nullable().required("Course Is required"),
});

const degreeschema = yup.object().shape({
  degree: yup.string().nullable().required("Degree Is required"),
});

const Stepper: React.FC<any> = ({ searchParams }) => {
  const source = searchParams.get("search");
  const [currentStep, setCurrentStep] = useState(0);
  const [enable, setEnable] = useState<boolean>(true);

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formik1 = useFormik({
    initialValues: {
      course: "",
    },
    validationSchema: courseschema,
    onSubmit: (values: any) => {},
  });
  const formik2 = useFormik({
    initialValues: {
      course_program: "",
    },
    validationSchema: degreeschema,
    onSubmit: (values: any) => {},
  });
  const formik3 = useFormik({
    initialValues: {
      course_specialization: "",
    },
    onSubmit: (values: any) => {},
  });
  const formik4 = useFormik({
    initialValues: {
      is_working: false,
    },
    onSubmit: (values: any) => {},
  });
  const formik5 = useFormik({
    initialValues: {
      qualification: "",
    },
    onSubmit: (values: any) => {},
  });
  const formik6 = useFormik({
    initialValues: initialInput,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      const leadObj = {
        ...formik1.values,
        ...formik2.values,
        ...formik3.values,
        ...formik4.values,
        ...formik5.values,
        lead: "ai_suggest",
        ...values,
      };
      try {
        const response = await fetch(API_URL.leadForm, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: { ...leadObj, source } }),
        });

        if (response.ok) {
          const responseData = await response.json();
          setCurrentStep(currentStep + 1);
          // You can perform further actions after a successful POST request here
        } else {
          console.error("Error making POST request:", response.statusText);
          // Handle the error here
        }
      } catch (error) {
        console.error("An error occurred:", error);
        // Handle the error here
      }
    },
  });
  const handleNext = () => {
    if (currentStep < 4) {
      setEnable(false);
    }
    if (currentStep === 5) {
      formik6.handleSubmit();
    } else if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  useEffect(() => {
    if (currentStep == 0) {
      {
        formik1?.values?.course == "" ? setEnable(true) : setEnable(false);
      }
    } else if (currentStep == 1) {
      {
        formik2?.values?.course_program == ""
          ? setEnable(true)
          : setEnable(false);
      }
    } else if (currentStep == 2) {
      {
        formik3?.values?.course_specialization == ""
          ? setEnable(true)
          : setEnable(false);
      }
    } else if (currentStep == 3) {
      {
        formik4?.values?.is_working == "" ? setEnable(true) : setEnable(false);
      }
    } else if (currentStep == 4) {
      {
        formik5?.values?.qualification == ""
          ? setEnable(true)
          : setEnable(false);
      }
    }
  }, [formik1, formik2, formik3, formik4, formik5, currentStep]);

  return (
    <div className="w-full h-full relative overflow-hidden my-8">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <StepContainer
        currentStep={currentStep}
        formik1={formik1}
        formik2={formik2}
        formik3={formik3}
        formik4={formik4}
        formik5={formik5}
        formik6={formik6}
      />
      <div
        className={`${
          currentStep === totalSteps ? "hidden" : "flex"
        } my-4 md:container mx-auto w-full justify-center gap-4`}
      >
        {currentStep == 0 ? (
          <Link href={"/"}>
            <Button variant="outlined" size="stretched" color="primary">
              Home
            </Button>
          </Link>
        ) : (
          <Button
            variant="outlined"
            color={currentStep === 0 ? "disabled" : "primary"}
            size="stretched"
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        <Button
          variant="contained"
          size="stretched"
          type="submit"
          onClick={handleNext}
          disabled={enable}
          //className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
        >
          {currentStep === totalSteps ? "Submit" : "Next"}
        </Button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Stepper;
