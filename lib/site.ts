/**
 * Sheillz Empire - Site Data & Configuration Source of Truth
 *
 * Rules:
 * - Content lives strictly in this file.
 * - Never invent business facts (prices, hours, address, reviews, staff).
 * - Unknown items are marked as TODO.
 * - No medical or health claims in service descriptions.
 * - Empty collections (reviews, team, offers) must remain empty so UI hides them.
 */

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  group: "Spa & Body" | "Skin" | "Nails & Feet" | "Training";
  description: string;
  price: string; // "Ask for price" until owner supplies
  duration?: string;
  isPopular?: boolean;
}

export interface ServiceGroup {
  id: string;
  title: string;
  description: string;
  image: string; // Exact filename from docs/03-IMAGES.md
  items: ServiceItem[];
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  heroHeadline: string;
  heroSubline: string;
  description: string;
  url: string;
  contact: {
    // Verified from public business directory records:
    address: string;
    city: string;
    state: string;
    country: string;
    // Contact details pending owner confirmation:
    phone: string; // TODO: Owner to confirm primary phone
    phoneDisplay: string;
    whatsappNumber: string; // TODO: Owner to confirm WhatsApp number (e.g. 234XXXXXXXXXX)
    whatsappDisplay: string;
    instagramUrl: string;
    instagramHandle: string;
    hours: {
      weekday: string;
      weekend: string;
      note: string;
    };
  };
  owner: {
    name: string; // TODO: Owner to confirm preferred name spelling (Sheillz)
    story: string;
  };
  // Sections to be hidden when empty per AGENTS.md:
  reviews: Array<{ author: string; text: string; rating: number; date: string }>;
  team: Array<{ name: string; role: string; bio: string; photo: string }>;
  offers: Array<{ slug: string; title: string; discount: string; description: string; validUntil: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Sheillz Empire",
  legalName: "Sheillz Empire Beauty and Wellness",
  tagline: "Spa and Salon",
  heroHeadline: "Rule your glow.",
  heroSubline: "Spa and salon: massage, facials, nails, waxing, body polishing and skincare.",
  description: "Luxury wellness, signature massage, skin treatments, nails, and professional beauty training in Abuja, Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sheillz-empire.vercel.app",
  contact: {
    // Verified address from public registry: Block 67, Area 1, 33 Kano Street, Garki, Abuja
    address: "Block 67, Area 1, 33 Kano Street, Garki",
    city: "Abuja",
    state: "FCT",
    country: "Nigeria",
    // Marked TODO until owner confirms:
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "", // TODO: Owner to confirm phone number
    phoneDisplay: "+234 (TODO: Owner to supply phone)",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "", // TODO: Owner to confirm WhatsApp number
    whatsappDisplay: "+234 (TODO: Owner to supply WhatsApp)",
    instagramUrl: "https://www.instagram.com/sheillz_empire/",
    instagramHandle: "@sheillz_empire",
    hours: {
      weekday: "Monday – Friday: 9:00 AM – 7:00 PM (TODO: Owner to confirm)",
      weekend: "Saturday: 10:00 AM – 6:00 PM | Sunday: By appointment (TODO: Owner to confirm)",
      note: "Appointment bookings recommended for all spa and salon sessions.",
    },
  },
  owner: {
    name: "Sheillz", // TODO: Owner to confirm spelling
    story: "At Sheillz Empire, our philosophy centres on calm rejuvenation and regal self-care. Founded with a commitment to high standards in beauty therapy, we provide bespoke treatments that leave every client refreshed, poised, and confident.",
  },
  // Strictly empty until real data is provided:
  reviews: [],
  team: [],
  offers: [],
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "spa-body",
    title: "Spa & Body",
    description: "Full-body wellness therapies designed to ease muscular tension and restore peaceful balance.",
    image: "cat-spa-body.jpg",
    items: [
      {
        id: "massages",
        number: "01",
        name: "Massages",
        group: "Spa & Body",
        description: "Customized therapeutic and relaxation body massage using soothing oils to relieve daily tension.",
        price: "Ask for price",
        duration: "60 - 90 mins (TODO: confirm)",
        isPopular: true,
      },
      {
        id: "body-scrub",
        number: "02",
        name: "Body Scrub",
        group: "Spa & Body",
        description: "Exfoliating treatment that gently sloughs away dull surface cells, leaving skin soft and refreshed.",
        price: "Ask for price",
        duration: "45 mins (TODO: confirm)",
      },
      {
        id: "body-polishing",
        number: "03",
        name: "Body Polishing",
        group: "Spa & Body",
        description: "Deep conditioning and buffing ritual that hydrates the skin for a smooth, luminous finish.",
        price: "Ask for price",
        duration: "60 mins (TODO: confirm)",
      },
      {
        id: "steam-bath",
        number: "04",
        name: "Steam Bath",
        group: "Spa & Body",
        description: "Warm herbal steam session designed to open pores, promote perspiration, and encourage calm relaxation.",
        price: "Ask for price",
        duration: "30 mins (TODO: confirm)",
      },
    ],
  },
  {
    id: "skin",
    title: "Skin",
    description: "Specialized skincare rituals and precision hair removal focused on clear, balanced skin.",
    image: "cat-skin.jpg",
    items: [
      {
        id: "skincare",
        number: "05",
        name: "Skincare",
        group: "Skin",
        description: "Tailored skin assessment and targeted topical care to support everyday hydration and texture balance.",
        price: "Ask for price",
        duration: "60 mins (TODO: confirm)",
      },
      {
        id: "facials",
        number: "06",
        name: "Facials",
        group: "Skin",
        description: "Deep cleansing facial including steam, gentle extraction, exfoliation, and a restorative masque.",
        price: "Ask for price",
        duration: "60 - 75 mins (TODO: confirm)",
        isPopular: true,
      },
      {
        id: "vajacials",
        number: "07",
        name: "Vajacials",
        group: "Skin",
        description: "Targeted soothing post-wax treatment for the intimate bikini area to calm irritation and ingrown hairs.",
        price: "Ask for price",
        duration: "45 mins (TODO: confirm)",
      },
      {
        id: "waxing",
        number: "08",
        name: "Waxing",
        group: "Skin",
        description: "Precision warm wax hair removal for silky, long-lasting smooth skin across body areas.",
        price: "Ask for price",
        duration: "30 - 60 mins (TODO: confirm)",
      },
    ],
  },
  {
    id: "nails-feet",
    title: "Nails & Feet",
    description: "Detailed hand, nail, and foot care delivered with hygiene and meticulous technique.",
    image: "cat-nails-feet.jpg",
    items: [
      {
        id: "nails",
        number: "09",
        name: "Nails",
        group: "Nails & Feet",
        description: "Full nail extension sets, acrylic, builder gel, overlays, and custom decorative nail styling.",
        price: "Ask for price",
        duration: "75 - 120 mins (TODO: confirm)",
      },
      {
        id: "manicure",
        number: "10",
        name: "Manicure",
        group: "Nails & Feet",
        description: "Nail shaping, cuticle neatening, hand scrub, gentle massage, and flawless polish application.",
        price: "Ask for price",
        duration: "45 mins (TODO: confirm)",
      },
      {
        id: "pedicure",
        number: "11",
        name: "Pedicure",
        group: "Nails & Feet",
        description: "Warm foot soak, heel buffing, nail grooming, exfoliating scrub, massage, and fresh polish.",
        price: "Ask for price",
        duration: "60 mins (TODO: confirm)",
        isPopular: true,
      },
    ],
  },
  {
    id: "training",
    title: "Training",
    description: "Hands-on professional apprenticeship and masterclasses for aspiring spa therapists and nail technicians.",
    image: "training.jpg",
    items: [
      {
        id: "training-program",
        number: "12",
        name: "Professional Spa & Salon Training",
        group: "Training",
        description: "Intensive practical course covering spa hygiene, massage technique, facial treatments, and nail artistry.",
        price: "Ask for price",
        duration: "Course tracks vary (TODO: confirm)",
      },
    ],
  },
];

