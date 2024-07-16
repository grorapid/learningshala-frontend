import Link from "next/link";
import Typography from "../../atoms/Typography";

const nav = [
    {
      id: 1,
      url: "#overview",
      name: "Overview",
    },
    {
      id: 2,
      url: "#syllabus",
      name: "Syllabus",
    },
    {
      id: 3,
      url: "#career",
      name: "Careers & jobs",
    },
    {
      id: 4,
      url: "#admission",
      name: "Admission Process",
    },
    {
      id: 5,
      url: "#instructors",
      name: "Instructors",
    },
  ];
  const Navbar = () => {
    return (
      <nav className="hidden lg:flex lg:mt-3 font-bold bg-brand-primary-blue-main">
        <div className="container mx-auto">
        <ol className="flex justify-between items-center">
          {nav?.map((link) => (
            <li key={link.id}>
              <div>
                <Link href={link.url}>
                  <Typography
                    variant="body2"
                    className={`cursor-pointer py-3 font-normal hover:text-brand-primary-disabled text-white`}
                  >
                    {link.name}
                  </Typography>
                </Link>
              </div>
            </li>
          ))}
        </ol>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
