export const brand = {
  name: "Royal Mango Crates",
  whatsappDisplay: "+92 329 0832502",
  whatsappUrl: "https://wa.me/923290832502",
  instagram: "https://www.instagram.com/royalcrates/",
  facebook: "https://www.facebook.com/people/Royal-Mango-Crates/61590179591720/",
  location: "https://maps.app.goo.gl/7JfmTJ5Ce5qKDUwf7",
  locationLabel: "Royal Mango Crates, Pakistan"
};

export const assets = {
  logo: "/logo-royal.jpg",
  banner: "/royal-crates-banner.jpg",
  orchard: "/royal-crates-post-2.jfif",
  packaging: "/royal-crates-post-1.jfif",
  saroli: "/saroli-mango.webp",
  langra: "/langra-mango.jpg",
  chaunsa: "/chaunsa-mangoes.webp",
  sindhri: "/sindhri-mango.jpg"
};

export const mangoVarieties = [
  {
    name: "Sindhri",
    image: assets.sindhri,
    description: "Large golden mangoes known for refined presentation, generous pulp, and early-season sweetness.",
    season: "May to June",
    taste: "Honeyed, smooth, bright golden pulp",
    price: "Price on request"
  },
  {
    name: "Chaunsa",
    image: assets.chaunsa,
    description: "A royal favorite prized for deep sweetness, rich aroma, and a melt-in-the-mouth texture.",
    season: "July to August",
    taste: "Intensely sweet, aromatic, velvety",
    price: "Price on request"
  },
  {
    name: "Langra",
    image: assets.langra,
    description: "A classic Pakistani variety with a distinct aroma, smooth flesh, and balanced sweet-tangy finish.",
    season: "June to July",
    taste: "Fragrant, fiber-light, mildly tangy",
    price: "Price on request"
  },
  {
    name: "Anwar Ratol",
    image: assets.packaging,
    description: "A boutique gifting variety selected for fragrance, compact size, and memorable royal sweetness.",
    season: "June to July",
    taste: "Perfumed, rich, delicately sweet",
    price: "Price on request"
  },
  {
    name: "Saroli",
    image: assets.saroli,
    description: "A seasonal selection with lively aroma, tender pulp, and traditional premium mango character.",
    season: "June",
    taste: "Juicy, tropical, lightly tangy",
    price: "Price on request"
  }
] as const;

export const collections = [
  {
    id: "early-harvest",
    name: "Early Harvest Collection",
    copy: "First arrivals selected for fragrance, color, and gifting-grade freshness.",
    products: ["Sindhri", "Saroli"]
  },
  {
    id: "premium-collection",
    name: "Premium Collection",
    copy: "Signature Pakistani mango crates for families, hosts, and seasonal connoisseurs.",
    products: ["Chaunsa", "Langra", "Sindhri"]
  },
  {
    id: "royal-collection",
    name: "Royal Collection",
    copy: "Top-tier seasonal batches curated for premium presentation and high-value orders.",
    products: ["Chaunsa", "Anwar Ratol", "Saroli"]
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes",
    copy: "Elegant mango gifting with premium packaging for family, corporate, and special occasions.",
    products: ["Anwar Ratol", "Chaunsa", "Sindhri"]
  }
] as const;

export const galleryItems = [
  { title: "Royal orchard selection", category: "Orchard", image: assets.banner },
  { title: "Premium packaging detail", category: "Packaging", image: assets.packaging },
  { title: "Chaunsa export quality", category: "Mangoes", image: assets.chaunsa },
  { title: "Sindhri golden harvest", category: "Harvest", image: assets.sindhri },
  { title: "Langra seasonal batch", category: "Mangoes", image: assets.langra },
  { title: "Saroli natural sweetness", category: "Mangoes", image: assets.saroli },
  { title: "Gift-ready crate finish", category: "Packaging", image: assets.orchard },
  { title: "Official Royal Crates mark", category: "Brand", image: assets.logo }
] as const;

export const testimonials = [
  {
    quote: "The crates arrived beautifully packed and the mangoes had the fragrance you only get from properly selected fruit.",
    name: "Ayesha Malik",
    detail: "Family order, Lahore"
  },
  {
    quote: "Royal Mango Crates handled our gift order with polished presentation and consistent quality across every box.",
    name: "Hamza Rauf",
    detail: "Corporate gifting"
  },
  {
    quote: "Customers noticed the color, aroma, and packaging immediately. The crates looked premium on display.",
    name: "Sara Ahmed",
    detail: "Retail buyer"
  }
] as const;

export const faqs = [
  {
    question: "How do I place an order?",
    answer: "Use any WhatsApp button or the contact form. Your selected details open directly in WhatsApp for confirmation."
  },
  {
    question: "Which mango varieties are available?",
    answer: "Availability depends on the season. Sindhri, Chaunsa, Langra, Anwar Ratol, and Saroli are offered when premium batches are ready."
  },
  {
    question: "Do you offer gift and bulk crates?",
    answer: "Yes. Royal Mango Crates prepares family, gift, retail, and bulk orders based on quantity, city, and seasonal availability."
  },
  {
    question: "Is there an online account or dashboard?",
    answer: "No. This website is focused on premium brand discovery and WhatsApp ordering."
  }
] as const;
