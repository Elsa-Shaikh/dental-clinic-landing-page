"use client";

import { openConsultation } from "@/app/page";
import { Video } from "lucide-react";

const ConsultSection = () => {
  return (
    <>
      <section className="consult-section">
        <div>
          <p className="eyebrow">Not nearby?</p>
          <h2>
            Good care can meet
            <br />
            <i>you where you are.</i>
          </h2>
          <p>
            Talk with our dental team from the comfort of home. We&apos;ll help
            you understand your options and next steps.
          </p>
          <button className="button light" onClick={openConsultation}>
            <Video size={16} /> Schedule online consultation
          </button>
        </div>
        <div className="consult-orbit">
          <div>
            <Video size={30} />
          </div>
          <span>
            care, <i>connected</i>
          </span>
        </div>
      </section>
    </>
  );
};

export default ConsultSection;
