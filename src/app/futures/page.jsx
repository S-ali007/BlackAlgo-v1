import Footer from '@/components/Footer'
import Futures from './Futures'

function page() {
  return (
    <div className="bg-[#0E0F12] pt-[86px]   w-full  mx-auto">
    <Futures />

    <div className=" relative  z-20 ">
      <Footer />
    </div>
  </div>
  )
}

export default page
