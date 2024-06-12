import {useEffect} from "react"
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import about3 from "../../assets/about3.jpg"
import about from "../../assets/bg1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

export default function AboutInterior() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
    // Refresh animations on component updates
    AOS.refresh();
  }, []);
  return (
    <main className='flex items-center'>
    <div className='lg:md:px-32 px-6 py-20 '>
       <div className='flex flex-col '>
         <p className='text-gray-400 '>A B O U T</p>
         <p className='text-5xl py-4  '>We are the best interior design studio</p>
         <p className=" ">At Interior Design Studio, we believe in the power of transformative spaces. <br /> Our passion lies in crafting environments that seamlessly blend functionality with beauty.<br /> With a keen eye for detail and a commitment to excellence, we bring your visions to life.</p>
       </div>
      
         <div className="flex lg:md:flex-row flex-col gap-20 py-14">

            <div className="flex md:lg:flex-row gap-4">
              <img data-aos="fade-right" src={about1} alt="about1" className="w-40 lg:md:w-64"/>
              <img data-aos="fade-left" src={about2} alt="about2" className="w-40  lg:md:w-64"/>
            </div>
            
            <div className="flex flex-col  gap-20 ">
               <div className="flex flex-col lg:md:flex-row  gap-20">
                  <img data-aos="fade-up" src={about3} alt="about3" className="rounded-tr-[25%] w-60" />
                  <div className="">
                  <button className="border border-gray-400 px-6 py-2 lg:md:mt-40 rounded-md ">LEARN ABOUT</button>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:lg:grid-cols-3 gap-24">
                  <div>
                    <p className="text-4xl text-gray-400">
                    <CountUp 
                      start={0}
                      end={1000}
                      duration={2.5}
                      separator=","
                      suffix="+"
                      />
                      </p>
                    <p className="text-xl">PROJECTS<br/>DONE</p>
                  </div>
                  <div>
                    <p className="text-4xl text-gray-400">
                      <CountUp 
                      start={0}
                      end={500}
                      duration={2.5}
                      separator=","
                      suffix="+"
                      />
                    </p>
                    <p className="text-xl">PRO<br/>TEAMS</p>
                  </div>
                  <div>
                    <p className="text-4xl text-gray-400">
                    <CountUp 
                      start={0}
                      end={300}
                      duration={2.5}
                      separator=","
                      suffix="+"
                      />
                      </p>
                    <p className="text-xl">GLOBAL<br/>CLIENTS</p>
                  </div>
               </div>

            </div>

         </div>

         <div className="flex flex-col lg:md:flex-row gap-6 items-center  justify-center bg-[#212828] rounded-tr-3xl  ">
            <img data-aos= "fade-right" src={about} alt="about" className="lg:md:relative  "/>
            <div className="md:lg:absolute left-[50%]">
                <p className="text-3xl md:lg:text-4xl">
                Blending creativity and</p>
                <p className="text-3xl md:lg:text-4xl py-4">functionality in every design</p>
                <button className="border border-gray-500 px-8 py-2 rounded-full">HIRE US NOW </button>
            </div>
         </div>

    </div>
 </main>
  )
}
