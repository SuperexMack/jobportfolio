"use client";
import Link from "next/link";
import { Github,Moon } from 'lucide-react';
import { useRef } from "react";

export function Navbar({blogRef,projectRef,achRef}:any){

    

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

    return(
        <>
        <div className="w-full z-50 fixed top-0 h-[80px] bg-black p-3 flex justify-center items-center space-x-6 border-b border-t border-gray-900">

            <Link href={"/"}><h1 className="font-bold text-white">Portfolio</h1></Link>
            <Link onClick={blog} href={"/"}><h1 className="hover:text-slate-400 font-bold text-white">Blogs</h1></Link>
            <Link onClick={project} href={"/"}><h1 className="hover:text-slate-400 font-bold text-white">Projects</h1></Link>
            <Link onClick={achv} href={"/"}><h1 className="hover:text-slate-400 font-bold text-white">achievement</h1></Link>
            <Link href={"https://drive.google.com/file/d/1N9A0IeIUmPramfADed8I22VpqFqYLZPp/view?usp=drive_link"}><h1 className="hover:text-slate-400 font-bold text-white">Resume</h1></Link>
            <Link href={"https://github.com/SuperexMack/jobportfolio"}><Github className="text-white"></Github></Link>
        </div>
        </>
    )
}