'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Information', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Connect', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-mono tracking-tight text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
          >
            Alex Davies
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-3 py-1.5 text-[13px] border border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4 text-[13px] text-[var(--color-foreground-muted)]">
            <a href="#projects" className="hover:text-[var(--color-foreground)]">
              Work
            </a>
            <a href="#contact" className="hover:text-[var(--color-foreground)]">
              Connect
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
