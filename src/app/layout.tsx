import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import CustomCursor from '@/components/common/CustomCursor';
import SmoothScroll from '@/components/common/SmoothScroll'; // Import the scroll wrapper

// 1. Load Google Font (Inter for body text)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// 2. Load Local Font (Clash Display for headings)
// Ensure the path is correct relative to this file.
// If layout.tsx is in src/app, and fonts are in public/fonts,
// you might need to move fonts to src/fonts or adjust the path.
const clash = localFont({
  src: '../../public/fonts/ClashDisplay-Variable.ttf', // Verify this path!
  variable: '--font-clash',
  display: 'swap',
  weight: '400 700', // Specify weights if it's a variable font
});

// 3. Define Metadata (SEO)
export const metadata: Metadata = {
  title: 'Your Name | Creative Developer',
  description:
    'Portfolio of a creative developer specializing in Next.js and interaction design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${clash.variable}`}>
      <body className={`bg-[#0B0C10] text-[#E0E0E0] antialiased`}>
        {/* Smooth Scroll wraps the content to enable Lenis */}
        <SmoothScroll>
          <CustomCursor />

          {/* Noise Overlay (Fixed: Ensure it has pointer-events-none in CSS) */}
          <div className='noise-overlay' />

          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
