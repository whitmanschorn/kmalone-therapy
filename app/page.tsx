import Link from "next/link";
import Image from "next/image";
import { contentfulClient } from "@/lib/contentful";
import type { TherapistProfile } from "@/types/contentful";

async function getTherapistProfile() {
  const entries = await contentfulClient.getEntries<TherapistProfile>({
    content_type: "therapistProfile",
    limit: 1,
  });
  return entries.items[0] || null;
}

export default async function Home() {
  const therapistProfile = await getTherapistProfile();

  // TODO: Replace with data from Contentful
  const services = [
    {
      id: 1,
      name: "Individual Therapy",
      description: "One-on-one sessions tailored to your unique needs and goals",
      icon: "👤",
    },
    {
      id: 2,
      name: "Trauma Therapy",
      description: "Evidence-based approaches to healing from traumatic experiences",
      icon: "🌱",
    },
    {
      id: 3,
      name: "Anxiety & Depression",
      description: "Support for managing anxiety, depression, and mood challenges",
      icon: "💙",
    },
    {
      id: 4,
      name: "Life Transitions",
      description: "Navigate major life changes with guidance and support",
      icon: "🌟",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Welcome to{" "}
                <span className="text-blue-900">K Malone Therapy</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                A safe, compassionate space for healing and growth. I provide
                evidence-based therapy to help you navigate life's challenges
                and build resilience.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contact#schedule"
                  className="rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/about"
                  className="text-base font-semibold leading-7 text-gray-900 hover:text-blue-900 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-xl overflow-hidden">
                {therapistProfile?.fields.profilePhoto?.fields.file?.url && (
                  <Image
                    src={`https:${therapistProfile.fields.profilePhoto.fields.file.url}`}
                    alt={
                      therapistProfile.fields.profilePhoto.fields.description ||
                      therapistProfile.fields.name
                    }
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              You Don't Have to Navigate This Alone
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're dealing with anxiety, depression, trauma, or life
              transitions, therapy can help. I offer a supportive, non-judgmental
              environment where you can explore your thoughts, feelings, and
              experiences at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Therapy Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Specialized support tailored to your needs
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-base font-semibold leading-7 text-blue-900 hover:text-blue-800"
            >
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Take the First Step?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Starting therapy is a courageous decision. I'm here to support you
              on your journey toward healing and growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact#schedule"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50 transition-colors"
              >
                Schedule Appointment
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold leading-7 text-white hover:text-blue-100 transition-colors"
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
