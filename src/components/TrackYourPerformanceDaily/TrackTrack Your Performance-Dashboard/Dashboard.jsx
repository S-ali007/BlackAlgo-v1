"use client"

import { useState } from "react";

function Dashboard() {
  const gradientStyle = {
    backgroundImage: "linear-gradient(#001687, #05B6FE)",
    
  };

  const [toggleStates, setToggleStates] = useState([false, false, false]);
  const handleCheckboxChange = (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };
  return (
    <div>
      <div className="blur-[94.5px] max-w-[1031px] flex justify-center items-center mt-[200px] w-full  h-[350px] absolute " style={gradientStyle}  >
      </div>
    <div className="max-w-[1081px] w-full  mt-[48px] bg-[#15161B]   p-2 rounded-[26px]   overflow-hidden relative" >
      <div className="max-w-[1065px] w-full  bg-[#0E0F12] p-5 pb-0 rounded-[26px] ">
        <div>
          <h1 className="text-[#fff] font-[600] text-[28px]">Dashboard</h1>
        </div>

        <div className="flex mt-[19px] gap-[20px] ">
          {/* Today performance */}
          <div className="bg-[#E0E0FF0F] w-[50%] rounded-[18px] p-[16px] flex justify-between items-center">
            <div>
              <div className="text-[#E0E0FFCC]">Today,s Performance</div>
              <div className="text-[#fff] text-[24px] font-[600] mt-[3px]">
                $2,145.16
              </div>
            </div>
            {/* img */}
            <div>
              <img
                src="/dashboard assets/asset 1pricing.svg"
                alt=""
                className="mix-blend-lighten"
              />
            </div>
          </div>
          {/* Profit/loss */}
          <div className="bg-[#E0E0FF0F] w-[50%] rounded-[18px] p-[16px] flex justify-between items-center ">
            <div>
              <div className="text-[#E0E0FFCC]">
                Profit/Loss{" "}
                <select name="Days" id="" className="w-auto bg-inherit">
                  <option label="1">1</option>
                  <option label="2">2</option>
                  <option label="3">3</option>
                  <option label="4">4</option>
                  <option label="5">5</option>
                  <option label="6">6</option>
                  <option label="7">7</option>
                  <option label="8">8</option>
                  <option label="9">9</option>
                  <option label="10">10</option>
                  <option label="11">11</option>
                  <option label="12">12</option>
                  <option label="13">13</option>
                  <option label="14">14</option>
                </select>
              </div>
              <div className="text-[#fff] text-[24px] font-[600] mt-[5px]">
                $2,145.16
              </div>
            </div>
            {/* image prfit /loss */}
            <div>
              <img
                src="/dashboard assets/profit-loss asset.svg"
                alt=""
                className="mix-blend-lighten"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-[18px] gap-[20px]">
          {/* Last Month Performance  */}
          <div className="bg-[#E0E0FF0F] w-[40%] rounded-[20px] py-[14px] px-[20px] flex justify-between items-center">
            <div>
              <div className="text-[#E0E0FFCC]">Last Month Performance </div>
              <div className="text-[#fff] text-[24px] font-[600] mt-[3px]">
                $2,145.16
              </div>
            </div>
            {/* img */}
            <div>
              <img
                src="/dashboard assets/todays performance assets.svg"
                alt=""
                className="mix-blend-lighten"
              />
            </div>
          </div>
          {/* Life Time Earning */}
          <div className="bg-[#E0E0FF0F] w-[30%] rounded-[20px] py-[14px] px-[20px] flex justify-between items-center">
            <div>
              <div className="text-[#E0E0FFCC]">
                Lifetime Earnings
                <select name="Days" id="" className="w-auto bg-inherit">
                  <option label="1">1</option>
                  <option label="2">2</option>
                  <option label="3">3</option>
                  <option label="4">4</option>
                  <option label="5">5</option>
                  <option label="6">6</option>
                  <option label="7">7</option>
                  <option label="8">8</option>
                  <option label="9">9</option>
                  <option label="10">10</option>
                  <option label="11">11</option>
                  <option label="12">12</option>
                  <option label="13">13</option>
                  <option label="14">14</option>
                </select>
              </div>
              <div className="text-[#fff] text-[24px] font-[600] mt-[5px]">
                $2,145.16
              </div>
              {/* img for Lifetime Earning */}
              <div>
                <img
                  src="/public/dashboard assets/Lifetimeearning asset.svg"
                  alt=""
                  className="mix-blend-lighten"
                />
              </div>
            </div>
            {/* image for Life time Earning */}
            <div>
              <img
                src="/dashboard assets/Lifetimeearning asset.svg"
                alt=""
                className="mix-blend-lighten"
              />
            </div>
          </div>
          {/* portfolio value */}
          <div className="bg-[#E0E0FF0F] w-[30%] rounded-[20px] p-[14px] flex justify-between items-center">
            <div>
              <div className="text-[#E0E0FFCC]">
                Portfolio Value
                <select name="Days" id="" className="w-auto bg-inherit">
                  <option label="1">1</option>
                  <option label="2">2</option>
                  <option label="3">3</option>
                  <option label="4">4</option>
                  <option label="5">5</option>
                  <option label="6">6</option>
                  <option label="7">7</option>
                  <option label="8">8</option>
                  <option label="9">9</option>
                  <option label="10">10</option>
                  <option label="11">11</option>
                  <option label="12">12</option>
                  <option label="13">13</option>
                  <option label="14">14</option>
                </select>
              </div>
              <div className="text-[#fff] text-[24px] font-[600] mt-[5px]">
                $8,145.16
              </div>
            </div>
            {/* image portfolieo value */}
            <div>
              <img
                src="/dashboard assets/portfolio assets.svg"
                alt=""
                className="mix-blend-lighten"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-[20px] gap-[20px]">
          {/* Crypto Strategies */}
          <div className="bg-[#E0E0FF0F] w-[40%] rounded-[20px] py-[14px] px-[20px]">
            <div className="text-[#fff]">Crypto Strategies</div>
            <div className=" text-[#E0E0FFCC] text-[14px] font-[600] mt-[7px]">
              On ETH/USDT and BTC/USDT
            </div>

            {/* conservative */}
            <div>
              <div className="flex  justify-between mt-[20px] ">
                <div className="flex gap-[5px]"><div>
                  <img
                    src="/dashboard assets/conservative asset dashboard.svg"
                    alt=""
                    className="mix-blend-lighten"
                  />
                </div>
                <div className="text-[#fff] ">
                  Conservation
                  <div className="text-[14px] text-[#E0E0FFCC]">
                    Earn Steadily and be happy
                  </div>
                </div>
                </div>
                
                <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
                  <input
                    type="checkbox"
                    name="autoSaver"
                    className="sr-only"
                    checked={toggleStates[0]}
                    onChange={() => handleCheckboxChange(0)}
                  />
                  <span
                    className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                      toggleStates[0] ? "bg-[#00BBFF]" : "bg-[#CCCCCE]"
                    }`}
                  >
                    <span
                      className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                        toggleStates[0] ? "translate-x-6" : ""
                      }`}
                    ></span>
                  </span>
                </label>
              </div>
              <div className="flex  justify-between mt-[20px] ">
                <div className="flex gap-[5px]"><div>
                  <img
                    src="/dashboard assets/Balanced-dashboard asset.svg"
                    alt=""
                    className="mix-blend-lighten"
                  />
                </div>
                <div className="text-[#fff] ">
                  Balanced
                  <div className="text-[14px] text-[#E0E0FFCC]">
                    Earn Steadily and be happy
                  </div>
                </div>
                </div>
                
                <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
                  <input
                    type="checkbox"
                    name="autoSaver"
                    className="sr-only"
                    checked={toggleStates[1]}
                    onChange={() => handleCheckboxChange(1)}
                  />
                  <span
                    className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                      toggleStates[1] ? "bg-[#00BBFF]" : "bg-[#CCCCCE]"
                    }`}
                  >
                    <span
                      className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                        toggleStates[1] ? "translate-x-6" : ""
                      }`}
                    ></span>
                  </span>
                </label>
              </div>
              <div className="flex  justify-between mt-[20px] ">
                <div className="flex gap-[5px]"><div>
                  <img
                    src="/dashboard assets/Dynamic dashboard assets.svg"
                    alt=""
                    className="mix-blend-lighten"
                  />
                </div>
                <div className="text-[#fff] ">
                  Dynamic
                  <div className="text-[14px] text-[#E0E0FFCC]">
                    Earn Steadily and be happy
                  </div>
                </div>
                </div>
                
                <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
                  <input
                    type="checkbox"
                    name="autoSaver"
                    className="sr-only"
                    checked={toggleStates[2]}
                    onChange={() => handleCheckboxChange(2)}
                  />
                  <span
                    className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                      toggleStates[2] ? "bg-[#00BBFF]" : "bg-[#CCCCCE]"
                    }`}
                  >
                    <span
                      className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                        toggleStates[2] ? "translate-x-6" : ""
                      }`}
                    ></span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* account Growth */}
          <div className="bg-[#E0E0FF0F] w-[60%] rounded-[18px] py-[14px]  px-[20px]">
            <div className="flex">
              <div className="text-[#fff] font-[600] w-full flex  items-center ">
                Account Growth
              </div>
              <div className="flex max-w-[400px] w-full items-center text-[#fff] rounded-[10px]  ">
                <div className="max-w-[70px] w-full py-[5px] px-[10px] cursor-pointer bg-[#0E0F12] hover:bg-[#E0E0FF0F] ">
                  1h
                </div>
                <div className="max-w-[70px] w-full py-[5px] px-[10px] cursor-pointer bg-[#0E0F12] hover:bg-[#E0E0FF0F]">
                  24h
                </div>
                <div className="max-w-[70px] w-full  py-[5px] px-[10px] cursor-pointer bg-[#0E0F12] hover:bg-[#E0E0FF0F]">
                  7d
                </div>
                <div className="max-w-[70px] w-full  py-[5px] px-[10px] cursor-pointer bg-[#0E0F12] hover:bg-[#E0E0FF0F]">
                  30d
                </div>
                <div className="max-w-[70px] w-full  py-[5px] px-[10px] cursor-pointer bg-[#0E0F12] hover:bg-[#E0E0FF0F]">
                  90d
                </div>
                <div className="max-w-[70px] w-full  py-[5px] px-[20px] cursor-pointer bg-[#0E0F12] hover:bg-[#E0E0FF0F]">
                  1y
                </div>
              </div>
            </div>
            <div className="mt-[10px]">
              <img
                src="/dashboard assets/dashboard chart asset.svg"
                alt=""
                className="mix-blend-lighten"
              />
            </div>
          </div>
        </div>
        {/* transaction History */}
       
          <div className="flex ">
          <div className="bg-[#E0E0FF0F] w-[100%] rounded-[18px] p-[16px] flex justify-between items-center mt-[20px] rounded-b-none">
            <div className="w-full  ">
              <div className=" text-[#fff]">Transaction history</div>
              <div className=" text-[12px] text-[#fff] font-[600] mt-[3px] flex justify-between items-end pl-[30px]">
               <div>Instrument</div>
               <div>Deal</div>
               <div>Order</div>
               <div>Time</div>
               <div>Type</div>
               <div>Size</div>
               <div>close Price</div>
               <div>Commision</div>
               <div>Swap</div>
               <div>Profit</div>
              </div>
              <div className=" text-[12px] text-[#E0E0FFCC] font-[600] mt-[10px] flex justify-between items-end pl-[30px]">
               <div>BTC/USDT</div>
               <div>#32213</div>
               <div>#32213</div>
               <div >Feb 2023 14:17</div>
               <div>sell</div>
               <div>25.5</div>
               <div>0.6456</div>
               <div>0</div>
               <div>0</div>
               <div>2,453455</div>
              </div>
            </div>
           
            
          </div>
          </div>
        
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
