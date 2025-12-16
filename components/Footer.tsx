import { contentfulClient } from '@/lib/contentful';
import type { TherapistProfileSkeleton } from '@/types/contentful';

async function getTherapistProfile() {
  const entries = await contentfulClient.getEntries<TherapistProfileSkeleton>({
    content_type: 'therapistProfile',
    limit: 1,
  });
  return entries.items[0];
}

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const therapistProfile = await getTherapistProfile();

  const email = therapistProfile?.fields.email || 'contact@kmalonetherapy.com';
  const phone = therapistProfile?.fields.phone || '(555) 123-4567';

  return (
    <footer className="relative bg-gradient-to-b from-[#E8EDE3] to-[#dce5d5]">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 L0,30 C240,50 480,10 720,30 C960,50 1200,10 1440,30 L1440,60 Z" fill="#E8EDE3"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Decorative leaf accent */}
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7D8B6E]/40"></div>
            <svg className="w-5 h-5 text-[#7D8B6E]/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#7D8B6E]/40"></div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href={`mailto:${email}`}
              className="text-[#5C6B4D] hover:text-[#A34838] transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {email}
            </a>
            <span className="text-[#7D8B6E]/30 hidden sm:inline">|</span>
            <a
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              className="text-[#5C6B4D] hover:text-[#A34838] transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {phone}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#5C6B4D]/70 text-center">
            &copy; {currentYear} Kathryn Malone Therapy. All rights reserved.
          </p>

          {/* Crisis Resources */}
          <div className="mt-4 pt-6 border-t border-[#7D8B6E]/20 w-full max-w-2xl">
            <p className="text-xs text-[#5C6B4D]/60 text-center leading-relaxed">
              If you are experiencing a mental health emergency, please call{' '}
              <a href="tel:988" className="font-medium text-[#A34838] hover:underline">988</a>
              {' '}(Suicide & Crisis Lifeline) or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* COMMENTED OUT - Original footer with navigation links
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">K Malone Therapy</h3>
            <p className="text-sm text-gray-600">
              Compassionate mental health care providing support for anxiety, depression, trauma, and life transitions.
            </p>
          </div>

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
*/
