// All site content for the StrikeHike marketing page.
// Stock imagery (picsum.photos) is used in place of the original video embeds.

export const navItems = [
  { label: "Lending OS", href: "#products" },
  { label: "Supply chain finance", href: "#products" },
  { label: "Risk Assessment OS", href: "#products" },
  { label: "Collections OS", href: "#products" },
  { label: "StrikeVerse", href: "#ai-solutions" },
  { label: "Careers", href: "#" },
  { label: "Resources", href: "#resources" },
];

export const heroWords = ["Trust", "Accuracy", "Growth"];

export const stats = [
  { label: "Credit Facilitated", value: 140000, prefix: "₹", suffix: "Cr+" },
  { label: "Active Enterprises", value: 17000, suffix: "+" },
  { label: "Investors on Board", value: 6200, suffix: "+" },
  { label: "Worth of Assets Monitored", value: 1, suffix: "Cr+" },
  { label: "Successfully Recovered", value: 80000, suffix: "Cr+" },
];

export const products = [
  {
    number: "01",
    title: "Lending OS",
    subtitle: "Smart Lending Platform",
    description:
      "Streamline your lending process with AI-powered decision making, automated workflows, and personalized loan offerings.",
    artwork: "rings" as const,
    pastel: "var(--secondary-blue)",
  },
  {
    number: "02",
    title: "Risk Assessment OS",
    subtitle: "Advanced Credit Intelligence Platform",
    description:
      "Turn unstructured data into real-time risk insights: predictive scoring, adaptive algorithms, and precision underwriting.",
    artwork: "radial" as const,
    pastel: "var(--secondary-pink)",
  },
  {
    number: "03",
    title: "Collections OS",
    subtitle: "Intelligent Recovery System",
    description:
      "Optimize your collections strategy with behavioral analytics, personalized communication channels, and automated payment plans.",
    artwork: "network" as const,
    pastel: "var(--secondary-yellow)",
  },
];

export const solutionTabs = [
  {
    id: 1,
    full: "Solutions for Credit Teams",
    short: "Credit Teams",
    image: "https://picsum.photos/seed/strikehike-credit-teams/960/600",
  },
  {
    id: 2,
    full: "Solutions for Debt Collections",
    short: "Collections",
    image: "https://picsum.photos/seed/strikehike-debt/960/600",
  },
  {
    id: 3,
    full: "Solutions for Wealth Managers",
    short: "Wealth Managers",
    image: "https://picsum.photos/seed/strikehike-wealth/960/600",
  },
  {
    id: 4,
    full: "Solutions for Lenders",
    short: "Lenders",
    image: "https://picsum.photos/seed/strikehike-lenders/960/600",
  },
];

export const yuverseProducts = [
  { name: "StrikeVoice", description: "Conversational bot to elevate customer support" },
  { name: "StrikeCI", description: "Advanced ASR module for enhanced customer interaction" },
  { name: "StrikeAlt", description: "No-code ML for credit risk & fraud management" },
  { name: "StrikeVin", description: "Personalised video messaging with AI Avatars" },
  { name: "StrikeSight", description: "AI-powered Credit Assessment Memo" },
  { name: "StrikeAccess", description: "Embedded Due Diligence Assistant" },
];

export const bankLogos = [
  "Federal Bank",
  "Kotak",
  "ICICI Bank",
  "IndusInd Bank",
  "HDFC Bank",
  "Axis Bank",
];

