export type Category =
  | "web-development"
  | "mobile-apps"
  | "ui-ux-design"
  | "branding"
  | "digital-marketing"
  | "bike-car-configurator"
  | "photography";

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  category: Category;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioFilters {
  category?: Category | "all";
  search?: string;
  tags?: string[];
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";
