"use client"
import React from "react";
import Stepper from "../common/components/Stepper";
import { useSearchParams } from "next/navigation";

const StepperForm: React.FC<any> = () => {
  const searchParams = useSearchParams();
  return (
    <div className="ai-suggest">
      <Stepper searchParams={searchParams} />
    </div>
  );
};

export default StepperForm;
