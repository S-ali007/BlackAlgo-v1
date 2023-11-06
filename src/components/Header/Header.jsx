"use client"
import { useEffect } from "react";
import Button from "../Button/Button";
import { usePathname } from 'next/navigation'

const Header = ({ children, extraClasses }) => {
  
const pathname = usePathname()
const url = `${pathname}`
    console.log(url)

    useEffect(() => {
      const url = `${pathname}`
      console.log(url)
      
    }, [pathname])
   
  
  return (
    <>
    
     
   { url !=='/dashboard' &&(<nav className="  w-full bg-transparent fixed  z-40 ">
      <div
        className={`${extraClasses} max-w-[1680px] w-full  flex  justify-between  mx-auto px-[180px]  `}
      >
        <div className="flex gap-[48px] text-[#FFF] py-[30px]   items-center font-[600] ">
          <a href="/" className="max-w-[158px] w-full  ">
            <img
              src="/header_assets/BLACKALGO  logo.svg"
              alt="Logo - BLACKALGO"
            />
          </a>
          <a href="#Performance">Performance</a>
          <a href="/strategy">Strategies</a>
          <a href="#About">About</a>
        </div>

        <div className="flex max-w-[215px] w-full items-center justify-between">
          <div className="hover:cursor-pointer">
            <img src="/header_assets/night-mode switch.svg" alt="" />
          </div>
          <Button
            text={"Get Started"}
            extraClasses={" bg-gradient-to-r from-[#00BBFF] to-[#4579F5]"}
            href={"/signup"}
          />
        </div>
      </div>
    </nav>)}
          
  </>
  );
};

export default Header;
