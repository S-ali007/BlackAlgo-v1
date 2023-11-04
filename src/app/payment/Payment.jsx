"use client";
import BackBtn from "@/components/BackBtnComp/BackBtn";
import Button from "@/components/Button/Button";
import { useState } from "react";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("auto");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="max-w-[1320px] w-full  mt-[32px]   mx-auto pb-[316px]  ">
      <BackBtn text={"Payment"} href={"/plan"} />

      <div className="max-w-[1320px] w-full flex justify-end mt-[32px] flex-col">
        <div className="max-w-[1320px] w-full gap-[24px] flex ">
          <div className="max-w-[872px] w-full rounded-[24px] bg-[#15161B] p-[24px]  ">
            <div className="max-w-[58] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
              Details
            </div>
            {/* input boxies */}
            <div className="flex  gap-[24px] max-w-[872px] w-full">
              <input
                type="email"
                placeholder="john@example.com"
                className="max-w-[303px] w-full py-[10px] pl-[16px] bg-[#E0E0FF08] mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
              />
              <div className="max-w-[303px] w-full pl-[16px] pr-[12px] mt-[16px] bg-[#E0E0FF08] rounded-[12px] ">
                <select
                  type="text"
                  className="max-w-[303px] w-full   bg-transparent  mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
                  placeholder="COUNTRY"
                >
                  <option value="USA" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">USA</option>
                  <option value="USA" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">Pakistan</option>
                  <option value="USA" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">India</option>
                  <option value="USA" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">Germany</option>
                  <option value="USA" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">New Zeland</option>
                  <option value="USA" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">South Africa</option>
                  <option value="USA" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">Nigeria</option>
                </select>
              </div>

              <input
                type=""
                placeholder="03xxxxxxxxx"
                className="max-w-[170px] w-full py-[10px] pl-[16px] bg-[#E0E0FF08] mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
              />
            </div>
          </div>
          <div className="max-w-[424px] w-full rounded-[24px] bg-[#15161B] pb-[16px] p-[24px] flex  flex-col gap-[9px]">
            <div className="max-w-[58] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
              Payment
            </div>
            {/* input boxies */}
            <div className="flex  justify-between max-w-[872px] w-full  items-center ">
              <div className=" max-w-[208px] w-full gap-[16px] flex">
                <div className="w-full max-w-[48px]  items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="57"
                    viewBox="0 0 56 57"
                    fill="none"
                  >
                    <g filter="url(#filter0_ddd_0_1993)">
                      <rect
                        x="4"
                        y="1"
                        width="48"
                        height="48"
                        rx="24"
                        fill="white"
                      />
                      <rect
                        x="4.5"
                        y="1.5"
                        width="47"
                        height="47"
                        rx="23.5"
                        stroke="#F5F7FA"
                        stroke-opacity="0.24"
                      />
                    </g>
                    <path
                      d="M21.4823 8.56689C26.8498 10.1261 32.218 11.6838 37.584 13.2423L17.9344 14.4704C18.3487 13.2113 19.5597 11.9267 19.9739 10.6676C20.0373 10.4164 20.1464 10.1011 20.339 9.76738C20.7044 9.13521 21.1854 8.76035 21.483 8.56543L21.4823 8.56689Z"
                      fill="url(#paint0_linear_0_1993)"
                    />
                    <path
                      d="M18.2525 10.4929L13.5243 19.5831C13.1514 20.3005 13.2001 21.1622 13.6501 21.8324L23.5298 36.7276C25.6468 32.2365 25.1627 26.9568 22.2633 22.9205C19.6817 19.3285 18.0102 16.9857 17.8376 16.7164C17.7889 16.6408 17.6528 16.4273 17.6476 16.1393C17.644 15.8786 17.7432 15.6882 17.79 15.6068C19.0091 13.2613 20.2297 10.9164 21.4488 8.57089C20.105 8.56124 18.8681 9.30344 18.251 10.4923L18.2525 10.4929Z"
                      fill="url(#paint1_linear_0_1993)"
                    />
                    <path
                      d="M45.7176 28.2299C41.7581 32.1572 37.7966 36.0854 33.8372 40.0127C36.6338 34.1061 39.4319 28.2001 42.2286 22.2935C43.1374 23.2617 43.6846 24.9347 44.5934 25.9028C44.7828 26.0787 45.0083 26.3262 45.2103 26.6551C45.59 27.2769 45.6895 27.8798 45.7176 28.2299Z"
                      fill="url(#paint2_linear_0_1993)"
                    />
                    <path
                      d="M45.5788 24.4864L39.8509 15.9852C39.3995 15.3144 38.6168 14.9419 37.8084 15.0118L19.9266 16.4464C22.8614 20.4563 27.7463 22.5777 32.6979 21.9937C37.106 21.4738 39.9744 21.1468 40.2961 21.1262C40.3864 21.1199 40.6402 21.1036 40.8948 21.2385C41.1253 21.3605 41.2459 21.5384 41.294 21.6191C42.7711 23.8122 44.2497 26.0059 45.7268 28.1991C46.3836 27.0321 46.3253 25.5964 45.5773 24.4857L45.5788 24.4864Z"
                      fill="url(#paint3_linear_0_1993)"
                    />
                    <path
                      d="M16.2169 38.9343C14.9218 33.5229 13.6283 28.1121 12.3333 22.7007L23.131 39.0775C21.8267 39.3433 20.1062 38.9315 18.8004 39.1967C18.5505 39.2662 18.2206 39.3274 17.8339 39.3269C17.1023 39.3239 16.5353 39.0932 16.219 38.9335L16.2169 38.9343Z"
                      fill="url(#paint4_linear_0_1993)"
                    />
                    <path
                      d="M19.4977 40.772L29.7766 40.3571C30.5875 40.3238 31.3149 39.8565 31.679 39.135L39.8002 23.2202C34.8283 23.6139 30.457 26.6473 28.368 31.1513C26.5072 35.1605 25.2887 37.7654 25.1395 38.048C25.0977 38.1264 24.9785 38.352 24.7294 38.4964C24.5039 38.6286 24.2876 38.6373 24.1956 38.6358C21.5435 38.7429 18.8915 38.8501 16.2396 38.9572C16.8973 40.1239 18.1573 40.8243 19.4999 40.7713L19.4977 40.772Z"
                      fill="url(#paint5_linear_0_1993)"
                    />
                    <defs>
                      <filter
                        id="filter0_ddd_0_1993"
                        x="0"
                        y="0"
                        width="56"
                        height="57"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="4"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect1_dropShadow_0_1993"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0.733333 0 0 0 0 1 0 0 0 0.12 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_1993"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="1"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect2_dropShadow_0_1993"
                        />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.105882 0 0 0 0 0.0392157 0 0 0 0 0.321569 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_0_1993"
                          result="effect2_dropShadow_0_1993"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0.733333 0 0 0 0 1 0 0 0 0.24 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect2_dropShadow_0_1993"
                          result="effect3_dropShadow_0_1993"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect3_dropShadow_0_1993"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_0_1993"
                        x1="35.9116"
                        y1="13.1255"
                        x2="19.7868"
                        y2="11.0202"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0862FF" />
                        <stop offset="1" stop-color="#070860" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_1993"
                        x1="26.4867"
                        y1="28.334"
                        x2="12.697"
                        y2="20.772"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#CBEF9B" />
                        <stop offset="0.145833" stop-color="#53E894" />
                        <stop offset="0.5" stop-color="#11B7EC" />
                        <stop offset="1" stop-color="#0862FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_0_1993"
                        x1="34.0267"
                        y1="39.5836"
                        x2="43.3785"
                        y2="24.1225"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0862FF" />
                        <stop offset="1" stop-color="#070860" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_0_1993"
                        x1="28.7903"
                        y1="23.7507"
                        x2="39.4274"
                        y2="15.1535"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#CBEF9B" />
                        <stop offset="0.145833" stop-color="#53E894" />
                        <stop offset="0.5" stop-color="#11B7EC" />
                        <stop offset="1" stop-color="#0862FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_0_1993"
                        x1="12.2445"
                        y1="22.7089"
                        x2="19.7182"
                        y2="39.1974"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0862FF" />
                        <stop offset="1" stop-color="#070860" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_0_1993"
                        x1="34.2364"
                        y1="24.5838"
                        x2="28.6347"
                        y2="40.436"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#CBEF9B" />
                        <stop offset="0.145833" stop-color="#53E894" />
                        <stop offset="0.5" stop-color="#11B7EC" />
                        <stop offset="1" stop-color="#0862FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="max-w-[160px] w-full">
                  <div className=" max-w-[123px] w-full text-[16px] font-[600] text-[#fff] leading-[28px]">
                    Blackalgo Plan
                  </div>
                  <div className="max-w-[160px] w-full ">
                    <span className="text-[#E0E0FF99] text-[13px] font-[500] leading-[16px]">
                      Portfolio:
                    </span>
                    <span className="text-[#fff] text-[13px] font-[500] leading-[15px] max-w-[64px] w-full ml-[4px]">
                      $0K - $10K
                    </span>
                  </div>
                </div>
              </div>
              <div className="max-w-[100px] w-full flex flex-col justify-end  gap-[4px] items-end">
                <div className="w-full max-w-[73px] text-right text-[14px] font-[600] leading-[23px] text-[#E0E0FF99]">
                  due today
                </div>
                <div className="text-[#fff] max-w-[100px]   w-full text-[30px] font-[700] leading-[36px] tracking-[-1px]">
                  $99.00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* credit card and bank account detail */}
          <div className=" flex gap-[1px] justify-center items-center mt-[24px]  w-full bg-[#0404053D] rounded-[24px] p-[2px] ">
            <div
              className={`${
                selectedOption == "auto" ? "bg-[#1D1E24]" : "bg-transparent"
              }    max-w-[658px] w-full  justify-center text-[#fff] items-center gap-[16px] flex  bg-[#1D1E24] rounded-[22px] py-[22px] `}
              onClick={() => handleOptionClick("auto")}
            >
              {" "}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.2852 17.1094C21.2852 18.8281 20.3633 19.7578 18.6211 19.7578H5.37109C3.63672 19.7578 2.70703 18.8359 2.70703 17.1094V7.625C2.70703 5.90625 3.63672 4.98438 5.37109 4.98438H18.6211C20.3633 4.98438 21.2852 5.90625 21.2852 7.625V17.1094ZM4.5 8.92194H19.5V7.82037C19.5 7.10944 19.1328 6.7735 18.4609 6.7735H5.53906C4.85938 6.7735 4.5 7.10944 4.5 7.82037V8.92194ZM18.4609 17.9688H5.53906C4.85938 17.9688 4.5 17.625 4.5 16.9141V10.7969H19.5V16.9141C19.5 17.625 19.1328 17.9688 18.4609 17.9688ZM9.47656 15.6954C9.47656 16.1329 9.16406 16.4454 8.70312 16.4454H6.78906C6.33594 16.4454 6.02344 16.1329 6.02344 15.6954V14.2501C6.02344 13.8047 6.33594 13.5001 6.78906 13.5001H8.70312C9.16406 13.5001 9.47656 13.8047 9.47656 14.2501V15.6954Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="max-w-[107px] w-full text-[14px] text-[#fff] font-[600] leading-[23px]  ">
                Card
              </div>
            </div>

            <div
              className={`${
                selectedOption === "manual" ? "bg-[#1D1E24]" : "bg-transparent"
              } max-w-[657px] w-full  justify-center text-[#fff] flex bg-[#1D1E24] gap-[12px] py-[22px] rounded-[22px] `}
              onClick={() => handleOptionClick("manual")}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1602 20.3359C16.6367 20.3359 20.3242 16.6406 20.3242 12.1641C20.3242 7.6875 16.6289 4 12.1602 4C7.68359 4 3.99609 7.6875 3.99609 12.1641C3.99609 16.6406 7.68359 20.3359 12.1602 20.3359ZM12.168 18.5001C8.66016 18.5001 5.84766 15.6719 5.84766 12.1641C5.84766 8.65631 8.65234 5.836 12.168 5.836C15.6758 5.836 18.4961 8.65631 18.5039 12.1641C18.5039 15.6719 15.6758 18.5001 12.168 18.5001ZM12.8633 16.3595C12.8633 16.5626 12.7227 16.7032 12.5195 16.7032C12.3164 16.7032 12.168 16.5626 12.168 16.3595V15.7423H11.668V16.3595C11.668 16.5626 11.5195 16.7032 11.3164 16.7032C11.1211 16.7032 10.9727 16.5626 10.9727 16.3595V15.7423H10.5742C10.1133 15.7423 9.83203 15.4611 9.83203 14.9923V9.51575C9.83203 9.047 10.1211 8.75012 10.5742 8.75012H10.9727V8.14075C10.9727 7.93762 11.1211 7.78918 11.3164 7.78918C11.5195 7.78918 11.668 7.93762 11.668 8.14075V8.75012H12.168V8.14075C12.168 7.93762 12.3164 7.78918 12.5195 7.78918C12.7148 7.78918 12.8633 7.93762 12.8633 8.14075V8.77356C14.0039 8.88293 14.6992 9.56262 14.6992 10.547C14.6992 11.1798 14.3008 11.7736 13.7305 12.0314C14.5039 12.2657 15.0195 12.9142 15.0195 13.7267C15.0195 14.8829 14.207 15.6329 12.8633 15.7267V16.3595ZM12.1133 11.6328L11.168 11.625V9.83594H12.2695C12.9648 9.83594 13.3633 10.1484 13.3633 10.6953C13.3633 11.2969 12.918 11.6328 12.1133 11.6328ZM11.168 14.6485H12.3555C13.2148 14.6407 13.6758 14.3047 13.6758 13.6485C13.6758 12.9922 13.1992 12.6563 12.293 12.6563H11.168V14.6485Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="max-w-[104px] w-full text-[14px] text-[#fff] font-[600] leading-[23px] ">
                Crypto
              </div>
            </div>
          </div>
        </div>

        {selectedOption === "auto" ? (
          <div>
            <div className="max-w-[1320px] w-full gap-[24px] flex mt-[24px] ">
              <div className=" w-full rounded-[24px] bg-[#15161B] p-[24px]  ">
                <div className="max-w-[58] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
                  Card details
                </div>
                {/* input boxies */}
                <div className="flex  gap-[24px] w-full">
                  <input
                    id="ccn"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autocomplete="cc-number"
                    maxlength="19"
                    placeholder="xxxx xxxx xxxx xxxx"
                    className="max-w-[430px] w-full py-[10px] pl-[16px] bg-[#E0E0FF08] mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
                  />
                  <input
                    type="text"
                    placeholder="Bank Name"
                    className="max-w-[430px] w-full py-[10px] pl-[16px] bg-[#E0E0FF08] mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
                  />
                  <input
                    type="date"
                    pattern="\d{4}-\d{2}-\d{2}"
                    className="max-w-[170px] w-full py-[10px] pl-[16px] bg-[#E0E0FF08] mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
                  />
                  <input
                    type="password"
                    placeholder="PIN"
                    min="0000"
                    max="9999"
                    pattern="[0-9]{4}"
                    size="4"
                    name="cvv"
                    maxlength="4"
                    className="max-w-[170px] w-full py-[10px] pl-[16px] bg-[#E0E0FF08] mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="max-w-[1320px] w-full gap-[24px] flex mt-[24px]  ">
              <div className="max-w-[648px] w-full rounded-[24px] bg-[#15161B] p-[24px]  ">
                <div className="max-w-[58] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
                  Crypto details
                </div>
                {/* input boxies */}
                <div className="flex  gap-[24px] w-full">
                  <div className="max-w-[288px] w-full pl-[16px] pr-[12px] mt-[16px] pb-[10px] bg-[#E0E0FF08] rounded-[12px] ">
                    <select
                      type="text"
                      className="max-w-[303px] w-full   bg-transparent  mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
                      placeholder="Binance"
                    >
                      <option
                        value="Binance"
                        className="flex w-full bg-[black]"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle cx="12" cy="12" r="10" fill="#F3BA2F" />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.89394 10.7233L12.0012 7.61624L15.11 10.725L16.918 8.91698L12.0012 4L7.08595 8.91534L8.89394 10.7233ZM5.8086 10.1918L7.61657 11.9997L5.80851 13.8078L4.00055 11.9998L5.8086 10.1918ZM11.9999 16.3838L8.89269 13.2767L7.08204 15.0823L7.08457 15.0848L11.9999 20L16.9168 15.0831L16.9176 15.0821L15.1086 13.2751L11.9999 16.3838ZM20 12.0006L18.192 13.8086L16.384 12.0007L18.192 10.1926L20 12.0006ZM13.8343 11.9991H13.8335L13.8352 11.9999L13.8343 12.001L11.9996 13.8356L10.1666 12.0026L10.1641 11.9999L10.1666 11.9974L10.488 11.6761L10.6437 11.5202H10.6438L11.9996 10.1644L13.8343 11.9991Z"
                              fill="white"
                            />
                          </svg>
                        </div>{" "}
                        Binance
                      </option>
                      <option value="Binance">Binance</option>
                      <option value="Binance">Binance</option>
                      <option value="Binance">Binance</option>
                      <option value="Binance">Binance</option>
                      <option value="Binance">Binance</option>
                      <option value="Binance">Binance</option>
                    </select>
                  </div>
                  <div className="max-w-[288px] w-full pl-[16px] pr-[12px] mt-[16px] bg-[#E0E0FF08] rounded-[12px] ">
                    <select
                      type="text"
                      className="max-w-[303px] w-full   bg-transparent  mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
                      placeholder="Tether"
                    >
                      <option value="USA">Tether</option>
                      <option value="USA">Tether</option>
                      <option value="USA">Tether</option>
                      <option value="USA">Tether</option>
                      <option value="UTetherSA">Tether</option>
                      <option value="USA">South Africa</option>
                      <option value="USA">Nigeria</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="max-w-[648px] w-full rounded-[24px] bg-[#15161B] p-[24px]  ">
                <div className="max-w-[58] w-full text-[16px] font-[600] leading-[24px] text-[#fff]">
                  Transfer to crypto address
                </div>
                {/* input boxies */}
                <div className="flex  gap-[24px] w-full mt-[16px] ">
                  <div className="max-w-[421px] w-full bg-[#E0E0FF08] flex items-center rounded-[12px] justify-between ">
                    <input
                      id="ccn"
                      type="text"
                      inputmode="numeric"
                      pattern="[0-9\s]{13,19}"
                      autocomplete="cc-number"
                      maxlength="19"
                      className="max-w-[215px] w-full  bg-transparent  py-[10px] pl-[16px]  mt-[16px] rounded-[12px] outline-none text-[#fff] text-[16px] font-[500] leading-[28px]"
                    />
                    <div className="max-w-[24px] w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.9258 22.0703C15.6523 22.0703 16.5742 21.1406 16.5742 19.4062V17.9687H17.8633C19.5898 17.9687 20.5117 17.0312 20.5117 15.2969V9.25C20.5117 8.16406 20.2773 7.46875 19.6367 6.80469L15.7773 2.875C15.1602 2.25 14.4258 2 13.4648 2H10.5742C8.85547 2 7.93359 2.92969 7.93359 4.66406V6.10937H6.64453C4.91797 6.10937 3.99609 7.03906 3.99609 8.77344V19.4062C3.99609 21.1484 4.91797 22.0703 6.64453 22.0703H13.9258ZM17.6719 16.1797H16.5781V13.4766C16.5781 12.3907 16.4297 11.8516 15.75 11.1641L11.5703 6.92975C11.0078 6.35162 10.5 6.15631 9.72656 6.11725V4.82819C9.72656 4.15631 10.0625 3.78912 10.7734 3.78912H13.875V7.2735C13.875 8.29694 14.4531 8.86725 15.4688 8.86725H18.7266V15.1407C18.7266 15.8126 18.3828 16.1797 17.6719 16.1797ZM15.668 7.45319H18.2617L15.293 4.44537V7.07819C15.293 7.336 15.4023 7.45319 15.668 7.45319ZM13.7344 20.2891H6.83594C6.125 20.2891 5.78906 19.9219 5.78906 19.2422V8.93753C5.78906 8.26566 6.125 7.89847 6.83594 7.89847H9.08594V11.9297C9.08594 13.1797 9.69531 13.7735 10.9297 13.7735H14.7891V19.2422C14.7891 19.9219 14.4453 20.2891 13.7344 20.2891ZM11.082 12.2657H14.6055L10.6055 8.20316V11.7813C10.6055 12.1172 10.7539 12.2657 11.082 12.2657Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="max-w-[100px] w-full flex flex-col   gap-[4px] items-end">
                    <div className="w-full max-w-[73px] text-right text-[14px] font-[600] leading-[23px] text-[#E0E0FF99]">
                      Amount
                    </div>
                    <div className="text-[#fff] max-w-[150px]   w-full text-[30px] font-[700] leading-[36px] tracking-[-1px]">
                      $300.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className=" w-full  mt-[24px] flex justify-end">
          <Button
            href={"/connect_api"}
            text={"Continue"}
            extraClasses={
              "max-w-[124px] w-full  bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shadow-3xl"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
