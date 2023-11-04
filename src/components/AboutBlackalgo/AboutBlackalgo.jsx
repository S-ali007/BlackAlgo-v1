import { popins } from "@/app/layout";

function AboutBlackalgo() {
  return (
    <div className="w-full  flex flex-col justify-center items-center gap-[48px] pb-[120px]">
      <div
        className={`${popins.className} flex   justify-center items-center text-[48px] text-[#fff] font-[600] leading-[48px] tracking-[-2px] max-w-[381px] w-full  `}
      >
        About Blackalgo
      </div>

      <div className="text-[16px] max-w-[696px] w-full font-[500] text-[#E0E0FFCC] text-center">
        Established in 2005, BLACKALGO was one of Europe’s earliest industry
        adopters of AI for creating multiple trading strategies. The BLACKALGO
        AI-based trading system dynamically identifies profitable opportunities
        and places trades in order to generate profits at a speed and frequency
        that are impossible to match by a human trader. Because our technology
        also enables better mitigation of risks, you have more control over your
        investments
      </div>
      <div className="max-w-[1096px] w-full flex gap-[89px]">
        <div className="flex gap-[69px]">
          
        
        <div>
         <img src="/aboutBlackAlgo-asset/image1algo.svg" alt="" />
        </div>
       
        <div>
         <img src="/aboutBlackAlgo-asset/image1algo.svg" alt="" />

        </div>
        </div>
        <div>
            <img src="/aboutBlackAlgo-asset/award2.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutBlackalgo;
