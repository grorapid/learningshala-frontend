"use client"
import { useMemo } from "react";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

interface rating {
  value: number;
  classname?: string;
  size: number;
}

const Rating = ({ value, classname, size }: rating) => {
  const getrating = (rating: number) => {
    const ratingcover: Number[] = [];
    const ratingopen: Number[] = [];
    const val = Math.floor(rating);
    const val1 = rating / val;
    let val2 = 0;
    {
      val1 !== 1 ? (val2 = 4 - val) : (val2 = 5 - val);
    }
    for (let i = 0; i < val; i++) {
      ratingcover[i] = i;
    }
    for (let i = 0; i < val2; i++) {
      ratingopen[i] = i;
    }

    return { val1, ratingcover, ratingopen };
  };
  const val1 = useMemo(() => getrating(value), [value]);

  return (
    <div className={`${classname} mr-2 flex space-x-1`}>
      {val1.ratingcover?.map((index: Number) => (
        <BsStarFill key={index} size={size} />
      ))}
      {val1.val1 !== 1 ? <BsStarHalf size={size} /> : ""}
      {val1.ratingopen?.map((index: Number) => (
        <BsStar key={index} size={size} />
      ))}
    </div>
  );
};

export default Rating;
