import Link from "next/link";
import { books } from "@/data/books";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My 5 Star Books",
  robots: { index: false, follow: false },
};

export default function BooksPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-10 block"
      >
        ← Back
      </Link>

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          My 5 Star Books
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-xl">
          You weren&apos;t supposed to find this... but now that you are, here are some books that I really like.
        </p>
      </div>

      <ul className="space-y-3 mb-12">
        {books.map((book) => (
          <li key={book.title} className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">{book.title}</span>
            {" — "}
            {book.note}
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-100 pt-8">
        <p className="text-sm text-gray-500">
          
          <a
            href="https://forms.gle/3moCzWGgXqUBkUFe9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
          >
            Got a recommendation?
          </a>
        </p>
      </div>
    </div>
  );
}
