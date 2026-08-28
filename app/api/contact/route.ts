import { EmailTemplate } from "@/components/resend/email-template";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const file = formData.get("file");

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const attachments =
      [
        {
          filename: "LOGO MEDIVARA WEBSITE.png",
          content: await readFile(
            join(process.cwd(), "public", "LOGO MEDIVARA WEBSITE.png")
          ),
          contentId: "medivara-logo"
        },
        ...(file instanceof File && file.size > 0
          ? [
              {
                filename: file.name,
                content: Buffer.from(await file.arrayBuffer()).toString("base64")
              }
            ]
          : [])
      ];

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: [process.env.RESEND_TO_EMAIL ?? "delivered@resend.dev"],
      replyTo: email,
      subject,
      react: EmailTemplate({
        name,
        email,
        subject,
        message,
        fileName: file instanceof File && file.size > 0 ? file.name : undefined
      }),
      attachments
    });

    if (error) {
      console.error("Resend contact email error:", error);
      return Response.json(
        { error: error.message ?? "Unable to send contact email." },
        { status: 500 }
      );
    }

    return Response.json(data);
  } catch (error) {
    console.error("Contact email request error:", error);
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to process contact request."
      },
      { status: 500 }
    );
  }
}
