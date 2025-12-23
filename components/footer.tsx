"use-client"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="relative rounded-lg w-10 h-10 flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="Modern architecture home"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">Priya Architecture</span>
          </Link>
            <p className="text-sm">Making house design easy, modern and vastu-friendly.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Plans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  House Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Elevation Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Vastu Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <p className="text-sm mb-2">Email: info@priyaarch.com</p>
            <p className="text-sm mb-2">Phone: +91-9876-543-210</p>
            <p className="text-sm">Address: New Delhi, India</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm">© 2025 Priya Architecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
