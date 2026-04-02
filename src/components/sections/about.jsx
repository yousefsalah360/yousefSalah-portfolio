import { OnScroll } from "../onScroll";


export const About = () => {
  const FrontendSkills = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JS",
    "React JS",
    "React Hooks",
    "React Router",
    "Axios",
    "React TS",
    "Git",
    "Github",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-12 "
    >
      <OnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center ">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10  border hover:-translate-y-2 transition-all">
          <p className="text-gray-400 mb-6 text-center text-lg">
            I am a passionate frontend developer with experience in building
            modern, responsive web applications. I enjoy creating seamless user
            experiences and continuously learning new technologies.
          </p>

          <div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-7 text-center ">
                              My Skills
              </h3>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {FrontendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-7 text-center ">
                        Education 🏛️
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 font-semibold">
                          <li>
                              Study at the Higher Institute of Computers, Systems and Administrative Information in Egypt (HICMIS) 
                          </li>

                          <li className="mt-10">
                              I joined in 2024 and I am currently in my third year, with one year left until graduation.
                          </li>
                      </ul>
                      
                  </div>

                  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-7 text-center ">
                        Experience 💼
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <h4 className="mt-10 font-semibold leading-relaxed">
                               I don't have any experience yet, but I've looked into gaining work experience. My strengths include: learning quickly, problem-solving abilities, teamwork skills, and keeping up with technological advancements.
                          </h4>
                      </ul>
                      
                  </div>
                
              </div>
      </div>
      </OnScroll>
    </section>
  );
};
