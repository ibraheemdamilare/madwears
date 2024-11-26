import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


const Navbar = (props) => {
  const [search, setSearch] = useState('')
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


  return (
    <section className="w-full mt-5">

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to={"/"}>
            <p className=" ml-5 font-quicksand font-extrabold lg:text-2xl text-sm text-red-600">
              mad wears
            </p>
          </Link>
        </div>

        <div className="">
          <form action="" className="flex items-center ">
            <input
              type="text"
              className="bg-red-300 md:w-[360px] relative w-[200px] rounded-lg focus:outline-0 font-quicksand text-[10px] py-1.5 placeholder-gray-500 placeholder:italic px-6"
              placeholder="search available wears....."
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <label htmlFor="">
              <FaSearch className="text-red-600 text-lg -ml-5 bg-red-300" />
            </label>
          </form>
        </div>

        <div className="cursor-pointer flex justify-between items-center gap-1 mr-5">
          <FaShoppingCart className="text-red-600 relative text-3xl" />
          <p className="absolute font-poppins bg-red-600 border border-white rounded-full text-[12px] px-1 text-white ml-5 mb-4">
            {props.cartNumber}
          </p>
        </div>
      </div>

      <div className="bg-red-300 w-[360px] z-0 -mt-1 ">
      {search && products.filter((item)=>{
        return search.toLowerCase() === '' ? item : item.productName.toLowerCase().includes(search)
      }).map((items) => {
        return (<div key={items.id}>
          <Link onClick={()=>setSearch('')} to={`/product/${items.id}`}><p>{items.productName}</p></Link>
          
        </div>)
      })}
      </div>

    </section>
  );
};

export default Navbar;

