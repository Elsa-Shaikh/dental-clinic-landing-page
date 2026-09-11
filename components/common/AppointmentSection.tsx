"use client";

import { clinicConfig, services, timeOptions } from "@/lib/dummt";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <>
      <section id="appointment" className="appointment-section section-pad">
        <div className="appointment-intro">
          <p className="eyebrow">06 / Start here</p>
          <h2>
            Make room for
            <br />
            <i>your smile.</i>
          </h2>
          <p>
            Tell us a little about what you need. A member of our team will be
            in touch shortly to find a time that works for you.
          </p>
          <div className="contact-mini">
            <Phone size={17} />
            <span>
              {clinicConfig.phone}
              <small>Call our front desk</small>
            </span>
          </div>
          <div className="contact-mini">
            <Mail size={17} />
            <span>
              {clinicConfig.email}
              <small>We usually reply within a day</small>
            </span>
          </div>
        </div>
        {/* <div className="form-card">
          {submitted ? (
            <div className="success-state">
              <CheckCircle2 size={48} />
              <h3>We&apos;ve got it from here.</h3>
              <p>
                Thank you. Our team will be in touch shortly to confirm your
                appointment.
              </p>
              <button
                className="button dark"
                onClick={() => setSubmitted(false)}
              >
                Request another time <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-row">
                <label>
                  Full name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Phone number
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="(212) 555-0148"
                  />
                </label>
                <label>
                  Service
                  <select required name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>
                  Preferred date
                  <input required type="date" name="date" />
                </label>
                <label>
                  Preferred time
                  <select name="time" defaultValue="">
                    <option value="" disabled>
                      Select a time
                    </option>

                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                Anything we should know?
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="resize-none"
                />
              </label>
              <button className="button dark submit-button" type="submit">
                Request appointment <ArrowRight size={16} />
              </button>
              <p className="form-footnote">
                By submitting, you agree to our privacy policy. We&apos;ll never
                share your details.
              </p>
            </form>
          )}
        </div> */}
        <AppointmentForm />
      </section>
    </>
  );
};

export default AppointmentSection;
