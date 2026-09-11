"use client";

import { doctors } from "@/lib/dummt";

const DoctorsSection = () => {
  return (
    <>
      <section id="doctors" className="section-pad doctors-section">
        <div className="section-heading inline">
          <div>
            <p className="eyebrow">04 / Your care team</p>
            <h2>
              Meet the people
              <br />
              <i>behind the care.</i>
            </h2>
          </div>
          <p>
            Experienced clinicians, generous listeners, and a team that truly
            enjoys what they do.
          </p>
        </div>
        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-photo">
                <img src={doctor.image} alt={doctor.name} />
                <span>{doctor.years}</span>
              </div>
              <p className="doctor-role">{doctor.role}</p>
              <h3>{doctor.name}</h3>
              <p>{doctor.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default DoctorsSection;
