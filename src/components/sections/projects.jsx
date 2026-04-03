import { OnScroll } from "../onScroll";


export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12"
    >
      <OnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center ">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-white">Dashboard</h3>
            <p className="text-gray-300 mb-6">
              A responsive admin dashboard with charts, tables, and user
              management.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "React Router"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-center mb-5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://yousefsalah360.github.io/dashboard-project"
                className="text-blue-400 hover:blue-300 transition-colors"
              >
                View Project ➨
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-white">e-commerce</h3>
            <p className="text-gray-300 mb-6">
              A responsive e-commerce website with products, cart, and checkout.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "React Router" , "Axios"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-center mb-5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:blue-300 transition-colors"
              >
                View Project ➨
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-white">restaurant website</h3>
            <p className="text-gray-300 mb-6">
              A responsive restaurant website with menu, cart, and checkout.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "React Router"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-center mb-5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:blue-300 transition-colors"
              >
                View Project ➨
              </a>
            </div>
          </div>
        </div>
      </div>
      </OnScroll>
    </section>
  );
};
