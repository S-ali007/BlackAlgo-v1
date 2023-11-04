"use client";
import { popins } from "@/app/layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

function SimplePricing() {
  const gradientStyles = {
    backgroundImage: "linear-gradient(141deg, #001687 5.29%, #05B6FE 101.76%) ",
  };

  const [selectedOption, setSelectedOption] = useState("auto");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };




  return (
    <div className=" flex  pb-[120px] max-w-[1344px] w-full justify-center ">
      {/* gradient-div */}
      <div className=" max-w-[648px] w-full flex justify-center ">
        <div className="max-w-[1081px] w-full absolute">
          <div
            className="mt-[-290px] mx-auto max-w-[270px] w-full max-h-[1152px] min-h-[1152px] h-full rotate-[75deg] ml-[300px] blur-[94.5px] "
            style={gradientStyles}
          ></div>
        </div>

        {/* black-div  */}
        <div className="  h-max max-w-[648px] w-full bg-[#15161B] z-20  px-[42px] pt-[42px] pb-[40px] rounded-[24px]  flex flex-col   items-center gap-[40px]">
          <div className="flex gap-[1px] justify-center items-center  max-w-[564px] w-full bg-[#0404053D] rounded-[12px] p-[2px] ">
            
            <div className={`${
                selectedOption == "auto" ? "bg-[#1D1E24]" : "bg-transparent"
              }  } max-w-[282px] w-full  justify-center text-[#fff] py-[5px] flex  bg-[#1D1E24] rounded-[10px] cursor-pointer `} onClick={() => handleOptionClick("auto")}>
              {" "}
              <div className="max-w-[107px] w-full text-[14px] text-[#fff] font-[600] leading-[23px]  ">
                Funds{"<"}$10,000
              </div>
            </div>
            <div
              className={`${selectedOption == "manual" ? "bg-[#1D1E24]": "bg-transparent"} max-w-[282px] w-full  justify-center text-[#fff] flex py-[5px] rounded-[10px]  cursor-pointer `}
              onClick={() => handleOptionClick("manual")}
          
            >
              {" "}
              <div className="max-w-[104px] w-full text-[14px] text-[#fff] font-[600] leading-[23px] ">
                Funds{`>`}$10,000
              </div>
            </div>
          </div>
          {selectedOption === "auto" ?(<div className="max-w-[344px] w-full flex flex-col justify-center items-center ">
            <div className="max-w-[344px] w-full flex justify-center text-[14px] font-[500] text-[#E0E0FFCC] ">
              Price
            </div>
            <div
              className={`${popins.className} max-w-[166px] w-full text-[30px] text-[#fff] font-[600] leading-[36px] tracking-[-1px]`}
            >
              $99/month
            </div>
          </div>):(<div className="max-w-[344px] w-full flex flex-col justify-center items-center ">
            <div className="max-w-[344px] w-full flex justify-center text-[14px] font-[500] text-[#E0E0FFCC] ">
              Price
            </div>
            <div
              className={`${popins.className} max-w-[166px] w-full text-[30px] text-[#fff] font-[600] leading-[36px] tracking-[-1px]`}
            >
              $199/month
            </div>
          </div>)}
          {/* button */}
         <Button text={"Get Started Now"} extraClasses={"max-w-[568px] w-full bg-gradient-to-r from-[#00BBFF] to-[#4579F5] "}  href={"/login"}/>
        </div>
      </div>
      
      {/* content-div Simple Pricing */}
      <div className="flex flex-col gap-[48px] h-max ml-[56px] max-w-[390px] w-full justify-center z-20">
        <div
          className={`${popins.className} max-w-[333px] text-[#fff] w-full text-[48px] font-[600] leading-[48px] tracking-[-2px]`}
        >
          Simple Pricing
        </div>
        <div className="text-[16px] font-[500] leading-[28px] max-w-[279px] w-full text-[#E0E0FFCC]">
          1 plan with everything included. No hidden fees
        </div>
      </div>
    </div>
  );
}

export default SimplePricing;
