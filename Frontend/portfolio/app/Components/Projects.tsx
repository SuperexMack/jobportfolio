"use client";

export function Projects() {
  const projects = [
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
      title: "RedChat",
      period: "2025",
      about:
        "RedChat is an anonymous chat platform inspired by Omegle with a custom twist. Users register, accept terms, and are randomly matched with someone online anywhere in the world. Once paired, they are connected instantly in a private chat room using WebSockets, while Redis manages user matching efficiently.",
      tags: ["TypeScript", "WebSockets", "Redis", "Real-time"],
      github: "https://github.com/SuperexMack/redChat",
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
  ];

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
      </div>
    </>
  );
}
