
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import asiaman from "../../assets/asiaman.jpg";
import caucasian from "../../assets/caucasian.jpg";
import sara from "../../assets/sara.jpg";
import { CiStar } from "react-icons/ci";
import sparta from "../../assets/sparta.png";
import allianz from "../../assets/allianzy.png";
import rey from "../../assets/reys.png";
import fuda from "../../assets/fuda.png";

export default function Team() {
  const settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
        }
      }
    ]
  };

  return (
    <main className='w-full font-kanit text-white'>
      <div className='px-6 lg:px-32 py-10 flex flex-col lg:flex-row gap-10'>
        <div>
          <h1 className='text-gray-400 '>T E A M S</h1>
          <p className='text-5xl pt-4'>Projects are handled by</p>
          <p className='text-5xl py-4'>professional certified teams</p>
          <p>Professionally certified teams handle our projects, <br />ensuring quality and innovation in every endeavor.</p>
          <div className="flex relative py-10">
            <img data-aos="fade-right" src={asiaman} alt="asia" className="absolute w-16 h-16 rounded-full items-center justify-center hover:transform rotate-45 duration-105" />
            <img data-aos="fade-left" src={caucasian} alt="caucasian" className="absolute w-16 rounded-full items-center justify-center left-14" />
            <img data-aos="fade-right" src={sara} alt="sara" className="absolute w-16 h-16 rounded-full items-center justify-center left-24 " />
          </div>
          <div className="py-10">
            <p className="flex items-center justify-start gap-4">(5.0 reviews) <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar /></p>
            <p className="text-gray-600 text-2xl pt-4 ">TRUSTED BY CUSTOMERS</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <img data-aos="fade-right" src={asiaman} alt="asian" />
            <img data-aos="fade-left" src={sara} alt="caucasian" />
            <div className="flex items-center justify-center">
              <button className="border border-gray-400 py-2 px-6 lg:px-8 h-12 rounded-full">LEARN TEAMS</button>
            </div>
            <img data-aos="fade-right" src={caucasian} alt="saa" />
          </div>
        </div>
      </div>
      <div className="overflow-hidden"> {/* Use overflow-hidden to fix overflow */}
        <Slider {...settings}>
          <div><img src={sparta} alt="sparta" /></div>
          <div><img src={allianz} alt="allianz" /></div>
          <div><img src={rey} alt="rey" /></div>
          <div><img src={fuda} alt="fuda" /></div>
        </Slider>
      </div>
    </main>
  );
}
