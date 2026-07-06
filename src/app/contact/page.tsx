import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch for collaborations, inquiries, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="container-app py-10 sm:py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
        <p className="mt-2 text-muted-foreground">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Email</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm hover:text-primary"
              >
                {siteConfig.email}
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contact Number</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <a href={`tel:${siteConfig.phone}`} className="text-sm hover:text-primary">
                {siteConfig.phone}
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Address</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">{siteConfig.address}</span>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
