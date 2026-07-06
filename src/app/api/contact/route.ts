import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    console.log("Contact form submission:", body);

    return NextResponse.json({ success: true, message: "Message received" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
