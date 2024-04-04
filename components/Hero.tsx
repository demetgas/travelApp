import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          voluptatibus eligendi voluptatem unde ducimus autem corrupti
          exercitationem velit earum, nisi amet aut, expedita laborum inventore.
          Nobis excepturi animi mollitia alias.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
