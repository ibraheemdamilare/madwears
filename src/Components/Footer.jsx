import { FaPhone, FaWhatsapp } from "react-icons/fa"


const Footer = () => {
  return (
    <>
        <div className="bg-red-100 pb-12">
            <p className=' ml-5 font-quicksand font-extrabold py-8 text-2xl text-red-600'>Mad Wears</p>

            <div className="flex justify-between">
                <div >
                    <p className="font-poppins ml-5 pb-1 border-black border-b-2 w-fit text-center px-3">Contact Us</p>

                    <div className="mt-8 ml-5 flex justify-between">
                        <FaWhatsapp /> 
                        <p className="pl-2 text-sm -mt-0.5">
                            Whatsapp <br/>+234 916 768 6576
                        </p>
                    </div>

                    <div className="mt-8 ml-5 flex justify-between">
                        <FaPhone /> 
                        <p className="pl-2  text-sm -mt-0.5">
                        Call <br/>+234 907 807 0684
                        </p>
                    </div>

                </div>
                <div>

                <p className="font-poppins mr-5 pb-1 border-black border-b-2 w-fit text-center px-0.5">Popular Categories</p>
                <ul className="mt-8 ml-4">
                    <li className="pt-2 list-disc">Round neck tees</li>
                    <li className="pt-2 list-disc">Joggers</li>
                    <li className="pt-2 list-disc">Sweatshirts</li>
                    <li className="pt-2 list-disc">Shorts</li>
                </ul>

                </div>
            </div>

            <div className="border-b-2 border-red-600 mx-8 mt-14"></div>
            <p className="italic font-quicksand text-xs text-center mt-2">(c) mad wears 2024</p>
        </div>
    </>
  )
}

export default Footer