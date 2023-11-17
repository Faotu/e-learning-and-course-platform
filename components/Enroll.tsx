import React from "react";
import Image from "next/image";
import Button from "./Button";

const Enroll = () => {
  return (
    <div className="flex flex-col-2 bg-white h-screen w-screen sm:h-screen sm:w-screen pt-10">
      <div
        className="
        bg-purple-900
        pt-5
        ml-8
        pl-10
       h-1/2
        pr-10
        hidden 
        sm:inline"
      >
        <Image
          className="
        rounded-full
       
        mr-5
        ml-5
        
        "
          src="/images/chris.png"
          alt="chris background image"
          width={500}
          height={300}
        />
      </div>
      <div className="pl-10 pr-20 justify-center">
        <h1 className="text-font-bold text-3xl pl-0 pr-2 font-bold justify-evenly">
          After Earning $90,000 In 4 Years, This Local Man Is Giving Away His
          Secrets To Help You Get Rich Clients That Will Pay You 4 Times Higher
          Than Your Current Salary
        </h1>
        <p className="pt-10">
          &rarr; No need to relocate or move to big cities like Lagos
        </p>
        <p className="pt-10">&rarr; No human connections needed to start</p>
        <p className="pt-10">&rarr; Can start with Your Phone</p>
        <p className="pt-10">&rarr; Learn New Skills, -- Optional​</p>
        <h2 className="pt-10">
          You will get your money back 100% if you feel it was a waste of time
          and you didn’t get what was promised
        </h2>
        <div className="pt-5">
          <Button className="text-white "> Enroll Now! </Button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
