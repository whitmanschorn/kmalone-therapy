import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - K Malone Therapy",
  description: "Comprehensive therapy services including individual therapy, trauma therapy, anxiety and depression treatment, and more",
};

export default function ServicesPage() {
  // TODO: Replace with data from Contentful
  const services = [
    {
      id: 1,
      name: "Individual Therapy",
      slug: "individual-therapy",
      description: "One-on-one therapeutic sessions tailored to your unique needs and goals",
      detailedDescription: `Individual therapy provides a safe, confidential space to explore your thoughts,
        feelings, and behaviors. We'll work together to identify patterns, develop coping strategies,
        and create meaningful change in your life. Sessions are tailored to your specific needs and goals.`,
      duration: "50 minutes",
      price: "$150 per session",
      icon: "👤",
    },
    {
      id: 2,
      name: "Trauma Therapy",
      slug: "trauma-therapy",
      description: "Evidence-based approaches to healing from traumatic experiences",
      detailedDescription: `Using trauma-informed, evidence-based approaches, I help clients process and
        heal from traumatic experiences. We'll work at your pace to address the impact of trauma while
        building resilience and reclaiming your sense of safety and empowerment.`,
      duration: "50 minutes",
      price: "$150 per session",
      icon: "🌱",
    },
    {
      id: 3,
      name: "Anxiety & Depression Treatment",
      slug: "anxiety-depression",
      description: "Support for managing anxiety, depression, and mood-related challenges",
      detailedDescription: `Whether you're experiencing persistent worry, panic attacks, low mood, or loss
        of interest in activities, I can help. Using evidence-based approaches like CBT and mindfulness,
        we'll develop strategies to manage symptoms and improve your quality of life.`,
      duration: "50 minutes",
      price: "$150 per session",
      icon: "💙",
    },
    {
      id: 4,
      name: "Life Transitions",
      slug: "life-transitions",
      description: "Navigate major life changes with guidance and support",
      detailedDescription: `Major life changes—career shifts, relationship changes, loss, or identity
        transitions—can be overwhelming. Therapy can provide support and guidance as you navigate these
        changes, helping you find clarity and build resilience during times of uncertainty.`,
      duration: "50 minutes",
      price: "$150 per session",
      icon: "🌟",
    },
    {
      id: 5,
      name: "Stress Management",
      slug: "stress-management",
      description: "Develop healthy coping strategies for managing stress",
      detailedDescription: `Learn practical skills and techniques to manage stress effectively. We'll explore
        mindfulness, relaxation techniques, boundary-setting, and time management strategies to help you
        create a more balanced, sustainable lifestyle.`,
      duration: "50 minutes",
      price: "$150 per session",
      icon: "🧘",
    },
    {
      id: 6,
      name: "Relationship Issues",
      slug: "relationship-issues",
      description: "Work through challenges in personal and professional relationships",
      detailedDescription: `Explore patterns in your relationships, improve communication skills, and develop
        healthier relationship dynamics. Whether you're dealing with family conflict, friendship challenges,
        or workplace relationships, therapy can help you build stronger connections.`,
      duration: "50 minutes",
      price: "$150 per session",
      icon: "💞",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Therapy Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Comprehensive, evidence-based therapy tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-base text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      {service.detailedDescription}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {service.duration}
                      </span>
                      <span>•</span>
                      <span>{service.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              What to Expect
            </h2>
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">First Session</h3>
                <p>
                  Your first session is an opportunity for us to get to know each other. We'll
                  discuss what brings you to therapy, your goals, and any questions you may have.
                  This is also a chance for you to determine if we're a good fit.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Sessions</h3>
                <p>
                  Regular therapy sessions typically occur weekly, though frequency can be adjusted
                  based on your needs and goals. Each session builds on the previous one as we work
                  together toward your therapeutic goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Insurance & Payment</h3>
                <p>
                  I accept various insurance plans and also offer self-pay options. Please contact
                  me to discuss payment options and verify your insurance coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Schedule a free consultation to discuss how therapy can support your goals
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact#schedule"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold text-white hover:text-blue-100 transition-colors"
              >
                Contact me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
