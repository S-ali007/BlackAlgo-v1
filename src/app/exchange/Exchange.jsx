"use client"
import BackBtn from "@/components/BackBtnComp/BackBtn";
import Button from "@/components/Button/Button";
import { useState } from "react";

function Exchange() {
  const [selectedOption, setSelectedOption] = useState("auto");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="max-w-[1320px] w-full  mt-[32px]   mx-auto pb-[316px]  ">
      <BackBtn text={"Choose Exchanges"} href={"/strategy"} />
      <div className="w-full flex gap-[24px] mt-[24px]">
        <div className={`${ selectedOption == "auto" ? "bg-[#00BBFF0F] border-[#00BBFF]" : "bg-[#E0E0FF08]  border-transparent"} max-w-[648px]  w-full  flex justify-between p-[20px] rounded-[12px] border-[2px]  `} onClick={() => handleOptionClick("auto")}>
          <div className="max-w-[118px] w-full flex  gap-[24px] items-center ">
            <div className="max-w-[32px] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0293 13.9575L16.0009 8.98618L20.9751 13.9602L23.8678 11.0674L16.0009 3.2002L8.13654 11.0647L11.0293 13.9575ZM6.09357 13.107L8.98631 15.9997L6.09343 18.8926L3.20068 15.9999L6.09357 13.107ZM16.0012 23.0142L11.0297 18.0429L8.13263 20.9318L8.13667 20.9359L16.0012 28.8002L23.8682 20.9332L23.8696 20.9316L20.9752 18.0404L16.0012 23.0142ZM28.8005 16.0011L25.9076 18.894L23.0148 16.0013L25.9077 13.1084L28.8005 16.0011ZM18.9346 15.9987H18.9334L18.9361 16.0001L18.9346 16.0017L15.9992 18.9372L13.0664 16.0043L13.0623 16.0001L13.0664 15.9961L13.5805 15.4819L13.8296 15.2326H13.8298L15.9992 13.0632L18.9346 15.9987Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="max-w-[68px] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
              Binance
            </div>
          </div>
          <div className="max-w-[24px] w-full">
            <input
              type="radio"
              className=" bg-[black] w-full h-full border-[#00A3FF] outline-[red]"
            />
          </div>
        </div>
        {/* Biannce US */}
        <div className={`${selectedOption == "manual" ? "bg-[#00BBFF0F] border-[#00BBFF]" : "bg-[#E0E0FF08] border-transparent "} max-w-[648px] w-full  flex justify-between p-[20px] rounded-[12px] border-[2px] `} onClick={() => handleOptionClick("manual")}>
          <div className="max-w-[158px] w-full flex  gap-[24px] items-center ">
            <div className="max-w-[32px] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0293 13.9575L16.0009 8.98618L20.9751 13.9602L23.8678 11.0674L16.0009 3.2002L8.13654 11.0647L11.0293 13.9575ZM6.09357 13.107L8.98631 15.9997L6.09343 18.8926L3.20068 15.9999L6.09357 13.107ZM16.0012 23.0142L11.0297 18.0429L8.13263 20.9318L8.13667 20.9359L16.0012 28.8002L23.8682 20.9332L23.8696 20.9316L20.9752 18.0404L16.0012 23.0142ZM28.8005 16.0011L25.9076 18.894L23.0148 16.0013L25.9077 13.1084L28.8005 16.0011ZM18.9346 15.9987H18.9334L18.9361 16.0001L18.9346 16.0017L15.9992 18.9372L13.0664 16.0043L13.0623 16.0001L13.0664 15.9961L13.5805 15.4819L13.8296 15.2326H13.8298L15.9992 13.0632L18.9346 15.9987Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="max-w-[95px] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
              Binance US
            </div>
          </div>
          <div className="max-w-[24px] w-full">
            <input
              type="radio"
              className=" bg-[black] w-full h-full border-[#00A3FF] outline-[red]"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end mt-[24px]">
        <div className="max-w-[124px] w-full ">
        <Button
          href={"/futures"}
          text={"Continue"}
          
          extraClasses={
            "max-w-[124px] w-full  bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shadow-3xl"
          }
        /></div>
      </div>
    </div>
  );
}

export default Exchange;
