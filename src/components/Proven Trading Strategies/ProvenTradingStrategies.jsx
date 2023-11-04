import { popins } from "@/app/layout";
import ProvenTradingStrategiesCards from "./ProvenTradingStrategiesCards";

function ProvenTradingStrategies() {
  return (
    <div className="w-full flex flex-col justify-center  gap-[48px]  relative pt-[120px] pb-[120px]">
      {/* left-div */}
      <div
        className={`max-w-[484px] w-full mx-auto text-[48px] text-[#fff] text-center font-[600] leading-[48px] ${popins.className}`}
      >
        Proven Trading Strategies
       </div>
      {/* right-chart-div */}
      <div className="max-w-[1344px] w-full mx-auto flex   justify-between">
        <ProvenTradingStrategiesCards/>
        
      </div>
    </div>
  );
}

export default ProvenTradingStrategies;
