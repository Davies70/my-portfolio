import Link from 'next/link';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/Davies70',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/alexdavies',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/alexdavies_dev',
  },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-[13px] font-mono text-foreground-muted">
              © 2024 Alex Davies
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-foreground-muted hover:text-accent transition-colors"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom - Credit */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-[11px] text-foreground-muted">
            Designed and built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
