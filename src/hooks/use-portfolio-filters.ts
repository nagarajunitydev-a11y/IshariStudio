"use client";

import { useMemo, useState } from "react";
import type { PortfolioFilters, SortOption } from "@/types";
import { filterPortfolioItems, getAllPortfolioItems } from "@/lib/portfolio";

const defaultFilters: PortfolioFilters = {
  category: "all",
  search: "",
  tags: [],
  featured: false,
};

export function usePortfolioFilters(initialSort: SortOption = "newest") {
  const [filters, setFilters] = useState<PortfolioFilters>(defaultFilters);
  const [sort, setSort] = useState<SortOption>(initialSort);

  const items = useMemo(() => {
    return filterPortfolioItems(getAllPortfolioItems(), filters, sort);
  }, [filters, sort]);

  const updateFilter = <K extends keyof PortfolioFilters>(
    key: K,
    value: PortfolioFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setSort("newest");
  };

  const toggleTag = (tag: string) => {
    setFilters((prev) => {
      const tags = prev.tags ?? [];
      const next = tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag];
      return { ...prev, tags: next };
    });
  };

  return {
    filters,
    sort,
    items,
    updateFilter,
    resetFilters,
    toggleTag,
    setSort,
  };
}
