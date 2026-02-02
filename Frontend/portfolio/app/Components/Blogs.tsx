import Image from "next/image";
import Link from "next/link";

export function Blogs() {
  return (
    <>
      <div className="flex w-full h-auto flex-col space-y-4 mt-[100px]">
        <h1 className="text-white text-center font-bold text-[40px] underline">
          Blogs
        </h1>

        {/* First box */}

        <div className="flex w-full h-auto justify-between space-x-3 mt-[50px]">
          {/* First-First box */}

          <div className="w-[45%] h-[400px] flex flex-col space-y-3 bg-red-700">
            <div className="w-full h-[90%] relative bg-green-600">
              <Link
                href={
                  "https://medium.com/@flux7500560/building-a-simple-api-rate-limiter-in-node-js-with-redis-e9b2901d88b9"
                }
              >
                {" "}
                <Image
                  alt="redis_image"
                  fill
                  className="object-contain"
                  src={"/redis.png"}
                ></Image>
              </Link>
            </div>

            <div>
              <h1 className="text-center hover:cursor-pointer text-[30px] text-white hover:underline">
                Building a Simple API Rate Limiter in Node.js with Redis
              </h1>
            </div>
          </div>

          {/* First-Second box */}

          <div className="w-[45%] h-[400px] flex flex-col space-y-3 bg-red-700">
            <div className="w-full h-[90%] relative bg-green-600">
              <Link
                href={
                  "https://medium.com/@flux7500560/ssh-the-untold-story-68f1cbc68f4f"
                }
              >
                <Image
                  alt="redis_image"
                  fill
                  className="object-contain"
                  src={"/ssh.png"}
                ></Image>
              </Link>
            </div>

            <div>
              <h1 className="text-center hover:cursor-pointer text-[30px] text-white hover:underline">
                SSH (The Untold Story)
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[45%] h-[400px] flex flex-col space-y-3 bg-red-700">
            <div className="w-full h-[90%] relative bg-green-600">
              <Link
                href={
                  "https://medium.com/@flux7500560/anchor-first-solana-program-calculator-in-solana-a80420554676"
                }
              >
                <Image
                  alt="redis_image"
                  fill
                  className="object-contain"
                  src={"/anchor.png"}
                ></Image>
              </Link>
            </div>

            <div>
              <h1 className="text-center hover:cursor-pointer text-[30px] text-white hover:underline">
                Anchor: Your First Solana Program
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
