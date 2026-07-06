import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdminQuickActions, AdminStats } from "@/components/admin";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Admin Dashboard",
  description: "Manage portfolio content and site settings.",
};

export default function AdminDashboardPage() {
  return (
    <div className="container-app py-10 sm:py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">Admin Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your portfolio content and site configuration.
          </p>
        </div>
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Button>
        </Link>
      </div>

      <div className="space-y-8">
        <AdminStats />
        <AdminQuickActions />
      </div>
    </div>
  );
}
