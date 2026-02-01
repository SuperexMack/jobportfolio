export function Aboutme() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-gray-200">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
        About Me
      </h2>

      <p className="text-gray-300 leading-relaxed mb-6">
        I am a full-stack developer and competitive programmer right
        now looking for job opportunity with strong experience
        building real-time, scalable web applications and contributing to open-source
        projects. My work spans modern frontend frameworks, robust backend systems,
        databases, and DevOps tooling, with a strong emphasis on clean architecture
        and performance.
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        I enjoy solving complex problems whether it’s designing real-time systems using
        WebSockets, building production-grade APIs, or optimizing algorithms through
        competitive programming. I actively explore new technologies such as Rust,
        blockchain, and cloud-native tooling to broaden my engineering depth.
      </p>


      <h3 className="text-2xl font-semibold mt-10 mb-4">
        Achievements
      </h3>

      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          ICPC Asia West Regional Contest 2025 – <span className="text-white">Amritapuri Regionalist</span>.
        </li>
        <li>
          Smart India Hackathon (SIH) 2025 – <span className="text-white">National Finalist</span>,
          ranked top 5 out of 500 teams nationwide and advanced to the Grand Finals in Punjab.
        </li>
        <li>
          Solved <span className="text-white">600+ DSA problems on LeetCode</span> and
          <span className="text-white"> 1000+ problems</span> across multiple competitive platforms.
        </li>
      </ul>
    </section>
  );
}
