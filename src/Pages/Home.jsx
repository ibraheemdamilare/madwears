import Available from "../Components/Available"
import BestSeller from "../Components/BestSeller"
import Footer from "../Components/Footer"
import NewArrival from "../Components/NewArrival"
import Slider from "../Components/Slider"



const Home = () => {
  return (
    <div className="bg-[#fdfdfd]">

        
        <Slider />
        <NewArrival />
        <BestSeller />
        <Available />
        <Footer />
    </div>
  )
}

export default Home