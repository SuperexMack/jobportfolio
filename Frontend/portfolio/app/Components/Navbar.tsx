import Link from "next/link";
import { Github,Moon } from 'lucide-react';

export function Navbar(){
    return(
        <>
        <div className="w-full h-auto p-3 mt-2 flex justify-center space-x-6 border-b border-t border-gray-900">

            <Link href={"/"}><h1 className="font-bold">Portfolio</h1></Link>
            <Link href={"/"}><h1 className="text-slate-400 font-bold">Blogs</h1></Link>
            <Link href={"/"}><Github></Github></Link>
            <Link href={"/"}><Moon></Moon></Link>

        </div>
        </>
    )
}