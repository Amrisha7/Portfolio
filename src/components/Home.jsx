import React, { useState, useEffect } from "react";
import studentIllustration from "../assets/student-illustration.png";

const Home = () => {
  const words = ["Web Developer", "AI Enthusiast", "Cyber Security Learner"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (deleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentWord.length) {
          setDeleting(true);
        }
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, deleting]);

  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-12
                bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
                dark:from-purple-900 dark:via-blue-800 dark:to-black
                bg-[length:400%_400%] animate-gradientMove transition-colors duration-500"
    >
      {/* Text Content */}
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-purple-900 dark:text-purple-400 transition-colors duration-500">
          Hi, I'm Amrisha Mishra
        </h1>

        <p className="text-lg md:text-xl text-purple-700 dark:text-purple-200 mb-4 max-w-2xl h-8 transition-colors duration-500">
          {displayedText}
          <span className="text-purple-900 dark:text-purple-400 font-bold">|</span>
        </p>

        <p className="text-lg md:text-xl text-purple-700 dark:text-purple-200 mb-8 max-w-2xl transition-colors duration-500">
          Passionate about creating projects in Web Development, Cyber Security, and AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-purple-700 dark:bg-purple-500 hover:bg-purple-900 dark:hover:bg-purple-700 text-white dark:text-black rounded-full shadow-lg transition transform hover:scale-105"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-6 py-3 bg-pink-400 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-500 text-white rounded-full shadow-lg transition transform hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={studentIllustration}
          alt="Student Illustration"
          className="w-64 md:w-80 animate-[bounce_3s_ease-in-out_infinite]"
        />
      </div>
    </section>
  );
};

export default Home;
