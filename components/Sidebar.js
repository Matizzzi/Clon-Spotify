import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full p-4 bg-black">
        <div className="logo-container">
            <div className="mt-4 ">
            <Image 
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" 
              alt="Spotify" 
              width={140} 
              height={140} 
            />
            </div>
        </div>
    </div>
  )
}

export default Sidebar;
