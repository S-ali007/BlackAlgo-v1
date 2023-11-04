"use client";
import BackBtn from "@/components/BackBtnComp/BackBtn";
import Button from "@/components/Button/Button";
import Link from "next/link";
import React, { useState } from "react";

function Plan() {
  const gradientStyle = {
    backgroundImage: "linear-gradient(141deg, #001687 5.29%, #05B6FE 101.76%)",
  };

  const [selectedOption, setSelectedOption] = useState("auto");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="max-w-[1320px] w-full  mt-[32px]   mx-auto pb-[316px]  ">
      <BackBtn text={"Connect API"} href={"/payment"} />

      <div className="w-full mt-[24px] ">
        <div className="flex gap-[1px] justify-center items-center mt-[24px] w-full bg-[#040405A3] rounded-[22px] p-[2px] ">
          {/* Auto-div */}
          <div
            className={`${
              selectedOption == "auto" ? "bg-[#1D1E24]" : "bg-transparent"
            }    cursor-pointer max-w-[658px] w-full justify-center text-[#fff] items-center gap-[16px] flex rounded-[22px] py-[22px]`}
            onClick={() => handleOptionClick("auto")}
          >
            {" "}
            <div className="max-w-[126px] w-full text-[14px] text-[#fff] text-center font-[600] leading-[23px]  ">
              Auto-Connect
            </div>
          </div>
          {/* Manual-div */}
          <div
            className={`${
              selectedOption === "manual" ? "bg-[#1D1E24]" : "bg-transparent"
            } max-w-[658px] w-full cursor-pointer justify-center text-[#fff] items-center gap-[16px] flex rounded-[22px] py-[22px]`}
            onClick={() => handleOptionClick("manual")}
          >
            {" "}
            <div className="max-w-[126px] w-full text-[14px] text-[#fff] text-center font-[600] leading-[23px]  ">
              Manual
            </div>
          </div>
        </div>

        {selectedOption === "auto" ? (
          <div className="max-w-[1320px] w-full mt-[24px] bg-[#15161B] rounded-[24px] flex justify-center py-[40px] ">
            <div className="max-w-[373px] w-full flex flex-col gap-[24px]  ">
              {/* image */}
              <div className=" w-full  flex    justify-center items-center  ">
                <div className="max-w-[210px] w-full absolute">
                  <div
                    className="max-w-[80px] w-full h-[195px] blur-[69.8px] transform rotate-[74deg] ml-[95px] mt-[16px]"
                    style={gradientStyle}
                  ></div>
                </div>
                <div className="max-w-[164px]  w-full  z-10 ">
                  <img
                    className="   "
                    src="/connect-api-assets/connect-api-asset.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="max-w-[373px] w-full flex flex-col justify-center items-center gap-[12px]">
                <div className="max-w-[260px] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
                  Auto-Connect Binance account
                </div>
                <div className="max-w-[373px] w-full text-[#E0E0FF99] text-[13px] font-[500] text-center leading-[16px]">
                  Connect to your binance account automatically. Binance US
                  users can only connect via API Key
                </div>
              </div>
              {/* button */}
              <div className=" w-full   justify-center flex ">
                <Button
                  href={"/futures"}
                  text={"Login With Binance Account"}
                  extraClasses={
                    "max-w-[286px] shadow-3xl w-full text-[16px] font-[600] bg-gradient-to-r from-[#00BBFF] to-[#4579F5]"
                  }
                />
              </div>
              {/*  */}
              <div className="max-w-[373px] w-full flex  justify-center items-center">
                <span className="text-[14px] text-[#E0E0FF99] max-w-[252px] w-full  leading-[24px] font-[500]">
                  Don’t have an account on Binance?
                </span>
                <Link
                  href={"/signup"}
                  className="text-[#00BBFF] text-[14px] font-[600] leading-[24px] max-w-[83px] w-full ml-[4px]"
                >
                  Create now
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[1320px] w-full mt-[24px] bg-[#15161B] rounded-[24px] flex gap-[120px]  p-[40px] ">
            <div className="max-w-[880px]  w-full h-[4px] bg-[#E0E0FF0A] ml-[37px] absolute mt-[20px]"></div>
            <div className="relative">
              <div className="max-w-[396px] w-full ">
                <div className="max-w-[40px] w-full border-[4px] border-[#15161B] bg-[#00BBFF] my-[2px] rounded-[36px]">
                  <div className="max-w-[36px] w-full  text-[20px] font-[800] leading-[32px] flex justify-center items-center text-[#fff]">
                    1
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[24px] mt-[26px]">
                {/* text */}
                <div className="max-w-[396px] w-full flex flex-col   gap-[4px]">
                  <div className="max-w-[260px] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
                    Open Binance account
                  </div>
                  <div className="max-w-[307px] w-full text-[#E0E0FF99] text-[13px] font-[500]  leading-[16px]">
                    Go to Binance Futures and click Open account
                  </div>
                </div>
                {/* button */}
                <div className="w-full">
                  <Button
                    href={"/futures"}
                    text={"Go to Binance Account"}
                    extraClasses={
                      " shadow-3xl max-w-[220px] py-[8px] rounded-[12px] w-full  text-[16px] font-[600] bg-gradient-to-r from-[#00BBFF] to-[#4579F5]"
                    }
                  />
                </div>
                {/* last */}
                <div className="max-w-[252px] w-full   ">
                  <span className="text-[14px] text-[#E0E0FF99] max-w-[252px] w-full  leading-[24px] font-[500]">
                    Don’t have an account on Binance?
                  </span>
                  <Link
                    href={"/signup"}
                    className="text-[#00BBFF] text-[14px] font-[600] leading-[24px] max-w-[83px] w-full "
                  >
                    Create now
                  </Link>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="relative">
              <div className="max-w-[396px] w-full ">
                <div className="max-w-[40px] w-full border-[4px] border-[#15161B] bg-[#00BBFF] my-[2px] rounded-[36px]">
                  <div className="max-w-[36px] w-full  text-[20px] font-[800] leading-[32px] flex justify-center items-center text-[#fff]">
                    2
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[24px] mt-[26px]">
                {/* text */}
                <div className="max-w-[396px] w-full flex flex-col   gap-[4px]">
                  <div className="max-w-[260px] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
                    Create new API Key
                  </div>
                  <div className="max-w-[307px] w-full text-[#E0E0FF99] text-[13px] font-[500]  leading-[16px]">
                    Go to API Management on Binance and create API with the
                    following restrictions:
                  </div>
                </div>
                {/* text-2 */}
                <div className="max-w-[234px] w-full text-[#E0E0FF99] text-[13px] font-[500]  leading-[16px]">
                  - Enable Futures <br />
                  - Enable Spot & Margin Trading <br />- Redtrict access to
                  trusted IPs only
                </div>
                {/* last */}
                <div className="max-w-[233px]  w-full flex flex-col gap-[12px]   ">
                  <div className="max-w-[233px] w-full flex   justify-between py-[8px] pl-[12px] pr-[8px] rounded-[12px] bg-[#E0E0FF08]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="max-w-[95px] w-full outline-none text-[#fff] text-[14px] bg-transparent font-[500] leading-[20px]"
                    />
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.6068 18.392C13.0456 18.392 13.8138 17.6173 13.8138 16.172V14.974H14.888C16.3268 14.974 17.0951 14.1928 17.0951 12.7475V7.70841C17.0951 6.80347 16.8997 6.22404 16.3659 5.67065L13.1497 2.39591C12.6354 1.87508 12.0234 1.66675 11.2227 1.66675H8.8138C7.38151 1.66675 6.61328 2.44149 6.61328 3.8868V5.09123H5.53906C4.10026 5.09123 3.33203 5.86597 3.33203 7.31128V16.172C3.33203 17.6238 4.10026 18.392 5.53906 18.392H11.6068ZM14.7285 13.4832H13.8171V11.2306C13.8171 10.3257 13.6934 9.87643 13.127 9.30352L9.64388 5.77487C9.17513 5.2931 8.75195 5.13034 8.10742 5.09779V4.02357C8.10742 3.46367 8.38737 3.15768 8.97982 3.15768H11.5645V6.06133C11.5645 6.91419 12.0462 7.38945 12.8926 7.38945H15.6074V12.6173C15.6074 13.1772 15.321 13.4832 14.7285 13.4832ZM13.0586 6.21107H15.2201L12.7461 3.70456V5.89857C12.7461 6.11341 12.8372 6.21107 13.0586 6.21107ZM11.4473 16.9077H5.69857C5.10612 16.9077 4.82617 16.6017 4.82617 16.0353V7.44802C4.82617 6.88813 5.10612 6.58214 5.69857 6.58214H7.57357V9.94151C7.57357 10.9832 8.08138 11.478 9.11003 11.478H12.3262V16.0353C12.3262 16.6017 12.0397 16.9077 11.4473 16.9077ZM9.23698 10.2215H12.1732L8.83984 6.83604V9.81782C8.83984 10.0978 8.96354 10.2215 9.23698 10.2215Z"
                          fill="#E0E0FF"
                          fill-opacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="max-w-[233px] w-full flex   justify-between py-[8px] pl-[12px] pr-[8px] rounded-[12px] bg-[#E0E0FF08]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="max-w-[95px] w-full outline-none text-[#fff] text-[14px] bg-transparent font-[500] leading-[20px]"
                    />
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.6068 18.392C13.0456 18.392 13.8138 17.6173 13.8138 16.172V14.974H14.888C16.3268 14.974 17.0951 14.1928 17.0951 12.7475V7.70841C17.0951 6.80347 16.8997 6.22404 16.3659 5.67065L13.1497 2.39591C12.6354 1.87508 12.0234 1.66675 11.2227 1.66675H8.8138C7.38151 1.66675 6.61328 2.44149 6.61328 3.8868V5.09123H5.53906C4.10026 5.09123 3.33203 5.86597 3.33203 7.31128V16.172C3.33203 17.6238 4.10026 18.392 5.53906 18.392H11.6068ZM14.7285 13.4832H13.8171V11.2306C13.8171 10.3257 13.6934 9.87643 13.127 9.30352L9.64388 5.77487C9.17513 5.2931 8.75195 5.13034 8.10742 5.09779V4.02357C8.10742 3.46367 8.38737 3.15768 8.97982 3.15768H11.5645V6.06133C11.5645 6.91419 12.0462 7.38945 12.8926 7.38945H15.6074V12.6173C15.6074 13.1772 15.321 13.4832 14.7285 13.4832ZM13.0586 6.21107H15.2201L12.7461 3.70456V5.89857C12.7461 6.11341 12.8372 6.21107 13.0586 6.21107ZM11.4473 16.9077H5.69857C5.10612 16.9077 4.82617 16.6017 4.82617 16.0353V7.44802C4.82617 6.88813 5.10612 6.58214 5.69857 6.58214H7.57357V9.94151C7.57357 10.9832 8.08138 11.478 9.11003 11.478H12.3262V16.0353C12.3262 16.6017 12.0397 16.9077 11.4473 16.9077ZM9.23698 10.2215H12.1732L8.83984 6.83604V9.81782C8.83984 10.0978 8.96354 10.2215 9.23698 10.2215Z"
                          fill="#E0E0FF"
                          fill-opacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="max-w-[233px] w-full flex   justify-between py-[8px] pl-[12px] pr-[8px] rounded-[12px] bg-[#E0E0FF08]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="max-w-[95px] w-full outline-none text-[#fff] text-[14px] bg-transparent font-[500] leading-[20px]"
                    />
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.6068 18.392C13.0456 18.392 13.8138 17.6173 13.8138 16.172V14.974H14.888C16.3268 14.974 17.0951 14.1928 17.0951 12.7475V7.70841C17.0951 6.80347 16.8997 6.22404 16.3659 5.67065L13.1497 2.39591C12.6354 1.87508 12.0234 1.66675 11.2227 1.66675H8.8138C7.38151 1.66675 6.61328 2.44149 6.61328 3.8868V5.09123H5.53906C4.10026 5.09123 3.33203 5.86597 3.33203 7.31128V16.172C3.33203 17.6238 4.10026 18.392 5.53906 18.392H11.6068ZM14.7285 13.4832H13.8171V11.2306C13.8171 10.3257 13.6934 9.87643 13.127 9.30352L9.64388 5.77487C9.17513 5.2931 8.75195 5.13034 8.10742 5.09779V4.02357C8.10742 3.46367 8.38737 3.15768 8.97982 3.15768H11.5645V6.06133C11.5645 6.91419 12.0462 7.38945 12.8926 7.38945H15.6074V12.6173C15.6074 13.1772 15.321 13.4832 14.7285 13.4832ZM13.0586 6.21107H15.2201L12.7461 3.70456V5.89857C12.7461 6.11341 12.8372 6.21107 13.0586 6.21107ZM11.4473 16.9077H5.69857C5.10612 16.9077 4.82617 16.6017 4.82617 16.0353V7.44802C4.82617 6.88813 5.10612 6.58214 5.69857 6.58214H7.57357V9.94151C7.57357 10.9832 8.08138 11.478 9.11003 11.478H12.3262V16.0353C12.3262 16.6017 12.0397 16.9077 11.4473 16.9077ZM9.23698 10.2215H12.1732L8.83984 6.83604V9.81782C8.83984 10.0978 8.96354 10.2215 9.23698 10.2215Z"
                          fill="#E0E0FF"
                          fill-opacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="relative max-w-[396px] w-full">
              <div className="max-w-[396px] w-full ">
                <div className="max-w-[40px] w-full border-[4px] border-[#15161B] bg-[#00BBFF] my-[2px] rounded-[36px]">
                  <div className="max-w-[36px] w-full  text-[20px] font-[800] leading-[32px] flex justify-center items-center text-[#fff]">
                      3
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[24px] mt-[16px]">
                {/* text */}
                <div className="max-w-[396px] w-full flex flex-col   gap-[4px]">
                  <div className="max-w-[260px] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
                  Fill in the fields below
                  </div>
                </div>
               
                {/* last */}
                <div className="max-w-[233px]  w-full flex flex-col gap-[12px]   ">
                  <div className="max-w-[233px] w-full flex   justify-between py-[8px] pl-[12px] pr-[8px] rounded-[12px] bg-[#E0E0FF08]">
                    <input
                      type="text"
                      placeholder="API Key"
                      name=""
                      id=""
                      className="max-w-[233px] w-full outline-none text-[#fff] text-[14px] bg-transparent font-[500] leading-[20px]"
                    />
                
                  </div>
                 
                  <div className="max-w-[233px] w-full flex   justify-between py-[8px] pl-[12px] pr-[8px] rounded-[12px] bg-[#E0E0FF08]">
                    <input
                      type="text"
                      placeholder="Secret Key"
                      name=""
                      id=""
                      className="max-w-[233px] w-full outline-none text-[#fff] text-[14px] bg-transparent font-[500] leading-[20px]"
                    />
                    <div>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[24px]  max-w-[197px] w-full"><Link  href={"/exchange"} className=" underline  text-[14px] font-[600] text-[#00BBFF] leading-[24px] ">
              How to connect to Binance
              </Link></div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Plan;
