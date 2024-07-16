import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/common/atoms/Button";
import image from "../../../../../../public/images/Layer 2.png";
import Typography from "@/app/common/atoms/Typography";
const Thankyou = () => {
  return (
    <div className="xl:w-[940px] flex flex-col justify-center my-8 items-center mx-auto 2xl:w-full">
      <Image src={image} alt="thankyou" width={100} height={100} />
      <Typography
        variant="h3"
        component={"h3"}
        fontWeight="bold"
        className="my-4"
      >
        Thank you, we will contact you soon.
      </Typography>
      <Typography
        variant="body1"
        fontWeight="semi-bold"
        className="my-4"
      >
        We are curating a list of best universities and courses for you.
      </Typography>
      {/* <Link href={"/"}>
        <Button size="small" variant="outlined" color="primary">
          Continue
        </Button>
      </Link> */}
      <Link href={"/"}>
        <span className="my-4 text-brand-primary-blue-main hover:underline text-lg">Go back to Home</span>
      </Link>
    </div>
  );
};

export default Thankyou;
