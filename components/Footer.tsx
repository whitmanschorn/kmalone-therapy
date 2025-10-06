import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">K Malone Therapy</h3>
            <p className="text-sm text-gray-600">
              Compassionate mental health care providing support for anxiety, depression, trauma, and life transitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600">
                <Link
                  href="/contact#schedule"
                  className="hover:text-blue-900 transition-colors"
                >
                  Schedule an Appointment
                </Link>
              </li>
              <li className="text-sm text-gray-600">
                <a href="tel:555-123-4567" className="hover:text-blue-900 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="text-sm text-gray-600">
                <a href="mailto:contact@kmalonetherapy.com" className="hover:text-blue-900 transition-colors">
                  contact@kmalonetherapy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} K Malone Therapy. All rights reserved. |{' '}
            <Link href="/privacy" className="hover:text-blue-900 transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p className="text-xs text-gray-400 text-center mt-2">
            Licensed Clinical Social Worker providing therapy services.
            If you are experiencing a mental health emergency, please call 988 or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </footer>
  );
}
