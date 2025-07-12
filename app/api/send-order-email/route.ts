import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
  image?: string
  type?: "product" | "adoption"
}

interface OrderData {
  customerInfo: {
    name: string
    email: string
    phone: string
    address: string
    city: string
    country: string
    state: string
    zipCode: string
    shippingMethod: string
    paymentMethod: string
  }
  items: OrderItem[]
  subtotal: number
  shipping: number
  total: number
  orderNumber: string
}

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderData = await request.json()

    // Separate items by type for better organization
    const adoptionItems = orderData.items.filter((item) => item.type === "adoption" || item.id <= 10)
    const productItems = orderData.items.filter((item) => item.type === "product" || item.id > 10)

    // Format adoption items
    const adoptionsList =
      adoptionItems.length > 0
        ? adoptionItems
            .map(
              (item) =>
                `- ${item.name} (Adoption Fee) x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`,
            )
            .join("\n")
        : ""

    // Format product items
    const productsList =
      productItems.length > 0
        ? productItems
            .map((item) => `- ${item.name} (Product) x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`)
            .join("\n")
        : ""

    // Format all items together
    const allItemsList = orderData.items
      .map((item) => {
        const itemType = item.type === "adoption" || item.id <= 10 ? "(Adoption)" : "(Product)"
        return `- ${item.name} ${itemType} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
      })
      .join("\n")

    const shippingMethodNames: { [key: string]: string } = {
      standard: "Standard Shipping (5-7 business days)",
      express: "Express Shipping (2-3 business days)",
      overnight: "Overnight Shipping (1 business day)",
    }

    const paymentMethodNames: { [key: string]: string } = {
      paypal: "PayPal",
      cashapp: "CashApp",
      zelle: "Zelle",
      bitcoin: "Bitcoin (BTC)",
      applepay: "Apple Pay",
      venmo: "Venmo",
      chime: "Chime",
      bank: "Direct Bank Transfer",
    }

    const emailContent = `
New Order Received - BookerShepherds
=====================================

Order Number: ${orderData.orderNumber}
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

CUSTOMER INFORMATION:
--------------------
Name: ${orderData.customerInfo.name}
Email: ${orderData.customerInfo.email}
Phone: ${orderData.customerInfo.phone}

SHIPPING ADDRESS:
----------------
${orderData.customerInfo.address}
${orderData.customerInfo.city}, ${orderData.customerInfo.state} ${orderData.customerInfo.zipCode}
Country: ${orderData.customerInfo.country}

ORDER DETAILS:
-------------
${
  adoptionItems.length > 0
    ? `
🐕 GERMAN SHEPHERD ADOPTIONS:
${adoptionsList}
`
    : ""
}${
  productItems.length > 0
    ? `
🛍️ PRODUCT PURCHASES:
${productsList}
`
    : ""
}
📋 COMPLETE ORDER SUMMARY:
${allItemsList}

PAYMENT & SHIPPING:
------------------
Subtotal: $${orderData.subtotal.toFixed(2)}
Shipping: $${orderData.shipping.toFixed(2)}
TOTAL: $${orderData.total.toFixed(2)}

Payment Method: ${paymentMethodNames[orderData.customerInfo.paymentMethod] || orderData.customerInfo.paymentMethod}
Shipping Method: ${shippingMethodNames[orderData.customerInfo.shippingMethod] || orderData.customerInfo.shippingMethod}

ORDER BREAKDOWN:
---------------
${adoptionItems.length > 0 ? `• ${adoptionItems.length} German Shepherd(s) for adoption` : ""}
${productItems.length > 0 ? `• ${productItems.length} product item(s)` : ""}
• Total items: ${orderData.items.reduce((sum, item) => sum + item.quantity, 0)}

NEXT STEPS:
----------
1. Contact customer within 24 hours to confirm payment details
2. For adoptions: Schedule meet & greet, prepare adoption paperwork
3. For products: Prepare items for shipping
4. Send payment instructions for selected method: ${paymentMethodNames[orderData.customerInfo.paymentMethod]}

---
BookerShepherds Order Management System
API User: jamesbookergsd3
Timestamp: ${new Date().toISOString()}
    `

    // Send order notification email to owner using Resend
    try {
      console.log("Attempting to send order notification email to BookerShepherds owner via Resend...")
      const response = await resend.emails.send({
        from: "BookerShepherds Orders <jamesbookergsd3@bookershepherds.com>",
        to: ["jamesbookergsd3@gmail.com"],
        subject: `New Order #${orderData.orderNumber} - ${adoptionItems.length > 0 ? "Adoption" : ""}${
          adoptionItems.length > 0 && productItems.length > 0 ? " & " : ""
        }${productItems.length > 0 ? "Products" : ""} - BookerShepherds`,
        text: emailContent,
      })
      console.log("Resend order notification email response:", response)
      console.log(`✅ Order email sent successfully for order #${orderData.orderNumber} via Resend.`)
    } catch (resendError: any) {
      console.error("❌ Failed to send order email via Resend:", resendError)
      throw new Error(`Failed to send order notification email via Resend: ${resendError.message || resendError}`)
    }

    // Send confirmation email to customer using Resend
    const customerEmailContent = `
Thank you for your order with BookerShepherds!
=============================================

Order Number: ${orderData.orderNumber}
Date: ${new Date().toLocaleDateString()}

Dear ${orderData.customerInfo.name},

Thank you for your order! We have received your request and will contact you within 24 hours to confirm payment details and arrange ${
      adoptionItems.length > 0 ? "adoption meetings and " : ""
    }delivery${adoptionItems.length > 0 ? "/pickup" : ""}.

YOUR ORDER SUMMARY:
------------------
${
  adoptionItems.length > 0
    ? `
