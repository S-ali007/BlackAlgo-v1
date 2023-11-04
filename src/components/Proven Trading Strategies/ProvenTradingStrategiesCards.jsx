import { popins } from "@/app/layout";
import Button from "../Button/Button";

function ProvenTradingStrategiesCards() {
  const gradientStyles = {
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 187, 255, 0.40) 0%, rgba(0, 187, 255, 0.00) 110.05%)",
  };
  const gradient = {
    backgroundImage: "linear-gradient(141deg, #0BF 5.29%, #05B6FE 101.76%)",
  };

  const maindata = [
    {
      id: 0,
      title: "Conservative ",
      title2: "Guaranteed",
      para: "For Investors who favor stability and steady returns in their investments, this strategy serves as a reliable source of security amidst market unpredictability",
      para2: " Binance account",
      imgUrl: "/proventradingcard1.svg",
      fixedincome:"544.38%",
      longshort:"€4,938,841.51"
    },
    {
      id: 1,
      title: "Balanced ",
      para: "For Investors who favor stability and steady returns in their investments, this strategy serves as a reliable source of security amidst market unpredictability",
      imgUrl: "/proventradingcard2.svg",
      fixedincome:"544.38%",
      longshort:"€4,938,841.51"
    },
    {
      id: 2,
      title: "Dynamic ",
      para: "For Investors who favor stability and steady returns in their investments, this strategy serves as a reliable source of security amidst market unpredictability",
      imgUrl: "/proventradingcard3.svg",
      fixedincome:"544.38%",
      longshort:"€4,938,841.51"
    },
  ];
  return (
      <>
      {maindata.map((item,id) => {
        return (
          <> 
             <div className="w-full max-w-[424px] bg-[#15161B] rounded-[24px] pt-[8px] px-[8px] overflow-hidden" key={id}>
{/* img div */}
            <div className="max-w-[408px] w-full overflow-hidden rounded-[24px] max-h-[200px]">

                <img src={item.imgUrl} alt="" />
              {/* <div className="relative top-[68.5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="408"
                  height="83"
                  viewBox="0 0 408 83"
                  fill="none"
                >
                  <path
                    d="M-37 81L449.5 1.5"
                    stroke="#00BBFF"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                className="max-w-[489.5px] w-full  h-[131.5px] blur-[54.5px]"
                style={gradientStyles}
              ></div>
              <div
                className=" relative max-w-[489px] w-full h-[626px] blur-[54px] transform rotate-[39.475deg] overflow-hidden top-[0]  justify-center flex"
                style={gradientStyles}
              ></div>
              <div className=" relative max-w-[234px] w-full h-[131px] bg-gradient-to-r from-[#00BBFF66] to-[#00BBFF]   overflow-hidden "></div> */}
            </div>
          {/* content-div */}
      <div className="max-w-[344px] w-full mx-auto mt-[40px] flex flex-col gap-[24px] pb-[40px]">
        {/* heading div */}
        <div
          className={`${popins.className} text-[30px] font-[600] leading-[36px] text-[#fff] max-w-[344px] w-full`}
        >
          {item.title}
        </div>
        {/* Paragraph-div */}
        <div className="max-w-[344px] w-full  text-[14px] font-[400] leading-[24px] text-[#E0E0FFCC]">
          {item.para}
        </div>
        {/* fixed income div */}
        <div className="border-t-[#E0E0FF1F] border-t pt-[24px] max-w-[344px] w-full flex flex-col gap-[40px]">
          {/* 1-div */}
          <div className=" max-w-[344px] w-full flex flex-col gap-[12px]">
            {" "}
            <div className="flex max-w-[344px] w-full justify-between">
              <div className="text-[14px] text-[#E0E0FFCC]">Fixed Income</div>
              <div className="text-[14px] text-[#00BBFF] font-[700] leading-[20px]">
               {item.fixedincome}
              </div>
            </div>
            <div className="flex max-w-[344px] w-full justify-between">
              <div className="text-[14px] text-[#E0E0FFCC]">Long Short</div>
              <div className="text-[14px] text-[#fff] font-[700] leading-[12px]">
                {item.longshort}
              </div>
            </div>
          </div>
          {/* Get Started-button */}
              <Button text={"Get Started"} extraClasses={"bg-[#E0E0FF0F] max-w-[344px] w-full border-none"} href={"/login"}/>
        </div>
      </div>
    </div></>
        );
      })}
      
      </>);
}

export default ProvenTradingStrategiesCards;
