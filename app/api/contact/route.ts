import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const {
      name,
      email,
      company,
      message,
      website,
    } = await request.json();
    
    // Honeypot spam protection
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.length > 100
    ) {
      return NextResponse.json(
        { error: "Please enter at least 10 characters in your message." },
        { status: 400 }
      );
    }

    if (
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }
    
    if (
      company &&
      (typeof company !== "string" || company.length > 150)
    ) {
      return NextResponse.json(
        { error: "Invalid company name." },
        { status: 400 }
      );
    }
    
    if (
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please provide a brief description of your project (minimum 10 characters).",},
        { status: 400 }
      );
    }
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanCompany =
      typeof company === "string" ? company.trim() : "";
    const cleanMessage = message.trim();

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    });

    const { error } = await resend.emails.send({
      from: "Kamilyan Website <no-reply@kamilyan.com>",
      to: ["kam@kamilyan.com"],
      replyTo: `${cleanName} <${cleanEmail}>`,
      subject: `[Kamilyan] New Website Inquiry | ${cleanCompany || cleanName}`,
      text: `
        Kamilyan Website Inquiry

        Submitted: ${submittedAt}

        Name: ${cleanName}

        Company: ${cleanCompany || "Not provided"}

        Email: ${cleanEmail}

        Message:

        ${cleanMessage}
        `.trim(),
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
        </head>
        <body style="margin:0;padding:40px;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#18181b;">
        
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center">
        
                <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">
        
                  <tr>
                    <td style="background:#1F4D3A;padding:32px 40px;">
                      <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:700;">
                        Kamilyan
                      </h1>
        
                      <p style="margin:8px 0 0;color:#d4e6de;font-size:15px;">
                        Kamilyan Website Inquiry
                      </p>
                    </td>
                  </tr>
        
                  <tr>
                    <td style="padding:40px;">
        
                      <p style="margin:0 0 28px;font-size:14px;color:#71717a;">
                        Submitted: ${submittedAt}
                      </p>
        
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="10" style="border-collapse:collapse;">
        
                        <tr>
                          <td style="width:140px;font-weight:600;color:#52525b;">Name</td>
                          <td>${escapeHtml(cleanName)}</td>
                        </tr>
        
                        <tr>
                          <td style="font-weight:600;color:#52525b;">Company</td>
                          <td>${cleanCompany ? escapeHtml(cleanCompany) : "Not provided"}</td>
                        </tr>
        
                        <tr>
                          <td style="font-weight:600;color:#52525b;">Email</td>
                          <td>
                            <a href="mailto:${cleanEmail}" style="color:#1F4D3A;text-decoration:none;">
                              ${escapeHtml(cleanEmail)}
                            </a>
                          </td>
                        </tr>
        
                      </table>
        
                      <hr style="margin:32px 0;border:none;border-top:1px solid #e4e4e7;" />
        
                      <h2 style="margin:0 0 12px;font-size:18px;color:#18181b;">
                        Message
                      </h2>
        
                      <div style="background:#f8fafc;border:1px solid #e4e4e7;border-radius:8px;padding:20px;white-space:pre-wrap;line-height:1.6;">
                        ${escapeHtml(cleanMessage)}
                      </div>
                      <p style="margin-top:36px;">
                        <a
                          href="mailto:${cleanEmail}"
                          style="
                            display:inline-block;
                            background:#1F4D3A;
                            color:#ffffff;
                            text-decoration:none;
                            padding:14px 22px;
                            border-radius:6px;
                            font-weight:bold;
                          "
                        >
                          Reply to ${escapeHtml(cleanName)}
                        </a>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:24px 40px;background:#fafafa;border-top:1px solid #e4e4e7;font-size:13px;color:#71717a;">
                      This inquiry was submitted through the
                      <strong>Kamilyan Website</strong>.
                     </td>
                  </tr>
        
                </table>
        
              </td>
            </tr>
          </table>
        
        </body>
        </html>
        `,
     });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(error, { status: 500 });
    }

    return NextResponse.json({ success: true });
    } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Resend failed",
        details: error,
      },
      { status: 500 }
    );
  }
}