import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HeroCard } from "@/components/sections/HeroCard";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-8 px-4 pt-8 pb-28 sm:px-6 lg:grid-cols-[minmax(250px,320px)_minmax(0,1fr)_4.5rem] lg:gap-10 lg:px-10 lg:py-10">
        <aside className="lg:sticky lg:top-10 lg:flex lg:h-[calc(100svh-5rem)] lg:items-center">
          <HeroCard />
        </aside>

        <main id="main" tabIndex={-1} className="min-w-0 outline-none">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>

        <Navbar />
      </div>
    </>
  );
}
