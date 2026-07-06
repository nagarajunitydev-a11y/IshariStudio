"use client";

import { PortfolioFiltersBar, PortfolioGrid } from "@/components/portfolio";
import { usePortfolioFilters } from "@/hooks/use-portfolio-filters";
import { getAllTags } from "@/lib/portfolio";

export default function PortfolioPage() {
  const {
    filters,
    sort,
    items,
    updateFilter,
    resetFilters,
    toggleTag,
    setSort,
  } = usePortfolioFilters();

  return (
    <div className="container-app py-10 sm:py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Portfolio Gallery</h1>
        <p className="mt-2 text-muted-foreground">
          Browse all projects. Use search and filters to find what you need.
        </p>
      </div>

      <div className="mb-8">
        <PortfolioFiltersBar
          search={filters.search ?? ""}
          category={filters.category ?? "all"}
          tags={filters.tags ?? []}
          featured={filters.featured ?? false}
          sort={sort}
          availableTags={getAllTags()}
          onSearchChange={(value) => updateFilter("search", value)}
          onCategoryChange={(value) => updateFilter("category", value)}
          onTagToggle={toggleTag}
          onFeaturedChange={(value) => updateFilter("featured", value)}
          onSortChange={setSort}
          onReset={resetFilters}
        />
      </div>

      <p className="mb-4 text-sm text-muted-foreground">
        {items.length} project{items.length !== 1 ? "s" : ""} found
      </p>

      <PortfolioGrid items={items} />
    </div>
  );
}
