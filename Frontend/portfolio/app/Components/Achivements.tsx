import Image from "next/image";

export function Achievements() {
  return (

    <>

    <section className="max-w-5xl mx-auto px-6 py-16 text-gray-200">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
        My Gallery
      </h2>
    </section>

    <div className="flex flex-col">

        {/* First box */}

      <div className="w-full h-[700px] flex justify-between">

        <div className="w-full h-full  relative">
           <Image alt="icpc_image" className="object-cover" fill src={"/icpc.jpeg"}></Image>
        </div>

         <div className="w-full h-full  p-2">

            <h1 className="font-bold text-center text-[25px]">ICPC Asia West Regional Selection</h1>

            <p className="p-2 mt-2 text-[20px]">
                I qualified for the <strong>ICPC Asia West Regional Contest 2025</strong>, 
                becoming the <strong>first student in my college’s history</strong> to 
                qualify for ICPC regionals. After qualifying, I represented my college 
                at the <strong>regional contest held in Bangalore</strong> as part of a
                <strong>three-member team</strong>. This achievement reflects strong 
                algorithmic thinking, consistency in competitive programming, and the 
                ability to perform under <strong>high-pressure, time-constrained 
                environments</strong> while collaborating effectively as a team.
            </p>

        </div>

      </div>


        {/* Second box */}

      <div className="w-full h-[700px] flex justify-between mt-2">

        <div className="w-full h-full ">

             <h1 className="font-bold text-center text-[25px]">Smart India Hackathon (SIH) 2025</h1>

            <p className="p-2 mt-2 text-[20px]">
               I was a <strong>National Finalist</strong> at the <strong>Smart India Hackathon 
              (SIH) 2025</strong>, representing the <strong>first team in my college’s 
              history</strong> to qualify for the national stage of the competition. 
              Our team secured a position in the <strong>top 5 out of 500 teams across 
              India</strong>, competing in what is widely regarded as the <strong>largest 
              hackathon in India</strong>.
              During the hackathon, we worked under strict deadlines to design and implement
              a complete, real-world solution, requiring rapid ideation, system design, 
              development, and iterative improvements. This experience strengthened my ability to 
              collaborate in high-pressure environments, translate problem statements into 
              scalable technical solutions, and deliver results at a national level while 
              maintaining code quality and clarity.
            </p>

        </div>

         <div className="w-full h-full  relative">
           <Image alt="icpc_image" className="object-cover" fill src={"/sih.jpeg"}></Image>
        </div>

      </div>
    
    </div>

    </>

  );
}
