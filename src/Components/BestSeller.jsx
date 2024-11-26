import images from "../../public/image2.jpg";

const BestSeller = () => {
  return (
    <div>
      <div className="ml-5 mb-8 mt-14">
        <p className="text-[16px] font-quicksand font-semibold border-b-2 border-red-300 pb-1 w-fit ">
          Shop from our{" "}
          <span className="text-red-600 font-bold">Best Sellers</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-start">
          <div className="bg-gray-300 border-2 hover:border-red-600 w-1/3 mb-1 rounded-lg">
            <img src={images} alt="" className="cursor-pointer" />
            <div className="bg-white text-center font-semibold  pb-2 font-poppins">
              <p className="text-[12px] pt-4">Cupid Sniper Streetwear</p>
              <p className="text-[12px] mb-3">#109,999</p>
              <p className="bg-red-300 cursor-pointer p-1 rounded-lg text-[12px] mx-2">
                Add to cart
              </p>
            </div>
          </div>

          <div className="bg-gray-300 border-2 hover:border-red-600 w-1/3 mb-1 rounded-lg">
            <img src={images} alt="" className="cursor-pointer" />
            <div className="bg-white text-center font-semibold pb-2 font-poppins">
              <p className="text-[12px] pt-4">Cupid Sniper Streetwear</p>
              <p className="text-[12px] mb-3">#109,999</p>
              <p className="bg-red-300 cursor-pointer p-1 rounded-lg text-[12px] mx-2">
                Add to cart
              </p>
            </div>
          </div>

          <div className="bg-gray-300 border-2 hover:border-red-600 w-1/3 mb-1 rounded-lg">
            <img src={images} alt="" className="cursor-pointer" />
            <div className="bg-white text-center font-semibold pb-2 font-poppins">
              <p className="text-[12px] pt-4">Cupid Sniper Streetwear</p>
              <p className="text-[12px] mb-3">#109,999</p>
              <p className="bg-red-300 cursor-pointer p-1 rounded-lg text-[12px] mx-2">
                Add to cart
              </p>
            </div>
          </div>

          <div className="bg-gray-300 border-2 hover:border-red-600 w-1/3 mb-1 rounded-lg">
            <img src={images} alt="" className="cursor-pointer" />
            <div className="bg-white text-center font-semibold pb-2 font-poppins">
              <p className="text-[12px] pt-4">Cupid Sniper Streetwear</p>
              <p className="text-[12px] mb-3">#109,999</p>
              <p className="bg-red-300 cursor-pointer p-1 rounded-lg text-[12px] mx-2">
                Add to cart
              </p>
            </div>
          </div>

          <div className="bg-gray-300 border-2 hover:border-red-600 w-1/3 mb-1 rounded-lg">
            <img src={images} alt="" className="cursor-pointer" />
            <div className="bg-white text-center font-semibold pb-2 font-poppins">
              <p className="text-[12px] pt-4">Cupid Sniper Streetwear</p>
              <p className="text-[12px] mb-3">#109,999</p>
              <p className="bg-red-300 cursor-pointer p-1 rounded-lg text-[12px] mx-2">
                Add to cart
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* alt + shift + F will format the code */}
    </div>
  );
};

export default BestSeller;
