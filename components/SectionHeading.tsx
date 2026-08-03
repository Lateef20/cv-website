export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-gray-900 mb-8 pl-3 border-l-2 border-blue-600 tracking-tight">
      {children}
    </h2>
  );
}
