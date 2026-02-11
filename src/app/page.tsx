import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
