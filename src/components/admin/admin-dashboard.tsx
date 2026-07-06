import Link from "next/link";
import { ArrowRight, FolderOpen, Plus, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getAllPortfolioItems, getCategoryCounts } from "@/lib/portfolio";

export function AdminStats() {
  const items = getAllPortfolioItems();
  const counts = getCategoryCounts();
  const featuredCount = items.filter((i) => i.featured).length;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Total Projects</CardDescription>
          <CardTitle className="text-3xl">{items.length}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Featured</CardDescription>
          <CardTitle className="text-3xl">{featuredCount}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Categories</CardDescription>
          <CardTitle className="text-3xl">{Object.keys(counts).length}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Tags</CardDescription>
          <CardTitle className="text-3xl">
            {new Set(items.flatMap((i) => i.tags)).size}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}

export function AdminQuickActions() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Link href="/admin/projects">
        <Card className="transition-colors hover:border-primary/50">
          <CardHeader>
            <FolderOpen className="mb-2 h-8 w-8 text-primary" />
            <CardTitle className="text-base">Manage Projects</CardTitle>
            <CardDescription>View, edit, and delete portfolio items</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" size="sm">
              Open <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </Link>
      <Link href="/admin/projects/new">
        <Card className="transition-colors hover:border-primary/50">
          <CardHeader>
            <Plus className="mb-2 h-8 w-8 text-primary" />
            <CardTitle className="text-base">Add Project</CardTitle>
            <CardDescription>Create a new portfolio entry</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" size="sm">
              Create <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </Link>
      <Link href="/admin/settings">
        <Card className="transition-colors hover:border-primary/50">
          <CardHeader>
            <Settings className="mb-2 h-8 w-8 text-primary" />
            <CardTitle className="text-base">Settings</CardTitle>
            <CardDescription>Site configuration and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" size="sm">
              Configure <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
