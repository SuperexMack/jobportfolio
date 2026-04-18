import Image from "next/image";
import Link from "next/link";

export function Blogs() {
  return (
    <section className="w-full mt-24 px-4 sm:px-6 lg:px-10">
      <h1 className="text-white text-center font-bold text-3xl sm:text-4xl underline">
        Blogs <span className="text-slate-400">(4)</span>
      </h1>

      
      <div className="mt-12 flex flex-wrap gap-10">
        
        
        <div className="w-full md:w-[calc(50%-1.25rem)] flex flex-col border border-slate-400 p-3 rounded-2xl">
          <Link
            href="https://medium.com/@flux7500560/building-a-simple-api-rate-limiter-in-node-js-with-redis-e9b2901d88b9"
            className="relative w-full aspect-video rounded-2xl overflow-hidden"
          >
            <Image
              src="/redis.png"
              alt="Redis Rate Limiter"
              fill
              className="object-cover hover:scale-105 transition duration-300"
            />
          </Link>

          <h1 className="mt-4 text-center text-xl sm:text-2xl font-semibold text-white hover:underline cursor-pointer">
            Building a Simple API Rate Limiter in Node.js with Redis
          </h1>
        </div>

        
        <div className="w-full md:w-[calc(50%-1.25rem)] flex flex-col border border-slate-400 p-3 rounded-2xl">
          <Link
            href="https://medium.com/@flux7500560/ssh-the-untold-story-68f1cbc68f4f"
            className="relative w-full aspect-video rounded-2xl overflow-hidden"
          >
            <Image
              src="/myssh.png"
              alt="SSH Blog"
              fill
              className="object-contain hover:scale-105 transition duration-300"
            />
          </Link>

          <h1 className="mt-4 text-center text-xl sm:text-2xl font-semibold text-white hover:underline cursor-pointer">
            SSH (The Untold Story)
          </h1>
        </div>

        
        <div className="w-full md:w-[calc(50%-1.25rem)] flex flex-col border border-slate-400 p-3 rounded-2xl">
          <Link
            href="https://medium.com/@flux7500560/anchor-first-solana-program-calculator-in-solana-a80420554676"
            className="relative w-full aspect-video rounded-2xl overflow-hidden"
          >
            <Image
              src="/anchor.png"
              alt="Solana Anchor"
              fill
              className="object-contain hover:scale-105 transition duration-300"
            />
          </Link>

          <h1 className="mt-4 text-center text-xl sm:text-2xl font-semibold text-white hover:underline cursor-pointer">
            Anchor: Your First Solana Program
          </h1>
        </div>

        
        <div className="w-full md:w-[calc(50%-1.25rem)] flex flex-col border border-slate-400 p-3 rounded-2xl">
          <Link
            href="https://medium.com/@flux7500560/webrtc-architecture-b5f4260cdeb8"
            className="relative w-full aspect-video rounded-2xl overflow-hidden"
          >
            <Image
              src="/WebRTC.png"
              alt="WebRTC blog"
              fill
              className="object-contain hover:scale-105 transition duration-300"
            />
          </Link>

          <h1 className="mt-4 text-center text-xl sm:text-2xl font-semibold text-white hover:underline cursor-pointer">
            WebRTC Architecture
          </h1>
        </div>

      </div>
    </section>
  );
}