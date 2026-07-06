import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Ishari Studio <isharistudio@gmail.com>",
      to: body.email,
      subject: "We received your message",
      html: `
        <h2>Thank you for contacting Ishari Studio, ${body.name}!</h2>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <hr />
        <p><strong>Your message:</strong></p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p>${body.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // Send notification email to the admin
    await resend.emails.send({
      from: "Ishari Studio <isharistudio@gmail.com>",
      to: process.env.ADMIN_EMAIL || "isharistudio@gmail.com",
      subject: `New contact form submission: ${body.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("Contact form submission:", { name: body.name, email: body.email, subject: body.subject });

    return NextResponse.json({ success: true, message: "Message received and emails sent" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
