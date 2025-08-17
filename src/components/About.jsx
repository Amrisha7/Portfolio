import profilePic from "../assets/profile.jpeg";

function About() {
  return (
    <div className="w-full min-h-screen flex items-center transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side (Image) */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full border-4 border-purple-900 dark:border-purple-400 shadow-lg w-64 h-64 object-cover transition-all duration-500"
          />
        </div>

        {/* Right Side (Text) */}
        <div>
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-400 mb-4 transition-colors duration-500">
            About Me
          </h2>
          <p className="text-lg text-purple-800 dark:text-purple-200 leading-relaxed transition-colors duration-500">
            Hi, I’m Amrisha Mishra! A passionate developer who loves building
            interactive and creative web experiences. I enjoy working on new
            ideas, learning technologies, and exploring design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
