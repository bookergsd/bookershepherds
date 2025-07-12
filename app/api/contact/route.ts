import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const contactData: ContactData = await request.json()

    const emailContent = `
New Contact Form Submission - BookerShepherds
============================================

From: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject || "No subject"}

Message:
--------
${contactData.message}

---
Sent from BookerShepherds Contact Form
Date: ${new Date().toLocaleString()}
Reply to: ${contactData.email}
API User: jamesbookergsd3
    `

    // Send contact form email to owner using Resend
    try {
      console.log("Attempting to send contact email to BookerShepherds owner via Resend...")
      const response = await resend.emails.send({
        from: "BookerShepherds Contact <jamesbookergsd3@bookershepherds.com>",
        to: ["jamesbookergsd3@gmail.com"],
        subject: `Contact Form - ${contactData.subject || "BookerShepherds Inquiry"}`,
        text: emailContent,
        replyTo: contactData.email,
      })
      console.log("Resend contact email response:", response)
      console.log(`✅ Contact form email sent successfully from ${contactData.email} via Resend.`)
    } catch (resendError: any) {
      console.error("❌ Failed to send contact email via Resend:", resendError)
      throw new Error(`Failed to send contact form email via Resend: ${resendError.message || resendError}`)
    }

    // Send auto-reply to customer using Resend
    const autoReplyContent = `
Thank you for contacting BookerShepherds!
========================================

Dear ${contactData.name},

Thank you for reaching out to us! We have received your message and will get back to you within 24 hours.

Your message:
"${contactData.message}"

If you have any urgent questions about adoption or need immediate assistance, please don't hesitate to contact us directly at jamesbookergsd3@gmail.com.

Best regards,
James - BookerShepherds Team

---
This is an automated response from our contact system.
For direct contact: jamesbookergsd3@gmail.com
API User: jamesbookergsd3
    `

    try {
      console.log("Attempting to send auto-reply email to customer via Resend...")
      const autoReplyResponse = await resend.emails.send({
        from: "James - BookerShepherds <jamesbookergsd3@bookershepherds.com>",
        to: [contactData.email],
        subject: "Thank you for contacting BookerShepherds",
        text: autoReplyContent,
      })
      console.log("Resend auto-reply email response:", autoReplyResponse)
      console.log(`✅ Auto-reply sent to ${contactData.email} via Resend.`)
    } catch (autoReplyError: any) {
      console.error("❌ Failed to send auto-reply via Resend:", autoReplyError)
      // Don't fail the entire request if auto-reply fails, as the primary email to owner might have succeeded.
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      apiUser: "jamesbookergsd3",
    })
  } catch (error: any) {
    console.error("❌ Error processing contact form:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Failed to send contact form. Please email us directly at jamesbookergsd3@gmail.com. Error: ${error.message || error}`,
        apiUser: "jamesbookergsd3",
      },
      { status: 500 },
    )
  }
}
