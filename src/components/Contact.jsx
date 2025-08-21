import React from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-4 text-pink-200">Get in Touch</h2>
      <p className="text-center max-w-xl mb-12 text-indigo-200">
        I’d love to connect with you! Whether it’s about a project, collaboration, or just to say hello — feel free to reach out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3 p-5 
                        bg-gradient-to-r from-purple-200/20 to-pink-200/20 
                        backdrop-blur-md border border-purple-300/20
                        rounded-xl shadow-md hover:shadow-pink-300/40 hover:scale-105 transition">
          <Mail className="w-6 h-6 text-pink-300" />
          <span className="text-purple-100">amrishamishra070@gmail.com</span>
        </div>

        <div className="flex items-center gap-3 p-5 
                        bg-gradient-to-r from-purple-200/20 to-pink-200/20 
                        backdrop-blur-md border border-purple-300/20
                        rounded-xl shadow-md hover:shadow-pink-300/40 hover:scale-105 transition">
          <Phone className="w-6 h-6 text-green-300" />
          <span className="text-purple-100">+91-9051609132</span>
        </div>

        <a
          href="https://github.com/Amrisha7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-5 
                     bg-gradient-to-r from-purple-200/20 to-pink-200/20 
                     backdrop-blur-md border border-purple-300/20
                     rounded-xl shadow-md hover:shadow-pink-300/40 hover:scale-105 transition"
        >
          <Github className="w-6 h-6 text-gray-300" />
          <span className="text-purple-100">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/amrisha-mishra-232298272"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-5 
                     bg-gradient-to-r from-purple-200/20 to-pink-200/20 
                     backdrop-blur-md border border-purple-300/20
                     rounded-xl shadow-md hover:shadow-pink-300/40 hover:scale-105 transition"
        >
          <Linkedin className="w-6 h-6 text-blue-300" />
          <span className="text-purple-100">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
