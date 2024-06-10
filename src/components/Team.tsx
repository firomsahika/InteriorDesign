import asiaman from "../assets/asiaman.jpg"
import caucasian from "../assets/caucasian.jpg"
import sara from "../assets/sara.jpg"
import { CiStar } from "react-icons/ci";
import sparta from "../assets/sparta.png";
import allianz from "../assets/allianzy.png"
import rey from "../assets/reys.png";
import fuda from "../assets/fuda.png"

export default function Team() {
  return (
    <main className='w-full font-kanit text-white'>
       <div className='px-32 py-10 flex gap-10'>

          <div>
            <h1 className='text-gray-400 '>T E A M S</h1>
            <p className='text-5xl pt-4'>Projects are handled by</p>
            <p className='text-5xl py-4'>professional certified teams
            </p>
            <p className=''>Professionally certified teams handle our projects,  <br />ensuring quality and innovation in every endeavor.</p>
            <div className="flex relative py-10">
                <img src={asiaman} alt="asia" className="absolute w-16 h-16 rounded-full items-center justify-center  "/>
                <img src={caucasian} alt="caucasian" className="absolute w-16 rounded-full items-center justify-center left-14" />
                <img src={sara} alt="sara" className="absolute w-16 h-16 rounded-full  items-center justify-center left-24 "/>
            </div>

            <div className="py-10">
                <p className="flex items-center justify-start gap-4">(5.0 reviews) <CiStar /> <CiStar className=""/> <CiStar /> <CiStar /> <CiStar /></p>
                <img src="" alt="" />
                <p className="text-gray-600 text-2xl pt-4 ">TRUSTED BY CUSTOMERS</p>
            </div>
          </div>

          <div>
             <div className="grid grid-cols-2 gap-4">
                <img src={asiaman} alt="asian" />
                <img src={sara} alt="caucasian" />
                <div className="flex items-center justify-center"><button className="border border-gray-400 py-2 px-8 h-12 rounded-full">LEARN TEAMS</button></div>
                <img src={caucasian} alt="saa" />
             </div>
          </div>



       </div>
       <div className="flex items-center justify-center py-4 gap-10">
          <img src={sparta} alt="sparta" />
          <img src={allianz} alt="allianzy" />
          <img src={rey} alt="ref" />
          <img src={fuda} alt="fuda" />
       </div>
    </main>
  )
}
