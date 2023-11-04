"use client"
import BackBtn from "@/components/BackBtnComp/BackBtn"
import Button from "@/components/Button/Button"
import { useState } from "react";


function Plan() {
  const [selectedOption, setSelectedOption] = useState("auto");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="max-w-[1320px] w-full  mt-[32px]   mx-auto pb-[316px]  ">
      <BackBtn text={"Choose Plan"} href={"/futures"} />
      
      <div className="w-full flex gap-[24px] mt-[24px]">
        <div className={`${ selectedOption == "auto" ? "bg-[#00BBFF0F] border-[#00BBFF]" : "bg-[#E0E0FF08]  border-transparent"} max-w-[648px] bg-[#E0E0FF08]  w-full  flex justify-between p-[24px] rounded-[12px] border-[2px] `} onClick={() => handleOptionClick("auto")}>
          <div className="max-w-[136px] w-full   ">
            <div className="text-[14px] font-[700] leading-[20px] max-w-[70px] w-full text-[#fff]">
            $0K-$10K
            </div>
            <div className="max-w-[136px] w-full text-[13px] font-[500] leading-[16px] text-[#E0E0FF99]">
            Size of your portfolio
            </div>
          </div>
          <div className="max-w-[100px] w-full text-[20px] font-[700] leading-[28px] text-[#fff] flex  items-center">
          $99/month
          </div>
        </div>
        {/*Size of your portfolio */}
        <div className={`${ selectedOption == "manual" ? "bg-[#00BBFF0F] border-[#00BBFF]" : "bg-[#E0E0FF08]  border-transparent"} max-w-[648px] bg-[#E0E0FF08]  w-full  flex justify-between p-[24px] rounded-[12px] border-[2px] `} onClick={() => handleOptionClick("manual")}>
          <div className="max-w-[136px] w-full   ">
            <div className="text-[14px] font-[700] leading-[20px] max-w-[70px] w-full text-[#fff]">
            $0K-$10K
            </div>
            <div className="max-w-[136px] w-full text-[13px] font-[500] leading-[16px] text-[#E0E0FF99]">
            Size of your portfolio
            </div>
          </div>
          <div className="max-w-[125px] tracking-[-0.4px] w-full text-[20px] font-[700] leading-[28px] text-[#fff] flex  items-center">
          5%/ per year
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end mt-[24px]">
        <div className="max-w-[124px] w-full "></div>
        <Button
          href={"/payment"}
          text={"Continue"}
          extraClasses={
            "max-w-[124px] w-full  bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shadow-3xl"
          }
        />
      </div>
    </div>
  )
}

export default Plan;
