"use client";
import { useEffect, useRef, useState } from "react";
import { Aboutme } from "./About";
import { Achievements } from "./Achivements";
import { Blogs } from "./Blogs";
import { Details } from "./Details";
import { Footer } from "./Footer";
import { Demo } from "./GithubHeatmap";
import { MarqueeDemo } from "./Marquee";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { SocialMediaLinks } from "./SocialMedialink";
import { TopImageDiv } from "./Topimage";

export function LandingPage() {

let blogRef = useRef<null | HTMLDivElement>(null)
let projectRef = useRef<null | HTMLDivElement>(null)
let achRef = useRef<null | HTMLDivElement>(null)

  const startingIntro = ["I","am","open to","work !!"];

  const [count, setCount] = useState(0);
  const [statement, SetStatement] = useState(startingIntro[0]);
  let [flag, setFlag] = useState(true);

  useEffect(() => {
    const caller = setInterval(() => {
      if (count >= startingIntro.length) {
        setFlag(false);
        clearInterval(caller);
        return;
      }

      SetStatement(startingIntro[count]);
      setCount(count + 1);

      console.log("count:", count);
    }, 1000);

    return () => clearInterval(caller);
  }, [count]);

  return (
    <>
      {flag ? (
        <div className="w-full h-screen bg-black flex items-center justify-center">
          <h1 className="text-white text-[50px]">{statement}</h1>
        </div>
      ) : (
        <>
          <Navbar blogRef={blogRef} projectRef={projectRef} achRef={achRef} ></Navbar>

          <div className="flex flex-col z-50 items-center w-full h-auto bg-black mt-[80px]">
            <div className="flex flex-col space-y-6 w-full md:w-[50%] rounded-2xl border border-slate-900 p-1 h-auto">
              <TopImageDiv></TopImageDiv>
              <Details></Details>
              <SocialMediaLinks></SocialMediaLinks>
              <Aboutme></Aboutme>
              <MarqueeDemo></MarqueeDemo>
              <Demo></Demo>
              <Skills></Skills>
              <div ref={blogRef}><Blogs></Blogs></div>
              <div ref={projectRef}><Projects></Projects></div>
              <div ref={achRef}><Achievements></Achievements></div>
              <Footer></Footer>
            </div>
          </div>
        </>
      )}
    </>
  );
}
