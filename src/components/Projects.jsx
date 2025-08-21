import React, { useState } from "react";

const projects = [
  {
    title: "Encrypted Messaging System",
    description:
      "Secure chat made simple! This project demonstrates encryption & decryption of messages with a user-friendly GUI, applying core cybersecurity principles in action.",
    github: "https://github.com/Amrisha7/Cryptography",
  },
  {
    title: "AI Rerouting Chrome Extension",
    description:
      "Built a Chrome extension to reroute AI responses dynamically according to user-defined rules, enhancing control and customization over AI outputs.",
    github: "https://github.com/Amrisha7/AI-REROUTING-EXTENSION",
  },
  {
    title: "Event Management System",
    description:
      "A dynamic platform to plan, organize, and track events effortlessly, streamlining scheduling, registrations, and notifications for seamless event management.",
    github: "https://github.com/Amrisha7/Event-Management-System",
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="min-h-screen py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-200">
        Projects
      </h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-200/20 to-indigo-200/20
                       backdrop-blur-md border border-purple-400/20
                       rounded-2xl shadow-lg hover:shadow-pink-300/40
                       transition duration-300 p-4"
          >
            {/* Title Button */}
            <button
              onClick={() => toggleProject(index)}
              className="w-full text-left flex justify-between items-center
                         text-xl font-semibold text-purple-100 hover:text-pink-200"
            >
              {project.title}
              <span className="text-pink-300">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {/* Expanded Content */}
            {openIndex === index && (
              <div className="mt-4 text-indigo-200 transition-all duration-500">
                <p className="mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-pink-300 to-purple-400
                             hover:from-pink-400 hover:to-purple-500 text-white 
                             rounded-lg shadow-md hover:shadow-pink-400/50 transition"
                >
                  GitHub 🔗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
