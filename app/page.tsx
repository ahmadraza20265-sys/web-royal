"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Facebook,
  Flame,
  GraduationCap,
  Handshake,
  Headphones,
  Landmark,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X
} from "lucide-react";
import { useState, type ElementType, type ReactNode } from "react";

const whatsappNumber = "+2349133031372";
const whatsappHref =
  "https://wa.me/2349133031372?text=Hello%20Liberty%20Digital%20Hub%2C%20I%20want%20to%20start%20my%20financial%20growth%20journey.";
const callHref = "tel:+2349133031372";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Why Us", "why-us"],
  ["Contact", "contact"]
];

const services = [
  {
    icon: GraduationCap,
    title: "Digital Investment Education",
    copy: "Learn the principles, risk awareness, and smart decision-making frameworks needed to navigate digital financial opportunities with confidence."
  },
  {
    icon: CircleDollarSign,
    title: "Online Income Opportunities",
    copy: "Discover legitimate online income paths, practical systems, and beginner-friendly steps for building multiple digital earning channels."
  },
  {
    icon: Handshake,
    title: "Affiliate Marketing Guidance",
    copy: "Get structured guidance for choosing offers, building trust, promoting ethically, and turning attention into repeatable affiliate growth."
  },
  {
    icon: TrendingUp,
    title: "Financial Growth Strategies",
    copy: "Use practical habits, growth planning, and income-building strategies designed to support long-term financial progress."
  }
];

const benefits = [
  ["Trusted Guidance", "Clear direction for people starting from zero."],
  ["Proven Strategies", "Practical methods shaped around real digital markets."],
  ["Real Opportunities", "A focus on legitimate paths, not empty promises."],
  ["Financial Freedom", "Systems that help people think long-term."],
  ["Beginner Friendly", "Simple language, guided steps, and steady support."],
  ["Professional Support", "Responsive contact and structured learning guidance."]
];

