import type { Category } from "@/types";

export const categories: { value: Category; label: string; description: string }[] = [
  {
    value: "web-development",
    label: "Web Development",
    description: "Full-stack web applications and sites",
  },
  {
    value: "mobile-apps",
    label: "Mobile Apps",
    description: "iOS and Android applications",
  },
  {
    value: "ui-ux-design",
    label: "UI/UX Design",
    description: "Interfaces, design systems, and prototypes",
  },
  {
    value: "branding",
    label: "Branding",
    description: "Logos, identity systems, and brand guidelines",
  },
  {
    value: "digital-marketing",
    label: "Digital Marketing",
    description: "SEO, content strategy, social media, and campaigns",
  },
  {
    value: "bike-car-configurator",
    label: "Bike / Car Configurator",
    description: "Browser configurator experiences for mobile and desktop platforms (Windows, Mac)",
  },
  {
    value: "photography",
    label: "Photography",
    description: "Visual storytelling and photo series",
  },
];

export const siteConfig = {
  name: "Ishari Studio",
  title: "Creative Developer & Designer",
  description:
    "Showcasing web development, design, and creative projects. Explore Ishari Studio's work, browse by category, and get in touch.",
  author: "Ishari Studio",
  email: "isharistudio@gmail.com",
  phone: "9789010719",
  address: "Thiruvallur, 602001",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Categories", href: "/categories" },
  { label: "Contact", href: "/contact" },
];
