"use client";
import { popins } from "@/app/layout";
import { useState } from "react";

function Faq() {
  const [show, setShow] = useState([
    {
      id: 0,
      question: "What is Blackalgo?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
      open: true,
    },
    {
      open: false,
      id: 1,
      question:
        "Is it necessary to transfer funds to Blackalgo or can I keep my funds on my Binance account?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 2,
      question: "Which exchanges are integrated with Blackalgo?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 3,
      question: "What do I need to start using Blackalgo?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 4,
      question:
        "Is there a minimum funding requirement to start using Blackalgo?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 5,
      question:
        "How long were Blackalgo A.I. trading algorithms tested for and can I trust them?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 6,
      question: "Is manual trading required?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 7,
      question: "Is manual trading required?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 8,
      question: "Are any technical skills necessary?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 9,
      question:
        "Do I need to have my computer on for Blackalgo algorithms to copy the trades ib my account?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 10,
      question: "Which assets are Blackalgo A.I trading algorithms trading?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 11,
      question: "What are the risks?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
    {
      id: 12,
      question: "What Makes Blackalgo A.I Algorithms Unique?",
      answer:
        "In brief, Blackalgo is considered one of the best-performing AI-powered cryptocurrency trading algorithms in the industry. It allows you to duplicate its trades directly into your Binance account, enabling you to experience the same trades and performance as our algorithms (put disclaimer in footer to explain that the performance and trades will not be exactly the same because of the broker, the fees and the small time differences)",
    },
  ]);
  const handleClick = (id) => {
    const ShowData = show.map((item) => {
      if (item.id === id) {
        return { ...item, open: !item.open };
      } else {
        return { ...item, open: false };
      }
    });
    setShow(ShowData);
  };

  return (
    <>
      <div className="max-w-[1680px] w-full mx-auto bg-[#0E0F12] flex  justify-center pt-[120px] gap-[136px] pb-[120px]">
        <div
          className={`max-w-[312px] w-full text-[#fff] ${popins.className} text-[48px] font-[600] leading-[48px] tracking-[-2px]`}
        >
          Frequently Asked Questions
        </div>
        {/* cards */}

        <div className="max-w-[872px] flex flex-col gap-10 w-full   ">
          {show.map((items, id) => {
            return (
              <>
                <div
                  className=" bg-[#15161B] rounded-[24px] p-[24px] max-w-[872px]  w-full cursor-pointer"
                  onClick={() => {
                    handleClick(items.id);
                  }}
                >
                  {/* question */}
                  <div className="max-w-[872px] w-full flex justify-between ">
                    <div className="max-w-[717px] w-full text-[18px] font-[600] leading-[24px] tracking-[-0.4px] text-[#fff]">
                      {items.question}
                    </div>

                    <div className="max-w-[24px] w-full">
                      {items.open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17.5898 13.4062C18.1367 13.4062 18.6133 12.9375 18.6133 12.3672C18.6133 11.8047 18.1367 11.3281 17.5898 11.3281H6.41016C5.87891 11.3281 5.38672 11.8047 5.38672 12.3672C5.38672 12.9375 5.87891 13.4062 6.41016 13.4062H17.5898Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.9961 19.0703C12.5664 19.0703 13.0352 18.5859 13.0352 18.0547V13.4062H17.5898C18.1367 13.4062 18.6133 12.9375 18.6133 12.3672C18.6133 11.8047 18.1367 11.3281 17.5898 11.3281H13.0352V6.67969C13.0352 6.13281 12.5664 5.66406 11.9961 5.66406C11.4336 5.66406 10.9648 6.13281 10.9648 6.67969V11.3281H6.41016C5.87891 11.3281 5.38672 11.8047 5.38672 12.3672C5.38672 12.9375 5.87891 13.4062 6.41016 13.4062H10.9648V18.0547C10.9648 18.5859 11.4336 19.0703 11.9961 19.0703Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* answer */}

                  <div
                    className={`${
                      items.open ? " max-h-[250px] " : " max-h-0 "
                    } overflow-hidden h-[full] 0.3s ease-in-out  transition-all duration-700 max-w-[824px] w-full text-[14px] font-[500] text-[#E0E0FFCC] mt-[16px]`}
                  >
                    {items.answer}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Faq;
