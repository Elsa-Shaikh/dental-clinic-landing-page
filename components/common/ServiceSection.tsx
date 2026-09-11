"use client";

import { scrollToSection } from "@/app/page";
import { services } from "@/lib/dummt";
import { ArrowRight } from "lucide-react";

const ServiceSection = () => {
  return (
    <>
      <section id="services" className="section-pad services-section">
        <div className="section-heading">
          <p className="eyebrow">02 / What we do</p>
          <h2>
            Care that goes
            <br />
            <i>beyond the chair.</i>
          </h2>
          <p>
            From your first check-up to the moments you want to feel your most
            confident, our care is built around the whole you.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article className="service-card" key={title}>
              <span className="service-number">0{index + 1}</span>
              <Icon className="service-icon" strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
              <button onClick={() => scrollToSection("appointment")}>
                Learn more <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
