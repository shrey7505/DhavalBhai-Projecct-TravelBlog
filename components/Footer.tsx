import Link from "next/link";
import { Globe, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const footerCategories = [
  { label: "Hiking", href: "/category/hiking" },
  { label: "Family Travel", href: "/category/family-travel" },
  { label: "Budget Travel", href: "/category/budget-travel" },
  { label: "Destinations", href: "/category/destinations" },
];

const featuredDestinations = [
  { label: "Kyoto, Japan", href: "/blog/kyoto-complete-guide" },
  { label: "Patagonia", href: "/blog/torres-del-paine-complete-guide" },
  { label: "Marrakech", href: "/blog/marrakech-travelers-guide" },
  { label: "New Zealand", href: "/blog/new-zealand-north-south-island" },
  { label: "Southeast Asia", href: "/blog/southeast-asia-budget-guide" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      {/* Newsletter */}
      <div className="bg-navy-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Join 50,000+ Wanderers
              </h3>
              <p className="text-gray-300 text-sm">
                Get weekly travel inspiration, tips, and destination guides delivered to your inbox.
              </p>
            </div>
            <NewsletterForm variant="dark" />
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-amber" />
              <div>
                <span
                  className="text-xl font-bold text-white leading-none block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Wanderlust
                </span>
                <span className="text-xs text-gray-400 tracking-widest uppercase">Magazine</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Independent travel journalism for curious, adventurous, and budget-conscious travelers since 2019.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {footerCategories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">
              Popular Destinations
            </h4>
            <ul className="space-y-2.5">
              {featuredDestinations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">
              About
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Our Story", href: "#" },
                { label: "Our Writers", href: "#" },
                { label: "Advertise", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-amber text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 Wanderlust Magazine. All rights reserved.</p>
          <p>Made with care for adventurous souls worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
