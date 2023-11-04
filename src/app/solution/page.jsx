import Plug from "@/components/Plug&PlaySolutions/Plug&PlaySolutions";
import Solutionhero from "./Solutionhero";
import Useourtechnology from "@/components/UseOurA.I.Technology/UseOurTechnology";
import About from "@/components/AboutSolution/About";
import Profitableswiper from "@/components/ProfitableSwiper/ProfitableSwiper";
import ScheduleDemo from "@/components/ScheduleDemo/ScheduleDemo";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Solution",
};
function SignupPage() {
  return (
    <div className="bg-[#15161B] pt-[86px]   w-full  mx-auto ">
      <Solutionhero />
      <div className="  z-30   bg-[#F5F7FA]  ">
        <Useourtechnology />
      </div>
      <div className="   bg-[#0E0F12]  ">
        <Plug />
      </div>
      <div className="   bg-[#F5F7FA] pb-[120px] ">
        <About />
        <Profitableswiper/>
      </div>
      <div className="   bg-[#0E0F12]  ">
        <ScheduleDemo />
      </div>
      <Footer/>
    </div>
  );
}

export default SignupPage;
