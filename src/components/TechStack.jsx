import React from "react";

// Import icons
import htmlIcon from "../assets/tech/HTML5.svg";
import cssIcon from "../assets/tech/CSS3.svg";
import bootstrapIcon from "../assets/tech/Bootstrap.svg";
import reactIcon from "../assets/tech/React.svg";
import nodeIcon from "../assets/tech/Node.js.svg";
import muiIcon from "../assets/tech/Material UI.svg";
import tailwindIcon from "../assets/tech/Tailwind CSS.svg";

const techStack = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MUI", icon: muiIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
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
