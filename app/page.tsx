"use client";

import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import CertificatesSection from "@/components/sections/CertificatesSection";
import DataProjectsSection from "@/components/sections/DataProjectsSection";
import WebProjectsSection from "@/components/sections/WebProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <DataProjectsSection />
        <WebProjectsSection />
        <CertificatesSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
