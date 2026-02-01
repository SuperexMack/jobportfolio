import { TopImageDiv } from "./Topimage";

export function LandingPage(){
    return(
        <>
         <div className="flex justify-center w-full h-auto">

            <div className="flex flex-col space-y-6 w-[50%] bg-amber-700 h-auto">
               <TopImageDiv></TopImageDiv>
            </div>

         </div>
        </>
    )
}