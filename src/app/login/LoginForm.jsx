import Button from "@/components/Button/Button";
import Link from "next/link";
import { popins } from "../layout";

function LoginForm() {
  return (
    <div className=" shadow-3xl h-max max-w-[536px] w-full rounded-[24px] bg-[#15161B] flex flex-col gap-[40px] p-[40px]  mt-[-74px] z-30">
      <div
        className={`${popins.className} max-w-[279px] w-full text-[36px] font-[700] leading-[36px] tracking-[-1px] text-[#fff]  `}
      >
        Login
      </div>
      {/* name----- */}
      <div className="max-w-[456px] w-full flex flex-col gap-[24px]">
        {/* Email */}
        <div>
          <div className="text-[13px] font-[500] leading-[16px] pl-[16px] text-[#E0E0FF99] max-w-[41px] w-full">
            Email
          </div>
          <div className="max-w-[456px] w-full mt-[8px]">
            <input
              type="text"
              className="bg-[#E0E0FF08] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
            />
          </div>
        </div>
        {/* password */}
        <div>
          <div className="text-[13px] font-[500] leading-[16px] pl-[16px] text-[#E0E0FF99] max-w-[456px] w-full">
            <div className="max-w-[456px] w-full flex justify-between  pr-[16px]">
              <div className="max-w-[64px] text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] w-full">
                Password
              </div>
              <div className="max-w-[130px] w-full">
                <Link
                  className="text-[#00BBFF]  text-[13px] font-[500] leading-[16px]"
                  href={"/login"}
                >
                  Forgot a password?
                </Link>{" "}
              </div>
            </div>
          </div>

          <div className="max-w-[456px] w-full mt-[8px]">
            <input
              type="password"
              className="bg-[#E0E0FF08] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
            />
          </div>
        </div>
      </div>
      {/* btn */}
      <div className="max-w-[456px] w-full flex justify-between   items-center">
        <div className="max-w-[213px] w-full flex gap-[4px] text-[#fff]">
          <div className="max-w-[128px] w-full text-[#E0E0FF99] text-[14px] font-[500] leading-[24px]">
            Not a member?
          </div>
          <Link
            className="max-w-[87px] w-full text-[#00BBFF] leading-[24px] font-[600] text-[14px]"
            href={"/signup"}
          >
            Signup now
          </Link>
        </div>
        {/* btn */}
        <div className="max-w-[95px] w-full ">
          <Button
            text={"Login"}
            extraClasses={
              " bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shrink-0 max-w-[95px] w-full"
            }
            href={"/login"}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
