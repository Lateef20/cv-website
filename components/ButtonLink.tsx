import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function ButtonLink({ href, children, variant = "secondary", external, className }: ButtonLinkProps) {
  const base = `inline-block text-sm font-medium py-2.5 px-5 rounded-md border transition-all duration-150${className ? ` ${className}` : ""}`;
  const styles = {
    primary: `${base} bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-sm hover:shadow`,
    secondary: `${base} bg-white text-gray-700 border-gray-300 hover:border-gray-500 hover:text-gray-900`
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
