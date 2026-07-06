import Link from "next/link";
import Image from "next/image";
import type { PortfolioItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { categories } from "@/data/site";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const categoryLabel =
    categories.find((c) => c.value === item.category)?.label ?? item.category;

  return (
    <Link href={`/portfolio/${item.slug}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {item.featured && (
            <div className="absolute left-3 top-3">
              <Badge variant="primary">Featured</Badge>
            </div>
          )}
        </div>
        <div className="p-4">
          <Badge variant="outline" className="mb-2">
            {categoryLabel}
          </Badge>
          <h3 className="mb-1 text-lg font-semibold group-hover:text-primary">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{item.excerpt}</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {item.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
