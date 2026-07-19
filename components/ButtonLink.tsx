import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function ButtonLink({ href, children, variant = "secondary", external, className }: ButtonLinkProps) {
  const base = `inline-block text-sm font-medium py-2 px-4 border transition-colors${className ? ` ${className}` : ""}`;
  const styles = {
    primary: `${base} bg-blue-600 text-white border-blue-600 hover:bg-blue-700`,
    secondary: `${base} bg-white text-gray-900 border-gray-300 hover:border-gray-500`
  };

  if (external) {
    return (
      <a href={href} className={styles[variant]} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}
