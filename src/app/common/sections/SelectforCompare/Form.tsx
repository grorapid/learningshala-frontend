"use client"

import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Thankyou from "../../components/Stepper/Steps/Thankyou";
import { stateCity } from "@/app/utils/state-city";
import RootLoading from "@/app/loading";
export default function Form({
  popup,
  source,
  downloadFile,
  fileName,
  onClose,
}: any) {
  const fileLink = useRef<HTMLAnchorElement>(null);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const initialInput = {
    fullname: "",
    email: "",
    dob: "",
    mobile_number: "",
    state_id: "",
    city_id: "",
  };
  const formSchema = yup.object().shape({
    fullname: yup.string().nullable().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address format")
      .required("Email is required"),
    dob: yup.date()
    .max(new Date())
    .required("D.O.B is Required"),
    mobile_number: yup
      .string()
      .matches(/^(?:\+\d{1,2}\s?)?\d{10}$/, "Phone number is not valid").required("phone number is required"),
    state_id: yup.string().nullable().required("State is required"),
    city_id: yup.string().nullable().required("City is required"),
  });
  const formik = useFormik({
    initialValues: initialInput,
    validationSchema: formSchema,

    onSubmit,
  });
  const states = Object.keys(stateCity);
  const filteredState =
    query === ""
      ? states
      : states.filter((data) => {
          return data.toLowerCase().includes(query.toLowerCase());
        });
  const cities: any = stateCity[formik.values.state_id] ?? [];

  const [state, setState] = useState<any>([]);

  useEffect(() => {
    const item: any = localStorage.getItem("comparedata");
    const datum = JSON.parse(item);
    setState(datum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const d: any = state?.map((item: any) => {
    return `${item}&`;
  });
  const [thank, setThank] = useState(false);
  const [complete,setComplete]=useState(false)
  async function onSubmit(values: any) {
    setComplete(true)
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({ data: { ...values, source } }),
    };
    await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sk-lead-forms`, option)
      .then((res) => res.json())
      .then((data) => {
       setComplete(false)
        popup
          ? router.push(`/compare/${d?.join(",")?.replace(/,/g, "")}`)
          : setThank(true);
      });
    fileLink?.current?.click();
    onClose && onClose();
  }
  if(complete) return <div><RootLoading/></div> 
  return (
    <>
    <div
      className={`container mx-auto xl:w-1/2 my-8 ${
        thank ? "hidden" : "flex"
      } flex-col justify-center items-center`}
    >
      <div className="w-full flex flex-col justify-center items-center mx-auto">
        <Typography
          variant="h4"
          component={"h4"}
          className="font-semibold mx-auto mb-6 text-center text-brand-text-title"
        >
          Fill the form to continue
        </Typography>
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
          <div className="mb-4">
            <label htmlFor="fullname">
              <Typography
                variant="body2"
                className="block text-brand-text-primary font-semibold"
              >
                Full Name <span className="text-brand-accent-red">*</span>
              </Typography>
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <span className="text-red-500 text-sm">
                {formik.errors.fullname}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email">
              <Typography
                variant="body2"
                className="block text-brand-text-primary font-semibold"
              >
                Email <span className="text-brand-accent-red">*</span>
              </Typography>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 p-3 w-full rounded focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="mb-4">
              <label htmlFor="dob">
                <Typography
                  variant="body2"
                  className="block text-brand-text-primary font-semibold"
                >
                  Date of Birth
                  <span className="text-brand-accent-red"> *</span>
                </Typography>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              />

              {formik.touched.dob && formik.errors.dob && (
                <span className="text-red-500 text-sm">
                  {formik.errors.dob}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="mobile_number">
                <Typography
                  variant="body2"
                  className="block text-brand-text-primary font-semibold"
                >
                  Mobile Number
                  <span className="text-brand-accent-red"> *</span>
                </Typography>
              </label>
             
              <input
              name="mobile_number"
                
              className="border border-gray-300 p-3 w-full rounded focus:outline-none"
                id="mobile_number"
              
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile_number}
              />
              
              {formik.touched.mobile_number && formik.errors.mobile_number && (
                <span className="text-red-500 text-sm">
                  {formik.errors.mobile_number}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 my-2 gap-4 w-full">
            <div className="mb-4">
              <label htmlFor="state_id">
                <Typography
                  variant="body2"
                  className="block text-brand-text-primary font-semibold"
                >
                  State <span className="text-brand-accent-red">*</span>
                </Typography>
              </label>

              <select
                name="state_id"
                id="state_id"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none"
                value={formik.values.state_id}
                onChange={formik.handleChange}
              >
                <option value="" className="hidden"></option>
                {filteredState.map((item: any, index: number) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {formik.touched.state_id && formik.errors.state_id && (
                <span className="text-red-500 text-sm">
                  {formik.errors.state_id}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="city_id">
                <Typography
                  variant="body2"
                  className="block text-brand-text-primary font-semibold"
                >
                  City <span className="text-brand-accent-red">*</span>
                </Typography>
              </label>
              <select
                name="city_id"
                id="city_id"
                value={formik.values.city_id}
                disabled={!formik.values.state_id}
                className="border border-gray-300 p-3 w-full rounded focus:outline-none"
                onChange={formik.handleChange}
              >
                <option value="" className="hidden"></option>
                {cities.map((item: any, index: number) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {formik.touched.city_id && formik.errors.city_id && (
                <span className="text-red-500 text-sm">
                  {formik.errors.city_id}
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="extrasmall"
              className="text-lg md:w-80 px-8 mt-4  font-semibold"
            >
              {popup ? "Continue to compare" : "Get In Touch"}
            </Button>
            {downloadFile && (
              <a
                ref={fileLink}
                href={downloadFile ?? "#"}
                download={true}
                className="p-2 text-center text-sm"
                target="_blank"
              >
                {fileName}
              </a>
            )}
            {!popup ? (
              <Typography
                variant="body2"
                fontWeight="normal"
                className="text-brand-text-primary text-center mt-8"
              >
                By clicking &#34;Register Now&#34; I agree to Skollege&#39;s
                Terms of Service
              </Typography>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    
    </div>
      {thank && <Thankyou />}
      </>
  );
}
