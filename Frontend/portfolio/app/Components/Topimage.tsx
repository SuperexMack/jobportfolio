"use client"
import Image from "next/image";
import { Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from "react";


export function TopImageDiv() {

  const [skillValue,SetSkillValue] = useState("A Programmer")
  let [intervalue,setIntervalValue] = useState(0)

  const songRef = useRef<HTMLAudioElement>(null)

  const skillsArray = [
    "Full-Stack web developer",
    "Open source contributor",
    "Web3 Developer",
    "Love Problem solving",
    "Creating with code. Small details matter."
  ]

 

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIntervalValue(prev=>{
        const next = (prev+1)%skillsArray.length
        SetSkillValue(skillsArray[next])
        return next
      })
      
    },1000)

    return ()=> clearInterval(interval)
  },[])

  const playAudio = ()=>{
    if(!songRef.current) return;
    if(songRef.current.paused){
        songRef.current.play()
    }
    else songRef.current.pause()
  }

  

  return (
    <>
      <div className="w-full h-[300px] mt-4 relative rounded-lg">
        <Image
          src="/lasterheader.jpeg"
          alt="top_image"
          fill
          className="md:object-cover object-contain rounded-lg hover:scale-105 hover:delay-200 transition-transform"
        />
      </div>

      <div className="w-full md:flex md:flex-row space-x-3 h-[200px]  md:h-[200px] mt-3 ">
        <div className="w-[80%] md:w-[20%] h-auto relative">
          <Image
            src="/mohitsati.png"
            alt="top_image"
            fill
            className="md:object-cover object-contain w-full h-full rounded-full hover:scale-105  transition-transform"
          />
        </div>

        <div className=" w-[50%] flex flex-col justify-center space-x-4 ">

        <div className="border-b border-t border-gray-900 flex  space-x-3 items-center w-full">

        <h1 className="text-[30px] ml-2 text-white">Móhït Sátï</h1>

        {/* // Blue tick wala div */}

        <div>

         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="size-6 text-info select-none text-blue-700"
            aria-label="Verified"
          >
            <path
              fill="currentColor"
              d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
            ></path>
          </svg>{" "}

        </div>

        <div className="flex space-x-1">
            <h1><Volume2 className="text-white"  onClick={playAudio} ></Volume2></h1>
            <h1 className="text-slate-300">{"->"}</h1>
            <h1 className="text-slate-300">(Play song)</h1>
            <audio src={"/song.mp4"} ref={songRef}></audio>
        </div>



        </div>

        {/* Bottom changing line */}

        <div className="w-full p-3">

            <h1 className="text-slate-300">{skillValue}</h1>

        </div>


        </div>
      </div>
    </>
  );
}
