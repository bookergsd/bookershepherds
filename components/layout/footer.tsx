import Link from "next/link"
import { Heart, Facebook, Instagram, MessageCircle, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold">BookerShepherds</span>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to ethical German Shepherd adoption and providing premium accessories for your beloved
              companions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Contact:</span>
                <a href="mailto:jamesbookergsd3@gmail.com" className="text-amber-400 hover:text-amber-300">
                  jamesbookergsd3@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Owner:</span>
                <span className="text-gray-300">James - BookerShepherds</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/adoption" className="text-gray-300 hover:text-white">
                  Adoption
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/share/g/1AmwedoLQa/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Instagram className="h-5 w-5" />
                <span>Instagram (Coming Soon)</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Twitter className="h-5 w-5" />
                <span>X (Twitter) (Coming Soon)</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Youtube className="h-5 w-5" />
                <span>YouTube (Coming Soon)</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                disabled
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with Us on WhatsApp
              </Button>
              <p className="text-xs text-gray-500">Not yet available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BookerShepherds. All rights reserved. Made with ❤️ for German Shepherd lovers.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Managed by James (jamesbookergsd3)
          </p>
        </div>
      </div>
    </footer>
  )
}
