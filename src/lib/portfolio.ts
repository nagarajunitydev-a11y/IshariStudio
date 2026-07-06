import type { PortfolioFilters, PortfolioItem, SortOption } from "@/types";
import { portfolioItems } from "@/data/portfolio";

export function getAllPortfolioItems(): PortfolioItem[] {
  return portfolioItems;
}

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getFeaturedItems(limit = 3): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured).slice(0, limit);
}

export function getItemsByCategory(category: string): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  portfolioItems.forEach((item) => item.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function filterPortfolioItems(
  items: PortfolioItem[],
  filters: PortfolioFilters,
  sort: SortOption = "newest"
): PortfolioItem[] {
  let result = [...items];

  if (filters.category && filters.category !== "all") {
    result = result.filter((item) => item.category === filters.category);
  }

  if (filters.search) {
    const query = filters.search.toLowerCase().trim();
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  if (filters.tags?.length) {
    result = result.filter((item) =>
      filters.tags!.some((tag) => item.tags.includes(tag))
    );
  }

  if (filters.featured) {
    result = result.filter((item) => item.featured);
  }

  switch (sort) {
    case "oldest":
      result.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      break;
    case "title-asc":
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      result.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "newest":
    default:
      result.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  return result;
}

export function getCategoryCounts(): Record<string, number> {
  return portfolioItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});
}
