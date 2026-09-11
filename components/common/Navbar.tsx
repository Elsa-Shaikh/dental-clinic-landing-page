"use client";
import { scrollToSection } from "@/app/page";
import { navItems } from "@/lib/dummt";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const NavbarSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="nav-wrap" aria-label="Main navigation">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="Lumen Dental home"
        >
          <span className="brand-mark">+</span>
          <span>
            LUMEN
            <br />
            <em>DENTAL</em>
          </span>
        </button>
        <div className="desktop-nav">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
        </div>
        <button
          className="nav-cta"
          onClick={() => scrollToSection("appointment")}
        >
          Book a visit <ArrowRight size={15} />
        </button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection(id);
                }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("appointment");
              }}
            >
              Book a visit
              {/* <ArrowRight size={15} /> */}
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarSection;
