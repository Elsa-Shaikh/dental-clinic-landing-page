"use client";

import { scrollToSection } from "@/app/page";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <>
      <section className="final-cta section-pad">
        <p className="eyebrow">The next step is a small one</p>
        <h2>
          Ready to take care
          <br />
          <i>of your smile?</i>
        </h2>
        <button
          className="button dark"
          onClick={() => scrollToSection("appointment")}
        >
          Book your visit <ArrowRight size={16} />
        </button>
      </section>
    </>
  );
};

export default CTASection;
