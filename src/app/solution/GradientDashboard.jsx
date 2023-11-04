import Dashboard from "./Dashboard";



const Gradientdashboard = ({ children }) => {
  const gradientStyle = {
    backgroundImage: "linear-gradient(141deg, #001687 5.29%, #05B6FE 101.76%)",
  };



 

  return (
    <div className=" max-w-[957px] w-full relative flex justify-center ">
      <div
        className=" max-w-[431px] w-full min-h-[1152px] h-full  absolute mt-[19px]  blur-[94.5px] "
        style={gradientStyle}
      ></div>
     
     
      <div className="max-w-[957px] w-full relative p-[8px]  rounded-l-3xl  bg-[#15161B]  shadow-3xl    flex   flex-col  justify-end  ">
     <Dashboard />
      </div>
    </div>
  );
};

export default Gradientdashboard;
