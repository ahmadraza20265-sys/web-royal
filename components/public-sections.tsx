"use client";

import type { FormEvent, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Facebook,
  Gift,
  Instagram,
  Leaf,
  MapPin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck
} from "lucide-react";
import { brand, faqs, galleryItems, mangoVarieties, testimonials } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Button, ButtonLink } from "./ui/button";
import { Card } from "./ui/card";

function whatsappMessage(message: string) {
  return `${brand.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-8 text-white/68 sm:text-lg">{copy}</p> : null}
    </div>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="relative overflow-hidden bg-[#08200f] px-4 py-20 text-white sm:px-6 lg:px-8">
      <Image src="/royal-crates-banner.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#06170b] via-[#0c2d15]/92 to-[#06170b]/88" />
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
    <main className="bg-[#06170b]">
      <HeroSection />
      <AboutPreview />
      <VarietiesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <FaqSection />
      <ContactCta />
    </main>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[#08200f] text-white">
      <Image src="/royal-crates-banner.jpg" alt="Royal Mango Crates premium mangoes" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06170b]/96 via-[#0b2812]/72 to-[#06170b]/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#06170b] to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-end px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <Badge>Premium Mangoes</Badge>
          <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Pakistan&apos;s Finest Premium Mangoes</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Farm Fresh | Naturally Grown | Carefully Selected | Delivered With Care
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappMessage("Hello Royal Mango Crates, I want to place an order.")} target="_blank" rel="noreferrer" size="lg">
              <MessageCircle size={19} /> Order on WhatsApp
            </ButtonLink>
            <ButtonLink href="/mango-varieties" size="lg" variant="secondary">
              Explore Varieties <ArrowRight size={18} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Premium Quality", "100% Natural", "Hand Picked"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold text-white/82">
                <CheckCircle2 className="text-[#d8ad45]" size={18} /> {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="bg-[#06170b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#d8ad45]/20 bg-white/5">
          <Image src="/royal-crates-post-2.jfif" alt="Royal Mango Crates fruit presentation" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <SectionHeading
            eyebrow="About Royal Mango Crates"
            title="A luxury mango brand built around selection, freshness, and presentation."
            copy="We source seasonal Pakistani mangoes from carefully selected orchards, grade each batch for aroma and ripeness, and pack every crate to feel worthy of the Royal name."
          />
          <div className="mt-8">
            <ButtonLink href="/about" variant="outline">
              Read Our Story <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VarietiesPreview() {
  return (
    <section className="bg-[#0b2411] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mango Varieties"
          title="Signature Pakistani varieties packed for premium seasonal orders."
          copy="Choose from fragrant, sweet, and gift-ready mangoes when the finest batches are in season."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {mangoVarieties.slice(0, 3).map((mango) => (
            <MangoCard key={mango.name} mango={mango} />
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/mango-varieties" variant="secondary">
            View All Varieties <ArrowRight size={17} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function MangoCard({ mango }: { mango: (typeof mangoVarieties)[number] }) {
  return (
    <Card className="group overflow-hidden bg-[#0f3018]/78">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#102414]">
        <Image src={mango.image} alt={mango.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-black text-white">{mango.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/68">{mango.description}</p>
        <div className="mt-5 grid gap-2 text-sm text-white/76">
          <span>
            <strong className="text-[#f0c85c]">Season:</strong> {mango.season}
          </span>
          <span>
            <strong className="text-[#f0c85c]">Taste:</strong> {mango.taste}
          </span>
        </div>
        <a
          href={whatsappMessage(`Hello Royal Mango Crates, I want to order ${mango.name} mangoes.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#d8ad45] px-4 py-3 text-sm font-black text-[#102414] transition hover:bg-[#f0c85c]"
        >
          <MessageCircle size={17} /> Order Button
        </a>
      </div>
    </Card>
  );
}

