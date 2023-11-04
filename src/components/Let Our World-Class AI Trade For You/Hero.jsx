import Button from "../Button/Button";
import HeroChart from "./chart-for-Let_Our_World";
import { popins } from "@/app/layout";

function Hero() {
  return (
    <div className="w-full flex justify-center  gap-[74px] pt-[290px]  pb-[275px] aboslute " id="/">
      {/* left-div */}
      <div className="max-w-[558px] w-full">
        {/* Main-Heading */}
        <h1
          className={`${popins.className} font-[600]  text-[64px] text-[#fff] leading-[64px]  w-full`}
        >
          Let Our World-Class AI Trade For You
        </h1>
        {/* Para */}
        <div className="max-w-[347px] w-full font-[500] mt-[64px] leading-[36px]">
          <p className="text-[#E0E0FFCC] text-[20px] ">
            Revolutionising the Trading Industry With Our Cutting-Edge AI
            Technology Since 2005
          </p>
        </div>
        {/* Hero-Buttons */}
        <div className="max-w-[347px] w-full flex gap-[24px] mt-[36px]">
          {/* Get-Started Btn */}
          <div className="max-w-[143px] w-full">
            <Button
              text={"Get Started"}
              extraClasses={" bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shrink-0"}
              href={"/signup"}
            />
              
          </div>
          {/* How it works BTn */}
          <button className="gap-[12px] max-w-[180px] w-full flex justify-center items-center rounded-[12px] bg-[#E0E0FF0F] shrink-0">
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
                d="M9.34717 17.3899C9.01099 17.5876 8.75391 17.6799 8.45728 17.6799C7.8772 17.6799 7.43555 17.2383 7.43555 16.5198V6.98145C7.43555 6.25635 7.8772 5.8147 8.45728 5.8147C8.75391 5.8147 9.01099 5.91357 9.34717 6.10474L17.198 10.6531C17.7847 10.9958 18.0549 11.2859 18.0549 11.7473C18.0549 12.2087 17.7847 12.4988 17.198 12.8416L9.34717 17.3899ZM9.01099 15.676C9.01099 15.7288 9.03076 15.7551 9.07031 15.7551C9.08596 15.7551 9.10574 15.7469 9.12964 15.7369C9.13594 15.7343 9.14254 15.7315 9.14941 15.7288L15.9126 11.8198C15.9456 11.8 15.9653 11.7803 15.9653 11.7473C15.9653 11.7144 15.9456 11.6946 15.9126 11.6814L9.14941 7.76587C9.14254 7.76312 9.13594 7.76037 9.12964 7.75773C9.10574 7.74776 9.08596 7.7395 9.07031 7.7395C9.03076 7.7395 9.01099 7.76587 9.01099 7.81201V15.676Z"
                fill="white"
              />
            </svg>
            <div className="text-[#fff] font-[600] text-[16px]">How it works</div>
          </button>
        </div>
      </div>
      {/* right-chart-div */}
      <div className="max-w-[688px] w-full   ">
        <HeroChart />
      </div>
    </div>
  );
}

export default Hero;
