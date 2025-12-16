import { redirect } from "next/navigation";

export default function ServicesPage() {
  redirect("/");
}

/* COMMENTED OUT - Original services page with full service listings
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Kathryn Malone Therapy",
  description: "Holistic therapy services for kids, teens, adults, couples, and LGBTQ+ individuals. Supporting anxiety, depression, trauma, life transitions, and more.",
};

export default function ServicesPage() {
  // TODO: Replace with data from Contentful
  const services = [
    {
      id: 1,
      name: "Individual Therapy",
      slug: "individual-therapy",
      description: "Support for kids, teens, and adults navigating life's challenges",
      detailedDescription: `Individual therapy provides a safe, confidential space to explore your thoughts,
        feelings, and experiences. Using a holistic approach that honors mind, body, and soul, we'll work
        together to address anxiety, depression, self-esteem, life transitions, and personal growth.`,
      duration: "50 minutes",
      price: "$150 per session",
      icon: "👤",
    },
    {
      id: 2,
      name: "Couples & Relationship Therapy",
      slug: "couples-therapy",
      description: "Support for couples and non-monogamous relationships",
      detailedDescription: `I work with couples and non-monogamous relationships to strengthen connections,
        improve communication, and navigate challenges together. Whether you're facing conflict, trust issues,
        or simply want to deepen your connection, therapy can help you build healthier relationship dynamics.`,
      duration: "50 minutes",
      price: "$150 per session",
      icon: "💞",
    },
    // ... more services
  ];

  return (
    <div className="bg-white">
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
                      <span>{service.duration}</span>
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
*/
