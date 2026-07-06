import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio";
import { getItemsByCategory } from "@/lib/portfolio";
import { categories } from "@/data/site";
import type { Category } from "@/types";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.value }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.value === slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: category.label,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.value === slug);
  if (!category) notFound();

  const items = getItemsByCategory(slug as Category);

  return (
    <div className="container-app py-10 sm:py-16">
      <Link
        href="/categories"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All categories
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl font-bold sm:text-4xl">{category.label}</h1>
        <p className="mt-2 text-muted-foreground">{category.description}</p>
      </div>

      <PortfolioGrid
        items={items}
        emptyMessage={`No projects in ${category.label} yet.`}
      />
    </div>
  );
}
