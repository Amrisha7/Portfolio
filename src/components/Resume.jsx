export default function Resume() {
  return (
    <div className="p-8 rounded-2xl shadow-lg text-center 
                    bg-gradient-to-br from-purple-200/20 to-pink-200/20 
                    backdrop-blur-md border border-purple-300/20">
      <h2 className="text-3xl font-bold mb-4 text-purple-200">
        My Resume
      </h2>
      <p className="text-lg mb-6 text-indigo-200">
        Here’s my resume — one click away to know me better. Thank you!
      </p>
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 bg-gradient-to-r from-pink-300 to-purple-400
                   hover:from-pink-400 hover:to-purple-500 
                   rounded-full text-white font-semibold 
                   shadow-lg hover:shadow-pink-400/50 transition"
      >
        Download Resume
      </a>
    </div>
  );
}
