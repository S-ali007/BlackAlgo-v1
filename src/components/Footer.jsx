import Link from "next/link";

function Footer() {
  return (
    <div className="w-full bg-[#131416]">
    <div className=" bg-[#131416] max-w-[1680px]  flex flex-col  justify-center px-[180px] mx-auto pb-[72px] ">
      {/* logo and social-links */}
      <div className="flex max-w-[1680px] w-full  justify-between text-[#FFF] py-[30px]   items-center font-[600]  ">
        <a href="/" className="max-w-[158px] w-full  ">
          <img
            src="/header_assets/BLACKALGO  logo.svg"
            alt="Logo - BLACKALGO"
          />
        </a>
        <div className="flex gap-[48px] text-[#FFF] py-[30px]   items-center font-[600]">
          {" "}
          <a href="#Performance">Performance</a>
          <a href="#Strategies">Strategies</a>
          <a href="#About">About</a>
        </div>
        {/* social logins btns */}
        <div className="max-w-[192px] w-full flex gap-[24px]">
          <Link className="max-w-[48px] w-full" href={"https://twitter.com/?lang=en"}>
            <img src="/twitter-asset.svg" alt="" />
          </Link>
          <Link className="max-w-[48px] w-full" href={"https://www.instagram.com/"}>
            <img src="/instagram-asset.svg" alt="" />
          </Link>
          <Link className="max-w-[48px] w-full" href={"https://discord.com/"}>
            <img src="/discord-assset.svg" alt="" />
          </Link>
        </div>
      </div>
      {/* Disclamer-content */}

      <div>
        <div className="text-[16px] font-[600] leading-[24px] text-[#fff] max-w-[88px] w-full">
          Disclaimer
        </div>
        <div className="mt-[12px] flex max-w-[1322px] w-full gap-[24px] text-[13px] font-[500] leading-[16px] text-[#E0E0FF99]">
          <div className="max-w-[648px] w-full">
          This website is operated by Blackalgo LLC (“Blackalgo”). By accessing this server and using Blackalgo’s products, website or mobile app, you acknowledge and agree to the following: <br /><br />
<span>1. Responsibility for Compliance: You are solely responsible for complying with all applicable laws and regulations related to your use of Blackalgo’s products, including those related to cryptocurrencies and blockchain technologies.<br />
</span>
<br />
<span>2. No Representations on Legal Matters: Blackalgo makes no representations or warranties regarding the legal status of cryptocurrencies or blockchain technologies, or their applicability to your use of Blackalgo’s products.<br />
</span>
<br />
<span>3. Assumption of Risks: You acknowledge and assume all legal, economic, and other risks associated with your use of Blackalgo’s products, including but not limited to market volatility and information security risks.<br />
</span>
<br />
<span>4. Restrictions on Use: The use of Blackalgo’s products may be restricted in certain jurisdictions. Blackalgo reserves the right to restrict the use of its products to citizens and residents of certain jurisdictions.<br />
</span>
          </div>

          <div className="max-w-[648px] w-full">
           <span>5. Informational Purpose Only: The materials and information provided on this website, including performance information, are intended solely for marketing and informational purposes and do not guarantee future profit. The information is not complete and past performance is not indicative of future results.</span> <br /><br />

             <span>6. No Responsibility for Losses: Blackalgo shall not be responsible for any losses, execution errors, or other damages that may occur in your trading account. You acknowledge that these risks are inherent in trading and you assume full responsibility for any and all damages that may result.</span>  <br /> <br />

            <span>7. Disclaimer of Liability: Blackalgo shall not be responsible for determining which laws may apply to your use of its products. If you do not agree with the terms of this disclaimer, please close this website.</span>  <br />
          </div>
        </div>
        <div className="flex max-w-[1680px] w-full mt-[48px]  justify-between"><div className="flex flex-col gap-[4px]">
          <div className="text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px] max-w-[157px] w-full">made by <Link href={"https://roobinium.io/"} className="text-[#fff] text-[14px] font-[500] leading-[20px]">roobinium.io</Link> </div>
          <div className="text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px] max-w-[317px] w-full">©2005-2023 BLACKALGO, All rights reserved.</div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px] max-w-[96px]  w-full">Risk Warning</div>
          <div className=" max-w-[199px] w-full text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px] ">Term of Use & Privacy Policy</div>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default Footer;
