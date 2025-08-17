import React from "react";

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
  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-6 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-900 dark:text-purple-400 transition-colors duration-500">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-red-300 dark:bg-red-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-900 dark:text-purple-200 transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-purple-700 dark:text-purple-200 mb-6 transition-colors duration-500">
              {project.description}
            </p>
            <div className="mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-600 dark:bg-red-400 text-white dark:text-black rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
