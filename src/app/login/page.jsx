import Footer from "@/components/Footer";
import Login from "./Login";



export const metadata ={
    title: 'Login',

}
function LoginPage() {
  
  return (
    <div className=" bg-[#0E0F12] h-screen  w-full  mx-auto  ">
      <Login login/>
      <div className=" relative mt-[-320px] z-20 ">
          <Footer />
        </div>
    </div>
  );
}

export default LoginPage;
