import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog posts data - will be replaced with Contentful
const blogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety: Symptoms, Causes, and Treatment Options",
    shortTitle: "Understanding Anxiety",
    slug: "understanding-anxiety",
    excerpt: "Learn about the different types of anxiety disorders, common symptoms, and evidence-based treatment approaches that can help.",
    content: `
# Understanding Anxiety

Anxiety is one of the most common mental health challenges, affecting millions of people worldwide. While it's normal to feel anxious from time to time, persistent anxiety that interferes with daily life may indicate an anxiety disorder.

## Types of Anxiety Disorders

There are several types of anxiety disorders, including:

- **Generalized Anxiety Disorder (GAD)**: Chronic worry about everyday events
- **Social Anxiety Disorder**: Intense fear of social situations
- **Panic Disorder**: Recurring panic attacks
- **Specific Phobias**: Intense fear of specific objects or situations

## Common Symptoms

Anxiety can manifest in various ways, including:

- Persistent worry or fear
- Restlessness or feeling on edge
- Difficulty concentrating
- Sleep disturbances
- Physical symptoms (rapid heartbeat, sweating, trembling)

## Treatment Options

The good news is that anxiety disorders are highly treatable. Evidence-based treatments include:

### Cognitive Behavioral Therapy (CBT)
CBT helps identify and change negative thought patterns that contribute to anxiety.

### Mindfulness-Based Approaches
Mindfulness techniques can help manage anxiety symptoms and reduce stress.

### Medication
In some cases, medication may be recommended as part of a comprehensive treatment plan.

## When to Seek Help

If anxiety is interfering with your work, relationships, or quality of life, it's time to reach out to a mental health professional. You don't have to manage anxiety alone—help is available.
    `,
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
    content: `
# The Benefits of Trauma-Informed Therapy

Trauma-informed therapy is an approach that recognizes the widespread impact of trauma and creates a safe, supportive environment for healing.

## What is Trauma-Informed Care?

Trauma-informed care is based on the understanding that traumatic experiences can profoundly affect a person's mental, emotional, and physical well-being. This approach prioritizes:

- Safety and trust
- Collaboration and mutuality
- Empowerment and choice
- Cultural sensitivity

## Key Benefits

### Creates a Safe Space
Trauma-informed therapy prioritizes creating an environment where you feel physically and emotionally safe.

### Honors Your Experience
Your experiences are validated, and your reactions to trauma are understood as adaptive responses.

### Empowers You
You remain in control of your healing journey, with the therapist supporting rather than directing.

### Addresses the Whole Person
Trauma affects multiple aspects of life, and trauma-informed care addresses your complete experience.

## The Healing Process

Healing from trauma is not linear. It involves:

1. Establishing safety and stability
2. Processing traumatic memories
3. Reconnecting with yourself and others
4. Building resilience

If you've experienced trauma, trauma-informed therapy can provide the support you need to heal and move forward.
    `,
    publishedDate: "2024-03-10",
    category: "Trauma",
    tags: ["trauma", "therapy", "healing"],
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // For static export, we need to define all possible slug values
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} - Kathryn Malone Therapy`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-900 hover:text-blue-800 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Resources
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-md bg-blue-900 bg-opacity-10 px-2 py-1 text-xs font-medium text-blue-900 ring-1 ring-inset ring-blue-900/20">
              {post.category}
            </span>
            <time className="text-sm text-gray-600">
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            {post.content.split('\n').map((line, index) => {
              // Simple markdown rendering - in production, use a proper markdown parser
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{line.slice(2)}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">{line.slice(3)}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-5 mb-2">{line.slice(4)}</h3>;
              } else if (line.startsWith('- **')) {
                const match = line.match(/- \*\*([^*]+)\*\*: (.+)/);
                if (match) {
                  return (
                    <li key={index} className="ml-4">
                      <strong>{match[1]}</strong>: {match[2]}
                    </li>
                  );
                }
              } else if (line.startsWith('- ')) {
                return <li key={index} className="ml-4">{line.slice(2)}</li>;
              } else if (line.trim() === '') {
                return <br key={index} />;
              } else if (!line.startsWith('#')) {
                return <p key={index} className="mb-4">{line}</p>;
              }
              return null;
            })}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-blue-50 border-t border-blue-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a free consultation to discuss how therapy can support your goals
          </p>
          <Link
            href="/contact#schedule"
            className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
