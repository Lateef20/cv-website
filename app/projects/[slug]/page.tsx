import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectContent } from "@/data/projectContent";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const content = projectContent[slug];
  const projectWithExtras = project as typeof project & { image?: string; demo?: string };

  return (
    <div className="py-12">
      <Link href="/#projects" className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 block">
        ← Back to Projects
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
      <p className="text-gray-600 mb-4">{project.summary}</p>
      {project.achievement && <p className="text-blue-600 text-sm mb-4">{project.achievement}</p>}
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs border border-gray-200 text-gray-500 px-2 py-0.5">{tag}</span>
        ))}
      </div>
      <p className="text-xs text-gray-400 mb-4">{project.technologies.join(" · ")}</p>
      <div className="flex gap-4 mb-8">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
            View source on GitHub →
          </a>
        )}
        {projectWithExtras.demo && (
          <a href={projectWithExtras.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
            Live demo →
          </a>
        )}
      </div>

      {projectWithExtras.image && (
        <div className="mb-8">
          <img
            src={projectWithExtras.image}
            alt={`${project.title} screenshot`}
            className="w-full rounded border border-gray-200"
          />
        </div>
      )}

      <div className="border-t border-gray-200 pt-8 prose-content">
        {content ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <p className="text-gray-600">Detailed writeup coming soon.</p>
        )}
      </div>
    </div>
  );
}
