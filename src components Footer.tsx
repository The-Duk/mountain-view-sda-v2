import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sda-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Mountain View SDA Church</h3>
            <p className="text-sm leading-relaxed text-green-100">
              A place of worship, love, hope, and community. Sharing the Advent
              message with the world, with the love of Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-green-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-green-100 hover:text-white">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0" />
                <span className="text-green-100">Kantafu, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span className="text-green-100">+254 722 377293</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a
                  href="mailto:mountainviewchurch1844@gmail.com"
                  className="text-green-100 hover:text-white"
                >
                  mountainviewchurch1844@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-green-700 pt-8 text-center text-sm text-green-200">
          <p>
            &copy; {currentYear} Mountain View SDA Church Kantafu. All are welcome.
          </p>
        </div>
      </div>
    </footer>
  );
}
