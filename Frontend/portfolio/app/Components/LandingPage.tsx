import { Aboutme } from "./About";
import { Achievements } from "./Achivements";
import { Details } from "./Details";
import { SocialMediaLinks } from "./SocialMedialink";
import { TopImageDiv } from "./Topimage";

export function LandingPage(){
    return(
        <>
         <div className="flex flex-col items-center w-full h-auto">

            <div className="flex flex-col space-y-6 w-[50%] bg-amber-700 h-auto">
               <TopImageDiv></TopImageDiv>
                <Details></Details>
                <SocialMediaLinks></SocialMediaLinks>
                <Aboutme></Aboutme>
                <Achievements></Achievements>
            </div>

         </div>
        </>
    )
}