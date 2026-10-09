import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HeroCard } from "@/components/sections/HeroCard";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
// import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main"
        className="mx-auto w-full max-w-[1920px] pb-24 md:grid md:min-h-screen md:grid-cols-[minmax(16rem,0.78fr)_minmax(0,1.22fr)_4rem] md:gap-x-6 md:px-6 md:pb-0 lg:grid-cols-[26rem_minmax(0,1fr)_4rem]"
      >
        <aside className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:justify-center md:self-start">
          <HeroCard />
        </aside>
        <div className="min-w-0 md:[&>section]:mx-0 md:[&>section]:max-w-none md:[&>section]:px-0">
          <Hero />
          <About />
          <Projects />
          {/* <Journey /> */}
          <Contact />
          <Footer />
        </div>
        <div aria-hidden="true" className="hidden md:block" />
      </main>
    </>
  );
}
