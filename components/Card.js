import Image from 'next/image';
import React from 'react';
import { IoPlay } from "react-icons/io5";

const Card = () => {
  return (
    <div className="p-4 transition-all duration-300 transform rounded-lg bg-spotify-lightgray hover:bg-spotify-lightgrayHover hover:shadow-2xl hover:scale-105">
      <div className="relative mb-4 group">
        <Image
          src="https://i.scdn.co/image/ab67616d0000b273a81ec0503c55850ad4687940"
          width={200}
          height={350}
          alt="Spotify Logo"
          className="mx-auto transition-all duration-300 rounded-lg shadow-lg group-hover:scale-105"
          priority={true}
          unoptimized={true}
        />
        
        <button className="absolute p-4 text-3xl text-white transition-all duration-300 transform rounded-full shadow-xl opacity-0 bg-spotify-green hover:scale-105 right-4 bottom-4 group-hover:opacity-100 hover:bg-spotify-green-dark">
          <IoPlay />
        </button>
      </div>
      
      <div>
        <h5 className="mt-2 text-xl font-semibold text-center text-gray-100">
          Lupe Fiasco's Food & Liquor - Lupe Fiasco
        </h5>
      </div>
    </div>
    
  );
};

export default Card;
