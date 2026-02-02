import { cn } from "@/lib/utils"
import { Marquee } from "../../components/ui/marquee"

const reviews = [
  {
    name: "Aniket Sharma",
    username: "@the6digitGuy",
    body: "Landing Page UI is so good bhai 💜✨",
    img: "/anikettt.jpg",
  },
  {
    name: "Amit Dahiya",
    username: "@Amit_Dahiya08",
    body: "Amazing work bhai 🙌👍",
    img: "/amit.jpg",
  },
  {
    name: "!Laraib",
    username: "@itslaraib786",
    body: "@mohitsatitwt bro you're goat.. very talented and hardworking guy..",
    img: "/ll.jpg",
  },
  {
    name: "Harshit Khosla",
    username: "@Harry_The_Nerd",
    body: "This looks so good, mate!!",
    img: "/harshit.jpg",
  },
  {
    name: "Dhruv Sood",
    username: "@dhruv_sood_",
    body: "Cool, make it opensource",
    img: "/dhruv.jpg",
  },
  {
    name: "Aditya Pattanayak",
    username: "@AdityaPat_",
    body: "Looks so clean ,LFG man",
    img: "/adi.jpg",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-slate-300">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <>
    <h1 className="text-center text-[40px] text-slate-300 underline">What people Say</h1>
    <div className="relative mt-3 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
    </div>
    </>
  )
}
