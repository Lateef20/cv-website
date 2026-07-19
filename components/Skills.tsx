import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-gray-200 py-12">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="font-medium text-gray-900 mb-2 text-sm">{group.category}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
