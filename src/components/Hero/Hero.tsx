import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <main className="w-full flex items-center justify-center px-4 lg:md:px-0 bg-herobg font-kanit md:lg:bg-cover bg-center">
      <div className="flex items-center justify-center">
        <div className="py-60 lg:py-50 w-full text-center">
          <div className="relative">
            <TypeAnimation
              className='text-4xl md:text-5xl' // Adjust font size for mobile and larger screens
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "We design your room Aesthetic",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We design your room Stylish",
                1000,
                "We craft your space with elegance.",
                1000,
                "Room that reflect your unique taste",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>
          <p className="pt-4">
            Creating personalized and stylish interiors that elevate your living
            space.
          </p>
        </div>
      </div>
    </main>
  );
}
