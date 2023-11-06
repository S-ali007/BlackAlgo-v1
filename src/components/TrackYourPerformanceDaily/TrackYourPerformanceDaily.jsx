import Button from "../Button/Button";
import { popins } from "@/app/layout";
import Dashboard from "./TrackTrack Your Performance-Dashboard/Dashboard";

function TrackYourPerformanceDaily() {
  return (
    <div className="w-full flex flex-col justify-center  gap-[48px]  relative bg-[#0E0F12] pt-[120px] pb-[120px]">
      {/* left-div */}
      <div
        className={`max-w-[484px] w-full mx-auto text-[48px] text-[#fff] text-center font-[600] tracking-[-2px] leading-[48px] ${popins.className}`}
      >
        Track Your Performance Daily
      </div>
      <div className="text-[#E0E0FFCC] text-[16px] max-w-[534px] w-full  items-center mx-auto text-center ">
        Easily monitor the growth and evolution of your account through our
        visually appealing and user-friendly dashboard. All crucial metrics are
        readily available on our Dashboard
      </div>
      {/* right-chart-div */}
      <div className="max-w-[1065px] w-full mx-auto    ">
        <Dashboard/>
      </div>
    </div>
  );
}

export default TrackYourPerformanceDaily;
