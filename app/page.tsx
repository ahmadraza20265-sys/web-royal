"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock,
  Hammer,
  HardHat,
  Home as HomeIcon,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  X
} from "lucide-react";
import { FormEvent, useState } from "react";

const phoneDisplay = "+1 817-692-8614";
const phoneHref = "tel:+18176928614";
const whatsappHref =
  "https://wa.me/18176928614?text=Hi%20Princess%27%20Construction%2C%20I%20would%20like%20a%20free%20roofing%20estimate.";

const navItems = [
  ["Services", "services"],
  ["Projects", "projects"],
  ["Reviews", "reviews"],
  ["Contact", "contact"]
];

const services = [
  {
    icon: ShieldCheck,
    title: "Roof Inspection",
    copy: "Detailed roof assessments for storm damage, leaks, aging shingles, and insurance documentation.",
    image: "/roof-inspection.jpg"
  },
  {
    icon: Hammer,
    title: "Roof Repair",
    copy: "Fast repairs for leaks, missing shingles, flashing issues, ventilation concerns, and emergency damage.",
    image: "/roof-repair.jpg"
  },
  {
    icon: HardHat,
    title: "Roof Installation",
    copy: "Premium roof replacements and new installations with architectural, metal, and commercial systems.",
    image: "/roof-installation.jpg"
  }
];

const stats = [
  ["20+", "Years in business"],
  ["5.0", "Rated Dallas roofer"],
  ["GAF", "Certified contractor"],
  ["100%", "Quality workmanship focus"]
];

const projects = [
  {
    title: "Modern Residential Roof",
    tag: "Installation",
    image: "/roof-hero.jpg"
  },
  {
    title: "Full Roof Replacement",
    tag: "Before / After",
    image: "/roof-installation.jpg"
  },
  {
    title: "Garage Roofing System",
    tag: "Repair + Shingles",
    image: "/roof-repair.jpg"
  },
  {
    title: "Exterior Construction Detail",
    tag: "Construction",
    image: "/construction-detail.jpg"
  },
  {
    title: "Patio + Exterior Finish",
    tag: "Construction",
    image: "/patio-construction.jpg"
  }
];

const reviews = [
  "The quality of work is top-notch.",
  "I trust her company and her staff.",
  "Thank you for the quality workmanship."
];

