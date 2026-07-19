import ButtonLink from "./ButtonLink";
import ProfileImage from "./ProfileImage";

export default function Hero() {
  return (
    <section className="py-10 md:py-20">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Lateef Jawando</h1>
          <p className="text-lg md:text-xl text-gray-500 mb-6">Security Engineer</p>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
            Security Engineer at MongoDB, with software engineering
            experience at JPMorgan and a focus on secure and scalable systems. I have worked on security
          automation, backend services, cloud systems, AI-powered tools, and applied computer vision projects.
          </p>
        </div>
        <div className="flex-shrink-0 order-first md:order-none self-center md:self-auto">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
