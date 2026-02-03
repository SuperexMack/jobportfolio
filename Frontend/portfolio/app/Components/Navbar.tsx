"use client";
import Link from "next/link";
import { Github,Moon } from 'lucide-react';
import { useRef, useState } from "react";
import { ChartNoAxesGantt } from 'lucide-react';

export function Navbar({blogRef,projectRef,achRef}:any){

    const [clicked,setClicked] = useState(false)

    const blog = ()=>{
       if(blogRef.current){
        blogRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
       }
    }

    const project = ()=>{
        if(projectRef.current){
            projectRef.current.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
        }
    }

    const achv = ()=>{
        if(achRef.current){
            achRef.current.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
        }
    }

    const toogleLogic = ()=>{
        setClicked(!clicked)
        console.log("Value of toggle is " + clicked)
    }

    return(
        <>
        <div className="w-full overflow-hidden z-50 fixed top-0 h-[80px] bg-black p-3 flex justify-center items-center space-x-6 border-b border-t border-gray-900">


            <div className="absolute left-[70px]">
            <Link href={"/"}><h1 className="font-bold text-[25px] text-white">Portfolio</h1></Link>
            </div>

             {clicked?(

               
                <div className="flex w-full h-[200px] mt-[200px] p-2 bg-black flex-col space-y-3 items-center">
                <Link onClick={blog} href={"/"}><h1 className="hover:text-slate-400 md:flex font-bold text-white">Blogs</h1></Link>
                <Link onClick={project} href={"/"}><h1 className="hover:text-slate-400 md:flex font-bold text-white">Projects</h1></Link>
                <Link onClick={achv} href={"/"}><h1 className="hover:text-slate-400 md:flex font-bold text-white">achievement</h1></Link>
                <Link href={"https://drive.google.com/file/d/1fZFqsCsYYfehO3txS3RXTL8OPxJT6mKy/view?usp=sharing"}><h1 className="hover:text-slate-400 md:flex font-bold text-white">Resume</h1></Link>
                <Link href={"https://github.com/SuperexMack/jobportfolio"}><Github className="text-white md:flex"></Github></Link>
                </div>
                

             ):(
                <>
                <Link onClick={blog} href={"/"}><h1 className="hover:text-slate-400 md:flex hidden font-bold text-white">Blogs</h1></Link>
                <Link onClick={project} href={"/"}><h1 className="hover:text-slate-400 md:flex hidden font-bold text-white">Projects</h1></Link>
                <Link onClick={achv} href={"/"}><h1 className="hover:text-slate-400 md:flex hidden font-bold text-white">achievement</h1></Link>
                <Link href={"https://drive.google.com/file/d/1fZFqsCsYYfehO3txS3RXTL8OPxJT6mKy/view?usp=sharing"}><h1 className="hover:text-slate-400 md:flex hidden font-bold text-white">Resume</h1></Link>
                <Link href={"https://github.com/SuperexMack/jobportfolio"}><Github className="text-white md:flex hidden"></Github></Link>
                </>
             )}

           
         
        <div className="absolute right-[80px] md:hidden flex items-center justify-center">
           <ChartNoAxesGantt onClick={toogleLogic} className="text-white w-[30px] h-[30px]"></ChartNoAxesGantt>
        </div>

        </div>


        

        </>
    )
}