import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-4 mt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-1">
        <span>© {new Date().getFullYear()} Lateef Jawando</span>
        <span>Built with AI</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Lateef20/cv-website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            View site source
          </a>
          <Link
            href="/books"
            aria-label="Bookshelf"
            title="📚"
            className="text-gray-300 hover:text-gray-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
