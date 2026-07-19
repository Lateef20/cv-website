import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="border-t border-gray-200 py-12">
      <SectionHeading>Education</SectionHeading>
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="md:w-48 flex-shrink-0 mb-2 md:mb-0">
          <p className="text-sm text-gray-500">Sep 2022 – Jun 2026</p>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-900">BSc Computer Science with a Year in Industry</p>
          <p className="text-blue-600 text-sm mb-3">University of Kent</p>
          <p className="text-gray-600 text-sm mb-3">First Class</p>
          <ul className="space-y-1.5">
            {[
              "Co-founder of Careers in Technology society",
              "Peer Tutor and Student Ambassador"
            ].map((item, i) => (
              <li key={i} className="text-gray-600 text-sm leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
