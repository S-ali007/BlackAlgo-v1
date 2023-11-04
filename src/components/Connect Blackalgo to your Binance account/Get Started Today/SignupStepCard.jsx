const SignupStepCard = ({ no, text, innerContent, link }) => {
  const maindata = [
    {
      id: 0,
      no: "01",
      text: "Sign Up ",
      para: "Sign up for Blackalgo",
      link: "here",
    },
    {
      id: 1,
      no: "02",
      text: "Trading Strategy ",
      para: "Choose your trading strategy Conservative / Balanced / Dynamic",
    },
    {
      id: 2,
      no: "03",
      text: "Connect ",
      para: "Connect Blackalgo to your Binance account",
    },
    {
      id: 3,
      no: "04",
      text: "Secured ",
      para: "No transfer is required, your funds remain securely on your Binance",
    },
    {
      id: 4,
      no: "05",
      text: "Start Earning ",
      para: "Start earning and change your trading strategy anytime",
    },
    {
      id: 5,
      no: "06",
      text: "Get Started Now ",
      para: "Start earning and change your trading strategy anytime",
    },
  ];
  return (
    <>
      {maindata.map((items, id) => {
        return (
          <>
            {" "}
            <div className="max-w-[424px] w-full rounded-[24px] bg-[#15161B] p-[32px] hover:bg-gradient-to-r from-[#00BBFF] to-[#4579F5] group  cursor-pointer z-30">
              <div className="flex gap-[32px] ">
                {/* logo */}

                <div className="max-w-[67px] w-full group-hover:bg-white  bg-[#00BBFF1F]   rounded-[36px] flex  justify-center items-center text-[30px] text-[#00BBFF] font-[800] leading-[36px] tracking-[-1px]">
                  <div>{items.no}</div>
                </div>
                {/* innercontent */}
                <div>
                  <div className="flex gap-[8px] ">
                    <div className=" tracking-[-0.4px] font-[600] text-[18px] leading-[24px] text-[#fff]">
                      {items.text}
                    </div>
                    {id=='5' && <div className="">
                      {/* <img src={items.imageUrl} alt="" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.3633 18.5078C13.6133 18.5078 13.8555 18.4062 14.0664 18.1953L19.1914 13.0859C19.3867 12.8906 19.5039 12.6172 19.5039 12.3438C19.5039 12.0703 19.3867 11.7891 19.1914 11.6016L14.082 6.49219C13.8633 6.27344 13.6133 6.17188 13.3633 6.17188C12.7852 6.17188 12.3789 6.58594 12.3789 7.125C12.3789 7.42188 12.5039 7.65625 12.6836 7.84375L14.457 9.625L16.4336 11.4375L14.6758 11.3438H5.52734C4.91016 11.3438 4.49609 11.75 4.49609 12.3438C4.49609 12.9375 4.91016 13.3438 5.52734 13.3438H14.6758L16.4336 13.2422L14.457 15.0625L12.6836 16.8359C12.5039 17.0234 12.3789 17.2578 12.3789 17.5547C12.3789 18.1016 12.7852 18.5078 13.3633 18.5078Z"
                          fill="white"
                        />
                      </svg>
                    </div>}
                  </div>

                  <div className="max-w-[256px] w-full text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px]">
                    {items.para} <br />
                    <span className="  underline cursor-pointer text-[#00BBFF] group-hover:text-white  ">
                      {items.link}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SignupStepCard;
