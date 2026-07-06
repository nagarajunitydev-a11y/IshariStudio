"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { categories } from "@/data/site";
import type { Category, SortOption } from "@/types";

interface PortfolioFiltersProps {
  search: string;
  category: Category | "all";
  tags: string[];
  featured: boolean;
  sort: SortOption;
  availableTags: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: Category | "all") => void;
  onTagToggle: (tag: string) => void;
  onFeaturedChange: (value: boolean) => void;
  onSortChange: (value: SortOption) => void;
  onReset: () => void;
}

export function PortfolioFiltersBar({
  search,
  category,
  tags,
  featured,
  sort,
  availableTags,
  onSearchChange,
  onCategoryChange,
  onTagToggle,
  onFeaturedChange,
  onSortChange,
  onReset,
}: PortfolioFiltersProps) {
  const hasActiveFilters =
    search || category !== "all" || tags.length > 0 || featured;

  return (
    <div className="space-y-4 rounded-xl border border-border bg-card p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="h-10 rounded-lg border border-border bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="title-asc">Title A–Z</option>
          <option value="title-desc">Title Z–A</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={category === "all" ? "primary" : "outline"}
          size="sm"
          onClick={() => onCategoryChange("all")}
        >
          All
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat.value}
            variant={category === cat.value ? "primary" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(cat.value)}
          >
            {cat.label}
          </Button>
        ))}
        <Button
          variant={featured ? "primary" : "outline"}
          size="sm"
          onClick={() => onFeaturedChange(!featured)}
        >
          Featured only
        </Button>
      </div>

      {availableTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <button key={tag} type="button" onClick={() => onTagToggle(tag)}>
              <Badge
                variant={tags.includes(tag) ? "primary" : "outline"}
                className="cursor-pointer"
              >
                {tag}
              </Badge>
            </button>
          ))}
        </div>
      )}

      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={onReset}>
          <X className="h-4 w-4" />
          Clear filters
        </Button>
      )}
    </div>
  );
}
