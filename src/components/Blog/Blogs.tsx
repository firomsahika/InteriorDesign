import blog1 from "../../assets/blog.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import { IoIosArrowForward } from "react-icons/io";


export default function Blogs() {
    interface Blog {
        img:string;
        title: string;
    }
    
    const blogs:Blog[] = [
        {
            img:blog1,
            title:"Mattis, pure fauces in the mass…",
            
        },
        {
            img:blog2,
            title:"Always the author, neither of life nor time than"
        },
        {
            img:blog3,
            title:"Elite, your solicitation tristique is no more than"
        }
    ]
  return (
    <main>
       <div className="py-10 items-center justify-center flex flex-col">
         <div className="flex flex-col items-center justify-center text-center py-8">
            <h1 className="text-[#6D7D7D]">B L O G</h1>
            <p className="text-white text-5xl">The latest article</p>
         </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
                blogs.map(({img,title}: Blog) =>(
                    <div className="relative">
                        <p className="px-6 absolute text-white bg-gray-700">Blog</p>
                        <img src={img} alt="blogs" w-96/>
                        <p className="text-[#6D7D7D] py-4">{title}</p>
                        <div >
                        <p className="text-white flex items-center juce gap-3">LEARN MORE  <IoIosArrowForward /></p>
                        </div>
                    </div>
                ))
            }
            
          </div>
         

       </div>
       <hr className="border-sm border-gray-600"/>
    </main>
  )
}
