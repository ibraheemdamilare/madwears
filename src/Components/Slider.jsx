import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import logo from "../../public/madmage.png";

const Slider = () => {
  const images = [
    {
      url: logo,
      imageIndex: 0,
    },
    {
      url: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?t=st=1730316747~exp=1730320347~hmac=51fb0ca112e644ff232666c493fddf17032e59bd3af8523781c3b8bf255875c5&w=900",
      imageIndex: 1,
    },
    {
      url: "https://img.freepik.com/free-photo/row-fashionable-clothing-hangers_1232-3003.jpg?t=st=1730317201~exp=1730320801~hmac=574cba1a76feeb9ca892a306e4d9ec0d209104695dff14d5b2365a014c013c1c&w=900",
      imageIndex: 2,
    },
    {
      url: "https://img.freepik.com/free-photo/fashion-clothing-hangers-show_1153-5332.jpg?t=st=1730320273~exp=1730323873~hmac=a30c34b76becc1c74749c93cb925c4a3e323bf4efde056362d6fe396e091fc4f&w=900",
      imageIndex: 3,
    },
    {
      url: "https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?t=st=1730320390~exp=1730323990~hmac=644543bae22f7f28f0d89425e3fe03da1caf97f2e9aa94ff57ba4e5f8f12148d&w=900",
      imageIndex: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = (currentIndex) => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = (currentIndex) => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goTo = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="group max-w-[1400px] h-[500px] md:h-[700px] w-full m-auto py-16 px-4 relative">
        <div
          style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          className=" w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-red-300 cursor-pointer ">
          <BsChevronCompactLeft size={30} onClick={() => prev(currentIndex)} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-red-300 cursor-pointer ">
          <BsChevronCompactRight size={30} onClick={() => next(currentIndex)} />
        </div>

        <div className="flex gap-2 py-10 top-4 justify-center">
          {images.map(({ imageIndex }) => (
            <div
              key={imageIndex}
              onClick={() => goTo(imageIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled className="text-red-600" />
            </div>
          ))}
        </div>
      </div>

      <marquee width="100%" className='mt-10 font-poppins text-xl lg:text-2xl'>
        Welcome to <span className="text-red-600 font-bold ">MAD WEARS</span>, where we Make A Difference! 
      </marquee>
    </>
  );
};

export default Slider;
