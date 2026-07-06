import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { getAllPortfolioItems } from "@/lib/portfolio";
import { categories } from "@/data/site";

export const metadata = {
  title: "Manage Projects",
};

export default function AdminProjectsPage() {
  const items = getAllPortfolioItems();

  return (
    <div className="container-app py-10 sm:py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/admin"
            className="mb-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Link>
          <h1 className="text-3xl font-bold">Projects</h1>
        </div>
        <Link href="/admin/projects/new">
          <Button>
            <Plus className="h-4 w-4" />
            Add Project
          </Button>
        </Link>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const categoryLabel =
            categories.find((c) => c.value === item.category)?.label ?? item.category;

          return (
            <Card key={item.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base">{item.title}</CardTitle>
                <div className="flex gap-2">
                  {item.featured && <Badge variant="primary">Featured</Badge>}
                  <Badge variant="outline">{categoryLabel}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.excerpt}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
