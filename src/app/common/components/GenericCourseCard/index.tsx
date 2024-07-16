import Image from "next/image";
import Button from "../../atoms/Button";
import Link from "next/link";
import Typography from "../../atoms/Typography";
import img from "../../../../../public/images/clock.svg";

const GenericCourseCard = ({
  type,
  programName,
  duration,
  durationUnit,
  slug,
}: any) => {
  return (
    <div
      className={`bg-white py-6 px-6 md:px-4 rounded-lg border border-brand-primary-border-disabled gap-2 shadow relative md:rounded flex flex-col`}
    >
      <Typography
        variant="body2"
        fontWeight="semi-bold"
        className="text-brand-text-primary text-sm md:text-sm lg:text-sm"
      >
        {`${type?.toUpperCase()} Program`}
      </Typography>
      <Link href={`/courses/${slug}`}> <Typography
        variant="h6"
        component={"h6"}
        className="text-brand-primary-icon hover:text-brand-primary-blue-main my-1 font-bold tracking-tight overflow-hidden h-[32px] truncate"
      >
        {programName}
      </Typography></Link>
      <div className="grid grid-cols-2 justify-between w-full">
        <div className="flex justify-start items-center md:items-start lg:items-center">
          <Image
            src={img}
            width={16}
            className="h-4 w-auto mr-1 md:my-1 lg:my-0"
            height={16}
            alt="image"
          />
          <div className="text-brand-text-light font-semibold text-sm">
            Duration:
            <span className="text-brand-primary-icon">
              {` ${duration} ${durationUnit}`}
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <Link href={`/courses/${slug}`}>
            <Button
              element="div"
              className="w-28 text-sm flex justify-center"
              variant="contained"
              size="extrasmall"
            >
              {`Explore Now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default GenericCourseCard;
