import Image from "next/image";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import Link from "next/link";
import img from "../../../../../public/images/clock.svg";
const DemandedCoursesCard = ({
  width,
  logo,
  programName,
  duration,
  durationUnit,
  totalUsers,
  slug,
  alt,
  brochure,
}: any) => {
  return (
    <>
      <div
        className={`bg-white p-4 mx-2 rounded-lg border border-brand-primary-border-disabled gap-2 shadow-md relative md:rounded`}
      >
        <div className="image-container h-12 w-full">
       {logo &&   <Image
            src={logo}
            width={100}
            height={100}
            alt={alt ?? 'logo'}
            className="h-full w-auto"
          />}
        </div>

       <div className="flex flex-col items-stretch">
       <Link href={`${slug}`}><Typography
            variant="body1"
            component={"div"}
            className="text-brand-primary-icon mt-2 hover:text-brand-primary-blue-main mb-2 md:mt-4 font-semibold tracking-tight  text-2xl md:text-xl lg:text-2xl min-h-[60px]"
          >
            {programName}
          </Typography></Link>
          <div className="flex justify-between items-center w-full mb-3 ">
            {/** Duration Container */}
            <div className="flex items-center gap-1">
              <Image
                src={img}
                width={16}
                className="h-4 w-4"
                height={16}
                alt="image"
              />
              <Typography
                variant="body2"
                component={"span"}
                className="text-brand-text-title font-normal text-sm md:text-sm lg:text-sm"
              >
                {`Duration: ${duration} ${durationUnit}`}
              </Typography>
            </div>
            {/** Duration Container End */}
            {/** User Container */}
            <div className="flex items-center gap-1">
              <Image
                src="/images/HomePage/multipleusers.svg"
                alt="users"
                width={16}
                height={16}
                className="w-auto h-5"
              />
              <Typography
                variant="body2"
                component={"span"}
                className=" text-brand-text-title font-normal tracking-tight text-sm md:text-sm lg:text-sm"
              >
                {`Enrolled: ${totalUsers}`}
              </Typography>
            </div>
            {/** Duration Container End */}
          </div>
          <div className="w-full  grid grid-cols-2 gap-4">
            <a
              href={`${globalThis.window?.location?.href ?? '#'}?brochure=true&downloadFile=${brochure ?? '#'}&fileName=${programName ?? '#'}-brochure`}
            >
              <Button
                variant="outlined"
                className="w-full flex justify-center text-sm"
                color="tertiary"
                element="div"
                size="extrasmall"
              >
                {`Get Brochure`}
              </Button>
            </a>
            <Link href={`${slug}`}>
              <Button
                element="div"
                variant="contained"
                className="w-full text-sm flex justify-center"
                size="extrasmall"
              >
                {`Explore Now`}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default DemandedCoursesCard;
