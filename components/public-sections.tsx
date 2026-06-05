"use client";

import type { FormEvent, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Eye,
  Facebook,
  Gift,
  HeartHandshake,
  Instagram,
  Leaf,
  MapPin,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { assets, brand, collections, galleryItems, mangoVarieties, testimonials } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Button, ButtonLink } from "./ui/button";
import { Card } from "./ui/card";

function whatsappMessage(message: string) {
  return `${brand.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false,
  dark = true
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <Badge>{eyebrow}</Badge>
      <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-5xl ${dark ? "text-white" : "text-[#013220]"}`}>{title}</h2>
      {copy ? <p className={`mt-4 text-base leading-8 sm:text-lg ${dark ? "text-white/68" : "text-[#013220]/72"}`}>{copy}</p> : null}
    </motion.div>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="relative overflow-hidden bg-[#013220] px-4 py-20 text-white sm:px-6 lg:px-8">
      <Image src={assets.banner} alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#013220] via-[#062817]/92 to-[#013220]/88" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto max-w-5xl pt-8"
      >
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">{copy}</p>
      </motion.div>
    </section>
  );
}

export function HomePage() {
  return (
    <main id="home" className="bg-[#013220]">
      <HeroSection />
      <BrandValues />
      <AnnouncementBar />
      <CollectionsShowcase />
      <FeaturedVarieties />
      <AboutPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <InstagramSection />
      <ContactCta />
    </main>
  );
}

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const heroSlides = [
    {
      title: "Premium Chaunsa Mangoes",
      image: assets.chaunsa
    },
    {
      title: "Premium Sindhri Mangoes",
      image: assets.sindhri
    },
    {
      title: "Luxury Mango Gift Box",
      image: assets.packaging
    }
  ];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [heroSlides.length, paused]);

  return (
    <section className="relative overflow-hidden bg-[#F7F2E8] text-[#013220]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#D4AF37]" />
      <div className="mx-auto grid min-h-[75vh] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:min-h-[82vh] lg:grid-cols-2 lg:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[600px] py-4"
        >
          <Badge className="border-[#D4AF37]/55 bg-[#013220] text-[#F7F2E8]">Luxury Mango House</Badge>
          <h1
            className="mt-7 max-w-[600px] text-5xl font-black leading-[0.95] tracking-tight text-[#013220] sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 4px 18px rgba(1,50,32,0.12)" }}
          >
            Pakistan&apos;s Finest Premium Mango Collection
          </h1>
          <p className="mt-7 max-w-[600px] text-xl font-semibold leading-9 text-[#013220]/74 sm:text-2xl sm:leading-10">
            Farm Fresh &bull; Hand Picked &bull; Premium Packaging &bull; Nationwide Delivery
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="#premium-collection"
              size="lg"
              className="border border-[#b89125]/30 bg-[#D4AF37] px-7 font-black uppercase tracking-[0.12em] text-[#013220] shadow-2xl shadow-[#013220]/18 ring-1 ring-[#fff1b8]/70 hover:bg-[#f1cf66]"
            >
              Shop Collection <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink
              href={whatsappMessage("Hello Royal Mango Crates, I want to order premium mango crates.")}
              target="_blank"
              rel="noreferrer"
              size="lg"
              variant="outline"
              className="border-[#013220]/25 bg-white/70 text-[#013220] shadow-xl shadow-[#013220]/8 backdrop-blur hover:bg-white"
            >
              <MessageCircle size={19} /> Order on WhatsApp
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-[600px] gap-3 sm:grid-cols-3">
            {["Export Quality", "Luxury Packaging", "Trusted Support"].map((item) => (
              <div key={item} className="border-l border-[#D4AF37] bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#013220]/76 shadow-lg shadow-[#013220]/5">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute -inset-4 rounded-lg bg-[#D4AF37]/18 blur-2xl" />
          <div className="relative overflow-hidden rounded-lg border border-[#D4AF37]/35 bg-[#013220] p-3 shadow-2xl shadow-[#013220]/28">
            <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-[#082817] sm:aspect-[16/11] lg:aspect-[5/4]">
              {heroSlides.map((slide, index) => (
                <motion.div
                  key={slide.title}
                  className="absolute inset-0"
                  animate={{ opacity: activeSlide === index ? 1 : 0 }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#013220]/88 to-transparent p-5">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">Royal Mango Crates</div>
                    <div className="mt-1 text-xl font-black text-white">{slide.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">Premium Seasonal Selection</span>
              <div className="flex gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={`${slide.title}-dot`}
                    aria-label={`Show ${slide.title}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${activeSlide === index ? "w-8 bg-[#D4AF37]" : "w-2.5 bg-white/35 hover:bg-white/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandValues() {
  const values = [
    [Award, "Premium Quality", "Selected for color, aroma, sweetness, and crate-ready presentation."],
    [Leaf, "Fresh Farm Harvest", "Seasonal mangoes sourced directly from carefully selected orchards."],
    [Truck, "Nationwide Delivery", "Coordinated WhatsApp ordering for delivery across Pakistan."]
  ] as const;

  return (
    <section className="bg-[#F7F2E8] px-4 py-16 text-[#013220] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {values.map(([Icon, title, copy], index) => (
          <motion.div
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="border border-[#013220]/10 bg-white p-7 shadow-xl shadow-[#013220]/8"
          >
            <Icon className="text-[#D4AF37]" size={32} />
            <h2 className="mt-5 text-xl font-black">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#013220]/68">{copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AnnouncementBar() {
  const text = "Fresh Mango Season Live • Premium Export Quality • Royal Mango Crates • Farm Fresh Delivery Across Pakistan • Order Now on WhatsApp •";

  return (
    <section className="overflow-hidden border-y border-[#D4AF37]/30 bg-[#D4AF37] py-4 text-[#013220]">
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.22em]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index}>{text}</span>
        ))}
      </motion.div>
    </section>
  );
}

function CollectionsShowcase() {
  return (
    <section className="bg-[#013220] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Royal Storefront"
          title="Luxury mango collections for every premium seasonal order."
          copy="Explore early harvest crates, signature premium selections, royal-grade batches, and gift boxes crafted for presentation."
          centered
        />
        <div className="mt-14 grid gap-16">
          {collections.map((collection) => (
            <CollectionBlock key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionBlock({ collection }: { collection: (typeof collections)[number] }) {
  const products = collection.products.map((name) => mangoVarieties.find((item) => item.name === name)).filter(Boolean) as Array<(typeof mangoVarieties)[number]>;

  return (
    <section id={collection.id} className="scroll-mt-28">
      <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#D4AF37]/18 pb-5 md:flex-row md:items-end">
        <div>
          <Badge>{collection.name}</Badge>
          <h3 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">{collection.name}</h3>
          <p className="mt-3 max-w-2xl leading-7 text-white/66">{collection.copy}</p>
        </div>
        <ButtonLink href={whatsappMessage(`Hello Royal Mango Crates, I want details for ${collection.name}.`)} target="_blank" rel="noreferrer" variant="outline">
          Enquire Now <MessageCircle size={17} />
        </ButtonLink>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {products.map((mango) => (
          <ProductCard key={`${collection.id}-${mango.name}`} mango={mango} />
        ))}
      </div>
    </section>
  );
}

export function ProductCard({ mango }: { mango: (typeof mangoVarieties)[number] }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden border border-[#D4AF37]/18 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0f2c1d]">
        <Image src={mango.image} alt={mango.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#013220]/72 via-transparent to-transparent opacity-70" />
        <button className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-[#013220] shadow-lg transition hover:bg-[#D4AF37]">
          <Eye size={18} />
        </button>
      </div>
      <div className="p-5">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-[#D4AF37]">{mango.season}</div>
        <h3 className="mt-2 text-2xl font-black text-white">{mango.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/68">{mango.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm font-bold text-white/58">From</span>
          <strong className="text-lg text-[#D4AF37]">{mango.price}</strong>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <a
            href={whatsappMessage(`Hello Royal Mango Crates, I want to add ${mango.name} to my order.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-3 text-sm font-black text-[#013220] transition hover:bg-[#f1cf66]"
          >
            Add To Cart
          </a>
          <a
            href={whatsappMessage(`Hello Royal Mango Crates, please share quick details for ${mango.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/45 px-4 py-3 text-sm font-black text-[#f6df91] transition hover:bg-[#D4AF37]/12"
          >
            Quick View
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedVarieties() {
  return (
    <section className="bg-[#F7F2E8] px-4 py-20 text-[#013220] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Varieties"
          title="Pakistan&apos;s most loved mango names, presented with royal polish."
          copy="Sindhri, Chaunsa, Langra, Anwar Ratol, and Saroli are curated around seasonality and customer expectations."
          dark={false}
          centered
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {mangoVarieties.map((mango, index) => (
            <motion.div
              key={mango.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white p-3 shadow-xl shadow-[#013220]/8"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image src={mango.image} alt={mango.name} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <h3 className="mt-4 text-center text-lg font-black">{mango.name}</h3>
              <p className="mx-auto mt-2 max-w-40 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#013220]/48">{mango.taste}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-28 bg-[#013220] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden border border-[#D4AF37]/20 bg-white/5"
        >
          <Image src={assets.orchard} alt="Royal Mango Crates orchard and mango presentation" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </motion.div>
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="A premium mango company built around freshness, luxury packaging, and trust."
            copy="Royal Mango Crates delivers premium farm fresh mangoes directly from carefully selected orchards. We focus on quality, freshness, luxury packaging, and customer satisfaction."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Carefully selected orchards", "Premium crate handling", "Seasonal export-quality batches", "WhatsApp-first support"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-white/80">
                <ShieldCheck className="text-[#D4AF37]" size={18} /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const items = [
    [Leaf, "Farm Fresh Harvest", "Seasonal fruit selected from trusted orchards for aroma, sweetness, and natural character."],
    [Award, "Hand Picked Quality", "Each crate is sorted for visible quality, ripeness window, and premium presentation."],
    [PackageCheck, "Premium Packaging", "Careful crate handling protects the mangoes and makes every order gift-ready."],
    [Truck, "Fast Nationwide Delivery", "WhatsApp coordination keeps quantity, city, timing, and delivery needs clear before dispatch."],
    [HeartHandshake, "Trusted Customer Support", "Direct communication keeps every order personal, clear, and confidence-building."]
  ] as const;

  return (
    <section className="bg-[#092918] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why Choose Us" title="Premium details from orchard selection to final delivery." centered />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {items.map(([Icon, title, copy], index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-[#D4AF37]/18 bg-white/[0.07] p-6 shadow-xl shadow-black/15"
            >
              <Icon className="text-[#D4AF37]" size={30} />
              <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  const [active, setActive] = useState<number | null>(null);
  const activeItem = active === null ? null : galleryItems[active];

  return (
    <section className="bg-[#013220] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Gallery" title="A premium visual look at Royal Mango Crates." copy="Explore mango varieties, brand packaging, and orchard-inspired imagery used across the luxury ordering experience." />
        <div className="mt-10 grid auto-rows-[15rem] gap-4 md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <button key={item.title} onClick={() => setActive(index)} className={`group relative overflow-hidden border border-[#D4AF37]/20 bg-white/5 text-left ${index === 0 || index === 5 ? "md:row-span-2" : ""}`}>
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#013220]/88 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">{item.category}</div>
                <div className="mt-1 font-black text-white">{item.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {activeItem ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <button aria-label="Close gallery" onClick={() => setActive(null)} className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#013220]">
            <X size={22} />
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden border border-[#D4AF37]/30 bg-[#013220]">
            <Image src={activeItem.image} alt={activeItem.title} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section className="bg-[#F7F2E8] px-4 py-20 text-[#013220] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Customer Reviews" title="Trusted by customers who care about taste and presentation." centered dark={false} />
        <Card className="mt-10 border-[#013220]/10 bg-white p-7 text-[#013220] shadow-2xl shadow-[#013220]/10 sm:p-10">
          <div className="flex justify-center gap-1 text-[#D4AF37]">
            {Array.from({ length: 5 }).map((_, itemIndex) => (
              <Star key={itemIndex} size={20} fill="currentColor" />
            ))}
          </div>
          <motion.p key={current.quote} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-6 max-w-3xl text-center text-xl font-bold leading-9">
            &quot;{current.quote}&quot;
          </motion.p>
          <div className="mt-6 text-center">
            <div className="font-black">{current.name}</div>
            <div className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#013220]/52">{current.detail}</div>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <button aria-label="Previous testimonial" onClick={() => setIndex((value) => (value + testimonials.length - 1) % testimonials.length)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#013220]/12">
              <ChevronLeft size={20} />
            </button>
            <button aria-label="Next testimonial" onClick={() => setIndex((value) => (value + 1) % testimonials.length)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#013220]/12">
              <ChevronRight size={20} />
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="bg-[#092918] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading eyebrow="Instagram" title="Follow the harvest in a premium visual feed." copy="Seasonal mango arrivals, crate presentation, and brand updates from Royal Mango Crates." />
          <ButtonLink href={brand.instagram} target="_blank" rel="noreferrer" variant="outline">
            <Instagram size={18} /> Follow Us
          </ButtonLink>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleryItems.slice(0, 8).map((item) => (
            <a key={`insta-${item.title}`} href={brand.instagram} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden border border-[#D4AF37]/18 bg-white/5">
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center bg-[#013220]/0 opacity-0 transition group-hover:bg-[#013220]/55 group-hover:opacity-100">
                <Instagram className="text-[#D4AF37]" size={28} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-28 bg-[#013220] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Reserve premium mango crates while the season is at its best."
            copy="Send your variety, quantity, city, and delivery date. Royal Mango Crates will confirm availability and order details on WhatsApp."
          />
          <div className="mt-8 grid gap-4">
            <ContactLink icon={<MessageCircle size={22} />} label="WhatsApp" value={brand.whatsappDisplay} href={brand.whatsappUrl} />
            <ContactLink icon={<Instagram size={22} />} label="Instagram" value="@royalcrates" href={brand.instagram} />
            <ContactLink icon={<Facebook size={22} />} label="Facebook" value="Royal Mango Crates" href={brand.facebook} />
            <ContactLink icon={<MapPin size={22} />} label="Location" value={brand.locationLabel} href={brand.location} />
          </div>
        </div>

        <div className="grid gap-5">
          <OrderForm />
          <div className="overflow-hidden border border-[#D4AF37]/20 bg-white/[0.07]">
            <iframe
              title="Royal Mango Crates map"
              src="https://www.google.com/maps?q=Royal%20Mango%20Crates%2C%20Pakistan&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderForm() {
  const varietyOptions = useMemo(() => mangoVarieties.map((item) => item.name), []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Royal Mango Crates, I want to place a premium mango order.",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `City: ${form.get("city")}`,
      `Variety: ${form.get("variety")}`,
      `Quantity: ${form.get("quantity")}`,
      `Message: ${form.get("message")}`
    ].join("\n");

    window.open(whatsappMessage(message), "_blank", "noopener,noreferrer");
  }

  return (
    <Card className="border-[#D4AF37]/20 bg-white/[0.07] p-5 sm:p-7">
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Field name="name" label="Name" required />
          <Field name="phone" label="Phone / WhatsApp" required />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field name="city" label="Delivery City" required />
          <Field name="quantity" label="Quantity" placeholder="Example: 2 crates" required />
        </div>
        <label className="grid gap-2 text-sm font-bold text-white">
          Mango Variety
          <select name="variety" className="h-11 rounded-lg border border-[#D4AF37]/20 bg-[#082817] px-3 text-white outline-none focus:ring-2 focus:ring-[#D4AF37]">
            {varietyOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
            <option>Mixed premium crate</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-white">
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Preferred date, gift notes, address area, or bulk order details"
            className="rounded-lg border border-[#D4AF37]/20 bg-[#082817] p-3 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-[#D4AF37]"
          />
        </label>
        <Button type="submit" size="lg">
          <MessageCircle size={18} /> Order on WhatsApp
        </Button>
      </form>
    </Card>
  );
}

function Field({ name, label, placeholder, required = false }: { name: string; label: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-[#D4AF37]/20 bg-[#082817] px-3 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-[#D4AF37]"
      />
    </label>
  );
}

function ContactLink({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 border border-[#D4AF37]/18 bg-white/[0.07] p-5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#D4AF37]/45"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#D4AF37] text-[#013220]">{icon}</span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">{label}</span>
        <span className="mt-1 block font-black text-white">{value}</span>
      </span>
    </a>
  );
}

export function AboutContent() {
  return <AboutPreview />;
}

export function VarietiesPageContent() {
  return (
    <section className="bg-[#013220] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {mangoVarieties.map((mango) => (
          <ProductCard key={mango.name} mango={mango} />
        ))}
      </div>
    </section>
  );
}

export function GalleryPageContent() {
  return <GalleryPreview />;
}

export function ContactPageContent() {
  return <ContactCta />;
}
