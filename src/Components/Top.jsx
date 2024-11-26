import { FaLocationDot } from "react-icons/fa6";

const Top = () => {
  return (
    <>
       <div className="bg-[#F5F5F5] w-full h-6 flex justify-between items-center">
        <div>
        <p className="text-[#A0A0A0] ml-5 text-[10px] font-poppins">Welcome to MAD Wears!</p>
        </div>
        <div className="flex justify-center items-center mr-5">
            <FaLocationDot  />
            <p className="  text-[#A0A0A0] ml-1 text-[10px] font-poppins">Ife, Osun State, Nigeria</p>
        </div>
        </div>
    </>
  )
}

export default Top