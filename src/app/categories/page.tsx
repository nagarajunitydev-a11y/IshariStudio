import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { getCategoryCounts, getItemsByCategory } from "@/lib/portfolio";
import { categories } from "@/data/site";

export default function CategoriesPage() {
  const counts = getCategoryCounts();

  return (
    <div className="container-app py-10 sm:py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Categories</h1>
        <p className="mt-2 text-muted-foreground">
          Explore projects organized by discipline and expertise.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = counts[category.value] ?? 0;
          const preview = getItemsByCategory(category.value).slice(0, 2);

          return (
            <Link key={category.value} href={`/categories/${category.value}`}>
              <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{category.label}</CardTitle>
                    <Badge variant="primary">{count}</Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {preview.length > 0 && (
                    <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
                      {preview.map((item) => (
                        <li key={item.id}>• {item.title}</li>
                      ))}
                    </ul>
                  )}
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Browse category
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