const metrics = [
  ["4", "Growth pillars"],
  ["24/7", "Digital access"],
  ["100%", "Beginner focused"]
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-liberty-navy text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(24,96,214,0.32),transparent_30rem),radial-gradient(circle_at_88%_18%,rgba(245,181,55,0.22),transparent_24rem),linear-gradient(135deg,#031a3d_0%,#061f4f_42%,#031024_100%)]" />
      <div className="lux-grid pointer-events-none fixed inset-0 -z-10 opacity-[0.45]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-liberty-navy/[0.78] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Liberty Digital Hub home">
            <BrandMark className="h-12 w-12 sm:h-14 sm:w-14" />
            <span className="min-w-0 leading-none">
              <span className="block text-base font-black tracking-tight sm:text-lg">LIBERTY</span>
              <span className="block whitespace-nowrap text-[0.68rem] font-black uppercase tracking-[0.22em] text-liberty-gold sm:text-xs">
                Digital Hub
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-white/[0.78] lg:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-liberty-gold">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <SocialButton href="#" label="Facebook" icon={Facebook} />
            <SocialButton href="#" label="TikTok" icon={Music2} />
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-gold">
              WhatsApp
              <MessageCircle size={18} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08] lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-liberty-navy/[0.96] px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-3">
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 font-bold"
                >
                  {label}
                </a>
              ))}
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-gold justify-center">
                Contact on WhatsApp
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
        <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-liberty-gold/35 bg-liberty-gold/[0.12] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-liberty-gold">
              <Sparkles size={16} />
              Empowering Growth. Fueling Innovation.
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Empowering Financial Growth Through Digital Opportunities
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/[0.82]">
              Helping individuals grow through smart digital opportunities, affiliate marketing education, and
              online income systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#services" className="btn-gold justify-center px-7 py-4 text-base">
                Start Your Journey
                <ArrowRight size={19} />
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-white justify-center px-7 py-4 text-base">
                Contact on WhatsApp
                <MessageCircle size={19} />
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {metrics.map(([value, label]) => (
                <div key={label} className="glass-panel p-4">
                  <div className="text-3xl font-black text-liberty-gold">{value}</div>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-white/[0.65]">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-8 top-8 h-44 w-44 rounded-full bg-liberty-gold/25 blur-3xl" />
            <div className="absolute -right-4 bottom-12 h-56 w-56 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="premium-frame relative overflow-hidden p-3">
              <Image
                src="/liberty-brand-post-2.jpeg"
                alt="Liberty Digital Hub brand post"
                width={720}
                height={1080}
                priority
                className="aspect-[4/5] w-full rounded-lg object-cover object-top shadow-2xl"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-lg border border-white/[0.18] bg-liberty-navy/[0.82] p-4 shadow-lux backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-liberty-gold p-3 text-liberty-navy">
                    <BarChart3 size={25} />
                  </span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-liberty-gold">Financial freedom</p>
                    <p className="mt-1 text-xl font-black">Starts with the right guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About Liberty Digital Hub</SectionLabel>
            <h2 className="mt-4 text-3xl font-black leading-tight text-liberty-navy sm:text-5xl">
              A premium education hub for people ready to understand digital growth opportunities.
            </h2>
          </motion.div>
          <div className="grid gap-5">
            <p className="text-lg leading-8 text-slate-700">
              Liberty Digital Hub helps beginners and ambitious online earners explore digital investment education,
              affiliate marketing guidance, online income systems, and practical financial growth strategies.
            </p>
            <p className="text-lg leading-8 text-slate-700">
              The brand identity is built around trust, innovation, and upward movement: deep navy for stability,
              royal blue for modern ambition, and gold for premium value and progress.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [Landmark, "Trust-led learning"],
                [Flame, "Innovation mindset"],
                [Target, "Income clarity"]
              ].map(([Icon, label]) => (
                <div key={label as string} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                  <span className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 text-liberty-royal">
                    <Icon size={24} />
                  </span>
                  <p className="font-black text-liberty-navy">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="services" eyebrow="Services" title="Strategic guidance for smart digital opportunity seekers.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={reveal}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="group glass-card p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-lg bg-liberty-gold p-4 text-liberty-navy shadow-gold">
                  <service.icon size={28} />
                </span>
                <ChevronRight className="text-liberty-gold transition group-hover:translate-x-1" />
              </div>
              <h3 className="text-2xl font-black leading-tight">{service.title}</h3>
              <p className="mt-4 leading-7 text-blue-50/[0.74]">{service.copy}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <section id="why-us" className="section-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-4 text-3xl font-black leading-tight text-liberty-navy sm:text-5xl">
              Built for trust, clarity, and confidence from the first interaction.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([title, copy], index) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-liberty-gold/60 hover:shadow-gold-soft"
              >
                <span className="mb-5 inline-flex rounded-lg bg-liberty-navy p-3 text-liberty-gold">
                  <CheckCircle2 size={25} />
                </span>
                <h3 className="text-xl font-black text-liberty-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-650">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg border border-liberty-gold/35 bg-[linear-gradient(135deg,rgba(3,26,61,0.94),rgba(7,54,132,0.92))] p-6 shadow-lux sm:p-10 lg:grid-cols-[1fr_0.78fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-liberty-gold">Start today</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Your Journey To Financial Freedom Starts Here
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50/75">
              Speak with Liberty Digital Hub and get pointed toward the right learning path, opportunity model, and
              action plan.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-gold justify-center px-7 py-4">
              WhatsApp Now
              <MessageCircle size={19} />
            </a>
            <a href={callHref} className="btn-white justify-center px-7 py-4">
              Call Now
              <Phone size={19} />
            </a>
          </div>
        </div>
      </section>

      <Section id="contact" eyebrow="Contact & Social" title="Connect directly with Liberty Digital Hub.">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="grid gap-5">
            <ContactCard icon={MessageCircle} label="WhatsApp" value={whatsappNumber} href={whatsappHref} />
            <ContactCard icon={Phone} label="Call" value={whatsappNumber} href={callHref} />
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-black">Social channels</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#" className="btn-white">
                  <Facebook size={18} />
                  Facebook
                </a>
                <a href="#" className="btn-white">
                  <Music2 size={18} />
                  TikTok
                </a>
              </div>
            </div>
          </div>
          <div className="premium-frame overflow-hidden p-3">
            <Image
              src="/liberty-brand-post-1.jpeg"
              alt="Liberty Digital Hub services and contact brand post"
              width={720}
              height={1080}
              className="aspect-[16/11] w-full rounded-lg object-cover object-top lg:aspect-[16/10]"
            />
          </div>
        </div>
      </Section>

      <footer className="border-t border-liberty-gold/20 bg-[#020a18] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-12 w-12 sm:h-14 sm:w-14" />
              <div>
                <p className="text-xl font-black">Liberty Digital Hub</p>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-liberty-gold">Empowering Financial Growth</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/[0.68]">
              Empowering Growth. Fueling Innovation. Unlocking Potential.
            </p>
          </div>
          <div>
            <h3 className="font-black text-liberty-gold">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-white/[0.68]">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black text-liberty-gold">Contact Info</h3>
            <div className="mt-4 grid gap-3 text-white/[0.68]">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-white">
                WhatsApp: {whatsappNumber}
              </a>
              <a href={callHref} className="transition hover:text-white">
                Call: {whatsappNumber}
              </a>
              <div className="flex gap-3 pt-2">
                <SocialButton href="#" label="Facebook" icon={Facebook} />
                <SocialButton href="#" label="TikTok" icon={Music2} />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-4 z-50 flex gap-3 sm:bottom-6 sm:right-6">
        <a href={callHref} aria-label="Call Liberty Digital Hub" className="float-action bg-white text-liberty-navy">
          <Phone size={22} />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Liberty Digital Hub"
          className="float-action bg-[#24d366] text-white"
        >
          <MessageCircle size={24} />
        </a>
      </div>
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
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.22em] text-liberty-gold">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function BrandMark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-lg border border-liberty-gold/35 bg-white p-1 shadow-logo ${className || ""}`}>
      <Image
        src="/liberty-official-logo.jpeg"
        alt="Liberty Digital Hub logo"
        width={120}
        height={100}
        className="h-full w-full rounded-[5px] object-cover object-center"
        priority
      />
    </span>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex rounded-full border border-liberty-gold/35 bg-liberty-gold/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-liberty-royal">
      {children}
    </p>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group glass-panel flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-liberty-gold/[0.70]"
    >
      <span className="rounded-lg bg-liberty-gold p-4 text-liberty-navy">
        <Icon size={25} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-black uppercase tracking-[0.18em] text-blue-100/[0.55]">{label}</span>
        <span className="mt-1 block break-words text-xl font-black">{value}</span>
      </span>
      <ArrowRight className="ml-auto hidden shrink-0 text-liberty-gold transition group-hover:translate-x-1 sm:block" size={19} />
    </a>
  );
}

function SocialButton({ href, label, icon: Icon }: { href: string; label: string; icon: ElementType }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-11 min-w-11 items-center justify-center rounded-lg border border-white/[0.14] bg-white/[0.08] px-3 text-white transition hover:-translate-y-0.5 hover:border-liberty-gold hover:text-liberty-gold"
    >
      <Icon size={18} />
    </a>
  );
}
