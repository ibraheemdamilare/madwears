import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {collection, getDocs} from 'firebase/firestore'

const NewArrival = () => {

    const [products, setProducts] = useState([])
    const productRef = collection(db, 'products')

    useEffect(()=>{
        
        const getProducts = async () => {
            const data = await getDocs(productRef)
            setProducts(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
            console.log(products)
        }
        getProducts()
    },[])


  const notify = () => {
    alert("this product has been succesfully added to cart");
  };

  return (
    <div>


      <div className="ml-5 mb-8 mt-14">
        <p className="text-[16px] font-quicksand font-semibold border-b-2 border-red-300 pb-1 w-fit ">
          Shop from our{" "}
          <span className="text-red-600 font-bold">New Arrivals</span>
        </p>

        <div className=" mt-10 grid gap-4 grid-cols-3">
        {products.map((data) => {
            const { id, price, productName, URL } = data;
            return (
              <div key={id}>
                <div className="bg-gray-300 border-2 mb-1 rounded-lg hover:border-red-600">
                  <Link to={`/product/${id}`}>
                    <img src={URL} alt="" className="cursor-pointer h-64 w-full" />
                  </Link>
                  <div className="bg-white text-center font-semibold pb-2 font-poppins">
                    <p className="text-[12px] pt-4">{productName}</p>
                    <p className="text-[12px] mb-3">{price}</p>
                    <p
                      onClick={() => notify()}
                      className="bg-red-300 p-1 cursor-pointer rounded-lg text-[12px] mx-2"
                    >
                      Add to cart
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
