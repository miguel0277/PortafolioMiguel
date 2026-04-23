import Navbar from "@/components/kadda/Navbar";
import Hero from "@/components/kadda/Hero";
import Marquee from "@/components/kadda/Marquee";
import About from "@/components/kadda/About";
import Insignias from "@/components/kadda/Insignias";
import Portfolio from "@/components/kadda/Portfolio";
import Contact from "@/components/kadda/Contact";
import Footer from "@/components/kadda/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Insignias />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
