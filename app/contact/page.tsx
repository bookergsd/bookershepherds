import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ContactForm from "@/components/contact/contact-form"
import { Mail, Facebook, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - BookerShepherds",
  description: "Get in touch with BookerShepherds for questions about adoption, products, or general inquiries.",
  keywords: "Contact BookerShepherds, German Shepherd Questions, Dog Adoption Support",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you! Get in touch with any questions about our German Shepherds or products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:jamesbookergsd3@gmail.com" className="text-amber-600 hover:text-amber-700">
                      jamesbookergsd3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Facebook className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Facebook</h3>
                    <a
                      href="https://www.facebook.com/share/g/1AmwedoLQa/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700"
                    >
                      Visit our Facebook Group
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">Coming Soon - Not yet available</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-700">
                  We typically respond to all inquiries within 24 hours. For urgent adoption questions, please mention
                  "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
