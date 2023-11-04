import BackBtn from "@/components/BackBtnComp/BackBtn";
import Button from "@/components/Button/Button";

function Futures() {
  const maindata = [
    {
      id: 0,
      text: " Australia",
      flag: "/futures-assets/australia.svg",
    },
    {
      id: 1,

      text: "Netherlands ",
      flag: "/futures-assets/netherland.svg",
    },
    {
      id: 2,

      text: "Germany ",
      flag: "/futures-assets/Germany.svg",
    },
    {
      id: 3,

      text: "Italy ",
      flag: "/futures-assets/Italy.svg",
    },
    {
      id: 4,

      text: "Netherlands ",
      flag: "/futures-assets/netherland.svg",
    },
    {
      id: 5,

      text: "Germany ",
      flag: "/futures-assets/Germany.svg",
    },
    {
      id: 6,

      text: "Italy ",
      flag: "/futures-assets/Germany.svg",
    },
    {
      id: 7,

      text: "Australia ",
      flag: "/futures-assets/australia.svg",
    },
  ];
  return (
    <div className="max-w-[1320px] w-full  mt-[32px]   mx-auto pb-[316px]  ">
      <BackBtn text={"Futures"} href={"/exchange"} />

      <div className="max-w-[570px] w-full mt-[16px] text-[#E0E0FFCC] text-[14px] font-[500] leading-[24px]">
        Please see below regions to determine if you are eligible to connect
        Long Short. Countries with restricted futures access:
      </div>
      <div className="w-full flex flex-wrap gap-[24px] mt-[32px]  ">
        {maindata.map((item, id) => {
          return (
            <>
              <div
                className="max-w-[312px]  cursor-pointer hover:bg-[#E0E0FF08] w-full bg-[#E0E0FF08] rounded-[12px] flex items-center py-[20px]  pl-[20px]"
                id={item.id}
              >
                <div className="max-w-[145px] w-full flex gap-[12px]">
                  <div className="max-w-[32px] w-full">
                    <img src={item.flag} className="w-full" alt="" />
                  </div>
                  <div className="max-w-[73px] w-full text-[#fff] text-[16px] font-[600] leading-[24px] items-center flex">
                    {item.text}
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div></div>
      </div>

      <div className="w-full flex justify-end mt-[24px] gap-[16px]">
        <Button
          href={"/exchange"}
          text={"I Can't Use Futures"}
          extraClasses={"max-w-[193px] w-full border-transparent "}
        />
        <Button
          href={"/plan"}
          text={"I Can't Use Futures"}
          extraClasses={
            "max-w-[193px] w-full  bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shadow-3xl"
          }
        />
      </div>
    </div>
  );
}

export default Futures;
