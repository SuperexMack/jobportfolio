import Image from "next/image";

export function Achievements() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-200">
      
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-12 text-center">
          Achievements & Gallery
      </h2>

      <div className="flex flex-col gap-20">

        {/* ICPC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#0f0f14] rounded-2xl p-6 transition-all duration-300">
          
          <div className="relative h-[350px] md:h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/icpc.jpeg"
              alt="ICPC"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div>
            <h3 className="md:text-2xl text-[23px] font-bold text-center mb-4 underline">
              ICPC Asia West Regional Selection
            </h3>

            <p className="md:text-lg text-[15px]  text-gray-300">
              I qualified for the <strong>ICPC Asia West Regional Contest 2025</strong>,
              becoming the <strong>first student in my college’s history</strong> to do so.
              I represented my college at the <strong>regional contest in Bangalore</strong>
              as part of a <strong>three-member team</strong>.
              <br /><br />
              This achievement highlights strong algorithmic thinking, consistency in
              competitive programming, and the ability to perform in
              <strong> high-pressure, time-constrained environments</strong>.
            </p>
          </div>
        </div>

        {/* SIH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#0f0f14] rounded-2xl p-6  transition-all duration-300">
          
          <div className="order-2 md:order-1">
            <h3 className="md:text-2xl text-[23px] text-center font-bold mb-4 underline">
              Smart India Hackathon (SIH) 2025
            </h3>

            <p className="md:text-lg text-[15px] text-gray-300">
              I was a <strong>National Finalist</strong> at the
              <strong> Smart India Hackathon (SIH) 2025</strong>, as part of the
              <strong> first team in my college’s history</strong> to reach the national stage.
              <br /><br />
              Our team ranked in the <strong>top 5 out of 500 teams across India</strong>,
              competing in the <strong>largest hackathon in the country</strong>.
              We designed and delivered a real-world solution under strict deadlines,
              strengthening my skills in system design, collaboration, and execution
              at a national level.
            </p>
          </div>

          <div className="relative h-[350px] md:h-[420px] rounded-xl overflow-hidden order-1 md:order-2">
            <Image
              src="/sih.jpeg"
              alt="SIH"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
