import Typography from "../../atoms/Typography";
import Link from "next/link";
import { Navlink } from "../../sections/Courses/Banner";

interface BreadCrumbsProps {
  data: Navlink[];
  classname?: string;
}
const BreadCrumbs = ({ data, classname }: BreadCrumbsProps) => {
  return (
    <nav className="flex mt-3 font-bold" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-2">
        <li className="inline-flex items-center">
          <Link href={"/"}>
            <div
              className={`${classname} text-xs lg:text-sm md:ml-1 cursor-pointer`}
            >
              Home
            </div>
          </Link>
        </li>
        {data?.map((breadcrumb) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <svg
                className={`${classname} w-3 h-3 mr-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link href={breadcrumb.url}>
                <div
                  className={` ${classname} text-xs lg:text-sm cursor-pointer`}
                >
                  {breadcrumb.name}
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
