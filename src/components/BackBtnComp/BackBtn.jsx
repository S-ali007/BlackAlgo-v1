import { popins } from "@/app/layout";
import Link from "next/link";

function BackBtn({ extraclasses, text ,href}) {
  return (
    <div
      className="max-w-[1680px] w-full  flex flex-col  justify-center "
      
    >
      <Link href={`${href}`} className="max-w-[24px] w-full">
        <img src="/arrow-left-back/arrow_left-1.svg" alt="" />
      </Link>

      <div
        className={` ${popins.className}, ${extraclasses} text-[#fff] mt-[16px] max-w-[439px] w-full font-[600] leading-[36px]  text-[30px]`}
      >
        {text}
      </div>
    </div>
  );
}

export default BackBtn;