🐕 German Shepherd Adoptions:
${adoptionsList}
`
    : ""
}${
  productItems.length > 0
    ? `
🛍️ Product Purchases:
${productsList}
`
    : ""
}
ORDER TOTAL: $${orderData.total.toFixed(2)}
Payment Method: ${paymentMethodNames[orderData.customerInfo.paymentMethod] || orderData.customerInfo.paymentMethod}

${
  adoptionItems.length > 0
    ? `
ADOPTION PROCESS:
----------------
• We'll schedule a meet & greet with your selected German Shepherd(s)
• Adoption paperwork will be prepared
• Home visit may be required for first-time adopters
• All dogs are health-checked and up-to-date on vaccinations
`
    : ""
}

${
  productItems.length > 0
    ? `
SHIPPING INFORMATION:
--------------------
• Your products will be prepared for shipping
• Shipping Method: ${shippingMethodNames[orderData.customerInfo.shippingMethod] || orderData.customerInfo.shippingMethod}
• Delivery Address: ${orderData.customerInfo.address}, ${orderData.customerInfo.city}, ${orderData.customerInfo.state} ${orderData.customerInfo.zipCode}
Country: ${orderData.customerInfo.country}
`
    : ""
}

NEXT STEPS:
----------
1. We'll contact you within 24 hours to confirm payment
2. Payment instructions will be provided for ${paymentMethodNames[orderData.customerInfo.paymentMethod]}
3. ${adoptionItems.length > 0 ? "Adoption meetings will be scheduled" : "Products will be shipped once payment is confirmed"}

We're excited to help you ${
      adoptionItems.length > 0
        ? "welcome your new German Shepherd family member"
        : "get the best accessories for your German Shepherd"
    }!

Best regards,
James - BookerShepherds Team

Contact us: jamesbookergsd3@gmail.com
Website: BookerShepherds.com

---
Order placed via BookerShepherds.com
API User: jamesbookergsd3
    `

    try {
      console.log("Attempting to send customer confirmation email via Resend...")
      const customerEmailResponse = await resend.emails.send({
        from: "James - BookerShepherds <jamesbookergsd3@bookershepherds.com>",
        to: [orderData.customerInfo.email],
        subject: `Order Confirmation #${orderData.orderNumber} - BookerShepherds`,
        text: customerEmailContent,
      })
      console.log("Resend customer confirmation email response:", customerEmailResponse)
      console.log(`✅ Customer confirmation email sent to ${orderData.customerInfo.email} via Resend.`)
    } catch (customerEmailError: any) {
      console.error("❌ Failed to send customer confirmation email via Resend:", customerEmailError)
      // Don't fail the entire request if customer email fails
    }

    return NextResponse.json({
      success: true,
      message: "Order email sent successfully",
      orderNumber: orderData.orderNumber,
      apiUser: "jamesbookergsd3",
      orderSummary: {
        adoptions: adoptionItems.length,
        products: productItems.length,
        totalItems: orderData.items.reduce((sum, item) => sum + item.quantity, 0),
        totalValue: orderData.total,
      },
    })
  } catch (error: any) {
    console.error("❌ Error processing order email:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Failed to send order email. Please contact us directly at jamesbookergsd3@gmail.com. Error: ${error.message || error}`,
        apiUser: "jamesbookergsd3",
      },
      { status: 500 },
    )
  }
}
