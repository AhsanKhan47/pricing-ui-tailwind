import React from "react";

export default function Header() {
  return (
    <header className="   text-white  text-left h-[270px] bg-blue-500  md:h-[415px] ">
      <div className="w-[80%] p-6 md:w-full md:text-center ">
        <h1 className="text-[24px] mb-4 font-bold md:text-[48px]  md:pt-6 ">
          Let’s get started with our perfect plans
        </h1>
        <h3 className="text-[16px] font-semibold  md:text-[26px]">
          Plans that are carefully crafted to suit your business.
        </h3>
      </div>
    </header>
  );
}
