export default function Resume() {
  return (
    <div className="p-8 rounded-2xl shadow-lg text-center bg-blue-200 dark:bg-blue-900 transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-4 text-purple-900 dark:text-purple-300 transition-colors duration-500">
        My Resume
      </h2>
      <p className="text-lg mb-6 text-purple-700 dark:text-purple-200 transition-colors duration-500">
        Here’s my resume — one click away to know me better. Thank you!
      </p>
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 bg-red-600 dark:bg-red-400 hover:bg-red-800 dark:hover:bg-red-600 rounded-full text-white dark:text-black font-semibold transition"
      >
        Download Resume
      </a>
    </div>
  );
}
