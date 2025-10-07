import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources - Kathryn Malone Therapy",
  description: "Helpful articles and resources about mental health, therapy, and wellness",
};

export default function ResourcesPage() {
  // TODO: Replace with data from Contentful
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Anxiety: Symptoms, Causes, and Treatment Options",
      shortTitle: "Understanding Anxiety",
      slug: "understanding-anxiety",
      excerpt: "Learn about the different types of anxiety disorders, common symptoms, and evidence-based treatment approaches that can help.",
      publishedDate: "2024-03-15",
      category: "Anxiety",
      tags: ["anxiety", "mental health", "treatment"],
    },
    {
      id: 2,
      title: "The Benefits of Trauma-Informed Therapy",
      shortTitle: "Trauma-Informed Therapy",
      slug: "trauma-informed-therapy",
      excerpt: "Discover how trauma-informed care creates a safe, supportive environment for healing and recovery.",
      publishedDate: "2024-03-10",
      category: "Trauma",
      tags: ["trauma", "therapy", "healing"],
    },
    {
      id: 3,
      title: "5 Mindfulness Techniques for Managing Stress",
      shortTitle: "Mindfulness Techniques",
      slug: "mindfulness-techniques",
      excerpt: "Simple, practical mindfulness exercises you can use daily to reduce stress and improve emotional well-being.",
      publishedDate: "2024-03-05",
      category: "Wellness",
      tags: ["mindfulness", "stress", "self-care"],
    },
    {
      id: 4,
      title: "When to Seek Therapy: Signs It's Time to Get Help",
      shortTitle: "When to Seek Therapy",
      slug: "when-to-seek-therapy",
      excerpt: "Explore common signs that indicate it might be time to reach out to a mental health professional.",
      publishedDate: "2024-02-28",
      category: "Therapy",
      tags: ["therapy", "mental health", "self-care"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Resources & Articles
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Insights and information about mental health, therapy, and wellness
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          {post.category}
                        </span>
                        <time className="text-sm text-gray-500">
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <Link href={`/resources/${post.slug}`} className="group">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-base text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <span className="text-blue-900 font-semibold hover:text-blue-800 inline-flex items-center gap-2">
                          Read article
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </Link>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Have Questions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              I'm here to help you navigate your mental health journey
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
