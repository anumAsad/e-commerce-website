import Image from "next/image";
import Heroo from "../../../public/hero-image.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={Heroo}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        priority
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:items-start lg:text-left px-4 sm:px-8 mt-96">
        {/* Heading */}
        <h1 className="text-2xl text-yellow-200">
        Elevate Your Style <br/>
        Timeless Fashion, Sustainable 
        <br/>Choices 
        </h1>
        
        {/* Button */}
        <button className="mt-6 bg-black text-white text-sm sm:text-base md:text-lg py-2 px-6 rounded-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
