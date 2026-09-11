"use client";

import FooterSection from "@/components/common/FooterSection";
import NavbarSection from "@/components/common/Navbar";
import HeroSection from "@/components/common/HeroSection";
import ServiceSection from "@/components/common/ServiceSection";
import AboutSection from "@/components/common/AboutSection";
import DoctorsSection from "@/components/common/DoctorsSection";
import CTASection from "@/components/common/CTASection";
import ConsultSection from "@/components/common/ConsultSection";
import AppointmentSection from "@/components/common/AppointmentSection";
import VisitSection from "@/components/common/VisitSection";
import TrustStripSection from "@/components/common/TrustStripSection";
import { clinicConfig } from "@/lib/dummt";

export const scrollToSection = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
export const openConsultation = () =>
  window.open(clinicConfig.calendlyUrl, "_blank", "noopener,noreferrer");

export default function Home() {
  return (
    <main className="site-shell">
      <NavbarSection />
      <HeroSection />

      <TrustStripSection />

      <ServiceSection />
      <AboutSection />
      <DoctorsSection />

      <VisitSection />
      <AppointmentSection />

      <ConsultSection />

      <CTASection />
      <FooterSection />
    </main>
  );
}
