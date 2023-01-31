import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/Ti";
import style from "../styles/page.module.css";
export default function Cards() {
  return (
    <section className="mt-[-80px] lg:flex lg:flex-row mlg:flex-wrap md:mt-[-130px]">
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
            <TiTick className="mt-1 mr-2 bg-green-500 text-white rounded-full" />
            <p className="">Access all the free content</p>
          </li>
          <li className=" flex flex-row justify-center m-auto text-center ">
            <TiTick className="mt-1 mr-2  bg-green-500 text-white rounded-full" />
            <p className="">Access all the free content</p>
          </li>
        </ul>

        <button className="w-[50%] font-semibold  m-auto text-white text-[16px] lg:text-lg px-6 py-1 rounded-2xl bg-[#674FFF] hover:bg-[#ffffff] hover:text-[#674FFF] transition drop-shadow-lg ">
          Join Now
        </button>
      </div>

      {/* Card 2 */}
      <div className=" w-[280px] h-[304px] lg:w-[320px] lg:h-[404px]  bg-white mb-6 flex flex-wrap justify-center flex-col align-middle text-center m-auto shadow-2xl rounded-2xl">
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
            <TiTick className="mt-1 mr-2 bg-green-500 text-white rounded-full" />
            <p className="">Access all the free content</p>
          </li>
          <li className=" flex flex-row justify-center m-auto text-center ">
            <TiTick className="mt-1 mr-2  bg-green-500 text-white rounded-full" />
            <p className="">Access all the free content</p>
          </li>
        </ul>

        <button className="w-[50%] font-semibold  m-auto text-white text-[16px] lg:text-lg px-6 py-1 rounded-2xl bg-[#674FFF] hover:bg-[#ffffff] hover:text-[#674FFF] transition drop-shadow-lg ">
          Join Now
        </button>
      </div>

      {/* card 3 */}

      <div className=" w-[280px] h-[304px] lg:w-[320px] lg:h-[404px]  bg-white mb-6 flex flex-wrap justify-center flex-col align-middle text-center m-auto shadow-2xl rounded-2xl">
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
            <TiTick className="mt-1 mr-2 bg-green-500 text-white rounded-full" />
            <p className="">Access all the free content</p>
          </li>
          <li className=" flex flex-row justify-center m-auto text-center ">
            <TiTick className="mt-1 mr-2  bg-green-500 text-white rounded-full" />
            <p className="">Access all the free content</p>
          </li>
        </ul>

        <button className="w-[50%] font-semibold  m-auto text-white text-[16px] lg:text-lg px-6 py-1 rounded-2xl bg-[#674FFF] hover:bg-[#ffffff] hover:text-[#674FFF] transition drop-shadow-lg ">
          Join Now
        </button>
      </div>
    </section>
  );
}
