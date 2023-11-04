import { popins } from "@/app/layout";
import SignupStepCard from "./SignupStepCard";
function GetStartedToday() {
  return (
    <div className="w-full   flex flex-col items-center  max-w-[1680px] mx-auto bg-[#0E0F12] pt-[72px]">
      <h1 className=" font-[600] leading-[20px] text-[14px] uppercase text-[#00BBFF] ">
        Step-by-step
      </h1>
      <div
        className={`max-w-[424px] w-full text-[#fff] text-[48px] font-[600] leading-[48px] tracking-[-2px] mt-[16px] ${popins.className}`}
      >
        Get Started Today!
      </div>


      {/* steps-cards */}
      <div className="mt-[48px]  w-full flex flex-wrap gap-[24px]  items-center mx-auto justify-center">
     <SignupStepCard />
      </div>
    </div>
  );
}

export default GetStartedToday;
