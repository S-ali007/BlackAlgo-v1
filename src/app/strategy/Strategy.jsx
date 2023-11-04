"use client";
import Button from "@/components/Button/Button";
import BackBtn from "@/components/BackBtnComp/BackBtn";
import { useState } from "react";
import LineChartColor from "@/components/allCharts/lineChartColor/LineChartColor";

const Strategy = () => {
  const gradientStyle = {
    backgroundImage: "linear-gradient(141deg, #000 5.29%, #6CD3FF 101.76%)",
  };
  const gradientdiv1 = {
    backgroundImage: "linear-gradient(141deg, #0BF 5.29%, #05B6FE 101.76%)",
  };
  const gradientdiv2 = {
    backgroundImage:
      "linear-gradient(90deg, #0E0F12 38.85%, rgba(14, 15, 18, 0.83) 72.19%, rgba(14, 15, 18, 0.00) 100%)",
  };
  const [selectedOption, setSelectedOption] = useState("conservative");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="max-w-[1320px] w-full  mt-[32px]   mx-auto pb-[316px]  ">
      <BackBtn text={"Choose Investment Strategy"} href={"/login"} />
      <div className="max-w-[1320px] w-full mt-[32px] flex gap-[24px]">
        <div
          className={`${
            selectedOption == "conservative"
              ? " border-[#0BF] "
              : "border-transparent"
          }  max-w-[424px] w-full flex  px-[24px] py-[20px] text-[#fff]  bg-[#00BBFF0F] rounded-[12px] border-[2px]  cursor-pointer `}
          onClick={() => handleOptionClick("conservative")}
        >
          <div className="">
            <div className="max-w-[179px] w-full text-[14px] font-[600] leading-[20px]">
              Conservative
            </div>
            <div className="max-w-[179px] w-full  text-[13px] font leading-[16px]">
              Earn steadily and be happy
            </div>
          </div>
          <div className="max-w-[397px] w-full absolute flex  justify-end mt-[-14px] ml-[1px] rounded-[10px]  overflow-hidden">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="71"
                viewBox="0 0 220 71"
                fill="none"
              >
                <path
                  d="M1.8623 81L240.343 1.5"
                  stroke="#00BBFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="absolute">
              <img src="/strtegy-asset/choose-strat-ass.svg" alt="" />
            </div>

            <div className="absolute">
              <img src="/strtegy-asset/choose-strat-ass.svg" alt="" />
            </div>

            {/* gradient code */}
            {/* <div className="max-w-[310px] w-full absolute ">
            <div
              className="max-w-[173px] w-full mt-[-143px]  blur-[1.5px]  ml-[155px] rotate-[69.203deg] h-[521px] absolute  "
              style={gradientdiv1}
            ></div>

            <div
              className="max-w-[103px] w-full mt-[-143px] ml-[155px]  blur-[2.5px]  rotate-[69.203deg] h-[521px] opacity-[0.4] absolute"
              style={gradientdiv1}
            ></div>

            <div
              className="max-w-[70px] w-full mt-[-143px] ml-[155px] blur-[2.5px]  rotate-[69.203deg] h-[521px] opacity-[0.12] absolute"
              style={gradientdiv2}
            >
              <div
                className="max-w-[50px] absolute w-full mt-[-143px] ml-[155px] blur-[2.5px]  rotate-[69.203deg] h-[521px] opacity-[0.12]"
                style={gradientdiv2}
              ></div>
            </div>
          </div> */}
          </div>
        </div>

        {/* 2 */}
        <div
          className={`${
            selectedOption == "Balanced"
              ? " border-[#EEFF00] "
              : "border-transparent"
          } max-w-[424px] w-full flex  px-[24px] py-[20px] text-[#fff] bg-[#15161B]   rounded-[12px]   border-[2px]  cursor-pointer  `}
          onClick={() => handleOptionClick("Balanced")}
        >
          <div className="">
            <div className="max-w-[179px] w-full text-[14px] font-[600] leading-[20px] ">
              Balanced
            </div>
            <div className="max-w-[179px] w-full  text-[13px] font leading-[16px]">
              Earn and stay balanced
            </div>
          </div>
          <div className="max-w-[397px] w-full absolute flex  justify-end mt-[-6px] ml-[1px] rounded-[10px]  overflow-hidden ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="203"
                height="64"
                viewBox="0 0 203 64"
                fill="none"
              >
                <path
                  d="M2 68.5C2 68.5 30.6819 17.0679 51.8832 25.2928C63.0958 29.6428 73.9096 51.4404 85.4616 53.2928C104.427 56.3339 106.327 20.5124 125.413 20.2929C143.255 20.0876 147.521 35.9981 165.364 35.7928C184.449 35.5733 184.147 5.38119 203.109 2.2928C220.247 -0.498626 231.101 17.0805 240.609 37.4661"
                  stroke="#EEFF00"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="absolute mt-[4px] max-w-[288px] w-full flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="62"
                viewBox="0 0 200 62"
                fill="none"
              >
                <g filter="url(#filter0_b_0_1626)">
                  <path
                    d="M48.8832 23.2929C27.6819 15.0679 0 63.9999 0 63.9999L3.29492 123.293H240.305L237.609 35.4662C228.101 15.0805 217.247 -2.49863 200.109 0.292804C181.147 3.3812 181.449 33.5734 162.364 33.7929C144.521 33.9981 140.255 18.0877 122.413 18.2929C103.327 18.5124 101.427 54.334 82.4616 51.2929C70.9096 49.4405 60.0958 27.6428 48.8832 23.2929Z"
                    fill="url(#paint0_linear_0_1626)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_0_1626"
                    x="-108.731"
                    y="-108.731"
                    width="457.767"
                    height="340.756"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="54.3656"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_0_1626"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_0_1626"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_0_1626"
                    x1="3.29491"
                    y1="0"
                    x2="3.29491"
                    y2="135.684"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EEFF00" stop-opacity="0.4" />
                    <stop offset="1" stop-color="#EEFF00" stop-opacity="0.01" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <div
                  className="max-w-[173px] w-full mt-[-143px]  blur-[1.5px]  ml-[155px] rotate-[69.203deg] h-[521px] absolute  "
                  style={gradientdiv1}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div
          className={`${
            selectedOption == "dynamic"
              ? " border-[#9C42F5] "
              : "border-transparent"
          }  max-w-[424px] w-full flex cursor-pointer  px-[24px] py-[20px] text-[#fff]  bg-[#00BBFF0F] rounded-[12px]  border-[2px]    `}
          onClick={() => handleOptionClick("dynamic")}
        >
          <div className="">
            <div className="max-w-[179px] w-full text-[14px] font-[600] leading-[20px]">
              Conservative
            </div>
            <div className="max-w-[179px] w-full  text-[13px] font leading-[16px]">
              Earn steadily and be happy
            </div>
          </div>
          <div className="max-w-[397px] w-full absolute flex  justify-end mt-[-18px] ml-[1px] rounded-[10px]  overflow-hidden">
            <div>
              <svg
                width="424"
                height="76"
                viewBox="0 0 424 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_0_1634)">
                  <path
                    d="M176.438 390.245C157.305 462.32 218.318 549.408 252.22 525.514C286.122 501.62 417.323 43.4451 375.132 -13.4213C344.315 -54.9164 225.397 205.638 176.438 390.245Z"
                    fill="url(#paint0_linear_0_1634)"
                  />
                </g>
                <g opacity="0.4" filter="url(#filter1_f_0_1634)">
                  <path
                    d="M146.647 486.66C125.108 554.693 162.902 602.768 190.947 569.035C218.992 535.301 363.177 98.9404 336.716 68.5022C317.384 46.3041 201.78 312.426 146.647 486.66Z"
                    fill="url(#paint1_linear_0_1634)"
                  />
                </g>
                <path
                  opacity="0.12"
                  d="M196.98 522.31C174.331 588.478 201.416 618.561 226.761 580.29C252.105 542.019 402.278 115.719 383.071 97.4688C369.036 84.1701 254.961 352.86 196.98 522.31Z"
                  fill="url(#paint2_linear_0_1634)"
                />
                <defs>
                  <filter
                    id="filter0_f_0_1634"
                    x="-16.1963"
                    y="-206.828"
                    width="588.602"
                    height="925.374"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="94.5"
                      result="effect1_foregroundBlur_0_1634"
                    />
                  </filter>
                  <filter
                    id="filter1_f_0_1634"
                    x="135.286"
                    y="62.1978"
                    width="209.656"
                    height="522.887"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2.5"
                      result="effect1_foregroundBlur_0_1634"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_0_1634"
                    x1="342.612"
                    y1="-30.388"
                    x2="597.998"
                    y2="234.092"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9C42F5" />
                    <stop offset="1" stop-color="#9C42F5" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1634"
                    x1="313.701"
                    y1="67.5061"
                    x2="481.421"
                    y2="185.393"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9C42F5" />
                    <stop offset="1" stop-color="#9C42F5" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_1634"
                    x1="364.44"
                    y1="103.838"
                    x2="480.825"
                    y2="172.65"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stop-color="#9C42F5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute">
              <svg
                width="186"
                height="76"
                viewBox="0 0 186 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_0_1)">
                  <path
                    d="M65.6157 38.9934C30.0442 38.3547 1.71835 106.847 1.71835 106.847L5.11597 121.298L206.429 73.9665L190.32 -25.9999C190.32 -25.9999 172.119 50.8995 132.865 56.6777C108.924 60.2018 90.3654 39.4378 65.6157 38.9934Z"
                    fill="url(#paint0_linear_0_1)"
                  />
                </g>
                <path
                  d="M1.91178 107.669C1.91178 107.669 30.1025 38.6026 65.6937 39.325C90.4571 39.8277 109.071 60.8252 133.016 57.3206C172.277 51.5745 190.32 -25.9999 190.32 -25.9999"
                  stroke="#9C42F5"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_b_0_1"
                    x="-107.013"
                    y="-134.731"
                    width="422.173"
                    height="364.76"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="54.3656"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_0_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_0_1"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="-18"
                    y1="22.9785"
                    x2="7.43919"
                    y2="131.179"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9C42F5" stop-opacity="0.4" />
                    <stop offset="1" stop-color="#9C42F5" stop-opacity="0.01" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {selectedOption == "conservative" && (
        <div className="conservative-content">
          <div className="conservative flex w-full gap-[24px]">
            {/* 1 */}
            <div className="max-w-[424px] mt-[24px] w-full pl-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[107px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                Conservative
              </div>
              <div className="max-w-[328px] w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px]">
                an investment strategy is a plan for buying and selling
                securities depending on the goals, time and personal
                characteristics of the investor. Often, without a strategy,
                investments turn into gambling or blind copying, and investors
                experience enormous stress with portfolio drawdowns
              </div>
            </div>
            {/* 2 */}
            <div className="max-w-[424px] mt-[24px] w-full pl-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[124px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                Strategy Graph
              </div>
              <div className="max-w-[383px] w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px]">
                <LineChartColor />
              </div>
            </div>
            {/* 3 */}
            <div className="max-w-[424px] mt-[24px] w-full px-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[195px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                For a period of one year
              </div>
              <div className=" w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px] pb-[18px] border-b-[2px] border-b-[#E0E0FF1F]">
                <div>Annualized return</div>

                <div className="max-w-[60px] w-full text-[20px] font-[700] leading-[28px] tracking-[-0.4px] text-[#fff]">
                  +14.4%
                </div>
              </div>

              <div className="mt-[18px] w-full flex flex-col gap-[12px]">
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Max.drawdown
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#fff]">
                    -1.0%
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Risk level
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#00B8B9]">
                    Low
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Min portfolio
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#fff]">
                    $500
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedOption == "Balanced" && (
        <div className="balanced-content">
          <div className="Balanced flex w-full gap-[24px]">
            {/* 1 */}
            <div className=" max-w-[424px] mt-[24px] w-full pl-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[107px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                Balanced
              </div>
              <div className="max-w-[328px] w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px]">
                an investment strategy is a plan for buying and selling
                securities depending on the goals, time and personal
                characteristics of the investor. Often, without a strategy,
                investments turn into gambling or blind copying, and investors
                experience enormous stress with portfolio drawdowns
              </div>
            </div>
            {/* 2 */}
            <div className=" max-w-[424px] mt-[24px] w-full pl-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[124px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                Strategy Graph
              </div>
              <div className="max-w-[383px] w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px]"><LineChartColor /></div>
            </div>
            {/* 3 */}
            <div className="max-w-[424px] mt-[24px] w-full px-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[195px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                For a period of one year
              </div>
              <div className=" w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px] pb-[18px] border-b-[2px] border-b-[#E0E0FF1F]">
                <div>Annualized return</div>

                <div className="max-w-[60px] w-full text-[20px] font-[700] leading-[28px] tracking-[-0.4px] text-[#fff]">
                  +14.4%
                </div>
              </div>

              <div className="mt-[18px] w-full flex flex-col gap-[12px]">
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Max.drawdown
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#fff]">
                    -1.0%
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Risk level
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#00B8B9]">
                    Low
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Min portfolio
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#fff]">
                    $500
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedOption == "dynamic" && (
        <div className="dynamic-content">
          <div className="Dynamic flex w-full gap-[24px]">
            {/* 1 */}
            <div className=" max-w-[424px] mt-[24px] w-full pl-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[107px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                Dynamic
              </div>
              <div className="max-w-[328px] w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px]">
                an investment strategy is a plan for buying and selling
                securities depending on the goals, time and personal
                characteristics of the investor. Often, without a strategy,
                investments turn into gambling or blind copying, and investors
                experience enormous stress with portfolio drawdowns
              </div>
            </div>
            {/* 2 */}
            <div className=" max-w-[424px] mt-[24px] w-full pl-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[124px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                Strategy Graph
              </div>
              <div className="max-w-[383px] w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px]"><LineChartColor /></div>
            </div>
            {/* 3 */}
            <div className="max-w-[424px] mt-[24px] w-full px-[24px]  rounded-[24px] shadow-3xl py-[24px] bg-[#15161B]">
              <div className="max-w-[195px] w-full text-[16px] font-[600]  text-[#fff] leading-[24px]">
                For a period of one year
              </div>
              <div className=" w-full text-[14px] font-[500] text-[#E0E0FF99] leading-[24px] mt-[8px] pb-[18px] border-b-[2px] border-b-[#E0E0FF1F]">
                <div>Annualized return</div>

                <div className="max-w-[60px] w-full text-[20px] font-[700] leading-[28px] tracking-[-0.4px] text-[#fff]">
                  +14.4%
                </div>
              </div>

              <div className="mt-[18px] w-full flex flex-col gap-[12px]">
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Max.drawdown
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#fff]">
                    -1.0%
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Risk level
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#00B8B9]">
                    Low
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[112px] w-full  text-[14px] font-[500] leading-[20px] text-[#E0E0FFCC]">
                    Min portfolio
                  </div>
                  <div className="max-w-[36px] w-full  text-[14px] font-[700] leading-[20px] text-[#fff]">
                    $500
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex justify-end mt-[24px]">
        <div className="max-w-[124px] w-full ">
          <Button
            href={"/exchange"}
            text={"Continue"}
            extraClasses={
              "max-w-[124px] w-full  bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shadow-3xl"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
