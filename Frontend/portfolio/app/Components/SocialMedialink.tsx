import Image from "next/image"
import Link from "next/link"

export function SocialMediaLinks(){
    return(
        <>
        <div className="w-full md:flex-row md:flex flex-col items-center justify-between mt-[100px]">

           {/* First box */}

           <div className="md:w-[48%] w-full h-[300px] flex flex-col space-y-4">

             <div className="w-full flex space-x-3  mt-3 space-x-3.5 justify-center">

                 <div className="relative w-[100px] h-[100px]">
                    <Image fill className=" ml-3 rounded-lg object-cover" alt="_twitter" src={"/twitter.webp"}></Image>
                 </div>

                 <div className="flex flex-col space-y-3 ml-3">
                    <h1 className="font-bold text-white">X(formerly Twitter)</h1>
                    <Link className="text-white" href={"https://x.com/mohitsatitwt"}>@mohitsatitwt</Link>
                 </div>

             </div>

              <div className="w-full flex space-x-3  mt-3 space-x-3.5 justify-center">

                 <div className="relative w-[100px] h-[100px]">
                    <Image fill className=" ml-3 rounded-lg object-cover" alt="_linkedin" src={"/linkedin.webp"}></Image>
                 </div>

                 <div className="flex flex-col space-y-3 ml-3">
                    <h1 className="font-bold text-white">Linkedin</h1>
                    <Link className="text-white" href={"https://www.linkedin.com/in/mohitsatilinks/"}>mohitsatilinks</Link>
                 </div>

             </div>

           </div>


           {/* Second box */}

           <div className="md:w-[48%] w-full h-[300px] flex flex-col space-y-4">

             <div className="w-full flex space-x-3  mt-3 space-x-3.5 justify-center">

                 <div className="relative w-[100px] h-[100px]">
                    <Image fill className=" ml-3 rounded-lg object-cover" alt="_github" src={"/github.webp"}></Image>
                 </div>

                 <div className="flex flex-col space-y-3 ml-3">
                    <h1 className="font-bold text-white">Github</h1>
                    <Link className="text-white" href={"https://github.com/SuperexMack"}>SuperexMack</Link>
                 </div>

             </div>

              <div className="w-full flex space-x-3  mt-3 space-x-3.5 justify-center">

                 <div className="relative w-[100px] h-[100px]">
                    <Image fill className=" ml-3 rounded-lg object-cover" alt="_yt" src={"/ytt.webp"}></Image>
                 </div>

                 <div className="flex flex-col space-y-3 ml-3">
                    <h1 className="font-bold text-white">Youtube</h1>
                    <Link className="text-white" href={"https://youtube.com/@nginxfileo?si=QhsGGcgttjEhD3Pt"}>@nginxfileo</Link>
                 </div>

             </div>

           </div>
           

         </div>
        </>
    )
}