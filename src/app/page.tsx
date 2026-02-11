// src/app/page.tsx
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact'; // <--- Import this

export default function Home() {
  return (
    <main className='w-full bg-[#0B0C10]'>
      <Hero />
      <About />
      <Projects />
      <Contact /> {/* <--- Place it at the bottom */}
    </main>
  );
}
