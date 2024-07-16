"use client";
import Typography from "@/app/common/atoms/Typography";
import Lock from "../../../../../../public/images/form/lock.svg";
import Image from "next/image";
import { useState, Fragment, useMemo } from "react";
import { stateCity } from "@/app/utils/state-city";
const PersonalDetails: React.FC = ({ formik6 }: any) => {
  const [query, setQuery] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const states = useMemo(() => Object.keys(stateCity), []);
  const filteredState =
    query === ""
      ? states
      : states.filter((data) => {
          return data.toLowerCase().includes(query.toLowerCase());
        });
  const cities: any = stateCity[formik6.values.state_id] ?? [];
  const filteredCity =
    cityQuery === ""
      ? cities
      : cities.filter((data: string) => {
          return data.toLowerCase().includes(cityQuery.toLowerCase());
        });
  return (
    <div className="mx-auto w-full md:w-9/12 xl:max-w-md">
      <Typography
        variant="h4"
        component={"h4"}
        className="mt-4 mb-6 font-semibold text-brand-text-title text-center"
      >
        Enter the Personal Details
      </Typography>
      <div className="mb-4 mx-auto">
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
          onChange={formik6.handleChange}
          onBlur={formik6.handleBlur}
          value={formik6.values.fullname}
        />
        {formik6.touched.fullname && formik6.errors.fullname && (
          <span className="text-red-500 text-xs">
            {formik6.errors.fullname}
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
          onChange={formik6.handleChange}
          onBlur={formik6.handleBlur}
          value={formik6.values.email}
        />
        {formik6.touched.email && formik6.errors.email && (
          <span className="text-red-500 text-xs">{formik6.errors.email}</span>
        )}
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="mb-4">
          <label htmlFor="dob">
            <Typography
              variant="body2"
              className="block text-brand-text-primary font-semibold"
            >
              Date of Birth<span className="text-brand-accent-red"> *</span>
            </Typography>
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none"
            onChange={formik6.handleChange}
            onBlur={formik6.handleBlur}
            value={formik6.values.dob}
          />

          {formik6.touched.dob && formik6.errors.dob && (
            <span className="text-red-500 text-xs">{formik6.errors.dob}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="mobile_number">
            <Typography
              variant="body2"
              className="block text-brand-text-primary font-semibold"
            >
              Mobile Number <span className="text-brand-accent-red">*</span>
            </Typography>
          </label>
          <input
           name="mobile_number"
           id="mobile_number"
           className="border border-gray-300 p-3 w-full rounded focus:outline-none"
            onChange={formik6.handleChange}
            onBlur={formik6.handleBlur}
            value={formik6.values.mobile_number}
          />
          {formik6.touched.mobile_number && formik6.errors.mobile_number && (
            <span className="text-red-500 text-xs">
              {formik6.errors.mobile_number}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 my-2 gap-4 w-full">
        <div className="mb-2">
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
            value={formik6.values.state_id}
            onChange={formik6.handleChange}
          >
            <option value="" className="hidden"></option>
            {filteredState.map((item: any, index: number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          {formik6.touched.state_id && formik6.errors.state_id && (
            <span className="text-red-500 text-sm">
              {formik6.errors.state_id}
            </span>
          )}
        </div>

        <div className="mb-2">
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
            value={formik6.values.city_id}
            disabled={!formik6.values.state_id}
            className="border border-gray-300 p-3 w-full rounded focus:outline-none"
            onChange={formik6.handleChange}
          >
            <option value="" className="hidden"></option>
            {cities.map((item: any, index: number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          {formik6.touched.city_id && formik6.errors.city_id && (
            <span className="text-red-500 text-sm">
              {formik6.errors.city_id}
            </span>
          )}
        </div>
      </div>
      {/* </div> */}
      <div className="flex gap-2 items-center mt-3 mb-3 justify-center ">
        <Image src={Lock} height={15} width={15} alt="privacy" />
        <Typography variant="body2" className="font-normal">
          Your personal information is secure with us
        </Typography>
      </div>
    </div>
  );
};

export default PersonalDetails;
