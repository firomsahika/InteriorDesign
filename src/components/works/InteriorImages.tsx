import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import room3 from "../../assets/room3.jpg"
import room4 from "../../assets/room4.jpg"

export default function InteriorImages() {
  return (
    <main className="w-full">
        <div>
            <div className="flex">
               <img src={room1} alt="room1" className="w-[21rem] object-cover " />
               <img src={room2} alt="room2" className="w-[21rem] object-cover"/>
               <img src={room3} alt="room3" className="w-[21rem] object-cover "/>
               <img src={room4} alt="room4" className="w-[21rem] object-cover"/>
            </div>
        </div>
    </main>
  )
}
