import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PortfolioGrid } from "@/components/portfolio";
import { getFeaturedItems } from "@/lib/portfolio";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featured = getFeaturedItems(3);

  return (
    <>
      <section className="container-app py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Ishari Studio
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.title}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/portfolio">
              <Button size="lg">
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/20 py-16">
        <div className="container-app">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Featured Work</h2>
              <p className="mt-1 text-muted-foreground">
                A selection of recent and highlighted projects
              </p>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost">
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <PortfolioGrid items={featured} />
        </div>
      </section>
    </>
  );
}
