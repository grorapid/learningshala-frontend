
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";


const Skills = ({data}: any) => {
  console.log(data,"skill")
  return (
    
    <div className="my-4 md:my-8">
      <div className="pb-4 md:pb-7">
        <Typography variant="h4" className="font-bold text-brand-text-title">
          The skills you will gain
        </Typography>
      </div>
      <div className="flex flex-wrap gap-4">
        {data && data[0]?.skills?.map((item: any) => (
          <div key={item.key} className="font-bold px-3 py-1 md:px-4 md:py-2 bg-brand-background-blue text-brand-primary-blue-main border border-[#DDE7FF] rounded-md">
            {item?.value}
          </div>
        ))}
      </div>
    </div>
    
  )
};

export default Skills;
