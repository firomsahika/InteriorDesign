import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room4 from "../../assets/room4.jpg";

export default function InteriorImages() {
  const settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
  };

  return (
    <main className="w-full">
      <div  className="overflow-hidden ">
        <Slider {...settings}>
          <div>
            <img src={room1} alt="room1" className="w-[21rem] object-cover" />
          </div>
          <div>
            <img src={room2} alt="room2" className="w-[21rem] object-cover" />
          </div>
          <div>
            <img src={room3} alt="room3" className="w-[21rem] object-cover" />
          </div>
          <div>
            <img src={room4} alt="room4" className="w-[21rem] object-cover" />
          </div>
        </Slider>
      </div>
    </main>
  );
}
