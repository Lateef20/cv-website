import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-gray-200 py-12">
      <SectionHeading>Certifications</SectionHeading>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div key={cert.name} className="flex items-center gap-4">
            <p className="font-medium text-gray-900 text-sm">{cert.name}</p>
            <p className="text-gray-500 text-sm">- {cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
