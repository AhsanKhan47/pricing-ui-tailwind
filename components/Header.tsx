import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="   text-white  text-left h-[360px] bg-blue-500  md:h-[415px] ">
      <Link
        href="https://www.figma.com/file/hF99eQvissfBaW5frMJEPo/Pricing-section?node-id=0%3A1&t=Lyw8r1Kajamng3IF-1"
        target="_blank"
      >
        <button className="float-right text-sm md:text-lg m-2 px-3 py-2 border-2 border-white hover:bg-white hover:text-blue-700 transition-all rounded-md">
          View figma design
        </button>
      </Link>

      <div className="w-[80%] p-8 md:w-full md:text-center ">
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
