import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import SmoothScroll from '@/components/common/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const clash = localFont({
  src: '../../public/fonts/ClashDisplay-Variable.ttf',
  variable: '--font-clash',
  display: 'swap',
  weight: '400 700',
});

export const metadata: Metadata = {
  title: 'Alex Davies | Fullstack Engineer',
  description:
    'Portfolio of Alex Davies - a fullstack software engineer specializing in React, Next.js, TypeScript, and cloud architecture. Based in Germany.',
};

export const viewport: Viewport = {
  themeColor: '#0a192f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${clash.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <SmoothScroll>
          <div className="noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
