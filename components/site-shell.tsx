"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Menu, MessageCircle, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { assets, brand } from "@/lib/data";
import { cn } from "@/lib/utils";

const nav = [
  ["Home", "/#home"],
  ["Early Harvest", "/#early-harvest"],
  ["Premium Collection", "/#premium-collection"],
  ["Royal Collection", "/#royal-collection"],
  ["Gift Boxes", "/#gift-boxes"],
  ["About Us", "/#about"],
  ["Contact", "/#contact"]
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D4AF37]/18 bg-[#013220]/92 text-white shadow-xl shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-[#D4AF37]/35 bg-[#013220]">
            <Image src={assets.logo} alt="Royal Mango Crates logo" fill sizes="48px" className="object-cover" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-black uppercase tracking-[0.18em]">Royal Mango Crates</span>
            <span className="block truncate text-[0.66rem] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
              Premium Export Quality
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-[0.8rem] font-bold uppercase tracking-[0.08em] text-white/74 xl:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#D4AF37]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {[
            ["Search", Search],
            ["Account", User],
            ["Cart", ShoppingBag]
          ].map(([label, Icon]) => (
            <button
              key={label as string}
              aria-label={label as string}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
            >
              <Icon size={18} />
            </button>
          ))}
          <a
            href={brand.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex h-10 items-center gap-2 rounded-lg bg-[#D4AF37] px-4 text-sm font-black text-[#013220] transition hover:-translate-y-0.5 hover:bg-[#f1cf66]"
          >
            <MessageCircle size={17} /> Order
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#013220] px-4 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/82 transition hover:bg-white/8 hover:text-[#D4AF37]"
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {[Search, User, ShoppingBag].map((Icon, index) => (
                <button key={index} className="inline-flex h-11 flex-1 items-center justify-center rounded-lg border border-white/10 text-white/80">
                  <Icon size={18} />
                </button>
              ))}
            </div>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-3 text-sm font-black text-[#013220]"
            >
              <MessageCircle size={17} /> Order on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#D4AF37]/18 bg-[#013220] py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 md:grid-cols-[1.25fr_0.8fr_0.9fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-lg border border-[#D4AF37]/35">
              <Image src={assets.logo} alt="Royal Mango Crates logo" fill sizes="56px" className="object-cover" />
            </span>
            <div>
              <div className="font-black uppercase tracking-[0.16em]">Royal Mango Crates</div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Farm fresh. Hand picked.</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
            Premium Pakistani mangoes delivered fresh from carefully selected orchards with luxury packaging and a trustworthy ordering
            experience.
          </p>
        </div>
        <FooterColumn title="Quick Links" links={nav.slice(0, 4)} />
        <FooterColumn title="Collections" links={nav.slice(1, 5)} />
        <div className="grid content-start gap-3 text-sm text-white/70">
          <strong className="text-white">Newsletter</strong>
          <p className="leading-6">Receive harvest openings, gift box availability, and seasonal announcements.</p>
          <form className="flex overflow-hidden rounded-lg border border-[#D4AF37]/25 bg-white/8">
            <input aria-label="Email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-white outline-none placeholder:text-white/38" />
            <button className="bg-[#D4AF37] px-4 text-sm font-black text-[#013220]">Join</button>
          </form>
          <div className="mt-2 flex gap-2">
            <a href={brand.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="icon-link">
              <Instagram size={18} />
            </a>
            <a href={brand.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="icon-link">
              <Facebook size={18} />
            </a>
            <a href={brand.location} target="_blank" rel="noreferrer" aria-label="Location" className="icon-link">
              <MapPin size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-xs font-bold uppercase tracking-[0.18em] text-white/42 sm:px-6 lg:px-8">
        Copyright {new Date().getFullYear()} Royal Mango Crates. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div className="grid content-start gap-2 text-sm text-white/70">
      <strong className="mb-1 text-white">{title}</strong>
      {links.map(([label, href]) => (
        <Link key={`${title}-${href}`} href={href} className="hover:text-[#D4AF37]">
          {label}
        </Link>
      ))}
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={brand.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full",
        "bg-[#25d366] text-white shadow-2xl shadow-black/30 transition hover:-translate-y-1"
      )}
    >
      <MessageCircle size={27} />
    </a>
  );
}
