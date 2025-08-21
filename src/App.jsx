import './index.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ScrollIndicator";
import Footer from "./Footer";

function App() {
  return (
    <div
      className="min-h-screen scroll-smooth transition-colors duration-500
                 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100
                 dark:from-purple-900 dark:via-blue-800 dark:to-black"
    >
      <Navbar />

      <ScrollIndicator />

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>

      <section id="about" className="w-full min-h-screen flex items-center transition-colors duration-500">
        <About />
      </section>

      <section id="resume" className="min-h-screen flex items-center justify-center px-6 py-16 transition-colors duration-500">
        <Resume />
      </section>

      <section id="projects" className="min-h-screen px-6 py-16 transition-colors duration-500">
        <Projects />
      </section>

      <section id="skills" className="min-h-screen px-6 py-16 transition-colors duration-500">
        <Skills />
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 transition-colors duration-500">
        <Contact />
      </section>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
