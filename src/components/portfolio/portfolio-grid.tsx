import type { PortfolioItem } from "@/types";
import { PortfolioCard } from "./portfolio-card";

interface PortfolioGridProps {
  items: PortfolioItem[];
  emptyMessage?: string;
}

export function PortfolioGrid({
  items,
  emptyMessage = "No projects found matching your criteria.",
}: PortfolioGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-border p-8 text-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );
}
