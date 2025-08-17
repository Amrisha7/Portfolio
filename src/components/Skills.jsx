import { useState } from "react";

export default function Skills() {
  const skillGroups = [
    {
      heading: "Programming",
      skills: ["C", "Python", "Java"],
    },
    {
      heading: "Frontend",
      skills: ["HTML", "CSS", "JS", "React", "Tailwind", "Vite"],
    },
    {
      heading: "Backend & DB",
      skills: ["Node.js", "MySQL"],
    },
    {
      heading: "Tools",
      skills: ["Git/GitHub", "VS Code", "Figma", "Jupyter Notebook", "Google Colab"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleGroup = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 text-center transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-6 text-purple-900 dark:text-purple-400 transition-colors duration-500">
        My Skills
      </h2>
      <p className="text-lg mb-10 text-purple-800 dark:text-purple-200 transition-colors duration-500">
        A snapshot of my technical expertise.
      </p>

      <div className="space-y-4 max-w-xl mx-auto">
        {skillGroups.map((group, index) => (
          <div key={index}>
            <button
              onClick={() => toggleGroup(index)}
              className="w-auto px-5 py-2 bg-gradient-to-r from-pink-400 to-pink-300 dark:from-pink-600 dark:to-pink-500 text-white rounded-full font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {group.heading}
            </button>

            {openIndex === index && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-pink-300 dark:bg-pink-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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
