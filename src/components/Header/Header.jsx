"use client";
import { useEffect } from "react";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

const Header = ({ children, extraClasses }) => {
  const pathname = usePathname();
  const url = `${pathname}`;
  console.log(url);

  useEffect(() => {
    const url = `${pathname}`;
    console.log(url);
  }, [pathname]);

  return (
    <>
      {url !== "/dashboard" ? (
        <nav className="  w-full bg-transparent fixed  z-40 ">
          <div
            className={`${extraClasses} max-w-[1680px] w-full  flex  justify-between  mx-auto px-[180px]  `}
          >
            <div className="flex gap-[48px] text-[#FFF] py-[30px]   items-center font-[600] ">
              <a href="/" className="max-w-[158px] w-full  ">
                <img
                  src="/header_assets/BLACKALGO  logo.svg"
                  alt="Logo - BLACKALGO"
                />
              </a>
              <a href="#Performance">Performance</a>
              <a href="/strategy">Strategies</a>
              <a href="#About">About</a>
            </div>

            <div className="flex max-w-[215px] w-full items-center justify-between">
              <div className="hover:cursor-pointer">
                <img src="/header_assets/night-mode switch.svg" alt="" />
              </div>
              <Button
                text={"Get Started"}
                extraClasses={" bg-gradient-to-r from-[#00BBFF] to-[#4579F5]"}
                href={"/signup"}
              />
            </div>
          </div>
        </nav>
      ) : (
        <nav className="w-full bg-transparent fixed  z-40 ">
          <div
            className={`${extraClasses} max-w-[1440px] w-full  flex justify-between   mx-auto px-[18px]   border-b-[2px] border-b-[#15161B]`}
          >
            <div className="flex gap-[48px] text-[#FFF] pb-[17px] pt-[18px]   items-center font-[600] ">
              <a href="/" className="max-w-[158px] w-full  ">
                <img
                  src="/header_assets/BLACKALGO  logo.svg"
                  alt="Logo - BLACKALGO"
                />
              </a>
            </div>

            <div className="flex max-w-[379px] w-full items-center gap-[16px] ">
              <div className="max-w-[36px] w-full hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <rect
                    width="36"
                    height="36"
                    rx="12"
                    fill="#E0E0FF"
                    fill-opacity="0.04"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.0029 25.1354C19.5785 25.1354 20.6266 23.9701 20.6787 22.7201H23.3024C24.0251 22.7201 24.4808 22.3099 24.4808 21.6849C24.4808 20.9557 23.8753 20.3568 23.2633 19.7969C22.7692 19.3483 22.6712 18.4711 22.5542 17.4249L22.5537 17.4206C22.4235 15.0573 21.6618 13.4232 19.9951 12.8242C19.7217 11.9388 18.9795 11.3008 18.0029 11.3008C17.0199 11.3008 16.2777 11.9388 16.0107 12.8242C14.3376 13.4232 13.5758 15.0573 13.4456 17.4206C13.335 18.4688 13.2308 19.3477 12.736 19.7969C12.1305 20.3568 11.5186 20.9557 11.5186 21.6849C11.5186 22.3099 11.9743 22.7201 12.7035 22.7201H15.3271C15.3597 23.944 16.4144 25.1354 18.0029 25.1354ZM22.6258 21.3333H13.3485V21.2617C13.5633 21.0794 13.9279 20.7604 14.2339 20.4023C14.6636 19.8945 14.8589 18.8529 14.937 17.6484C15.0347 15.2135 15.8094 14.3542 16.799 14.0872C16.9552 14.0482 17.0464 13.9766 17.0659 13.7878C17.105 13.1432 17.4566 12.7266 18.0034 12.7266C18.5438 12.7266 18.8954 13.1432 18.9344 13.7878C18.9539 13.9766 19.0451 14.0482 19.2013 14.0872C20.1909 14.3542 20.9657 15.2135 21.0633 17.6484C21.1414 18.8529 21.3433 19.8945 21.7664 20.4023C22.0724 20.7604 22.411 21.0794 22.6258 21.2617V21.3333ZM16.7531 22.72C16.7987 23.4752 17.3065 23.9766 18.0031 23.9766C18.7062 23.9766 19.214 23.4687 19.2466 22.72H16.7531Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <rect
                    width="36"
                    height="36"
                    rx="12"
                    fill="#E0E0FF"
                    fill-opacity="0.04"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0015 14.9595C16.0015 18.3123 18.1564 20.3892 21.6134 20.3892C22.3621 20.3892 23.1369 20.2524 23.6382 20.0441C23.827 19.966 23.9442 19.9465 24.0744 19.9465C24.3348 19.9465 24.5887 20.1548 24.5887 20.4803C24.5887 20.578 24.5627 20.7407 24.478 20.9425C23.4103 23.3905 21.0796 24.9009 18.2541 24.9009C14.2957 24.9009 11.4116 22.0103 11.4116 18.0519C11.4116 15.298 13.1108 12.7524 15.5522 11.7629C15.7541 11.6847 15.9038 11.6587 15.9819 11.6587C16.314 11.6587 16.5418 11.9386 16.5418 12.2121C16.5418 12.3683 16.5158 12.492 16.4051 12.7069C16.1642 13.1691 16.0015 14.0155 16.0015 14.9595ZM15.1095 13.3514C13.5926 14.367 12.6616 16.1639 12.6616 18.0129C12.6616 21.2746 15.0379 23.6574 18.2931 23.6574C20.1942 23.6574 21.952 22.772 22.9025 21.3071C22.4468 21.4699 21.965 21.535 21.4051 21.535C17.3035 21.535 14.8361 19.1261 14.8361 15.1092C14.8361 14.4647 14.9338 13.8787 15.1095 13.3514Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="max-w-[99px] w-full flex gap-[8px] bg-[#E0E0FF0A] py-[8px] px-[16px] hover:cursor-pointer rounded-[12px] items-center   justify-center ">
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
                      d="M17.7415 14.258C17.7415 15.6903 16.9733 16.465 15.5215 16.465H4.47982C3.03451 16.465 2.25977 15.6968 2.25977 14.258V6.35433C2.25977 4.92204 3.03451 4.15381 4.47982 4.15381H15.5215C16.9733 4.15381 17.7415 4.92204 17.7415 6.35433V14.258ZM3.75098 7.43505H16.251V6.51708C16.251 5.92463 15.945 5.64468 15.3851 5.64468H4.61686C4.05046 5.64468 3.75098 5.92463 3.75098 6.51708V7.43505ZM15.3851 14.9741H4.61686C4.05046 14.9741 3.75098 14.6877 3.75098 14.0952V8.99756H16.251V14.0952C16.251 14.6877 15.945 14.9741 15.3851 14.9741ZM7.89811 13.0796C7.89811 13.4442 7.6377 13.7046 7.25358 13.7046H5.65853C5.28092 13.7046 5.02051 13.4442 5.02051 13.0796V11.8752C5.02051 11.5041 5.28092 11.2502 5.65853 11.2502H7.25358C7.6377 11.2502 7.89811 11.5041 7.89811 11.8752V13.0796Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="max-w-[99px] text-[14px] font-[600] w-full  text-[#fff]">
                  094724
                </div>
              </div>
              <div className="max-w-[160px] w-full flex gap-[12px] bg-[#E0E0FF0A] p-[2px] hover:cursor-pointer rounded-[12px] items-center    ">
                <div className="max-w-[32px] w-full rounded-[12px]">
                  <img src="/dashboard-user-img.svg" alt=""  className="rounded-[12px]"/>
                </div>
                <div className="max-w-[100px]  w-full flex gap-[14px] items-center  ">
                  <div className="text-[14px] font-[600] text-[#fff]">
                    Vino Costa{" "}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#00B8B9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
