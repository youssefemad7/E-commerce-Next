import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white background mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid my-grid grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Exclusive</h3>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-gray-600 text-white placeholder-gray-400 rounded-l-md rounded-r-none px-3 py-2 w-full focus:outline-none focus:border-white text-sm"
              />
              <Button
                variant="ghost"
                size="sm"
                className="border border-gray-600 border-l-0 rounded-l-none rounded-r-md hover:bg-gray-800 h-[37px]"
              >
                →
              </Button>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                My Account
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Login / Register
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Cart
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Wishlist
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Shop
              </a>
            </div>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Terms Of Use
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-gray-400 text-sm mb-4">
              Save $3 with App New User Only
            </p>

            <div className="flex space-x-2 mb-4">
              <div className="w-20 h-20 bg-white rounded-md flex items-center justify-center">
                <div className="text-xs text-black font-mono">QR CODE</div>
              </div>
              <div className="space-y-2">
                <div className="w-24 h-8 bg-gray-800 rounded border border-gray-600 flex items-center justify-center">
                  <span className="text-xs">Google Play</span>
                </div>
                <div className="w-24 h-8 bg-gray-800 rounded border border-gray-600 flex items-center justify-center">
                  <span className="text-xs">App Store</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center mt-[8%] w-[100%]">
          <p className="text-gray-500 text-sm">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
