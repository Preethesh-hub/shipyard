// app/data/products.ts
// The shape of one product. Everything in the app is typed against this.
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Sneakers" | "Audio" | "Wearables" | "Gadgets";
  emoji: string;
  accent: string; // card art background color
  description: string;
  specs: string[];
  image: string; // e.g. "/products/wave-runner.jpg"
}

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    tagline: "Everyday running sneakers built for long miles.",
    price: 129,
    category: "Sneakers",
    emoji: "👟",
    accent: "#6c8cff",
    description: "A lightweight daily trainer with a springy foam midsole and a breathable knit upper.",
    specs: ["Knit upper", "Foam midsole", "320g per shoe", "Unisex sizing"],
    image: "/products/wave-runner.jpg",
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Wireless earbuds with deep, clean bass.",
    price: 89,
    category: "Audio",
    emoji: "🎧",
    accent: "#a06cff",
    description: "Compact earbuds with active noise cancellation and an eight-hour battery.",
    specs: ["Active noise cancel", "8h battery", "USB-C case", "IPX4 sweatproof"],
    image: "/products/pulse-buds.jpg",
  },
  {
    id: "aero-track",
    name: "Aero Track",
    tagline: "Minimalist smartwatch tracking health and movement.",
    price: 179,
    category: "Wearables",
    emoji: "⌚",
    accent: "#ff6c8c",
    description: "Sleek biometric watch featuring continuous heart rate, sleep metrics, and water resistance.",
    specs: ["AMOLED display", "7-day battery", "5 ATM water resist", "Aluminum case"],
    image: "/products/aero-track.jpg",
  },
  {
    id: "lumen-dock",
    name: "Lumen Dock",
    tagline: "Magnetic fast charger with ambient glow.",
    price: 49,
    category: "Gadgets",
    emoji: "⚡",
    accent: "#ffb06c",
    description: "A weighted aluminum desk stand delivering 15W wireless charging with subtle underglow lighting.",
    specs: ["15W fast charging", "MagSafe compatible", "Braided 2m cable", "Anodized aluminum"],
    image: "/products/lumen-dock.jpg",
  },
  {
    id: "trail-blazer",
    name: "Trail Blazer",
    tagline: "All-terrain trail shoes built for rugged terrain.",
    price: 145,
    category: "Sneakers",
    emoji: "🥾",
    accent: "#48bb78",
    description: "Engineered with deep lug traction and reinforced toe guards for steep climbs and dirt paths.",
    specs: ["Vibram outsole", "Waterproof membrane", "Rock plate protection", "Quick-lace system"],
    image: "/products/trail-blazer.jpg",
  },
  {
    id: "sonic-boom",
    name: "Sonic Boom",
    tagline: "Studio over-ear headphones with planar drivers.",
    price: 249,
    category: "Audio",
    emoji: "🎵",
    accent: "#4299e1",
    description: "Precision-tuned over-ear monitoring headphones offering ultra-wide frequency response and plush memory cushions.",
    specs: ["Planar magnetic drivers", "40h playback", "Lossless Bluetooth 5.3", "Foldable frame"],
    image: "/products/sonic-boom.jpg",
  },
  {
    id: "stride-band",
    name: "Stride Band",
    tagline: "Ultra-thin fitness band for 24/7 recovery insights.",
    price: 99,
    category: "Wearables",
    emoji: "🏃",
    accent: "#ed64a6",
    description: "Screenless, lightweight sensor band that measures strain, sleep cycles, and daily recovery.",
    specs: ["Screenless form factor", "Skin temperature sensor", "Haptic alarms", "Weighs only 18g"],
    image: "/products/stride-band.jpg",
  },
  {
    id: "beam-projector",
    name: "Beam Projector",
    tagline: "Pocket-sized laser projector for movie nights anywhere.",
    price: 199,
    category: "Gadgets",
    emoji: "📽️",
    accent: "#38b2ac",
    description: "Packs 1080p projection and built-in stereo speakers into an ultra-portable cylindrical enclosure.",
    specs: ["1080p native resolution", "Built-in battery (3h)", "Auto keystone correction", "Wi-Fi & AirPlay"],
    image: "/products/beam-projector.jpg",
  },
];

// Helper: look up one product by its id. Returns undefined if not found.
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
