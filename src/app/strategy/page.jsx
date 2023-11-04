import Footer from '@/components/Footer'
import Strategy from './Strategy'

function page() {
  return (
    <div className="bg-[#0E0F12] pt-[86px]   w-full  mx-auto ">
    <Strategy />

    <div className=" relative  z-20 ">
      <Footer />
    </div>
  </div>
  )
}

export default page
