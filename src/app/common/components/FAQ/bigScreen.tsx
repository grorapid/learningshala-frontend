"use client"
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Typography from "../../atoms/Typography";

const BigScreenFaq = ({ faq }: any) => {
  const [active, setActive] = useState(new Array(faq?.length).fill(false));
  const [question, setQuestion] = useState<any[]>([]);

  const handleclick = (value: number) => {
    setQuestion(new Array(faq[value].questions?.length).fill(false));

    const updatedCheckedState = active.map((item, index) =>
      index === value ? !item : false
    );

    setActive(updatedCheckedState);
  };
  const handleQuestionClick = (value: number) => {
    const updatedCheckedState = question?.map((item, index) =>
      index === value ? !item : item
    );
    setQuestion(updatedCheckedState);
  };

  return (
    <div className="my-4 border p-6 flex gap-2">
      <div className="w-1/4 shadow-sm flex flex-col">
        {faq?.map((categoryObj: any, index: any) => {
          return (
            <div
              key={index}
              onClick={() => handleclick(index)}
              className={`cursor-pointer p-4 shadow-md group hover:bg-brand-primary-blue-hover hover:rounded-md ${active[index] === true
                  ? "bg-brand-primary-blue-main border rounded-md"
                  : "bg-white"
                }`}
            >
              <Typography
                variant="body1"
                className={`font-semibold group-hover:text-white ${active[index] === true
                    ? "text-white"
                    : "text-brand-primary-icon"
                  }`}
              >
                {categoryObj.heading}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col">
        {faq?.map((categoryObj: any, index: any) => {
          return (
            <div
              key={index}
              className={`mb-4 ${active[index] === true ? "block" : "hidden"}`}
            >
              {categoryObj?.questions?.map((item: any, index: number) => {
                return (
                  <div key={index} className="mb-2">
                    <div
                      onClick={() => handleQuestionClick(index)}
                      className={`cursor-pointer flex justify-between items-center p-4 border rounded-md ${question[index] === true
                          ? "bg-brand-primary-blue-main"
                          : "bg-brand-background-blue"
                        }`}
                    >

                        <div className="flex justify-start gap-3 items-center">
                      <Typography className={`font-bold ${question[index] === true
                              ? "text-white"
                              : " text-brand-primary-blue-main"
                            }`}>
                          Q.
                        </Typography>
                        <Typography
                          variant="body2"
                          className={`font-normal ${question[index] === true
                              ? "text-white"
                              : "text-brand-primary-icon"
                            }`}
                        >
                          {item?.question}
                        </Typography>
                        </div>
                   
                      <span>
                        <ChevronDownIcon
                          className={`${question[index] === true
                              ? "transform rotate-180 text-white"
                              : ""
                            } h-5 w-5 text-black`}
                        />
                      </span>
                    </div>
                    {question[index] === true && (
                      <div className="p-4 flex justify-start gap-3 items-center shadow-md">
                        <Typography className="font-bold text-brand-primary-blue-main">
                          A.
                        </Typography>
                        <Typography
                          variant="body2"
                          className="font-normal text-brand-text-dark"
                        >
                          {item.answer}
                        </Typography>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BigScreenFaq;
