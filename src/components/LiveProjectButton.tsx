interface LiveProjectButtonProps {
  href: string;
  className?: string;
}

/**
 * Ghost/outline pill link used on project cards. Opens the live project in a new tab.
 */
export default function LiveProjectButton({ href, className = '' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Live Project
    </a>
  );
}
