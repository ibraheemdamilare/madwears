import { FaCircle} from "react-icons/fa"
import Joggers from '../../public/joggers.jpg'


const Available = () => {
    const Categories = [
        {
            url: 'https://img.freepik.com/free-photo/cheeky-stylish-goodlooking-black-bearded-guy-look-cool-tilting-head-bossy-confident-frowning-serious_1258-131564.jpg?t=st=1731001663~exp=1731005263~hmac=373cd7ece4e31fe33a258332737b8facb2114a2396fdd58efe3053dd8ace95de&w=1060',
            index: 0
        },
        {
            url: 'https://img.freepik.com/free-photo/portrait-satisfied-middleaged-man-doing-sports-looking-pleased-upper-left-corner-smiling-w_1258-148768.jpg?t=st=1731002026~exp=1731005626~hmac=426b2c634f67d69ab5e16202fc76a1215b1e2b112c5860f5b04f69f0c00bcc65&w=1060',
            index: 1
        },
        {
            url: 'https://img.freepik.com/free-photo/cool-sassy-black-guy-dancing-listening-music-headphones-looking-confident-standing-pi_1258-153429.jpg?t=st=1731002180~exp=1731005780~hmac=7a4652f411d919fb86c472b3fd7f4c2ab46c5fffb356fe591dc4d535bfe1c978&w=1060',
            index: 2
        },
        {
            url: Joggers,
            index: 3
        }
    ]
    return (
    <div className="ml-5 mb-8 mt-14">
        <p className="text-[16px] font-quicksand font-semibold border-b-2 border-red-300 pb-1 w-fit ">Check out our <span className="text-red-600 font-bold">Available Categories</span></p>

        <div className="mx-8 mt-16 mb-8 flex justify-start overflow-x-auto scrollbar-hide gap-8 ">
            
        <img className='w-96 h-48 rounded-2xl'  src={'https://img.freepik.com/free-photo/cheeky-stylish-goodlooking-black-bearded-guy-look-cool-tilting-head-bossy-confident-frowning-serious_1258-131564.jpg?t=st=1731001663~exp=1731005263~hmac=373cd7ece4e31fe33a258332737b8facb2114a2396fdd58efe3053dd8ace95de&w=1060'} alt=""  />

        <img className='w-96 h-48 rounded-2xl'  src={'https://img.freepik.com/free-photo/portrait-satisfied-middleaged-man-doing-sports-looking-pleased-upper-left-corner-smiling-w_1258-148768.jpg?t=st=1731002026~exp=1731005626~hmac=426b2c634f67d69ab5e16202fc76a1215b1e2b112c5860f5b04f69f0c00bcc65&w=1060'} alt=""  />

        <img className='w-96 h-48 rounded-2xl'  src={'https://img.freepik.com/free-photo/cool-sassy-black-guy-dancing-listening-music-headphones-looking-confident-standing-pi_1258-153429.jpg?t=st=1731002180~exp=1731005780~hmac=7a4652f411d919fb86c472b3fd7f4c2ab46c5fffb356fe591dc4d535bfe1c978&w=1060'} alt=""  />

        <img className='w-96 h-48 rounded-2xl'  src={Joggers} alt=""  />
            

        </div>
        <div className="flex justify-center gap-4">
            {Categories.map((item)=> {
                const { index} = item
                return (<div key={index}>
                    <FaCircle className="text-red-600 w-3" />
                </div>)
            })}
        </div>
    </div>
  )
}

export default Available