"use client";

import { useState } from "react";

export function Projects() {


  const [moreProjects,setMoreprojects] = useState(false)


  const moreContent = ()=>{
    if(moreProjects == false) setMoreprojects(true)
    else setMoreprojects(false)
  }


  const projects = [
    {
    title: "ghLockedin",
    period: "2025",
    about:
      "A Web3-based accountability platform that motivates daily GitHub activity through ETH staking. Built a streak tracking system using GitHub APIs and integrated smart contracts to enforce penalties by locking funds on missed commits. Implemented a real-time validation workflow using Next.js and Node.js to combine financial incentives with on-chain proof.",
    tags: ["Web3", "Next.js", "Node.js", "Smart Contracts","Prisma ORM","Solidity"],
    github: "https://github.com/SuperexMack/ghLockedIn",
  },
  {
    title: "RedChat",
    period: "2025",
    about:
      "An anonymous real-time chat platform inspired by Omegle, enabling global 1:1 communication. Designed Redis-based user matchmaking and built private chat rooms using WebSockets. Developed with Next.js on the frontend and Node.js, Express, PostgreSQL, and Prisma for backend services.",
    tags: ["Next.js", "WebSockets", "Redis", "PostgreSQL","Nodejs","Prisma ORM"],
    github: "https://github.com/SuperexMack/redChat",
  },
  {
    title: "Savebiss",
    period: "2025",
    about:
      "A content protection platform for creators and course sellers that prevents video piracy using dynamic, user-specific watermarking. Ensures secure video streaming and strengthens content ownership enforcement at scale.",
    tags: ["Security", "Video Streaming", "Watermarking","FFmpeg","Nodejs","Nextjs"],
    github: "https://github.com/SuperexMack/ffmpeg",
  },
  {
    title: "Callify",
    period: "2025",
    about:
      "A real-time 1:1 video calling platform built using WebRTC, focusing on core peer-to-peer video communication and signaling. Designed for low-latency direct connections, with additional features and improvements planned.",
    tags: ["WebRTC", "Real-time", "Video Calling", "P2P","Websockets","Nextjs","Nodejs","Prisma ORM"],
    github: "https://github.com/SuperexMack/Callify",
  },
   
  ];


  const secondSkillSet = [
    {
      title: "Twitter Blocker Extension",
      period: "2024",
      about:
        "This browser extension helps you manage your Twitter time effectively by monitoring your visits. After opening Twitter 20 times, the extension automatically blocks access, encouraging you to take a break and stay productive.",
      tags: ["JavaScript", "Chrome Extension", "Productivity"],
      github: "https://github.com/yourusername/twitter-blocker-extension",
    },
    {
      title: "SumCity",
      period: "2024-2025",
      about:
        "I’ve launched SumCity, a multiplayer game built with Phaser and WebRTC. It features private rooms, real-time chat, and smooth low-latency gameplay using peer-to-peer connections. This project was a deep dive into real-time systems and game development. Audio and video features are coming soon.",
      tags: ["Phaser", "WebRTC", "Multiplayer", "Game Dev"],
      github: "https://github.com/SuperexMack/GatherTown",
    },
    {
      title: "Competitive Programming Tracker",
      period: "2025",
      about:
        "A website that tracks upcoming and past competitive programming contests from Codeforces, CodeChef, and LeetCode. Features include contest filtering, bookmarking, and adding solution links from our YouTube channel.",
      tags: ["React", "TypeScript", "CP", "Web App"],
      github: "https://github.com/SuperexMack/tle",
    },
    {
      title: "YouTube Audio Recorder Extension",
      period: "2025",
      about:
        "A Chrome extension to record audio from YouTube. Built quickly as an open-source project and open for contributions and improvements.",
      tags: ["Chrome Extension", "Open Source", "CSS"],
      github: "https://github.com/SuperexMack/yt-audio-extension",
    },
    {
      title: "Rate Limiter using Redis",
      period: "2025",
      about:
        "Implements a rate limiter using Node.js and Redis, allowing each user 100 API requests per hour. A Redis list is created per user with a 1-hour expiry. Requests are blocked once the limit is exceeded, and remaining wait time is calculated using Redis TTL.",
      tags: ["Node.js", "Redis", "Backend", "System Design"],
      github: "https://github.com/SuperexMack/rate_limit-using-redis",
    },
  ]

  return (
    <>
      <div className="w-full max-w-5xl mx-auto px-6 mt-[100px]">
        <h1 className="text-white text-3xl font-bold mb-10">
          Projects <span className="text-gray-400 text-base">({projects.length})</span>
        </h1>

        <div className="flex flex-col space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-8"
            >
              
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-white text-lg font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{project.period}</p>
                </div>

                <button
                  onClick={() => window.open(project.github)}
                  className="text-gray-400 hover:text-white transition"
                >
                  🔗
                </button>
              </div>

             
              <p className="text-gray-300 text-[18px] mt-4 leading-relaxed">
                {project.about}
              </p>

              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>



         <div className={moreProjects?"flex flex-col space-y-8":"flex hidden flex-col space-y-8"}>
          {secondSkillSet.map((project, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-8"
            >
              
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-white text-lg font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{project.period}</p>
                </div>

                <button
                  onClick={() => window.open(project.github)}
                  className="text-gray-400 hover:text-white transition"
                >
                  🔗
                </button>
              </div>

             
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {project.about}
              </p>

              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full h-auto flex mt-4 items-center justify-center">

          <button onClick={moreContent} className="p-2 border-2 text-white hover:cursor-pointer border-white">{moreProjects?"Show Less":"Show More"}</button>

        </div>

      </div>
    </>
  );
}
