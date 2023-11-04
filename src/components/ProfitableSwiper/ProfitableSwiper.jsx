"use client";
import { popins } from "@/app/layout";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Profitableswiper() {
  const swiperRef = useRef();

  const gradientStyle = {
    backgroundImage: "linear-gradient(141deg, #3B83F6 5.29%, #05B6FE 101.76%)",
  };
  const gradientStyle0 = {
    backgroundImage: "linear-gradient(141deg, #FFF 5.29%, #6CD3FF 101.76%)",
  };
  const gradientdiv1 = {
    backgroundImage: "linear-gradient(141deg, #3B83F6 5.29%, #05B6FE 101.76%)",
  };

  return (
    <div className="w-full  flex flex-col justify-center items-center gap-[48px] pt-[8px]">
      <div className="max-w-[1320px] w-full flex p-[8px] bg-[#FFFFFF] rounded-[24px] shadow-3xl items-center ">
        {/*  */}
        <div className="max-w-[1300px] w-full flex justify-between absolute z-40 items-center px-[8px]">
          {" "}
          <button
            className="max-w-[24px] w-full bg-[#FFFFFF] rounded-[24px]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="96"
              viewBox="0 0 24 96"
              fill="none"
            >
              <rect width="24" height="96" rx="12" fill="white" />
              <path
                d="M6.99219 48.3594C6.99219 48.625 7.09375 48.8516 7.30469 49.0547L13.3984 55.0156C13.5625 55.1875 13.7812 55.2734 14.0312 55.2734C14.5391 55.2734 14.9375 54.8828 14.9375 54.3672C14.9375 54.1172 14.8359 53.8906 14.6641 53.7188L9.17188 48.3594L14.6641 43C14.8359 42.8203 14.9375 42.5938 14.9375 42.3438C14.9375 41.8359 14.5391 41.4453 14.0312 41.4453C13.7812 41.4453 13.5625 41.5312 13.3984 41.7031L7.30469 47.6641C7.09375 47.8672 7 48.0938 6.99219 48.3594Z"
                fill="#0E0F12"
              />
            </svg>
          </button>
          <button
            className=" max-w-[24px] w-full bg-[#FFFFFF] rounded-[24px]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              width="24"
              height="96"
              viewBox="0 0 24 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="96"
                rx="12"
                transform="matrix(-1 0 0 1 24 0)"
                fill="white"
              />
              <path
                d="M17.0078 48.3594C17.0078 48.625 16.9062 48.8516 16.6953 49.0547L10.6016 55.0156C10.4375 55.1875 10.2188 55.2734 9.96875 55.2734C9.46094 55.2734 9.0625 54.8828 9.0625 54.3672C9.0625 54.1172 9.16406 53.8906 9.33594 53.7188L14.8281 48.3594L9.33594 43C9.16406 42.8203 9.0625 42.5938 9.0625 42.3438C9.0625 41.8359 9.46094 41.4453 9.96875 41.4453C10.2188 41.4453 10.4375 41.5312 10.6016 41.7031L16.6953 47.6641C16.9062 47.8672 17 48.0938 17.0078 48.3594Z"
                fill="#0E0F12"
              />
            </svg>
          </button>
        </div>

        <Swiper
          className="my-swiper  cursor-pointer max-w-[1300px] w-full   "
          // style={{ overflow: "visible" }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={60}
          slidesPerView={1}
          //   navigation={true}
          //   pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide
            style={{
              overflow: "visible",
            }}
          >
            <div className="max-w-[1320px] w-full flex  bg-[#FFFFFF] rounded-[24px] shadow-3xl ">
              <div className="max-w-[1304] w-full bg-[#F5F7FA] rounded-[20px] flex gap-[128px]  overflow-hidden">
                {/* left section */}
                <div className="max-w-[394px] w-full pt-[80px] ml-[88px] pb-[40px] ">
                  <div
                    className={` ${popins.className} max-w-[208px] w-full text-[48px] text-[#000000CC] font-[600] leading-[48px] tracking-[-2px]`}
                  >
                    Profitable
                  </div>
                  <div className="max-w-[394px] w-full text-[#000000CC] mt-[48px] text-[20px] font-[500] leading-[36px]">
                    Our algorithms have been proven to be profitable since 2018
                    with a audited track record of +5.39% per month with a 20%
                    drawdown performing well in bear markets too
                  </div>
                </div>

                {/* right section */}
                <div className="max-w-[516px] w-full  flex  relative items-center justify-end  ">
                  <div
                    className="max-w-[306px] w-full h-[1305px] absolute mr-[-300px] mt-[-395px]  transform rotate-[75.128deg]  blur-[107.04569244384766px]"
                    style={gradientStyle}
                  ></div>
                </div>

                <div className="flex absolute max-w-[1121px] w-full justify-end ">
                  <img
                    src="/slider-cartoon.svg"
                    alt=""
                    className=" max-w-[516px] w-full z-10 absolute  mt-[-50px] "
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-[1320px] w-full flex  bg-[#FFFFFF] rounded-[24px] shadow-3xl ">
              <div className="max-w-[1304px] w-full bg-[#F5F7FA] rounded-[20px] flex gap-[360px]  overflow-hidden">
                {/* left section */}
                <div className="max-w-[294px] w-full pt-[80px] pb-[40px] ml-[88px] ">
                  <div
                    className={` ${popins.className} max-w-[218px] w-full text-[48px] text-[#000000CC] font-[600] leading-[48px] tracking-[-2px]`}
                  >
                    Cautions
                  </div>
                  <div className="max-w-[394px] w-full text-[#000000CC] mt-[48px] text-[20px] font-[500] leading-[36px]">
                    With a drawdown of only 20%, our algorithms only risk a
                    small amount of the capital providing an extra safety level
                    for your capital.
                  </div>
                </div>

                {/* right section */}
                <div className="max-w-[516px] w-full  flex  relative items-center  ">
                  <div
                    className="max-w-[245px] w-full min-h-[853px] absolute ml-[-150px] mt-[-405px]  blur-[70.78057098388672px]  rotate-[105.298deg]  "
                    style={gradientStyle}
                  ></div>
                </div>

                <div className="flex absolute max-w-[1121px] w-full justify-center ml-[100px]  mt-[-90px]">
                  <img
                    src="/sliderbear.svg"
                    alt=""
                    className="  w-full z-10 absolute  "
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-[1320px] w-full flex  bg-[#FFFFFF] rounded-[24px] shadow-3xl   ">
              <div className="max-w-[1304px] w-full bg-[#F5F7FA] rounded-[16px] flex gap-[148px]  overflow-hidden ">
                {/* left section */}
                <div className="max-w-[394px] w-full pt-[80px] pb-[40px] ml-[88px] ">
                  <div
                    className={` ${popins.className} max-w-[218px] w-full text-[48px] text-[#000000CC] font-[600] leading-[48px] tracking-[-2px]`}
                  >
                    Bespoke
                  </div>
                  <div className="max-w-[394px] w-full text-[#000000CC] mt-[48px] text-[20px] font-[500] leading-[36px]">
                    We provide a bespoke trading strategy tailored to the unique
                    needs of our corporate clients. Our A.I. algorithms execute
                    orders effectively, ensuring a seamless trading experience.
                  </div>
                </div>

                {/* right section */}
                <div className="max-w-[1680px] w-full flex   items-start   overflow-y-hidden ">
                  {/* image-section */}
                  <div className="max-w-[740px] w-full absolute z-30">
                    <div
                      className="max-w-[204px] w-full rotate-[39.475deg] mt-[-193px]  opacity-[0.4] blur-[2.5px] ml-[43px] h-[915px] "
                      style={gradientStyle}
                    ></div>
                  </div>
                  <div className="max-w-[847px] w-full absolute  z-20">
                    <div
                      className="max-w-[343px] w-full rotate-[39.475deg] mt-[-196px]   blur-[94.5px]  ml-[55px] h-[915px] "
                      style={gradientStyle}
                    ></div>
                  </div>

                  <div className="max-w-[1121px] w-full flex  absolute ">
                    <div className="max-w-[1121px] w-full absolute flex z-30">
                      <img
                        src="/BespkeCartoonslider.svg"
                        alt=""
                        className="mt-[-86px] max-w-[500px] w-full "
                      />
                    </div>
                    <div
                      className="max-w-[140px] min-h-[915px] h-full w-full rotate-[39.47deg] mt-[-117px] ml-[-117px]    blur-[2.5px] opacity-[0.12]  z-10 "
                      style={gradientStyle0}
                    ></div>
                    <div className="max-w-[690px] w-full ml-[-147px] mt-[-72px]  z-20 ">
                      <div
                        className="max-w-[140px] w-full h-[915px] rotate-[39.475deg]  blur-[2.5px] opacity-[0.12]  "
                        style={gradientStyle0}
                      ></div>
                    </div>
                    <div className="max-w-[659px] w-full   z-30">
                      <div
                        className="max-w-[98.5px] w-full   h-[915px] rotate-[39.475deg] blur-[2.5px] opacity-[0.12]  ml-[94px] mt-[-173px]  "
                        style={gradientStyle0}
                      ></div>
                    </div>
                    <div className="max-w-[659px] w-full   z-20">
                      <div
                        className="max-w-[98.5px] w-full   h-[915px] rotate-[39.475deg]  blur-[94.5px]   ml-[-179px] mt-[-38px]  "
                        style={gradientStyle0}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Profitableswiper;
