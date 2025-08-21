import profilePic from "../assets/portfolio_pic.jpeg";

function About() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center transition-colors duration-500 px-6">
      <div className="max-w-5xl w-full flex flex-col items-center space-y-10">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full border-4 border-pink-300 shadow-[0_0_30px_rgba(236,72,153,0.6)] w-64 h-64 object-cover transition-all duration-500"
          />
        </div>

        {/* About Card */}
        <div className="backdrop-blur-lg bg-white/20 shadow-xl rounded-2xl p-8 max-w-3xl text-center border border-white/30">
          <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-4">
            About Me
          </h2>
          <p className="text-lg text-purple-800 dark:text-purple-200 leading-relaxed">
            Hi, I’m{" "}
            <span className="text-pink-300 font-semibold">Amrisha Mishra</span>!{" "}
            A passionate <span className="text-pink-300 font-semibold">developer</span> who loves building{" "}
            <span className="text-pink-300 font-semibold">interactive</span> and{" "}
            <span className="text-pink-300 font-semibold">creative</span> web
            experiences. I enjoy working on{" "}
            <span className="text-pink-300 font-semibold">new ideas</span>,{" "}
            learning <span className="text-pink-300 font-semibold">technologies</span>, 
            and exploring <span className="text-pink-300 font-semibold">design</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