export const allServices: ServiceItem[] = serviceGroups.flatMap((group) => group.items);

export interface TrainingDetail {
  title: string;
  targetAudience: string;
  duration: string;
  tuition: string;
  curriculum: string[];
  certification: string;
}

export const trainingDetails: TrainingDetail = {
  title: "Sheillz Empire Professional Academy",
  targetAudience: "Beginners, beauty enthusiasts, and practicing aestheticians seeking professional certification.",
  duration: "Flexible intensive modules (TODO: Owner to supply exact duration)",
  tuition: "Ask for tuition details (TODO: Owner to supply course fee)",
  curriculum: [
    "Spa sanitation, hygiene and client safety protocols",
    "Therapeutic massage strokes and body anatomy fundamentals",
    "Facial therapy, skin typing and extraction practices",
    "Body scrub formulations and polishing techniques",
    "Acrylic, gel extensions and precision manicure/pedicure",
    "Salon business management, client retention and pricing",
  ],
  certification: "Certificate of Completion issued upon practical assessment.",
};

/**
 * Builds the WhatsApp booking URL.
 * In Phase 1, booking opens WhatsApp with pre-filled details.
 */
export function buildWhatsAppUrl(params: {
  service?: string;
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  notes?: string;
}): string {
  const number = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");

  const lines = [
    "Hello Sheillz Empire, I would like to book an appointment:",
    params.service ? `• Service: ${params.service}` : "• Service: (Please assist me with options)",
    params.date ? `• Preferred Date: ${params.date}` : "",
    params.time ? `• Preferred Time: ${params.time}` : "",
    params.name ? `• Name: ${params.name}` : "",
    params.phone ? `• Phone: ${params.phone}` : "",
    params.notes ? `• Note: ${params.notes}` : "",
    "",
    "Could you please confirm availability and pricing? Thank you!",
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));

  if (!number) {
    // If WhatsApp number is pending, open web share or fallback protocol
    return `https://wa.me/?text=${text}`;
  }

  return `https://wa.me/${number}?text=${text}`;
}

