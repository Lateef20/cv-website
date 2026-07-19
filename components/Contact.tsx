import SectionHeading from "./SectionHeading";

const EMAIL = "hello@lateefjawando.com";
const LINKEDIN = "https://www.linkedin.com/in/lateef-jawando";
const GITHUB = "https://github.com/lateef-jawando";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-200 py-12">
      <SectionHeading>Contact</SectionHeading>
      <div className="max-w-xl">
        <p className="text-gray-600 leading-relaxed mb-6">
          Feel free to get in touch whether you have a volunteering opportunity,
          feedback or a suggestion, or just want to say hello.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${EMAIL}`}
            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors underline-offset-4 hover:underline"
          >
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors underline-offset-4 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
