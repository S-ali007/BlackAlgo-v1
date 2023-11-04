"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Cookies } from "next";
import { popins } from "../layout";
import Link from "next/link";
import Button from "@/components/Button/Button";

const SignUp = () => {
  const gradientStyle = {
    backgroundImage: "linear-gradient(141deg, #000 5.29%, #6CD3FF 101.76%)",
  };
  const gradientdiv1 = {
    backgroundImage: "linear-gradient(141deg, #001687 5.29%, #05B6FE 101.76%)",
  };
  const gradientdiv2 = {
    backgroundImage:
      "linear-gradient(90deg, #0E0F12 38.85%, rgba(14, 15, 18, 0.83) 72.19%, rgba(14, 15, 18, 0.00) 100%)",
  };
  return (
    <div className="max-w-[1680px] w-full flex mt-[184px] ">
      {/* image-section */}
      <div className="max-w-[867px] w-full absolute z-20">
        <div
          className="max-w-[343px] w-full rotate-[39.475deg] mt-[-143px] ml-[155px] blur-[94.5px] h-[915px] "
          style={gradientdiv1}
        ></div>
      </div>

      <div className="max-w-[1003px] w-full flex overflow-hidden  ">
        <img src="/wave_signup-asset.svg" alt="" className="absolute z-10" />

        <div className="max-w-[736px] w-full absolute mt-[-156px] ml-[46px] z-20">
          <img src="/cartoon_Signup-asset.svg" alt="" className="mt-[-16px] " />
        </div>
        <div
          className="max-w-[140px] min-h-[915px] h-full w-full rotate-[39.47deg] mt-[-164px] ml-[87px] blur-[2.5px] opacity-[0.12]  z-10 "
          style={gradientStyle}
        ></div>
        <div className="max-w-[749px] w-full ml-[-147px] mt-[-72px]  z-10 ">
          <div
            className="max-w-[204px] w-full h-[915px] rotate-[39.475deg]  blur-[2.5px] opacity-[0.4]  "
            style={gradientdiv1}
          ></div>
        </div>
        <div className="max-w-[696px] w-full  ">
          <div
            className="max-w-[140px] w-full h-[915px] rotate-[39.475deg] blur-[2.5px] opacity-[0.4]  ml-[-179px] mt-[-38px]  "
            style={gradientdiv1}
          ></div>
        </div>
        <div className="max-w-[689px] w-full  ">
          <div
            className="max-w-[140.9px] w-full h-[915px] rotate-[39.475deg] blur-[2.5px] opacity-[0.12]  ml-[-181px] mt-[-43px]  "
            style={gradientStyle}
          ></div>
        </div>
        <div className="max-w-[665px] w-full ">
          <div
            className="max-w-[98.9px] w-full h-[915px] rotate-[39.475deg]  ml-[-328px] mt-[40px]  blur-[2.5px] opacity-[0.12]   "
            style={gradientStyle}
          ></div>
        </div>
      </div>
     
      {/* div-2 */}
     
    </div>
  );
};

export default SignUp;
