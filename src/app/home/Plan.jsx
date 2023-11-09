"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function navbar() {
  const [selectedOption, setSelectedOption] = useState("Solutions");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="max-w-[1872px] w-full  mt-[20px] bg-[#fff]  mx-auto  ">
      <div className="max-w-[1872px] w-full border-[#1212121a] border-[1.5px] flex   justify-between   ">
        <div className="max-w-[177.8px] w-full flex justify-center ">
          <button className="max-w-[57px] w-full pl-[15px] pr-[11px] pt-[10px] pb-[8.89px] ">
            <div className="max-w-[31px] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M7.77832 23.3345L23.3347 7.77812"
                  stroke="#121212"
                  stroke-width="1.5"
                />
                <path
                  d="M7.77832 7.77783L23.3347 23.3342"
                  stroke="#121212"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </button>

          {/* logo */}
          <Link
            href={"/"}
            className="max-w-[120px] w-full pl-[21px] pr-[11px] border-x-[#1212121a] border-x-[1.5px]   justify-center flex items-center"
          >
            <div className="max-w-[81px] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="26"
                viewBox="0 0 81 26"
                fill="none"
              >
                <path
                  d="M20.4984 20.7226C17.4249 20.7226 14.6543 20.7226 11.8912 20.7226C10.2382 20.7176 8.63234 20.1663 7.31873 19.1528C6.00512 18.1392 5.056 16.7193 4.61632 15.1097C4.15192 13.4075 4.26484 11.5973 4.93708 9.96755C5.60932 8.33777 6.80221 6.98215 8.32567 6.11671C9.77985 5.25442 11.4774 4.90727 13.1491 5.1303C14.8208 5.35334 16.3709 6.13379 17.5536 7.34789C18.7497 8.53468 19.5304 10.0828 19.7776 11.7579C20.0249 13.433 19.7251 15.1438 18.9238 16.6314C18.5983 17.2279 18.2122 17.7938 17.7202 18.5891L20.3697 18.7726L20.4984 20.7226ZM6.40286 12.8308C6.36616 13.6033 6.48366 14.3754 6.7484 15.101C7.01313 15.8267 7.41967 16.4912 7.94383 17.0549C8.46799 17.6186 9.09906 18.07 9.79947 18.3823C10.4999 18.6945 11.2553 18.8613 12.0208 18.8726C12.7863 18.8838 13.5463 18.7394 14.2554 18.448C14.9646 18.1565 15.6084 17.7239 16.1486 17.1759C16.6888 16.6279 17.1144 15.9757 17.4 15.2581C17.6856 14.5406 17.8254 13.7723 17.811 12.9991C17.8487 12.2273 17.7325 11.4557 17.4692 10.7301C17.2059 10.0046 16.8009 9.33993 16.2782 8.77563C15.7556 8.21133 15.1261 7.7589 14.4269 7.44524C13.7278 7.13157 12.9734 6.96307 12.2085 6.94974C11.4437 6.93641 10.684 7.07852 9.97456 7.36764C9.26515 7.65676 8.6205 8.08697 8.07893 8.63273C7.53735 9.17848 7.1099 9.82864 6.82198 10.5446C6.53405 11.2605 6.39152 12.0276 6.40286 12.8002V12.8308Z"
                  fill="#121212"
                />
                <path
                  d="M30.1741 20.7307C29.1495 20.7309 28.1352 20.5245 27.1907 20.1237C26.2461 19.7229 25.3902 19.1356 24.6732 18.3963C23.9562 17.6571 23.3925 16.7807 23.015 15.8185C22.6376 14.8563 22.4541 13.8277 22.4753 12.793C22.5593 10.7423 23.4316 8.80559 24.9069 7.39436C26.3821 5.98312 28.344 5.20866 30.3756 5.23554C32.4072 5.26243 34.3483 6.08855 35.7865 7.53834C37.2246 8.98813 38.0464 10.9473 38.0772 12.9995C38.0434 15.0831 37.1919 17.068 35.7099 18.5177C34.2279 19.9674 32.2368 20.7634 30.1741 20.7307ZM35.9879 12.8236C35.9925 12.0526 35.844 11.2884 35.5511 10.5764C35.2582 9.86432 34.8269 9.21886 34.2827 8.67816C33.7386 8.13746 33.0925 7.7125 32.3829 7.42844C31.6733 7.14438 30.9145 7.00698 30.1514 7.02437C29.3883 7.04177 28.6364 7.21359 27.9402 7.5297C27.244 7.8458 26.6176 8.29975 26.0981 8.86469C25.5786 9.42963 25.1766 10.0941 24.9158 10.8188C24.655 11.5434 24.5407 12.3135 24.5798 13.0836C24.5752 13.8547 24.7237 14.6188 25.0166 15.3308C25.3095 16.0429 25.7407 16.6883 26.2849 17.229C26.8291 17.7697 27.4751 18.1947 28.1847 18.4788C28.8943 18.7628 29.6531 18.9002 30.4163 18.8828C31.1794 18.8654 31.9313 18.6936 32.6275 18.3775C33.3237 18.0614 33.9501 17.6075 34.4695 17.0425C34.989 16.4776 35.3911 15.8131 35.6519 15.0885C35.9127 14.3638 36.0269 13.5937 35.9879 12.8236Z"
                  fill="#121212"
                />
                <path
                  d="M56.5471 11.8587H63.4359V13.7628H56.6228V18.657H64.5789L64.7076 20.5534H54.6318V5.35107H64.2231V7.14049H56.5471V11.8587Z"
                  fill="#121212"
                />
                <path
                  d="M75.9031 6.3001L75.1991 7.73775C74.2701 7.41292 73.3187 7.15734 72.3527 6.97304C71.6134 6.88353 70.8636 6.98346 70.1725 7.26363C69.8526 7.37011 69.5699 7.56769 69.3584 7.8326C69.147 8.09751 69.0158 8.41848 68.9806 8.75692C68.9454 9.09536 69.0077 9.43686 69.1601 9.74036C69.3125 10.0439 69.5484 10.2965 69.8394 10.4678C70.968 11.152 72.1416 11.7576 73.352 12.2801C74.9568 13.0983 76.115 14.2378 76.1075 16.2336C76.1705 17.304 75.8249 18.358 75.142 19.1787C74.459 19.9995 73.4906 20.5246 72.436 20.646C71.3574 20.8161 70.2561 20.7685 69.1958 20.506C68.1355 20.2435 67.1373 19.7713 66.2588 19.1166L67.0158 17.7477C67.2042 17.7816 67.3892 17.8328 67.5684 17.9007C68.984 18.6272 70.4148 19.2772 72.065 18.7725C72.5645 18.6803 73.0237 18.4349 73.38 18.0695C73.7363 17.7041 73.9724 17.2366 74.056 16.7307C74.1258 16.2528 74.0404 15.7649 73.8124 15.3402C73.5845 14.9156 73.2264 14.577 72.7918 14.3754C71.8682 13.8401 70.8765 13.4272 69.9151 12.9683C67.4322 11.7907 66.501 10.1619 67.0839 8.04363C67.6063 6.16246 69.6956 4.92363 72.065 5.12246C72.6305 5.1565 73.1911 5.24874 73.738 5.39775C74.3891 5.62716 75.0098 5.93304 75.9031 6.3001Z"
                  fill="#121212"
                />
                <path
                  d="M49.4395 5.35282H51.7106C49.5001 10.6522 47.3805 15.7452 45.0716 21.3046L38.4478 5.35282L40.7188 5.23047C42.1722 8.86282 43.5954 12.434 45.17 16.3569L49.4395 5.35282Z"
                  fill="#121212"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/*  */}

        <div className="max-w-[430px] w-full flex ">
          {/* cart */}
          <div className="max-w-[134px] w-full flex gap-[9px] pr-[25px]  border-r-[#1212121a] border-r-[1.5px] items-center">
            <div className="max-w-[13px] w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
              >
                <path
                  d="M1 7C1 6.44772 1.44772 6 2 6H13C13.5523 6 14 6.44772 14 7V18C14 18.5523 13.5523 19 13 19H2C1.44772 19 1 18.5523 1 18V7Z"
                  stroke="#121212"
                  stroke-width="1.5"
                />
                <path
                  d="M11 6V4.18182V4.18182C11 2.42455 9.57545 1 7.81818 1H7.18182C5.42455 1 4 2.42455 4 4.18182V4.18182V6"
                  stroke="#121212"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            {/* cart items */}
            <div className="max-w-[65px] w-full font-[500]  text-[18px] leading-[21px] tracking-[-0.36px] text-[#121212]">
              Cart (0)
            </div>
          </div>
          {/* Free facial assessment */}
          <Link
            href={"/"}
            className="max-w-[296px] w-full flex items-center justify-end "
          >
            <div className="max-w-[210px] w-full flex  ">
              <div className=" w-full text-[18px] font-[500] leading-[21px] tracking-[-0.36px]  text-[#121212]">
                Free facial assessment
              </div>
            </div>
            <div className="max-w-[63px] w-full flex items-center   justify-center border-l-[#1212121a] border-l-[1.5px]">
              <div className="max-w-[15px] w-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="17"
                  viewBox="0 0 24 17"
                  fill="none"
                >
                  <path
                    d="M15.1094 1.16016L22.6094 8.66016L15.1094 16.1602"
                    stroke="#121212"
                    stroke-width="1.5"
                  />
                  <path
                    d="M22.6094 8.6582L0.109375 8.6582"
                    stroke="#121212"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="max-w-[1872px] w-full flex">
        {/* Menus */}
        <div className=" max-w-[468px] w-full p-[48px] flex flex-col  gap-[113px] bg-[#F9F9F9] border-r-[#E7E7E7] border-r-[1.5px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
            Menus /
          </div>

          {/*  */}
          <div className="max-w-[372px] w-full flex flex-col gap-[32px]  ">
            {/* Solutions */}
            <div
              className={`${
                selectedOption == "Solutions"
                  ? "  text-[#121212] "
                  : " text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Solutions")}
            >
              <div className="max-w-[141px]  w-full flex gap-[4px]">
                <div className="w-full text-[32px] font-[500] leading-[21px] tracking-[-0.6px]">
                  Solutions
                </div>
                <div className="max-w-[12px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase text-start  flex  items-start">
                  01
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Solutions" && (
                <div className="max-w-[15px] w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Resources */}
            <div
              className={`${
                selectedOption == "Resources"
                  ? "  text-[#121212] "
                  : "text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Resources")}
            >
              <div className="max-w-[164px]  w-full flex gap-[4px]">
                <div className=" w-full text-[32px] font-[500] leading-[21px] tracking-[-0.6px]">
                  Resources
                </div>
                <div className="max-w-[14px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  02
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Resources" && (
                <div className="max-w-[15px] w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* About */}
            <div
              className={` ${
                selectedOption == "About"
                  ? "  text-[#121212] "
                  : " text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("About")}
            >
              <div className="max-w-[102px]  w-full flex gap-[4px]">
                <div className="w-full text-[32px] font-[500] leading-[21px] tracking-[-0.6px]">
                  About
                </div>
                <div className="max-w-[15px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  03
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "About" && (
                <div className="max-w-[15px] w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Documentation */}
            <div
              className={`${
                selectedOption == "Documentation"
                  ? "  text-[#121212] "
                  : " text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Documentation")}
            >
              <div className="max-w-[226px]  w-full flex gap-[4px]">
                <div className="max-w-[207px] w-full text-[32px] font-[500] leading-[21px] tracking-[-0.64px]">
                  Documentation
                </div>
                <div className="max-w-[15px] w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  04
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Documentation" && (
                <div className="max-w-[15px] w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Tech */}
            <div
              className={`${
                selectedOption == "Tech" ? "  text-[#121212] " : "text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Tech")}
            >
              <div className="max-w-[85px]  w-full flex gap-[4px]">
                <div className=" w-full text-[32px] font-[500] leading-[21px] tracking-[-0.64px]">
                  Tech
                </div>
                <div className="max-w-[15px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  05
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Tech" && (
                <div className="max-w-[15px] w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Learn */}
            <div
              className={`${
                selectedOption == "Learn"
                  ? "  text-[#121212] "
                  : " text-[gray] "
              }max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Learn")}
            >
              <div className="max-w-[97px]  w-full flex gap-[4px]">
                <div className="w-full text-[32px] font-[500] leading-[21px] tracking-[-0.64px]">
                  Learn
                </div>
                <div className="max-w-[15px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  06
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Learn" && (
                <div className="max-w-[15px] w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
        {selectedOption === "Solutions" && (
          <div className="max-w-[1404px] w-full flex">
            {/* Facial Assessment */}
            <div className="max-w-[468px] w-full ">
              {/* facial reports / */}
              <div className=" max-w-[468px] w-full p-[48px] flex flex-col  gap-[115px]  ">
                <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
                  facial reports /
                </div>

                <Link
                  href={"/"}
                  className="max-w-[372px] w-full flex items-center  justify-between"
                >
                  <div className="w-full text-[24px] font-[500] leading-[21px] tracking-[-0.48px]  text-[#121212]">
                    Facial assessment report
                  </div>

                  <div className="max-w-[15px] w-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                    >
                      <path
                        d="M6.46428 0.928789H17.0709V11.5354"
                        stroke="#121212"
                        stroke-width="1.5"
                      />
                      <path
                        d="M17.0693 0.927246L2.9272 15.0694"
                        stroke="#121212"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              {/* doctor consultation  */}
              <div className=" max-w-[468px] w-full p-[48px] flex flex-col  gap-[115px]  border-y-[#E7E7E7] border-y-[1.5px] ">
                <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
                  doctor consultation /
                </div>

                <div className="max-w-[372px] w-full flex flex-col gap-[32px]  ">
                  <div className=" w-full font-[500] text-[18px] text-[#121212]  capitalize">
                    Private Consultation
                  </div>
                  <div className="max-w-[2632px] w-full flex gap-[6px]">
                    <div className="max-w-[161px]   w-full  font-[500] text-[18px] text-[#121212] capitalize tracking-[-0.26px]">
                      In-Clinic Consultation
                    </div>
                    <div className="max-w-[97px] w-full bg-[#EDEFF1]  flex items-center  justify-center ">
                      <div className="max-w-[97px] w-full uppercase text-[#7D828E] text-[13px] font-[400] leading-[16px] tracking-[-0.26px] ">
                        coming soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Nose assessment report */}
            <div className="max-w-[468px] w-full relative">
              {/* div1 with background image */}
              <div className="div1 w-full h-full flex items-center justify-center relative">
                <Image
                  height={100}
                  width={100} 
                  src="/nose assesment asset/img-back.svg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* div2 centered within div1 -nose3 assessment report*/}
              <div className="div2 h-fit absolute top-[70px] left-0 right-0 bottom-[71px] m-auto max-w-[318px] w-full flex  bg-[#AEC0EE33]">
                <div className="flex w-full absolute">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 21V1H11H21" stroke="white" stroke-width="2" />
                  </svg>
                </div>

                {/* nose-assessment-text-main */}
                <div className="pl-[17px] pr-[20px] pt-[14px] pb-[11px] flex w-full flex-col gap-[220px]">
                  <div className=" max-w-[163px] w-full text-[#fff] text-[24px] leading-[22px] font-[400] tracking-[-0.36px]">
                    Nose assessment report
                  </div>
                  <div className="max-w-[280px]  w-full border-opacity-[0.3]  border-t-[#fff] border-t-[1.5px] flex justify-between">
                    {/* period */}
                    <div className="max-w-[72px] w-full flex flex-col gap-[3.41px] mt-[11px]">
                      <div className="max-w-[72px] w-full text-[13px] text-[#fff] opacity-[0.6] font-[500] leading-[13px] tracking-[-0.065px] uppercase ">
                        period /
                      </div>
                      <div className="max-w-[72px] w-full opacity-[0.8] text-[15px] text-[#fff]  font-[500] leading-[13px] tracking-[-0.075px] uppercase ">
                        2 weeks
                      </div>
                    </div>
                    {/* parts */}
                    <div className="max-w-[72px] w-full flex flex-col gap-[3.41px] mt-[11px]">
                      <div className="max-w-[72px] w-full text-[13px] text-[#fff] opacity-[0.6] font-[500] leading-[13px] tracking-[-0.065px] uppercase ">
                        parts /
                      </div>
                      <div className="max-w-[72px] w-full opacity-[0.8] text-[15px] text-[#fff]  font-[500] leading-[13px] tracking-[-0.075px] uppercase ">
                        8
                      </div>
                    </div>
                    {/* pages */}
                    <div className="max-w-[72px] w-full flex flex-col gap-[3.41px] mt-[11px]">
                      <div className="max-w-[72px] w-full text-[13px] text-[#fff] opacity-[0.6] font-[500] leading-[13px] tracking-[-0.065px] uppercase ">
                        pages /
                      </div>
                      <div className="max-w-[72px] w-full opacity-[0.8] text-[15px] text-[#fff]  font-[500] leading-[13px] tracking-[-0.075px] uppercase ">
                        118
                      </div>
                    </div>
                  </div>
                </div>
                {/* corner-2 */}
                <div className="absolute bottom-0 right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M20 -4.76837e-07V20H10H-9.53674e-07"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/*   Specialize facial reports / */}
            <div className=" max-w-[468px] w-full p-[48px] flex flex-col  gap-[113px] bg-[#F9F9F9] border-r-[#E7E7E7] border-r-[1.5px] ">
              <div className="max-w-[186px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
                Specialize facial reports /
              </div>

              {/*  */}
              <div className="max-w-[372px] w-full flex flex-col gap-[32px]  ">
                {/* Free facial asessment */}
                <div
                  className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
                    Free facial asessment
                  </div>
                </div>
                {/* Facial morph report */}
                <div
                  className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
                    Facial morph report
                  </div>
                </div>
                {/* Skin assessment report */}
                <div
                  className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
                    Skin assessment report
                  </div>
                </div>
                {/* Facial fillers report */}
                <div
                  className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
                    Facial fillers report
                  </div>
                </div>
                {/* Nose assessment report */}
                <div
                  className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
                    Nose assessment report
                  </div>
                </div>
                {/* Learn */}
                <div
                  className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className="w-full text-[18px] font-[500] tracking-[-0.36px]">
                    Premium report
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedOption === "Resources" && (
          <div className="max-w-[1404px] w-full flex">
            <div className="max-w-[468px] w-full ">
              {/* Lists / / */}
              <div className=" max-w-[468px] w-full p-[48px] flex flex-col   ">
                <div className="max-w-[372px] w-full flex flex-col gap-[32px]  ">
                  <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
                    Lists /
                  </div>
                  {/* Full interviews */}
                  <div
                    className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
                  >
                    <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
                      Full interviews
                    </div>
                  </div>
                  {/* Diagnosis library */}
                  <div
                    className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                  >
                    <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
                      Diagnosis library
                    </div>
                  </div>
                  {/* Doctor / Practitioner directory */}
                  <div
                    className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                  >
                    <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
                      Doctor / Practitioner directory
                    </div>
                  </div>
                  {/* Clinical research */}
                  <div
                    className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
                  >
                    <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
                      Clinical research
                    </div>
                  </div>
                  {/*Qoves customer stories*/}
                  <div
                    className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                  >
                    <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
                      Qoves customer stories
                    </div>
                  </div>
                </div>
              </div>
              {/* Report image guidelines */}
              <div className=" max-w-[468px] w-full p-[48px]  border-y-[#E7E7E7] border-y-[1px] ">
                <Link
                  href={"/"}
                  className="max-w-[372px] w-full flex items-center  justify-between"
                >
                  <div className="max-w-[182px] w-full text-[24px] font-[500] leading-[21px] tracking-[-0.48px]  text-[#121212]">
                    Report image guidelines
                  </div>

                  <div className="max-w-[15px] w-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                    >
                      <path
                        d="M6.46428 0.928789H17.0709V11.5354"
                        stroke="#121212"
                        stroke-width="1.5"
                      />
                      <path
                        d="M17.0693 0.927246L2.9272 15.0694"
                        stroke="#121212"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            {/* Nose assessment report */}
            <div className="max-w-[468px] w-full relative">
              {/* div1 with background image */}
              <div className="div1 w-full h-full flex items-center justify-center relative">
                <Image
                  height={100}
                  width={100}
                  src="/nose assesment asset/resource-img-back.svg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* div2 centered within div1 */}
              <div className="div2 absolute top-0 left-0 right-0 bottom-0 m-auto max-w-[318px] w-full flex justify-center items-center text-[52px] font-[400] text-[#fff]">
              Deep Dive
              </div>
            </div>
            {/*   Specialize facial reports / */}
            <div className=" max-w-[468px] w-full p-[48px] flex flex-col  gap-[113px] bg-[#F9F9F9] border-r-[#E7E7E7] border-r-[1.5px] ">
              <div className="max-w-[186px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
                Specialize facial reports /
              </div>

              {/*  */}
              <div className="max-w-[372px] w-full flex flex-col gap-[32px]  ">
                {/* Free facial asessment */}
                <div
                  className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
                    Free facial asessment
                  </div>
                </div>
                {/* Facial morph report */}
                <div
                  className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
                    Facial morph report
                  </div>
                </div>
                {/* Skin assessment report */}
                <div
                  className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
                    Skin assessment report
                  </div>
                </div>
                {/* Facial fillers report */}
                <div
                  className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
                    Facial fillers report
                  </div>
                </div>
                {/* Nose assessment report */}
                <div
                  className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
                    Nose assessment report
                  </div>
                </div>
                {/* Learn */}
                <div
                  className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
                >
                  <div className="w-full text-[18px] font-[500] tracking-[-0.36px]">
                    Premium report
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default navbar;
