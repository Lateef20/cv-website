import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-gray-200 py-12">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-10">
        {experience.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row md:gap-8">
            <div className="md:w-48 flex-shrink-0 mb-2 md:mb-0">
              <p className="text-sm text-gray-500">{item.period}</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{item.role}</p>
              <p className="text-blue-600 text-sm mb-3">{item.company}</p>
              {item.bullets.length > 0 && (
                <ul className="space-y-1.5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-600 text-sm leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-400">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
