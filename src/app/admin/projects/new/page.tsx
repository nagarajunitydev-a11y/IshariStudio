import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { categories } from "@/data/site";

export const metadata = {
  title: "Add Project",
};

export default function AdminNewProjectPage() {
  return (
    <div className="container-app py-10 sm:py-16">
      <Link
        href="/admin/projects"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Add New Project</h1>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>
            Form UI placeholder — wire to API for persistent storage.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Title</label>
            <Input placeholder="Project title" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Category</label>
            <select className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm">
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Description</label>
            <Textarea placeholder="Full project description" />
          </div>
          <div className="flex gap-3">
            <Button type="button">Save Project</Button>
            <Link href="/admin/projects">
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
