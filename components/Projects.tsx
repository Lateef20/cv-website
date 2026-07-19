import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-gray-200 py-12">
      <SectionHeading>Projects</SectionHeading>

      <div>
        {projects.map((project) => (
          <div key={project.slug} className="border-b border-gray-200 py-6 last:border-b-0">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div className="flex-1">
                <Link href={`/projects/${project.slug}`} className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {project.title}
                </Link>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{project.summary}</p>
                {project.achievement && (
                  <p className="text-blue-600 text-sm mt-2">{project.achievement}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500 border border-gray-200 px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">{project.technologies.join(" · ")}</p>
              </div>
              <div className="flex gap-4 flex-shrink-0 mt-2 md:mt-0">
                <Link href={`/projects/${project.slug}`} className="text-sm text-blue-600 hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