export const testimonials = [
  {
    title: "#LeverageIndia with StrikeHike",
    subtitle: "Borrowers Edition",
    quote:
      "Over 50 million enterprises in India today have little to no access to formal credit. The Indian economy is highly underleveraged — StrikeHike is changing that.",
    image: "https://picsum.photos/seed/strikehike-story1/600/400",
  },
  {
    title: "#BetterTogether with Finnable",
    subtitle: "powered by StrikeHike Co.Lend",
    quote:
      "As their co-lending tech partner, StrikeHike helped Finnable scale their co-lending book and partner with top banks — all on one platform.",
    image: "https://picsum.photos/seed/strikehike-story2/600/400",
  },
  {
    title: "#BetterTogether with UGRO Capital",
    subtitle: "Powered by StrikeHike Co.Lend",
    quote:
      "Shachindra Nath, CEO of U GRO Capital, on what it takes to grow the #CoLending market by 10X — focus and intent are key.",
    image: "https://picsum.photos/seed/strikehike-story3/600/400",
  },
  {
    title: "#BetterTogether with Olyv",
    subtitle: "Powered by StrikeHike Co.Lend",
    quote:
      "Rohit Garg, Co-Founder & CEO of Olyv India, on how the ease of configuration of our platform dramatically simplified their lives.",
    image: "https://picsum.photos/seed/strikehike-story4/600/400",
  },
  {
    title: "#LeverageIndia with StashFin",
    subtitle: "Powered by StrikeHike",
    quote:
      "Shruti Aggarwal, Co-founder of Stashfin, explores how financial inclusion is at the heart of their mission.",
    image: "https://picsum.photos/seed/strikehike-story5/600/400",
  },
  {
    title: "#LeverageIndia with Clix Capital",
    subtitle: "Powered by StrikeHike",
    quote:
      "How Clix Capital leverages StrikeHike's infrastructure to reach more borrowers and accelerate access to credit across India.",
    image: "https://picsum.photos/seed/strikehike-story6/600/400",
  },
];

export const integrationFeatures = [
  {
    title: "Integration",
    description:
      "Find all popular platform SDKs, plugins, and server integrations in our integrations stack.",
    icon: "puzzle" as const,
  },
  {
    title: "API References",
    description:
      "Comprehensive documentation to build powerful payment solutions.",
    icon: "code" as const,
  },
  {
    title: "Webhook",
    description:
      "Receive real-time notifications for all payment related transactions and events.",
    icon: "webhook" as const,
  },
];

export const apiCodeLines = [
  "curl -X POST https://api.strikehike.com/v1/orders",
  "  -H 'Authorization: Bearer <token>'",
  "  -H 'Content-Type: application/json'",
  "  -d '{ \"amount\": 250000,",
  "        \"currency\": \"INR\",",
  "        \"product\": \"lending-os\" }'",
];

export const newsCards = [
  {
    badge: "Product",
    title:
      "Project Sphinx: How Responsive Web Design Cut Bounce Rates by 35% (2025 Case Study)",
    excerpt:
      "In today's fast-paced digital world, accessibility and usability are paramount. At Project Sphinx, we are…",
    date: "17 February 2026",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/strikehike-blog1/640/400",
  },
  {
    badge: "Engineering",
    title:
      "Building Phoenix Codie: A Chill Figma-to-Code Generator for Design Systems",
    excerpt:
      "How we built an internal tool that turns Figma frames into production-ready components for our design system.",
    date: "12 February 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/strikehike-blog2/640/400",
  },
  {
    badge: "AI",
    title: "Transforming StrikeHike's Unified UI with Artificial Intelligence",
    excerpt:
      "A look at how AI reshaped the StrikeHike experience — from data ingestion to real-time risk insights.",
    date: "05 February 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/strikehike-blog3/640/400",
  },
  {
    badge: "Lending",
    title: "What actually happens when an app gives you a loan",
    excerpt:
      "A behind-the-scenes breakdown of the lending pipeline — from application to disbursal in seconds.",
    date: "29 January 2026",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/strikehike-blog4/640/400",
  },
];

export const footerColumns = [
  {
    title: "Our Products",
    links: [
      "StrikeHike",
      "StrikeVerse",
      "StrikeCollect",
      "Lending OS",
      "Risk Assessment OS",
      "Collections OS",
    ],
  },
  {
    title: "Company",
    links: ["Career", "About Us", "News & Media", "Leverage India"],
  },
  {
    title: "Resources",
    links: ["Blog", "Knowledge Hub", "Events", "Help Center"],
  },
  {
    title: "Security",
    links: ["Trust Center", "Privacy Policy", "Compliance", "Responsible Disclosure"],
  },
];
