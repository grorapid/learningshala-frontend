import Typography from "../../atoms/Typography";
import eye from "../../../../../public/images/eye.svg";
import Image from "next/image";

interface Views {
  views: number;
}

const Views = ({ views }: Views) => {
  return (
    <div className="flex items-center">
      <Image
        className="h-[13px] w-[13px] md:h-[18px] md:w-[18px] lg:h-[24px] lg:w-[24px]"
        src={eye}
        alt="eye"
      />
      <Typography variant="body2" className="text-brand-primary-icon pl-2">
        {views?.toString().replace(/(\d)(?=(\d{2})+(\d)(?!\d))/g, '$1,')} recent views
      </Typography>
    </div>
  );
};

export default Views;
