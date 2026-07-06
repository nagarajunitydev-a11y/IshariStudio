import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Settings",
};

export default function AdminSettingsPage() {
  return (
    <div className="container-app py-10 sm:py-16">
      <Link
        href="/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Dashboard
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Site Settings</h1>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription>Basic site configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Site Name</label>
            <Input defaultValue={siteConfig.name} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Author</label>
            <Input defaultValue={siteConfig.author} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Contact Email</label>
            <Input defaultValue={siteConfig.email} type="email" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
