"use client";

import { openConsultation, scrollToSection } from "@/app/page";
import { ArrowRight, Award, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section id="home" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Care, considered differently
          </p>
          <h1>
            Your smile,
            <br />
            <i>in its best light.</i>
          </h1>
          <p className="hero-lede">
            Modern dentistry in a calm, considered space. Personal care,
            thoughtful technology, and a team who listens.
          </p>
          <div className="hero-actions">
            <button
              className="button dark"
              onClick={() => scrollToSection("appointment")}
            >
              Book an appointment <ArrowRight size={16} />
            </button>
            <button className="text-button" onClick={openConsultation}>
              <span className="play-icon">
                <Play size={11} fill="currentColor" />
              </span>{" "}
              Online consultation
            </button>
          </div>
          <div className="hero-note">
            <div className="avatar-stack">
              <span />
              <span />
              <span />
            </div>
            <span>
              <strong>10k+</strong> people cared for
              <br />
              <small>with a little more ease</small>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1300&q=88"
              alt="Bright, welcoming Lumen Dental treatment room"
            />
          </div>
          <div className="floating-card experience">
            <Award size={18} />
            <span>
              <strong>15+</strong>
              <small>years of care</small>
            </span>
          </div>
          <div className="floating-card rating">
            <span className="rating-stars">★★★★★</span>
            <strong>98%</strong>
            <small>patient satisfaction</small>
          </div>
          <span className="image-caption">01 / The Lumen approach</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
