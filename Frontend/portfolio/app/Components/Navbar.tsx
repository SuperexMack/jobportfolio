import Link from "next/link";
import { Github,Moon } from 'lucide-react';

export function Navbar(){
    return(
        <>
        <div className="w-full z-50 fixed top-0 h-[80px] bg-black p-3 flex justify-center items-center space-x-6 border-b border-t border-gray-900">

            <Link href={"/"}><h1 className="font-bold text-white">Portfolio</h1></Link>
            <Link href={"/"}><h1 className="text-slate-400 font-bold">Blogs</h1></Link>
            <Link href={"/"}><h1 className="hover:text-slate-400 font-bold text-white">Projects</h1></Link>
            <Link href={"/"}><h1 className="hover:text-slate-400 font-bold text-white">achievement</h1></Link>
            <Link href={"/"}><Github className="text-white"></Github></Link>
        </div>
        </>
    )
}