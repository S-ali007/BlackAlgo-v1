import { popins } from "@/app/layout";

function ProvenTraceRecord() {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(90deg, #131416 50%, rgba(19, 20, 22, 0.00) 100%)",
  };
  return (
    <div className="bg-[#131416] max-w-[1680px]   w-full  justify-end  pt-[73px] flex  pb-[100px]  ">
      <div className="max-w-[1502px] w-full flex">
      {/* left-side */}
      <div className="flex flex-col gap-[48px] max-w-[424px] w-full pt-[70px] z-10  ">
        <div
          className={`${popins.className} font-[600] text-[#fff] leading-[48px]  text-[48px] `}
        >
          A Proven Track record Since 2018
        </div>
        <div className="text-[#E0E0FFCC] leading-[28px] max-w-[424px] w-full text-[16px] font-[500]">
          Blackalgo,s A.I. Trading Bots have proven to deliver outstanding
          results, with an average performance of +5.39% per month in the last 4
          years* (audited track record). This performance stands out as one of
          the most impressive in the industry. Our customers can access these
          cutting-edge trading bots and have them copy-trade directly in their
          own account
        </div>
      </div>
      {/* right-side */}
      <div className=" flex justify-between max-w-[1500px] w-full absolute  ">
        <div className=" max-w-[1680px] w-full ">
          <img
            className="absolute right-[0px] bottom-[-121px]"
            src="/proventrack_assets/wave-gredient.svg"
            alt=""
          />
          <div
            className="max-w-[631px] w-full h-[336px] absolute flex ml-[168px] mt-[231px]  justify-end items-start"
            style={gradientStyle}
          >
            <img
              src="/proventrack_assets/Audited_image asset.svg"
              alt=""
              className="max-w-[190px] w-full z-20 relative bottom-[5.5rem]  left-9 "
            />
          </div>
        </div>
        <div className=" max-w-[1680px] w-full   z-10 ">
          <img src="/proventrack_assets/cartoon_logo.svg" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProvenTraceRecord;
