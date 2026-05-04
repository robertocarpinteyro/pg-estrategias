import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Problem from "@/components/sections/Problem";
import WhyDifferent from "@/components/sections/WhyDifferent";
import SistemaPG from "@/components/sections/SistemaPG";
import CasosExito from "@/components/sections/CasosExito";
import Pricing from "@/components/sections/Pricing";
import Garantia from "@/components/sections/Garantia";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <WhyDifferent />
        <SistemaPG />
        <CasosExito />
        <Pricing />
        <Garantia />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
