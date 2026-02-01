import Image from "next/image"


export function SocialMediaLinks(){
    return(
        <>
        <div className="w-full flex justify-between mt-5">

           {/* First box */}

           <div className="w-[48%] h-[300px] bg-red-600 flex flex-col space-y-4">

             <div className="w-full flex space-x-3 bg-amber-600 mt-3 space-x-3.5 items-center">

                 <div className="relative w-[100px] h-[100px]">
                    <Image fill className=" ml-3 rounded-lg object-cover" alt="_twitter" src={"/twitter.webp"}></Image>
                 </div>

                 <div className="flex flex-col space-y-3 ml-3">
                    <h1 className="font-bold">X(formerly Twitter)</h1>
                    <h1>@mohitsatitwt</h1>
                 </div>

             </div>

              <div className="w-full flex space-x-3 bg-amber-600 mt-3 space-x-3.5 items-center">

                 <div className="relative w-[100px] h-[100px]">
                    <Image fill className=" ml-3 rounded-lg object-cover" alt="_linkedin" src={"/linkedin.webp"}></Image>
                 </div>

                 <div className="flex flex-col space-y-3 ml-3">
                    <h1 className="font-bold">Linkedin</h1>
                    <h1>mohitsatilinks</h1>
                 </div>

             </div>

           </div>


           {/* Second box */}

           <div className="w-[48%] h-[300px] bg-green-600 flex flex-col space-y-4">

             <div className="w-full flex space-x-3 bg-amber-600 mt-3 space-x-3.5 items-center">

                 <div className="relative w-[100px] h-[100px]">
                    <Image fill className=" ml-3 rounded-lg object-cover" alt="_github" src={"/github.webp"}></Image>
                 </div>

                 <div className="flex flex-col space-y-3 ml-3">
                    <h1 className="font-bold">Github</h1>
                    <h1>SuperexMack</h1>
                 </div>

             </div>

              <div className="w-full flex space-x-3 bg-amber-600 mt-3 space-x-3.5 items-center">

                 <div className="relative w-[100px] h-[100px]">
                    <Image fill className=" ml-3 rounded-lg object-cover" alt="_yt" src={"/ytt.webp"}></Image>
                 </div>

                 <div className="flex flex-col space-y-3 ml-3">
                    <h1 className="font-bold">Youtube</h1>
                    <h1>@nginxfileo</h1>
                 </div>

             </div>

           </div>
           

         </div>
        </>
    )
}