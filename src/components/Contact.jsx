import React from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-400 transition-colors duration-500">
        Get in Touch
      </h2>
      <p className="text-center max-w-xl mb-12 text-purple-800 dark:text-purple-200 transition-colors duration-500">
        I’d love to connect with you! Whether it’s about a project, collaboration, or just to say hello — feel free to reach out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3 p-5 bg-purple-300 dark:bg-purple-700 rounded-xl shadow-md hover:scale-105 transition duration-300">
          <Mail className="w-6 h-6 text-red-700 dark:text-red-400" />
          <span>amrishamishra070@gmail.com</span>
        </div>

        <div className="flex items-center gap-3 p-5 bg-purple-300 dark:bg-purple-700 rounded-xl shadow-md hover:scale-105 transition duration-300">
          <Phone className="w-6 h-6 text-green-500 dark:text-green-300" />
          <span>+91-9051609132</span>
        </div>

        <a
          href="https://github.com/Amrisha7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-5 bg-purple-300 dark:bg-purple-700 rounded-xl shadow-md hover:scale-105 transition duration-300"
        >
          <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/amrisha-mishra-232298272"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-5 bg-purple-300 dark:bg-purple-700 rounded-xl shadow-md hover:scale-105 transition duration-300"
        >
          <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
