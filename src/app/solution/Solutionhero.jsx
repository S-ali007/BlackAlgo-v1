import Button from "@/components/Button/Button";
import { popins } from "@/app/layout";
import Gradientdashboard from "./GradientDashboard";

function Solutionhero() {
  return (
    <div className=" max-w-[1680px] w-full flex justify-end  items-center mx-auto overflow-hidden">
      <div
        className="max-w-[1560px] w-full  flex  pt-[140px] pb-[140px] aboslute   justify-between"
        id="/"
      >
        {/* left-div */}
        <div className="max-w-[558px] w-full flex flex-col gap-[36px] pt-[80px] ">
          <div className="w-full flex flex-col pl-[60px] gap-[64px]">
            {/* Main-Heading */}
            <h1
              className={`${popins.className} font-[600]  text-[64px] text-[#fff] leading-[64px]  w-full`}
            >
              Corporate Private Label Solution
            </h1>
            {/* Para */}
            <div className="max-w-[365px] w-full font-[500]  leading-[36px]">
              <p className="text-[#E0E0FFCC] text-[20px] leading-[36px] ">
                For Hedge Funds, Family Office and Banks, offering a branded
                solution and direct access to our algorithms
              </p>
            </div>
          </div>
          {/* logo3 */}
          <div className="max-w-[359px] w-full">
            <img src="/award2.svg" alt="" />
          </div>
        </div>
        {/* right-chart-div */}
        <div className="max-w-[957px] w-full   ">
          <Gradientdashboard />
        </div>
      </div>
    </div>
  );
}

export default Solutionhero;
