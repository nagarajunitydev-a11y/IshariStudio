import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getPortfolioItemBySlug, getAllPortfolioItems } from "@/lib/portfolio";
import { categories } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPortfolioItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) return { title: "Not Found" };
  return { title: item.title, description: item.excerpt };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) notFound();

  const categoryLabel =
    categories.find((c) => c.value === item.category)?.label ?? item.category;

  return (
    <article className="container-app py-10 sm:py-16">
      <Link
        href="/portfolio"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="primary">{categoryLabel}</Badge>
          {item.featured && <Badge>Featured</Badge>}
        </div>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{item.title}</h1>
        <p className="mb-6 text-lg text-muted-foreground">{item.description}</p>

        <div className="mb-8 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {item.liveUrl && (
            <Link href={item.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button>
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </Link>
          )}
          {item.githubUrl && (
            <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="h-4 w-4" />
                Source Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
