import { ListContent } from "../../Interfaces";
import Typography from "../../atoms/Typography";

interface LearningProps {
  data: ListContent[];
}

const WhatWillYouLearn = ({ data }: LearningProps) => {
  return (
    <div className="my-4 md:my-6">
      <div className="pb-4 md:pb-7">
        <Typography variant="h4" className="font-bold text-brand-text-title">
          What will you learn
        </Typography>
      </div>
      <ul className="md:grid md:grid-cols-3 md:gap-4">
        {data?.map((data: ListContent) => (
          <div key={data.id} className="pb-5 md:pb-0 md:pr-3">
            <li className="flex items-start">
              <svg
                className="w-3.5 h-3.5 mt-[3px] md:mt-1 md:w-4 md:h-4 mr-2 text-brand-primary-blue-main flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <Typography
                variant="body2"
                className="font-normal text-brand-text-dark"
              >
                {data.learning_text}
              </Typography>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WhatWillYouLearn;
