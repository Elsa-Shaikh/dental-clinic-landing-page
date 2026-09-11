"use client";

import {
  CheckCircle2,
  HeartPulse,
  Microscope,
  ShieldCheck,
} from "lucide-react";

const TrustStripSection = () => {
  return (
    <>
      <section className="trust-strip">
        <div>
          <CheckCircle2 />
          <span>
            <strong>Experienced hands</strong>
            <small>Specialists who listen first</small>
          </span>
        </div>
        <div>
          <Microscope />
          <span>
            <strong>Modern technology</strong>
            <small>Precision at every step</small>
          </span>
        </div>
        <div>
          <HeartPulse />
          <span>
            <strong>Personal care</strong>
            <small>Plans made for you</small>
          </span>
        </div>
        <div>
          <ShieldCheck />
          <span>
            <strong>Feel at ease</strong>
            <small>A softer kind of dentistry</small>
          </span>
        </div>
      </section>
    </>
  );
};

export default TrustStripSection;
