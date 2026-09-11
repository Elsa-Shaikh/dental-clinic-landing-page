"use client";
import { scrollToSection } from "@/app/page";
import { clinicConfig } from "@/lib/dummt";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const FooterSection = () => {
  return (
    <>
      <footer id="contact" className="footer">
        <div className="footer-brand">
          <button
            className="brand light-brand"
            onClick={() => scrollToSection("home")}
          >
            <span className="brand-mark">+</span>
            <span>
              LUMEN
              <br />
              <em>DENTAL</em>
            </span>
          </button>
          <p>
            A softer, more thoughtful
            <br />
            kind of dental care.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <button onClick={() => scrollToSection("about")}>About us</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("doctors")}>
            Our doctors
          </button>
          <button onClick={() => scrollToSection("appointment")}>
            Appointments
          </button>
        </div>
        <div>
          <h4>Find us</h4>
          <p>{clinicConfig.address}</p>
          <p>{clinicConfig.phone}</p>
          <p>{clinicConfig.email}</p>
        </div>
        <div>
          <h4>Follow along</h4>
          <div className="socials">
            {" "}
            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaInstagram />{" "}
            </a>{" "}
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaFacebookF />{" "}
            </a>{" "}
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedinIn />{" "}
            </a>{" "}
            <a
              href="#"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaTwitter />{" "}
            </a>{" "}
          </div>
          <p className="footer-hours">
            Mon-Thu 9-7
            <br />
            Fri 2-7 · Sat 9-5
          </p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Lumen Dental</span>
          <span>Privacy · Terms</span>
          <span>Made with care in New York</span>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
