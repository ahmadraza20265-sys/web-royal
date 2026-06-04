export const brand = {
  name: "Royal Mango Crates",
  whatsappDisplay: "+92 329 0832502",
  whatsappUrl: "https://wa.me/923290832502",
  instagram: "https://www.instagram.com/royalcrates/",
  facebook: "https://www.facebook.com/people/Royal-Mango-Crates/61590179591720/",
  location: "https://maps.app.goo.gl/7JfmTJ5Ce5qKDUwf7"
};

export const mangoVarieties = [
  {
    name: "Langra",
    image: "/royal-crates-post-1.jfif",
    description: "A refined Pakistani classic with a distinct aroma, smooth flesh, and a balanced sweet-tangy finish.",
    season: "June to July",
    taste: "Fragrant, fiber-light, mildly tangy"
  },
  {
    name: "Sindhri",
    image: "/royal-crates-banner.jpg",
    description: "Large golden mangoes known for elegant presentation, generous pulp, and early-season sweetness.",
    season: "May to June",
    taste: "Honeyed, smooth, bright golden pulp"
  },
  {
    name: "Chaunsa",
    image: "/royal-crates-post-2.jfif",
    description: "A premium favorite prized for deep sweetness, rich aroma, and a luxurious melt-in-the-mouth texture.",
    season: "July to August",
    taste: "Intensely sweet, aromatic, velvety"
  },
  {
    name: "Anwar Ratol",
    image: "/royal-crates-post-1.jfif",
    description: "A boutique variety with exceptional fragrance, compact size, and memorable royal sweetness.",
    season: "June to July",
    taste: "Perfumed, rich, delicately sweet"
  },
  {
    name: "Saroli",
    image: "/royal-crates-post-2.jfif",
    description: "A seasonal selection for buyers who enjoy a lively aroma, tender pulp, and traditional mango character.",
    season: "June",
    taste: "Juicy, tropical, lightly tangy"
  }
] as const;

export const galleryItems = [
  { title: "Royal orchard selection", category: "Orchard", image: "/royal-crates-banner.jpg" },
  { title: "Premium mango crates", category: "Mangoes", image: "/royal-crates-post-1.jfif" },
  { title: "Handpicked harvest", category: "Harvest", image: "/royal-crates-post-2.jfif" },
  { title: "Gift-ready packaging", category: "Packaging", image: "/royal-crates-logo.jpg" },
  { title: "Fresh dispatch", category: "Delivery", image: "/royal-crates-banner.jpg" },
  { title: "Seasonal gold fruit", category: "Mangoes", image: "/royal-crates-post-1.jfif" },
  { title: "Careful crate handling", category: "Packaging", image: "/royal-crates-post-2.jfif" },
  { title: "Naturally grown batches", category: "Orchard", image: "/royal-crates-banner.jpg" }
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
    answer: "Availability depends on the season. Langra, Sindhri, Chaunsa, Anwar Ratol, and Saroli are offered when premium batches are ready."
  },
  {
    question: "Do you offer gift and bulk crates?",
    answer: "Yes. Royal Mango Crates prepares family, gift, retail, and bulk orders based on quantity, city, and seasonal availability."
  },
  {
    question: "Is there an online account or dashboard?",
    answer: "No. This website is focused on brand information and WhatsApp ordering only."
  }
] as const;