const trustCards: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Award,
    title: "20+ years experience",
    copy: "In business since 2001 with residential and commercial project knowledge."
  },
  {
    icon: MapPin,
    title: "Dallas roofing expert",
    copy: "Local service from 3737 Atlanta St, Dallas, TX 75215."
  },
  {
    icon: BadgeCheck,
    title: "Certified contractor",
    copy: "GAF certified and skilled in architectural, metal, and TPO roofing."
  },
  {
    icon: Star,
    title: "Customer satisfaction",
    copy: "Built around quality workmanship, clean communication, and trust."
  }
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "Website visitor");
    const service = String(data.get("service") || "roofing");
    const message = encodeURIComponent(
      `Hi Princess' Construction, my name is ${name}. I need help with ${service}. Please contact me for a free roofing estimate.`
    );
    window.location.href = `${whatsappHref.split("?")[0]}?text=${message}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-charcoal text-stone-50">
      <div className="grain pointer-events-none fixed inset-0 z-50 opacity-[0.06]" />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-charcoal/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Princess' Construction home">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/40 bg-gold/10 text-gold shadow-gold">
              <HomeIcon size={23} />
            </span>
            <span>
              <span className="block font-display text-lg font-black leading-none tracking-wide">
                Princess&apos; Construction
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                Dallas Roofing
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-300 lg:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-gold">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2.5 text-sm font-bold transition hover:border-gold/60 hover:text-gold"
            >
              <Phone size={16} />
              {phoneDisplay}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-black text-black shadow-gold transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Free Inspection
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-charcoal/96 px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-3">
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-semibold"
                >
                  {label}
                </a>
              ))}
              <a href={phoneHref} className="rounded-lg bg-gold px-4 py-3 text-center font-black text-black">
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative flex min-h-[94vh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <Image
          src="/roof-hero.jpg"
          alt="Premium residential roof completed by Princess' Construction"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/76 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_32%,rgba(217,164,65,0.24),transparent_30rem)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-black/35 px-4 py-2 text-sm font-bold text-gold backdrop-blur">
              <BadgeCheck size={16} />
              GAF Certified Dallas Roofing Contractor
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.96] sm:text-6xl lg:text-7xl">
              Premium Roofing Built For Dallas Homes That Need It Done Right.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              Princess&apos; Construction Inc delivers roof inspections, repairs, and installations with
              high-end craftsmanship, fast response, and trusted local expertise from 3737 Atlanta St,
              Dallas, TX.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-black text-black shadow-gold transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Get Free Inspection
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-7 py-4 font-bold text-white backdrop-blur transition hover:border-gold/60 hover:text-gold"
              >
                <Clock size={19} />
                Emergency Roofing CTA
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-200">
              {["Storm damage help", "Residential roofing", "Commercial systems"].map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-black/35 px-4 py-2 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="luxury-panel ml-auto w-full max-w-md p-5 sm:p-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Rapid Response</p>
                <h2 className="mt-2 font-display text-3xl font-black">Free Roof Estimate</h2>
              </div>
              <span className="rounded-full bg-gold/12 p-3 text-gold">
                <Phone size={25} />
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              {["Inspect hail, wind, and leak damage", "Document roof condition clearly", "Recommend repair or replacement path"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-stone-200">
                    <Check className="text-gold" size={18} />
                    {item}
                  </div>
                )
              )}
            </div>
            <a
              href={phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 font-black text-black transition hover:bg-gold"
            >
              Click To Call {phoneDisplay}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-black/26 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([number, label], index) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5 text-center transition hover:-translate-y-1 hover:border-gold/50"
            >
              <div className="font-display text-4xl font-black text-gold">{number}</div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-stone-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Section id="services" eyebrow="Roofing Services" title="High-trust roofing services built around speed, clarity, and premium workmanship.">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={reveal}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:-translate-y-2 hover:border-gold/55 hover:shadow-gold"
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-lg bg-gold p-3 text-black">
                  <service.icon size={25} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-stone-300">{service.copy}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-gold">
                  Request service <ChevronRight size={17} className="transition group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Roof leak, storm damage, or missing shingles?"
        copy="Get a fast Dallas roof inspection before small damage becomes an expensive interior repair."
        button="Call For Emergency Help"
        href={phoneHref}
      />

      <Section id="trust" eyebrow="Trust Indicators" title="A premium contractor experience from first call to final cleanup.">
        <div className="grid gap-5 lg:grid-cols-4">
          {trustCards.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="luxury-panel p-6 transition hover:-translate-y-1 hover:border-gold/50">
              <span className="mb-5 inline-flex rounded-lg bg-gold/12 p-3 text-gold">
                <Icon size={25} />
              </span>
              <h3 className="font-display text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-stone-300">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Project Showcase" title="Modern roofing and construction work presented with the confidence premium buyers expect.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className={`group relative h-80 overflow-hidden rounded-lg border border-white/10 ${
                index === 1 ? "lg:col-span-2" : ""
              } ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="rounded-full border border-gold/40 bg-gold/12 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-gold">
                  {project.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-black">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="reviews" eyebrow="Customer Reviews" title="Dallas homeowners choose Princess' Construction for workmanship they can trust.">
        <div className="grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review} className="luxury-panel p-7">
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-2xl font-bold leading-snug">&quot;{review}&quot;</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Verified customer feedback</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="A better roof starts with one clear inspection."
        copy="Tell us what happened, where you are in Dallas, and how quickly you need service."
        button="Get Free Roofing Estimate"
        href="#contact"
      />

      <Section id="contact" eyebrow="Contact" title="Request a quote from Princess' Construction Inc.">
        <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
          <form onSubmit={submitQuote} className="luxury-panel p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Your name" required />
              <Field name="phone" label="Phone" placeholder="Your phone number" />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field name="email" label="Email" placeholder="name@email.com" />
              <label className="block text-sm font-bold text-stone-200">
                Service Needed
                <select
                  name="service"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-gold"
                >
                  <option>Roof Inspection</option>
                  <option>Roof Repair</option>
                  <option>Roof Installation</option>
                  <option>Emergency Roofing</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block text-sm font-bold text-stone-200">
              Project Details
              <textarea
                name="details"
                rows={5}
                placeholder="Tell us about leaks, storm damage, roof age, or your installation needs."
                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-stone-500 focus:border-gold"
              />
            </label>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-4 font-black text-black shadow-gold transition hover:-translate-y-0.5 hover:bg-amber-300">
              Send Quote Request
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="grid gap-5">
            <ContactCard icon={Phone} label="Click To Call" value={phoneDisplay} href={phoneHref} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Get Free Roofing Estimate" href={whatsappHref} />
            <ContactCard icon={MapPin} label="Dallas Location" value="3737 Atlanta St, Dallas, TX 75215" href="https://maps.google.com/?q=3737+Atlanta+St,+Dallas,+TX+75215" />
            <div className="relative min-h-64 overflow-hidden rounded-lg border border-white/10">
              <Image src="/patio-construction.jpg" alt="Princess' Construction exterior project" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Serving Dallas, Texas</p>
                <h3 className="mt-2 font-display text-3xl font-black">Roofing leads get fast response.</h3>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 bg-black/30 px-4 pb-28 pt-10 sm:px-6 md:pb-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/40 bg-gold/10 text-gold">
                <HomeIcon size={23} />
              </span>
              <span className="font-display text-xl font-black">Princess&apos; Construction Inc</span>
            </div>
            <p className="mt-4 max-w-md leading-7 text-stone-400">
              Premium Dallas roofing company for roof inspection, roof repair, roof installation, and construction work.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-black">Services</h4>
            <div className="mt-4 grid gap-2 text-stone-400">
              {services.map((service) => (
                <a key={service.title} href="#services" className="hover:text-gold">
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-black">Contact</h4>
            <div className="mt-4 grid gap-2 text-stone-400">
              <a href={phoneHref} className="hover:text-gold">{phoneDisplay}</a>
              <span>3737 Atlanta St, Dallas, TX 75215</span>
              <a href={whatsappHref} className="hover:text-gold">Chat With Us</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-white/10 bg-charcoal/96 p-3 backdrop-blur md:hidden">
        <a href={phoneHref} className="mr-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-black text-black">
          <Phone size={17} />
          Call
        </a>
        <a href={whatsappHref} className="ml-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 font-black text-black">
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>

      <a
        href={whatsappHref}
        className="whatsapp-float fixed bottom-24 right-5 z-50 hidden items-center gap-3 rounded-full bg-[#25d366] px-5 py-4 font-black text-black shadow-[0_18px_55px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:scale-[1.02] md:flex"
        aria-label="Chat with Princess' Construction on WhatsApp"
      >
        <MessageCircle size={22} />
        Chat With Us
      </a>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-gold">
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  required = false
}: {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-bold text-stone-200">
      {label}
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-stone-500 focus:border-gold"
      />
    </label>
  );
}

function CtaBand({ title, copy, button, href }: { title: string; copy: string; button: string; href: string }) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-gold/25 bg-gold/10 p-6 shadow-gold sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-display text-3xl font-black">{title}</h2>
          <p className="mt-2 max-w-2xl text-stone-300">{copy}</p>
        </div>
        <a
          href={href}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-black text-black transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          {button}
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="group luxury-panel flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-gold/55">
      <span className="rounded-lg bg-gold/12 p-4 text-gold">
        <Icon size={25} />
      </span>
      <span>
        <span className="block text-sm font-bold uppercase tracking-[0.18em] text-stone-500">{label}</span>
        <span className="mt-1 block font-display text-xl font-black">{value}</span>
      </span>
      <ArrowRight className="ml-auto text-gold transition group-hover:translate-x-1" size={19} />
    </a>
  );
}
