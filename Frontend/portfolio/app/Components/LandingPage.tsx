import { Aboutme } from "./About";
import { Achievements } from "./Achivements";
import { Blogs } from "./Blogs";
import { Details } from "./Details";
import { Footer } from "./Footer";
import  {Demo}  from "./GithubHeatmap";
import { MarqueeDemo } from "./Marquee";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { SocialMediaLinks } from "./SocialMedialink";
import { TopImageDiv } from "./Topimage";

export function LandingPage(){
    return(
        <>
         <div className="flex flex-col z-50 items-center w-full h-auto bg-black mt-[80px]">

            <div className="flex flex-col space-y-6 w-[50%] rounded-2xl border border-slate-900 p-1 h-auto">
               <TopImageDiv></TopImageDiv>
                <Details></Details>
                <SocialMediaLinks></SocialMediaLinks>
                <Aboutme></Aboutme>
                <MarqueeDemo></MarqueeDemo>
                <Demo></Demo>
                <Skills></Skills>
                <Blogs></Blogs>
                <Projects></Projects>
                <Achievements></Achievements>
                <Footer></Footer>
            </div>

         </div>
        </>
    )
}