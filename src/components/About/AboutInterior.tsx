import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import about3 from "../../assets/about3.jpg"
import about from "../../assets/bg1.png"

export default function AboutInterior() {
  return (
    <main className='flex items-center'>
    <div className='px-32 py-20 '>
       <div className=''>
         <p className='text-gray-400 '>A B O U T</p>
         <p className='text-5xl py-4'>We are the best interior design studio</p>
         <p >At Interior Design Studio, we believe in the power of transformative spaces. <br /> Our passion lies in crafting environments that seamlessly blend functionality with beauty.<br /> With a keen eye for detail and a commitment to excellence, we bring your visions to life.</p>
       </div>
      
         <div className="flex gap-4 py-14">

            <div className="flex gap-4">
              <img src={about1} alt="about1" />
              <img src={about2} alt="about2" />
            </div>
            
            <div className="flex gap-20 flex-col">
               <div className="flex gap-20">
                  <img src={about3} alt="about3" className="rounded-tr-[25%]" />
                  <div className="">
                  <button className="border border-gray-400 px-6 py-2 rounded-md ">LEARN ABOUT</button>
                  </div>
               </div>

               <div className="flex gap-24">
                  <div>
                    <p className="text-4xl text-gray-400">2 K+</p>
                    <p className="text-xl">PROJECTS<br/>DONE</p>
                  </div>
                  <div>
                    <p className="text-4xl text-gray-400">20+</p>
                    <p className="text-xl">PRO<br/>TEAMS</p>
                  </div>
                  <div>
                    <p className="text-4xl text-gray-400">300+</p>
                    <p className="text-xl">GLOBAL<br/>CLIENTS</p>
                  </div>
               </div>

            </div>

         </div>

         <div className="flex items-center  justify-center bg-[#212828] rounded-tr-3xl">
            <img src={about} alt="about" className="relative "/>
            <div className="absolute left-[50%]">
                <p className="text-4xl">
                Blending creativity and</p>
                <p className="text-4xl py-4">functionality in every design</p>
                <button className="border border-gray-500 px-8 py-2 rounded-full">HIRE US NOW </button>
            </div>
         </div>

    </div>
 </main>
  )
}
