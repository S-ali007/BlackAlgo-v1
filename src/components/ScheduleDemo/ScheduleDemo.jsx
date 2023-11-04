import { popins } from "@/app/layout";
import Button from "../Button/Button";
import Link from "next/link";

function ScheduleDemo() {
  return (
    <div>
      <div className="w-full bg-[#0E0F12] pt-[120px] ">
        <div className="max-w-[1320px] w-full flex justify-between mx-auto py-[42px] bg-[#15161B] rounded-[24px] px-[24px] items-center">
          <div className="max-w-[554px] w-full flex gap-[16px] items-center">
            <div className="max-w-[36px] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <g clip-path="url(#clip0_0_1337)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.064 29.0859L20.3062 30.8438C18.7358 32.4023 17.2476 32.4141 15.689 30.8438L13.9312 29.0859C13.7671 28.9219 13.6265 28.875 13.4155 28.875H10.9312C8.71631 28.875 7.66163 27.8203 7.66163 25.6055V23.1211C7.66163 22.9102 7.60303 22.7578 7.45069 22.6055L5.69288 20.8359C4.13428 19.2773 4.12256 17.7891 5.69288 16.2305L7.45069 14.4727C7.60303 14.3203 7.66163 14.168 7.66163 13.957V11.4727C7.66163 9.23438 8.71631 8.20313 10.9312 8.20313H13.4155C13.6265 8.20313 13.7788 8.14454 13.9312 7.99219L15.689 6.2461C17.2476 4.66407 18.7358 4.66407 20.3062 6.23438L22.064 7.99219C22.2163 8.14454 22.3687 8.20313 22.5796 8.20313H25.064C27.2788 8.20313 28.3335 9.25782 28.3335 11.4727V13.957C28.3335 14.168 28.3921 14.3086 28.5444 14.4727L30.3022 16.2305C31.8608 17.7891 31.8726 19.2773 30.3022 20.8359L28.5444 22.6055C28.3921 22.7578 28.3335 22.9102 28.3335 23.1211V25.6055C28.3335 27.8203 27.2788 28.875 25.064 28.875H22.5796C22.3687 28.875 22.228 28.9219 22.064 29.0859ZM15.4883 23.7188C15.8398 24.1523 16.2266 24.375 16.707 24.375C17.1875 24.375 17.5977 24.1289 17.8906 23.707L23.3516 15.2695C23.5391 14.9883 23.668 14.6836 23.668 14.4023C23.668 13.7344 23.082 13.2656 22.4375 13.2656C22.0156 13.2656 21.6641 13.5 21.3828 13.9453L16.6719 21.4453L14.5273 18.7617C14.2227 18.3867 13.918 18.2344 13.5195 18.2344C12.8633 18.2344 12.3242 18.7617 12.3242 19.4297C12.3242 19.7461 12.4297 20.0391 12.6758 20.332L15.4883 23.7188Z"
                    fill="#90DEA9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1337">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              className={`${popins.className} max-w-[492px] w-full text-[#FFFFFF] text-[30px] font-[500]  leading-[36px]`}
            >
              Check our audited track record
            </div>
          </div>

          <div className="max-w-[156px] w-full">
            <Button
              text={"Track Record"}
              extraClasses={"bg-gradient-to-r from-[#00BBFF] to-[#4579F5] max-w-[156px] w-full"}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] w-full mx-auto mt-[96px] flex pb-[120px]">
        <div
          className={`${popins.className} text-[#fff] max-w-[336px] w-full text-[48px] font-[600] leading-[48px] mt-[53px] `}
        >
          Schedule a Demo with Our team
        </div>

        {/* Schedule div content */}
        <div className="max-w-[872px] w-full p-[40px]  rounded-[24px] shadow-3xl bg-[#15161B] flex flex-col gap-[40px]">
          <div>
            <div
              className={`${popins.className} text-[30px] leading-[36px] text-[#fff] tracking-[-1px] font-[600] w-full flex gap-[8px] items-center`}
            >
              <div>Schedule Demo</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_0_1308)">
                    <path
                      d="M10.17 2.5024C15.4034 4.02259 20.6374 5.54134 25.8692 7.06088L6.71094 8.25834C7.11483 7.03073 8.29552 5.77818 8.69942 4.55058C8.76117 4.30565 8.86761 3.99822 9.0554 3.67288C9.41159 3.05651 9.88063 2.69103 10.1707 2.50098L10.17 2.5024Z"
                      fill="url(#paint0_linear_0_1308)"
                    />
                    <path
                      d="M7.02091 4.37995L2.41085 13.2429C2.0473 13.9423 2.09484 14.7825 2.53354 15.4359L12.1663 29.9587C14.2303 25.5799 13.7583 20.4322 10.9314 16.4968C8.41435 12.9946 6.78467 10.7104 6.61636 10.4478C6.5689 10.3741 6.43616 10.166 6.43114 9.88512C6.42758 9.63093 6.52434 9.44536 6.56992 9.36598C7.75857 7.07907 8.94865 4.79286 10.1373 2.50595C8.82706 2.49653 7.62105 3.22018 7.01944 4.3793L7.02091 4.37995Z"
                      fill="url(#paint1_linear_0_1308)"
                    />
                    <path
                      d="M33.7982 21.6737C29.9377 25.5029 26.0753 29.3329 22.2148 33.1621C24.9416 27.4031 27.6697 21.6447 30.3964 15.8857C31.2825 16.8297 31.816 18.4609 32.7022 19.4049C32.8868 19.5763 33.1067 19.8176 33.3036 20.1383C33.6738 20.7446 33.7708 21.3325 33.7982 21.6737Z"
                      fill="url(#paint2_linear_0_1308)"
                    />
                    <path
                      d="M33.6671 18.0237L28.0824 9.73502C27.6423 9.081 26.8791 8.71781 26.091 8.78598L8.65625 10.1847C11.5177 14.0944 16.2804 16.1628 21.1082 15.5934C25.4061 15.0864 28.2028 14.7676 28.5164 14.7476C28.6045 14.7414 28.8519 14.7255 29.1003 14.857C29.3249 14.976 29.4425 15.1494 29.4894 15.2281C30.9296 17.3664 32.3712 19.5053 33.8114 21.6436C34.4518 20.5058 34.395 19.106 33.6656 18.0231L33.6671 18.0237Z"
                      fill="url(#paint3_linear_0_1308)"
                    />
                    <path
                      d="M5.03647 32.1106C3.77381 26.8344 2.51262 21.5589 1.25 16.2828L11.7778 32.2502C10.506 32.5094 8.82861 32.1079 7.55545 32.3664C7.31178 32.4342 6.99015 32.4938 6.61304 32.4934C5.89972 32.4904 5.34695 32.2655 5.03855 32.1098L5.03647 32.1106Z"
                      fill="url(#paint4_linear_0_1308)"
                    />
                    <path
                      d="M8.23531 33.9026L18.2572 33.498C19.0479 33.4656 19.7571 33.0099 20.112 32.3065L28.0302 16.7896C23.1826 17.1734 18.9206 20.131 16.8838 24.5223C15.0695 28.4313 13.8815 30.9711 13.736 31.2467C13.6952 31.3231 13.5791 31.543 13.3362 31.6839C13.1163 31.8128 12.9054 31.8212 12.8157 31.8197C10.23 31.9242 7.64428 32.0287 5.05859 32.1331C5.69991 33.2707 6.92834 33.9535 8.23744 33.9018L8.23531 33.9026Z"
                      fill="url(#paint5_linear_0_1308)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_1308"
                      x1="24.2387"
                      y1="6.94709"
                      x2="8.51696"
                      y2="4.89435"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0862FF" />
                      <stop offset="1" stop-color="#070860" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_0_1308"
                      x1="15.0493"
                      y1="21.775"
                      x2="1.60428"
                      y2="14.402"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CBEF9B" />
                      <stop offset="0.145833" stop-color="#53E894" />
                      <stop offset="0.5" stop-color="#11B7EC" />
                      <stop offset="1" stop-color="#0862FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_0_1308"
                      x1="22.3996"
                      y1="32.7437"
                      x2="31.5176"
                      y2="17.6691"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0862FF" />
                      <stop offset="1" stop-color="#070860" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_0_1308"
                      x1="17.2983"
                      y1="17.3065"
                      x2="27.6695"
                      y2="8.92415"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CBEF9B" />
                      <stop offset="0.145833" stop-color="#53E894" />
                      <stop offset="0.5" stop-color="#11B7EC" />
                      <stop offset="1" stop-color="#0862FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_0_1308"
                      x1="1.16345"
                      y1="16.2908"
                      x2="8.45027"
                      y2="32.3671"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0862FF" />
                      <stop offset="1" stop-color="#070860" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_0_1308"
                      x1="22.6055"
                      y1="18.119"
                      x2="17.1439"
                      y2="33.5749"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CBEF9B" />
                      <stop offset="0.145833" stop-color="#53E894" />
                      <stop offset="0.5" stop-color="#11B7EC" />
                      <stop offset="1" stop-color="#0862FF" />
                    </linearGradient>
                    <clipPath id="clip0_0_1308">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>{" "}
              <div>blackalgo</div>{" "}
            </div>

            <div className="flex gap-[24px] mt-[24px]">
              <div className="flex gap-[8px]  items-center">
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
                      d="M20.1602 12.3594C20.1602 16.8672 16.5039 20.5234 11.9961 20.5234C7.48828 20.5234 3.83203 16.8672 3.83203 12.3594C3.83203 10.4609 4.51172 8.69531 5.62891 7.30469C6.02734 6.76562 6.66016 6.72656 7.04297 7.10156C7.44141 7.49219 7.37109 7.96094 7.03516 8.45312C6.18359 9.52344 5.67578 10.8984 5.66797 12.3594C5.66016 15.8594 8.48047 18.6953 11.9961 18.6953C15.5195 18.6953 18.3242 15.8594 18.3242 12.3594C18.3242 9.0625 15.8633 6.36719 12.6523 6.03125V7.78906C12.6523 8.23437 12.3398 8.57031 11.8945 8.57031C11.4492 8.57031 11.1367 8.23437 11.1367 7.78906V5.03125C11.1367 4.51562 11.4648 4.19531 12.0039 4.19531C16.5117 4.19531 20.1602 7.85937 20.1602 12.3594ZM12.9885 11.4841C13.7854 12.0076 13.926 12.9763 13.2541 13.6716C12.5745 14.3357 11.6057 14.1873 11.0823 13.3904L8.48071 9.56225C8.12915 9.031 8.62915 8.531 9.1604 8.88256L12.9885 11.4841Z"
                      fill="#E0E0FF"
                      fill-opacity="0.8"
                    />
                  </svg>
                </div>

                <div className="max-w-[50px] w-full  text-[14px] font-[500] leading-[24px] text-[#E0E0FFCC]  ">
                  30 min
                </div>
              </div>
              {/* web conference */}

              <div className="flex gap-[8px]  items-center">
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
                      d="M13.9375 18.9764C16.0234 18.9764 17.2031 17.8123 17.2031 15.7967V14.9608L19.8984 17.2498C20.3125 17.5936 20.7188 17.8279 21.125 17.8279C21.8672 17.8279 22.3828 17.3045 22.3828 16.4998V8.27325C22.3828 7.46075 21.8672 6.93732 21.125 6.93732C20.7109 6.93732 20.3125 7.17169 19.8984 7.52325L17.2031 9.81232V8.90607C17.2031 6.88263 16.0234 5.72638 13.9375 5.72638H5.84375C3.82031 5.72638 2.57812 6.88263 2.57812 8.90607V15.8904C2.57812 17.9061 3.75781 18.9764 5.84375 18.9764H13.9375ZM13.6562 17.3826H6.14062C4.96094 17.3826 4.28906 16.742 4.28906 15.5389V9.16388C4.28906 7.92169 4.96094 7.31232 6.14062 7.31232H13.6562C14.8359 7.31232 15.5078 7.95294 15.5078 9.16388V15.5389C15.5078 16.742 14.8203 17.3826 13.6562 17.3826ZM20.4977 15.7988C20.5538 15.841 20.5983 15.8746 20.6562 15.8746C20.7422 15.8746 20.7812 15.8121 20.7812 15.7106V9.05431C20.7812 8.95275 20.7422 8.89025 20.6562 8.89025C20.5938 8.89025 20.5469 8.9215 20.4844 8.97618L17.2031 11.6402V13.1324L20.4844 15.7887C20.4889 15.7921 20.4934 15.7954 20.4977 15.7988Z"
                      fill="#E0E0FF"
                      fill-opacity="0.8"
                    />
                  </svg>
                </div>

                <div className="max-w-[462px] w-full  text-[14px] font-[500] leading-[24px] text-[#E0E0FFCC]  ">
                  Web conferencing details provided upon confirmation
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="w-full flex gap-[24px]">
              <div className="max-w-[384px] w-full">
                <div className="input-container max-w-[384px] w-full py-[8px] pl-[16px] bg-[#E0E0FF05] rounded-[12px]">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none text-[#fff] input-field text-[14px] font-[500]"
                    placeholder=""
                  />
                  <label className="input-label text-[14px] font-[500] leading-[20px]">
                    Name
                  </label>
                </div>
              </div>
              <div className="max-w-[384px] w-full">
                <div className="input-container max-w-[384px] w-full py-[8px] pl-[16px] bg-[#E0E0FF05] rounded-[12px]">
                  <input
                    type="email"
                    className="w-full bg-transparent outline-none text-[#fff] input-field text-[14px] font-[500]"
                    placeholder=""
                  />
                  <label
                    htmlFor="email-input"
                    className="input-label text-[14px] font-[500] leading-[20px]"
                  >
                    Email
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-[24px] mt-[24px]">
              <div className="max-w-[248px] w-full">
                <div className="input-container max-w-[384px] w-full pr-[8px] py-[8px] pl-[16px] bg-[#E0E0FF05] rounded-[12px]">
                  <input
                    type="date"
                    className="w-full bg-transparent outline-none text-[#fff] input-field text-[14px] font-[500]"
                    placeholder=""
                    pattern="2023-03-21"
                  />
                  <label
                    htmlFor="email-input"
                    className="input-label text-[14px] font-[500] leading-[20px]"
                  >
                    Date
                  </label>
                </div>
              </div>

              <div className="max-w-[248px] w-full">
                <div className="input-container max-w-[384px] w-full pr-[8px] py-[8px] pl-[16px] bg-[#E0E0FF05] rounded-[12px]">
                  <input
                    type="time"
                    className="w-full bg-transparent outline-none text-[#fff] input-field text-[14px] font-[500]"
                    placeholder=""
                  />
                  <label className="input-label text-[14px] font-[500] leading-[20px]">
                    Time
                  </label>
                </div>
              </div>
              <div className="max-w-[248px] w-full">
                {/* time zonw */}
                <div className="input-container max-w-[384px] w-full pr-[8px] py-[8px] pl-[16px] bg-[#E0E0FF05] rounded-[12px]">
                  <select
                    type="time-zone"
                    className="w-full bg-transparent outline-none text-[#fff] input-field text-[14px] font-[500] rounded-[12px]]"
                    placeholder=""
                    pattern="2023-03-21"
                  >
                    <option value="1" className="text-[#fff] bg-[#15161B] text-[14px] font-[600] ">
                      Pakistan
                    </option>
                    <option value="2" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">
                      NewZeland
                    </option>
                    <option value="3" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">
                      IreLand
                    </option>
                    <option value="4" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">
                      England
                    </option>
                    <option value="5" className="text-[#fff] bg-[#15161B] text-[14px] font-[600]">
                      India
                    </option>
                  </select>

                  <label className="input-label text-[10px] font-[500] leading-[20px]">
                    Time zone
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* div-row-button-3 */}
          <div className="w-full flex justify-between">
            <div className="max-w-[271px] w-full text-[14px] font-[500] leading-[24px] text-[#E0E0FFCC] ">
              When press «Schedule Demo» button you agree with{" "}
              <Link href={"/"} className="text-[#00BBFF] text-[14px] font-[500] leading-[24px]">Terms of Service </Link>{" "}
            </div>

            {/* button */}
            <div className="max-w-[180px] w-full"> <Button text={"Schedule Demo " } extraClasses={"max-w-[180px] w-full bg-gradient-to-r from-[#00BBFF] to-[#4579F5] "} href={"/"}/>  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleDemo;
