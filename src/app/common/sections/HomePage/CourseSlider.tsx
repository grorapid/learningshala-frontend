"use client"

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const options = [
  "Post Graduation",
  "Undergraduation",
  "Upskilling/Certifications",
  "Advanced Diploma",
  "Study Abroad",
];

// This section will show list of courses offered in a slider

const CourseSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const cardsToShow = 3;

  const handleCardPrev = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? options?.length - cardsToShow : prevCard - 1
    );
  };

  const handleCardNext = () => {
    setCurrentCard((prevCard) =>
      prevCard + cardsToShow < options?.length ? prevCard + 1 : 0
    );
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const displayedOptions = options.slice(
    currentCard,
    currentCard + cardsToShow
  );

  return (
    <div className="pb-5 container mx-auto">
      {/* This section will be hidden  in medium devices  */}

      <div className="flex items-center justify-between p-4 md:hidden">
        {/* This section is used for prev buttons */}

        <button onClick={handleCardPrev}>
          <IoIosArrowBack size={24} />
        </button>

        <div className="flex w-2/3 justify-between">
          {/* This section is used to create list items */}

          {displayedOptions?.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`hover:bg-brand-primary-blue-main hover:text-white hover:py-2 hover:px-2 xs:text-[5px] sm:text-[7px] text-zinc-800 me-2 text-[10px] font-bold ${
                selectedOption === option
                  ? "text-black bg-blue-500"
                  : "text-gray-400"
              }`}
            >
              {option}
            </div>
          ))}
        </div>

        {/* This section is used for next buttons */}

        <button onClick={handleCardNext}>
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* This section will be hidden in mobile devices only in medium devices this will be visible */}

      <div className="hidden bg-white py-4  md:flex md:justify-center md:items-center md:space-x-7">
        {options?.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`hover:bg-brand-primary-blue-main hover:text-white hover:py-2 hover:px-6 cursor-pointer text-zinc-800 md:text-sm  lg:text-lg font-bold ${
              selectedOption === option ? "text-black bg-blue-500" : ""
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSlider;
