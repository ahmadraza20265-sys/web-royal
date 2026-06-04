"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { brand } from "@/lib/data";
import { cn } from "@/lib/utils";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Mango Varieties", "/mango-varieties"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8ad45]/15 bg-[#08200f]/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-[#d8ad45]/30 bg-[#123f19]">
            <Image src="/royal-crates-logo.jpg" alt="Royal Mango Crates logo" fill sizes="40px" className="object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black uppercase tracking-wide">Royal Mango Crates</span>
            <span className="block truncate text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#d8ad45]">
              Premium Pakistani Mangoes
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/78 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={cn("transition hover:text-[#f0c85c]", pathname === href && "text-[#f0c85c]")}>
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={brand.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden h-10 items-center gap-2 rounded-lg bg-[#d8ad45] px-4 text-sm font-black text-[#102414] transition hover:-translate-y-0.5 hover:bg-[#f0c85c] lg:inline-flex"
        >
          <MessageCircle size={17} /> Order
        </a>

        <button
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#08200f] px-4 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn("rounded-lg px-3 py-3 text-sm font-bold text-white/80", pathname === href && "bg-white/10 text-[#f0c85c]")}
              >
                {label}
              </Link>
            ))}
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#d8ad45] px-4 py-3 text-sm font-black text-[#102414]"
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
    <footer className="border-t border-[#d8ad45]/15 bg-[#06170b] py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-lg border border-[#d8ad45]/30">
              <Image src="/royal-crates-logo.jpg" alt="Royal Mango Crates logo" fill sizes="48px" className="object-cover" />
            </span>
            <div>
              <div className="font-black uppercase tracking-wide">Royal Mango Crates</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8ad45]">Royal quality. Naturally sweet.</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
            Premium Pakistani mangoes delivered fresh from carefully selected orchards. Built for family orders, gifts, retail display,
            and seasonal bulk supply.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-white/70">
          <strong className="text-white">Pages</strong>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-[#f0c85c]">
              {label}
            </Link>
          ))}
        </div>
        <div className="grid content-start gap-3 text-sm text-white/70">
          <strong className="text-white">Connect</strong>
          <a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#f0c85c]">
            WhatsApp: {brand.whatsappDisplay}
          </a>
          <a href={brand.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#f0c85c]">
            <Instagram size={16} /> Instagram
          </a>
          <a href={brand.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#f0c85c]">
            <Facebook size={16} /> Facebook
          </a>
          <a href={brand.location} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#f0c85c]">
            <MapPin size={16} /> Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={brand.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-black/30 transition hover:-translate-y-1"
    >
      <MessageCircle size={27} />
    </a>
  );
}
