"use client"
import Image from "next/image";
import { Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from "react";

export function TopImageDiv() {

  const [skillValue, setSkillValue] = useState("A Programmer")
  const [intervalValue, setIntervalValue] = useState(0)

  const songRef = useRef<HTMLAudioElement>(null)

  const skillsArray = [
    "Full-Stack web developer",
    "Open source contributor",
    "Web3 Developer",
    "Love Problem solving",
    "Creating with code. Small details matter."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalValue(prev => {
        const next = (prev + 1) % skillsArray.length
        setSkillValue(skillsArray[next])
        return next
      })
    }, 2000) // thoda slow kiya for better UX

    return () => clearInterval(interval)
  }, [])

  const playAudio = () => {
    if (!songRef.current) return;
    if (songRef.current.paused) {
      songRef.current.play()
    } else {
      songRef.current.pause()
    }
  }

  return (
    <>
      
      <div className="w-full h-[200px] sm:h-[300px] mt-4 relative rounded-lg overflow-hidden">
        <Image
          src="/lasterheader.jpeg"
          alt="top_image"
          fill
          className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-lg mt-3">

        
        <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] shrink-0">
          <Image
            src="/mohitsati.png"
            alt="profile"
            fill
            className="object-cover rounded-full hover:scale-105 transition-transform"
          />
        </div>

       
        <div className="flex flex-col w-full">

         
          <div className="flex flex-wrap items-center gap-2 border-b border-t border-gray-800 py-2">

            <h1 className="text-2xl md:text-3xl text-white">
              Móhït Sátï
            </h1>

            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-blue-500"
            >
              <path
                fill="currentColor"
                d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
              />
            </svg>

            
            <div className="flex items-center gap-2 ml-2">
              <Volume2
                className="text-white cursor-pointer"
                onClick={playAudio}
              />
              <span className="text-slate-300 text-sm">
                → Play song
              </span>
              <audio src="/song.mp4" ref={songRef}></audio>
            </div>
          </div>

          
          <div className="mt-3">
            <h1 className="text-slate-300 text-sm md:text-base">
              {skillValue}
            </h1>
          </div>

        </div>
      </div>
    </>
  );
}