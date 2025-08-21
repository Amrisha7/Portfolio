import { useState } from "react";
import { Code, Cpu, Database, Wrench } from "lucide-react"; 

export default function Skills() {
  const skillGroups = [
    { heading: "Programming", icon: <Code className="w-5 h-5" />, skills: ["C", "Python", "Java"] },
    { heading: "Frontend", icon: <Cpu className="w-5 h-5" />, skills: ["HTML", "CSS", "JS", "React", "Tailwind", "Vite"] },
    { heading: "Backend & DB", icon: <Database className="w-5 h-5" />, skills: ["Node.js", "MySQL"] },
    { heading: "Tools", icon: <Wrench className="w-5 h-5" />, skills: ["Git/GitHub", "VS Code", "Figma", "Jupyter Notebook", "Google Colab"] },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleGroup = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-pink-200">My Skills</h2>
      <p className="text-lg mb-10 text-indigo-200">A snapshot of my technical expertise.</p>

      <div className="space-y-6 max-w-3xl mx-auto">
        {skillGroups.map((group, index) => (
          <div key={index} className="text-left">
            <button
              onClick={() => toggleGroup(index)}
              className="w-full flex items-center gap-3 px-6 py-4 
                         bg-gradient-to-r from-purple-200/20 to-pink-200/20
                         backdrop-blur-md border border-purple-300/20 
                         rounded-xl font-semibold shadow-md hover:shadow-pink-300/40
                         transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="text-pink-300">{group.icon}</span>
              <span className="text-lg text-purple-100">{group.heading}</span>
            </button>

            {/* Collapsible skills grid */}
            {openIndex === index && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 flex items-center justify-center 
                               bg-gradient-to-br from-pink-300/30 to-purple-300/30
                               text-white rounded-lg shadow-lg font-medium
                               transition-all duration-300 hover:scale-105 hover:shadow-pink-400/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
