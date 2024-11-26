import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import {  FaPhone, FaShoppingCart } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
import Footer from "../Components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const docRef = doc(db, "products", id);

    getDoc(docRef).then((doc) => {
      setItems({ ...doc.data(), id: doc.id });
    });
    console.log(items);
  }, []);

  const { URL, desc, productName, tag, price } = items;
  return (
    <>
      <div className="lg:flex justify-between mt-14 mx-4 mb-24 gap-8">
        <img
          src={URL}
          alt="product image"
          className="w-1/2 rounded-lg mx-auto"
        />
        <div className="mt-14 ">
          <p className="ml-4 bg-red-300 w-fit h-fit py-1.5 px-3 font-quicksand font-semibold rounded-lg">
            {tag}
          </p>
          <h3 className="mt-6 font-shrikhand mb-6 font-thin lg:text-start text-center text-3xl">
            {productName}
          </h3>
          <p className="font-poppins lg:text-start text-center w-full lg:w-3/4">
            {desc}
          </p>
          <p className="font-quicksand lg:text-start pb-10 text-center font-bold text-xl mt-6">
            {price}
          </p>
          <div className="flex w-full md:w-1/2 mx-auto lg:mx-0 justify-around items-center">
            {/* <div className="flex justify-between gap-8 mt-5">
                <FaMinus  className="text-red-600 cursor-pointer" onClick={()=>{props.setNumber(props.number - 1)}} /> 
                <p className="font-quicksand text-2xl font-bold -mt-2">{props.number}</p> 
                <FaPlus className="text-red-600 cursor-pointer" onClick={()=>{props.setNumber(props.number + 1)}}/>
              </div> */}
            <div
              className="flex bg-red-300 px-1.5 py-3 rounded-lg gap-2 cursor-pointer"
            >
              <FaShoppingCart className="text-red-600 relative text-xl" />
              <p>Check out </p>
            </div>
            <div
              className="flex border-red-300 border-2 px-1.5 py-3 rounded-lg gap-2 cursor-pointer"
            >
              <FaPhone className="text-red-600 relative text-xl" />
              <p>Contact Seller</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
