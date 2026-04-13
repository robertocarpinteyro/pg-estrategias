import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Statement from "@/components/sections/Statement";
import Promise from "@/components/sections/Promise";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Difference from "@/components/sections/Difference";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Promise />
        <Services />
        <Portfolio />
        <Difference />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