export function buildPhoneCallUrl(): string {
  const number = siteConfig.contact.phone.replace(/[^0-9+]/g, "");
  return number ? `tel:${number}` : "tel:+2348000000000";
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: "Body Care" | "Facial Serums" | "Masks & Treatments" | "Cleansers";
  description: string;
  volume: string;
  price: string; // "Ask for price" until owner supplies
  image: string; // Exact filename from docs/03-IMAGES.md
  inStock: boolean;
  isBestSeller?: boolean;
}

export const products: ProductItem[] = [
  {
    id: "dr-teals-rose-scrub",
    name: "Dr Teal's Shea Sugar Scrub (Rose Essential Oil)",
    brand: "Dr Teal's",
    category: "Body Care",
    description: "Formulated with certified shea butter, evening primrose oil, and macadamia seed oil infused with natural rose essential oil to gently exfoliate and polish dull skin.",
    volume: "19 oz / 538 g",
    price: "Ask for price",
    image: "product-scrub.jpg",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "cosrx-snail-mucin",
    name: "Advanced Snail 96 Mucin Power Essence",
    brand: "COSRX",
    category: "Facial Serums",
    description: "Enriched with 96% snail secretion filtrate to deeply replenish moisture, soothe sensitive texture, and repair the skin barrier without feeling heavy.",
    volume: "100 ml / 3.38 fl. oz",
    price: "Ask for price",
    image: "product-mucin.jpg",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "farm-stay-essence-masks",
    name: "Real Essence Sheet Mask Multi-Pack",
    brand: "Farm Stay",
    category: "Masks & Treatments",
    description: "Hydrating and calming botanical sheet masks featuring nourishing Shea Butter, Avocado, Manuka Honey, and Peach extract varieties.",
    volume: "23 ml single-use sheets",
    price: "Ask for price",
    image: "product-masks.jpg",
    inStock: true,
  },
  {
    id: "estelin-skincare-serums",
    name: "Targeted Facial Serums & Cleanser Set",
    brand: "Estelin",
    category: "Facial Serums",
    description: "Clinical-inspired botanical treatments including Rosehip Niacinamide spots-fading serum, 5D Hyaluronic Acid hydration, and Collagen firming face wash.",
    volume: "30 ml serums & 100 ml wash",
    price: "Ask for price",
    image: "product-serums.jpg",
    inStock: true,
  },
  {
    id: "skin-by-zaron-vitamin-c-body-wash",
    name: "Vitamin C Brightening & Exfoliating Body Wash",
    brand: "Skin By Zaron",
    category: "Cleansers",
    description: "Antioxidant-rich daily body cleanser enriched with Vitamin C, glycolic acid, and castor oil for gentle exfoliation and radiant full-body hydration.",
    volume: "650 ml / 21.98 fl. oz",
    price: "Ask for price",
    image: "product-bodywash.jpg",
    inStock: true,
  },
];

export function buildProductOrderUrl(product: ProductItem): string {
  const number = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");

  const lines = [
    "Hello Sheillz Empire, I would like to order a skincare product from your boutique:",
    `• Product: ${product.name} (${product.brand})`,
    `• Size/Volume: ${product.volume}`,
    `• Listed Price: ${product.price}`,
    "",
    "Please let me know current availability, delivery/pickup options, and payment details. Thank you!",
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));

  if (!number) {
    return `https://wa.me/?text=${text}`;
  }

  return `https://wa.me/${number}?text=${text}`;
}

