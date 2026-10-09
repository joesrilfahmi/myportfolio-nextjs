import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HeroCard } from "@/components/sections/HeroCard";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main"
        className="mx-auto w-full max-w-[1920px] pb-24 md:grid md:min-h-screen md:grid-cols-[minmax(16rem,0.78fr)_minmax(0,1.22fr)_4rem] md:gap-x-8 md:px-8 md:pb-0 lg:grid-cols-[26rem_minmax(0,1fr)_4rem] lg:gap-x-10 lg:px-10"
      >
        <aside className="flex min-h-[100svh] items-center justify-center px-4 pt-6 pb-28 md:sticky md:top-0 md:h-screen md:min-h-0 md:self-start md:px-0 md:py-0">
          <HeroCard />
        </aside>
        <div className="min-w-0 md:[&>section]:mx-0 md:[&>section]:max-w-none md:[&>section]:px-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <div aria-hidden="true" className="hidden md:block" />
      </main>
    </>
  );
}
