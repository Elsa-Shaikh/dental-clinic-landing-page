import {
  Baby,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const clinicConfig = {
  name: "Lumen Dental",
  calendlyUrl: "https://calendly.com/",
  phone: "(212) 555-0148",
  email: "hello@lumendental.com",
  address: "24 Mercer Street, New York, NY",
};
export const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Doctors", "doctors"],
  ["Visit us", "visit"],
];
export const services = [
  {
    icon: Stethoscope,
    title: "General dentistry",
    text: "Thoughtful preventive care that keeps your smile healthy for years to come.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic dentistry",
    text: "Subtle, natural-looking enhancements designed around your confidence.",
  },
  {
    icon: Microscope,
    title: "Dental implants",
    text: "Restorative solutions with precision planning and a gentle approach.",
  },
  {
    icon: HeartPulse,
    title: "Teeth whitening",
    text: "Professional brightening for a fresher, more luminous smile.",
  },
  {
    icon: ShieldCheck,
    title: "Orthodontics",
    text: "Modern alignment treatments that fit beautifully into your life.",
  },
  {
    icon: Baby,
    title: "Pediatric dentistry",
    text: "A warm, reassuring first chapter in your child's dental journey.",
  },
];
export const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Lead dentist",
    years: "12+ years",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
    text: "Known for her calm chairside manner and meticulous restorative work.",
  },
  {
    name: "Dr. Michael Khan",
    role: "Orthodontist",
    years: "9+ years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
    text: "Creates confident, healthy smiles through thoughtful, modern alignment.",
  },
  {
    name: "Dr. Emily Wilson",
    role: "Cosmetic dentist",
    years: "8+ years",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
    text: "Blends artistry and advanced technology for results that feel like you.",
  },
];
export const hours = [
  ["Monday", "09:00 AM - 07:00 PM"],
  ["Tuesday", "09:00 AM - 07:00 PM"],
  ["Wednesday", "09:00 AM - 07:00 PM"],
  ["Thursday", "09:00 AM - 07:00 PM"],
  ["Friday", "02:00 PM - 07:00 PM"],
  ["Saturday", "09:00 AM - 05:00 PM"],
  ["Sunday", "Closed"],
];



export const timeOptions = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];