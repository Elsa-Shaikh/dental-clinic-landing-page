"use client";

import { scrollToSection } from "@/app/page";
import { ArrowRight, Check } from "lucide-react";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
            alt="Lumen Dental clinician preparing a modern treatment room"
          />
          <span>03 / A more human practice</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">About Lumen</p>
          <h2>
            Modern dentistry,
            <br />
            <i>with a personal touch.</i>
          </h2>
          <p>
            We believe the best care starts with feeling heard. Our team pairs
            clinical excellence with a quieter, more human experience — so every
            visit feels considered from the moment you walk in.
          </p>
          <ul>
            {[
              "Experienced dental professionals",
              "Thoughtful, modern technology",
              "Personalized treatment plans",
              "A calm and comfortable environment",
            ].map((item) => (
              <li key={item}>
                <Check size={15} />
                {item}
              </li>
            ))}
          </ul>
          <div className="stats">
            <div>
              <strong>15+</strong>
              <small>Years experience</small>
            </div>
            <div>
              <strong>10k</strong>
              <small>Patients cared for</small>
            </div>
            <div>
              <strong>98%</strong>
              <small>Feel at ease</small>
            </div>
          </div>
          <button
            className="text-button dark-text"
            onClick={() => scrollToSection("doctors")}
          >
            Meet our doctors <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
