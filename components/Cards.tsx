import React from "react";
import Image from "next/image";
import style from "../styles/page.module.css";
export default function Cards() {
  return (
    <section className="mt-[-80px] lg:flex  lg:flex-row lg:justify-around mlg:flex-wrap md:mt-[-130px]  lg:w-10/12 m-auto">
      <div className=" w-[280px] h-[304px] lg:w-[320px] lg:h-[404px]  bg-white mb-6 flex flex-wrap justify-center flex-col align-middle text-center m-auto shadow-2xl rounded-2xl">
        <img
          className={`${style.icon} m-auto`}
          src={`/starter.png`}
          alt={"starter section icon"}
        />
        <h3 className="mb-1 text-base font-semibold lg:text-xl">Starter</h3>
        <h3 className="mb-3 text-base font-medium lg:text-lg">
          <span className=" text-lg font-bold lg:text-xxl">$5/</span> permonth
        </h3>

        <ul className=" mb-6 lg:mb-12 lg:mt-6 text-base font-normal ">
          <li className="flex  justify-center row m-auto text-center  lg:mb-3">
            <Image src={`/tick.png`} height={30} width={30} alt={"tick"} />
            <p className="">Access all the free content</p>
          </li>
          <li className=" flex flex-row justify-center m-auto text-center ">
            <Image src={`/tick.png`} height={30} width={30} alt={"tick"} />
            <p className="">Access all the free content</p>
          </li>
        </ul>

        <button className="w-[50%] font-semibold  m-auto text-white text-[16px] lg:text-lg px-6 py-1 rounded-2xl bg-[#3A80F3] hover:bg-[#ffffff] hover:text-[#674FFF] transition drop-shadow-lg ">
          Join Now
        </button>
      </div>

      {/* Card 2 */}
      <div className=" w-[280px] h-[304px] lg:w-[320px] lg:h-[404px]  lg:mx-6 bg-white mb-6 flex flex-wrap justify-center flex-col align-middle text-center m-auto shadow-2xl rounded-2xl">
        <img
          className={`${style.icon} m-auto`}
          src={`/premium.png`}
          alt={"starter section icon"}
        />
        <h3 className="mb-1 text-base font-semibold lg:text-xl">premium</h3>
        <h3 className="mb-3 text-base font-medium lg:text-lg">
          <span className=" text-lg font-bold lg:text-xxl">$15/</span> permonth
        </h3>

        <ul className=" mb-6 lg:mb-12 lg:mt-6 text-base font-normal ">
          <li className="flex  justify-center row m-auto text-center  lg:mb-3">
            <Image src={`/tick.png`} height={30} width={30} alt={"tick"} />
            <p className="">Access all the free content</p>
          </li>
          <li className=" flex flex-row justify-center m-auto text-center ">
            <Image src={`/tick.png`} height={30} width={30} alt={"tick"} />
            <p className="">Access all the free content</p>
          </li>
        </ul>

        <button className="w-[50%] font-semibold  m-auto text-white text-[16px] lg:text-lg px-6 py-1 rounded-2xl bg-[#3A80F3] hover:bg-[#ffffff] hover:text-[#674FFF] transition drop-shadow-lg ">
          Join Now
        </button>
      </div>

      {/* card 3 */}

      <div className=" w-[280px] h-[305px] lg:w-[320px] lg:h-[404px]  bg-white mb-6 flex flex-wrap justify-center flex-col align-middle text-center m-auto shadow-2xl rounded-2xl">
        <img
          className={`${style.icon} m-auto`}
          src={`/Professional.png`}
          alt={"starter section icon"}
        />
        <h3 className="mb-1 text-base font-semibold lg:text-xl">
          Professional
        </h3>
        <h3 className="mb-3 text-base font-medium lg:text-lg">
          <span className=" text-lg font-bold lg:text-xxl">$45/</span> permonth
        </h3>

        <ul className=" mb-6 lg:mb-12 lg:mt-6 text-base font-normal ">
          <li className="flex  justify-center row m-auto text-center  lg:mb-3">
            <Image src={`/tick.png`} height={30} width={30} alt={"tick"} />
            <p className="">Access all the free content</p>
          </li>
          <li className=" flex flex-row justify-center m-auto text-center ">
            <Image src={`/tick.png`} height={30} width={30} alt={"tick"} />
            <p className="">Access all the Free content</p>
          </li>
        </ul>

        <button className="w-[50%] font-semibold  m-auto text-white text-[16px] lg:text-lg px-6 py-1 rounded-2xl bg-[#3A80F3] hover:bg-[#ffffff] hover:text-[#674FFF] transition drop-shadow-lg ">
          Join Now
        </button>
      </div>
    </section>
  );
}
