import React from "react";

const techStack = [
  { name: "HTML", icon: "src/assets/tech/HTML5.svg" },
  { name: "CSS", icon: "src/assets/tech/CSS3.svg" },
  { name: "Bootstrap", icon: "src/assets/tech/Bootstrap.svg" },
  { name: "React", icon: "src/assets/tech/React.svg" },
  { name: "Node.js", icon: "src/assets/tech/Node.js.svg" },
  { name: "MUI", icon: "src/assets/tech/Material UI.svg" },
  { name: "Tailwind CSS", icon: "src/assets/tech/Tailwind CSS.svg" },
];

function TechStack() {
  return (
    <section
      id="recent-work"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-12">
        Tech Stacks And Tools
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="
            float
              w-20 h-20 sm:w-24 sm:h-24
              bg-[#1B1B1B]
              rounded-full
              flex items-center justify-center
              shadow-lg
              hover:scale-110
              transition-transform duration-300
            "
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
