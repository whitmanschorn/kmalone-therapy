import Link from 'next/link';
import { contentfulClient } from '@/lib/contentful';
import type { SiteSettingsSkeleton } from '@/types/contentful';

async function getSiteSettings() {
  const entries = await contentfulClient.getEntries<SiteSettingsSkeleton>({
    content_type: 'siteSettings',
    limit: 1,
  });
  return entries.items[0];
}

export default async function Header() {
  const siteSettings = await getSiteSettings();
  const siteName = siteSettings?.fields.siteName || 'Kathryn Malone Therapy';

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-[#E8EDE3]/60 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-[#A34838] hover:text-[#C45B4C] flex items-center gap-2">
            {/* Decorative leaf accent */}
            <svg className="w-6 h-6 text-[#7D8B6E]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
            {siteName}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-[#5C6B4D] hover:text-white px-5 py-2.5 rounded-full bg-[#E8EDE3] hover:bg-[#7D8B6E] shadow-soft hover-glow transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}

/* COMMENTED OUT - Original navigation header
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    }

    if (isResourcesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isResourcesOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  // TODO: Replace with data from Contentful
  const blogPosts = [
    { shortTitle: "Understanding Anxiety", slug: "understanding-anxiety" },
    { shortTitle: "Trauma-Informed Therapy", slug: "trauma-informed-therapy" },
    { shortTitle: "Mindfulness Techniques", slug: "mindfulness-techniques" },
    { shortTitle: "When to Seek Therapy", slug: "when-to-seek-therapy" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              K Malone Therapy
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div
              ref={dropdownRef}
              className="relative"
            >
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="text-base font-medium text-gray-700 hover:text-blue-900 transition-colors flex items-center gap-1"
                aria-expanded={isResourcesOpen}
              >
                Resources
                <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {isResourcesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 py-2 z-50">
                  <Link
                    href="/resources"
                    className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-blue-50 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    All Articles
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  {blogPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/resources/${post.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {post.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact#schedule"
              className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-base font-medium text-white hover:bg-blue-800 transition-colors"
            >
              Schedule Appointment
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-blue-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="w-full text-left text-base font-medium text-gray-700 hover:text-blue-900 flex items-center justify-between"
                >
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {isResourcesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/resources"
                      className="block text-sm font-semibold text-gray-900 hover:text-blue-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Articles
                    </Link>
                    {blogPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/resources/${post.slug}`}
                        className="block text-sm text-gray-700 hover:text-blue-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {post.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact#schedule"
                className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-base font-medium text-white hover:bg-blue-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
*/
