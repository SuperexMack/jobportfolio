import { Aboutme } from "./About";
import { Achievements } from "./Achivements";
import { Blogs } from "./Blogs";
import { Details } from "./Details";
import  {Demo}  from "./GithubHeatmap";
import { MarqueeDemo } from "./Marquee";
import { Skills } from "./Skills";
import { SocialMediaLinks } from "./SocialMedialink";
import { TopImageDiv } from "./Topimage";

export function LandingPage(){
    return(
        <>
         <div className="flex flex-col items-center w-full h-auto bg-black">

            <div className="flex flex-col space-y-6 w-[50%]  h-auto">
               <TopImageDiv></TopImageDiv>
                <Details></Details>
                <SocialMediaLinks></SocialMediaLinks>
                <Aboutme></Aboutme>
                <MarqueeDemo></MarqueeDemo>
                <Demo></Demo>
                <Skills></Skills>
                <Blogs></Blogs>
                <Achievements></Achievements>
            </div>

         </div>
        </>
    )
}