import Footer from "@/components/Footer";
import Chano from "./Signup";
import Login from "../login/Login";

export const metadata = {
  title: "Signup",
};
function SignupPage() {
  return (
    <div className="bg-[#0E0F12] pt-[86px]  h-screen  w-full  mx-auto">
      {/* <Chano/> */}
      <Login />

      <div className=" relative mt-[-320px] z-20 ">
        <Footer />
      </div>
    </div>
  );
}

export default SignupPage;
