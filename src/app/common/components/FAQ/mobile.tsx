"use client"
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Typography from "../../atoms/Typography";

const MobileFaq = ({ faq }: any) => {
  const [active, setActive] = useState(new Array(faq?.length).fill(false));
  const [question, setQuestion] = useState<any[]>([]);
  const handleclick = (value: number) => {
    setQuestion(new Array(faq[value]?.questions?.length).fill(false));

    const updatedCheckedState = active?.map((item, index) =>
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
    <div className="my-4">
      {faq.map((categoryObj: any, index: number) => {
        return (
          <div key={index} className="mb-4">
            <div
              onClick={() => handleclick(index)}
              className={`cursor-pointer flex justify-between items-center p-4 shadow-sm border rounded-sm ${active[index] === true
                  ? "bg-brand-primary-blue-main"
                  : "bg-white"
                }`}
            >
              <div>
            
                <Typography
                  variant="h5"
                  className={`font-bold ${active[index] === true
                      ? "text-white"
                      : "text-brand-primary-icon"
                    }`}
                >
                  {categoryObj?.heading}
                </Typography>
              </div>
              <span>
                <ChevronDownIcon
                  className={`${active[index] === true
                      ? "rotate-180 transform text-white"
                      : ""
                    } h-5 w-5 text-black`}
                />
              </span>
            </div>

            <div
              className={`mt-2 ${active[index] === true ? "block" : "hidden"}`}
            >
              {categoryObj?.questions?.map(
                (subCategoryKey: any, subIndex: number) => {
                  return (
                    <div
                      key={subIndex}
                      className="mb-2 bg-brand-background-blue"
                    >
                      <div
                        onClick={() => handleQuestionClick(subIndex)}
                        className={`cursor-pointer flex justify-between items-center p-4 border rounded-sm ${question[subIndex] === true
                            ? "bg-brand-primary-blue-main"
                            : "bg-brand-background-blue"
                          }`}
                      >
                        <span className="flex justify-start gap-3 items-start">
                        <Typography className={`font-bold ${question[subIndex] === true
                              ? "text-white"
                              : " text-brand-primary-blue-main"
                            }`}>
                          Q.
                        </Typography>
                          <Typography
                            variant="body2"
                            className={`font-bold ${question[subIndex] === true
                                ? "text-white"
                                : "text-brand-primary-icon"
                              }`}
                          >
                            {subCategoryKey?.question}
                          </Typography>
                        </span>
                        <span>
                          <ChevronDownIcon
                            className={`${question[subIndex] === true
                                ? "transform rotate-180 text-white"
                                : ""
                              } h-5 w-5 text-black`}
                          />
                        </span>
                      </div>
                      {question[subIndex] === true && (
                        <div className="p-4 flex gap-2 justify-start items-start">
                          <Typography className="text-brand-primary-blue-main font-bold">
                            A.
                          </Typography>
                          <Typography
                            variant="body2"
                            className="font-normal text-brand-text-dark"
                          >
                            {subCategoryKey?.answer}
                          </Typography>
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileFaq;
