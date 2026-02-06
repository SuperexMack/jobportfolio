import Link from "next/link"

export function Footer(){
    return(
        <>
          <div className="w-full border-t border-white/10 mt-20">
            <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-gray-400 space-y-2">

              <p>
                I hope you all loved my portfolio and in case 
                you found some bug please dm me
              </p>

              <p>
                Built by <span className="text-gray-200">Mohit</span>. The source code is available on{" "}
                <Link
                  href="https://github.com/SuperexMack/jobportfolio"
                  className="underline underline-offset-4 hover:text-white transition"
                >
                  GitHub
                </Link>.
              </p>

              <div className="flex justify-center items-center gap-6 pt-3 text-gray-500">
                <Link href="https://medium.com/@flux7500560" className="hover:text-white transition">Medium</Link>
                <Link href="https://x.com/mohitsatitwt" className="hover:text-white transition">Twitter</Link>
                <Link href="https://github.com/SuperexMack">GitHub</Link>
                <Link href="https://www.linkedin.com/in/mohitsatilinks/">LinkedIn</Link>
              </div>

            </div>
          </div>
        </>
    )
}