export function WhyChooseUs() {
  const items = [
    [Leaf, "Farm Fresh Promise", "Seasonal fruit selected from trusted orchards for aroma, sweetness, and natural character."],
    [Award, "Quality Commitment", "Each crate is sorted for visible quality, ripeness window, and premium presentation."],
    [PackageCheck, "Premium Packaging", "Careful crate handling protects the mangoes and makes every order gift-ready."],
    [Truck, "Delivered With Care", "WhatsApp coordination keeps quantity, city, timing, and delivery needs clear before dispatch."]
  ] as const;

  return (
    <section className="bg-[#06170b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why Choose Us" title="Premium details from orchard selection to final delivery." centered />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, copy]) => (
            <Card key={title} className="bg-white/[0.07] p-6">
              <Icon className="text-[#d8ad45]" size={30} />
              <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{copy}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="bg-[#0b2411] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Farm Gallery" title="A visual look at the Royal Mango Crates experience." />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {galleryItems.slice(0, 4).map((item, index) => (
            <GalleryTile key={item.title} item={item} tall={index === 0 || index === 3} />
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/gallery" variant="outline">
            Open Gallery <ArrowRight size={17} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function GalleryTile({ item, tall = false }: { item: (typeof galleryItems)[number]; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-lg border border-[#d8ad45]/20 bg-white/5 ${tall ? "min-h-80 md:row-span-2" : "min-h-64"}`}>
      <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06170b]/88 via-transparent to-transparent" />
      <div className="absolute bottom-0 p-4">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#f0c85c]">{item.category}</div>
        <div className="mt-1 font-black text-white">{item.title}</div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[#06170b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Testimonials" title="Trusted by customers who care about taste and presentation." centered />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="bg-white/[0.07] p-6">
              <div className="flex gap-1 text-[#d8ad45]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 leading-7 text-white/76">&quot;{item.quote}&quot;</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="font-black text-white">{item.name}</div>
                <div className="text-sm text-white/55">{item.detail}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-[#0b2411] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Common questions before you order." centered />
        <div className="mt-10 grid gap-3">
          {faqs.map((faq) => (
            <Card key={faq.question} className="bg-white/[0.07] p-5">
              <h3 className="font-black text-white">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-white/66">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="bg-[#06170b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-[#d8ad45]/20 bg-[#0e3218] shadow-2xl shadow-black/30 lg:grid-cols-[1fr_0.8fr]">
        <div className="p-7 sm:p-10 lg:p-12">
          <Badge>WhatsApp Orders</Badge>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">Reserve premium mango crates while the season is at its best.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/70">
            Send your variety, quantity, city, and delivery date. Royal Mango Crates will confirm availability and order details on WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={brand.whatsappUrl} target="_blank" rel="noreferrer" size="lg">
              <MessageCircle size={18} /> Order on WhatsApp
            </ButtonLink>
            <ButtonLink href="/contact" size="lg" variant="secondary">
              Inquiry Form
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-80">
          <Image src="/royal-crates-post-1.jfif" alt="Premium Royal Mango Crates" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function AboutContent() {
  const cards = [
    [Sparkles, "Company Story", "Royal Mango Crates was created to present Pakistani mangoes as a premium seasonal product, not an ordinary fruit order."],
    [ShieldCheck, "Mission", "To deliver naturally sweet, carefully selected mangoes with a luxury buying experience centered on WhatsApp convenience."],
    [Award, "Quality Commitment", "Every batch is judged by aroma, appearance, ripeness, and crate suitability before order confirmation."],
    [Gift, "Premium Packaging", "Crates are prepared for family tables, gifting, retail display, and corporate presentation."],
    [Leaf, "Farm Fresh Promise", "We focus on orchard-fresh seasonal mangoes delivered with care while the fruit is at its best."]
  ] as const;

  return (
    <section className="bg-[#06170b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(([Icon, title, copy]) => (
          <Card key={title} className="bg-white/[0.07] p-6">
            <Icon className="text-[#d8ad45]" size={30} />
            <h2 className="mt-5 text-xl font-black">{title}</h2>
            <p className="mt-3 leading-7 text-white/66">{copy}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function VarietiesPageContent() {
  return (
    <section className="bg-[#06170b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {mangoVarieties.map((mango) => (
          <MangoCard key={mango.name} mango={mango} />
        ))}
      </div>
    </section>
  );
}

export function GalleryPageContent() {
  const categories = ["Orchard", "Mangoes", "Harvest", "Packaging", "Delivery"];

  return (
    <section className="bg-[#06170b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-[#d8ad45]/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f0c85c]">
              {category}
            </span>
          ))}
        </div>
        <div className="grid auto-rows-[16rem] gap-4 md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <GalleryTile key={item.title} item={item} tall={index % 3 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactPageContent() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Royal Mango Crates, I want to send an inquiry.",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `City: ${form.get("city")}`,
      `Variety: ${form.get("variety")}`,
      `Quantity: ${form.get("quantity")}`,
      `Message: ${form.get("message")}`
    ].join("\\n");

    window.open(whatsappMessage(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-[#06170b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-4">
          <ContactLink icon={<MessageCircle size={22} />} label="WhatsApp" value={brand.whatsappDisplay} href={brand.whatsappUrl} />
          <ContactLink icon={<Instagram size={22} />} label="Instagram" value="@royalcrates" href={brand.instagram} />
          <ContactLink icon={<Facebook size={22} />} label="Facebook" value="Royal Mango Crates" href={brand.facebook} />
          <ContactLink icon={<MapPin size={22} />} label="Google Maps" value="View location" href={brand.location} />
          <div className="overflow-hidden rounded-lg border border-[#d8ad45]/20 bg-white/[0.07]">
            <iframe
              title="Royal Mango Crates map"
              src="https://www.google.com/maps?q=Royal%20Mango%20Crates&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <Card className="bg-white/[0.07] p-5 sm:p-7">
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
              <select name="variety" className="h-11 rounded-lg border border-[#d8ad45]/20 bg-[#071b0d] px-3 text-white outline-none focus:ring-2 focus:ring-[#d8ad45]">
                <option>Langra</option>
                <option>Sindhri</option>
                <option>Chaunsa</option>
                <option>Anwar Ratol</option>
                <option>Saroli</option>
                <option>Mixed premium crate</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-white">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Preferred date, gift notes, address area, or bulk order details"
                className="rounded-lg border border-[#d8ad45]/20 bg-[#071b0d] p-3 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-[#d8ad45]"
              />
            </label>
            <Button type="submit" size="lg">
              <MessageCircle size={18} /> Submit via WhatsApp
            </Button>
          </form>
        </Card>
      </div>
    </section>
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
        className="h-11 rounded-lg border border-[#d8ad45]/20 bg-[#071b0d] px-3 text-white outline-none placeholder:text-white/35 focus:ring-2 focus:ring-[#d8ad45]"
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
      className="flex items-center gap-4 rounded-lg border border-[#d8ad45]/18 bg-white/[0.07] p-5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#d8ad45]/45"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#d8ad45] text-[#102414]">{icon}</span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#f0c85c]">{label}</span>
        <span className="mt-1 block font-black text-white">{value}</span>
      </span>
    </a>
  );
}
