import Image from "next/image";
import { contentfulClient } from "@/lib/contentful";
import type { TherapistProfileSkeleton, SiteSettingsSkeleton } from "@/types/contentful";
import type { Entry } from "contentful";

async function getTherapistProfile(): Promise<Entry<TherapistProfileSkeleton>> {
  const entries = await contentfulClient.getEntries<TherapistProfileSkeleton>({
    content_type: "therapistProfile",
    limit: 1,
  });

  const profile = entries.items[0];

  if (!profile) {
    throw new Error(
      "Therapist profile not found in Contentful. Please create a therapistProfile entry before building."
    );
  }

  return profile;
}

async function getSiteSettings() {
  const entries = await contentfulClient.getEntries<SiteSettingsSkeleton>({
    content_type: "siteSettings",
    limit: 1,
  });
  return entries.items[0];
}

export default async function Home() {
  const [therapistProfile, siteSettings] = await Promise.all([
    getTherapistProfile(),
    getSiteSettings(),
  ]);

  // Access profile photo
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profilePhoto = therapistProfile.fields.profilePhoto as any;
  const profilePhotoUrl = profilePhoto?.fields?.file?.url;
  const profilePhotoDescription = profilePhoto?.fields?.description;

  // Therapist info - type assertions needed due to Contentful SDK type inference
  const therapistName = therapistProfile.fields.name as unknown as string;
  const therapistTitle = therapistProfile.fields.title as unknown as string;
  const therapistBio = therapistProfile.fields.bio as unknown as string;
  const therapistCredentials = therapistProfile.fields.credentials as unknown as string[];
  const therapistEmail = therapistProfile.fields.email as unknown as string | undefined;
  const therapistPhone = therapistProfile.fields.phone as unknown as string | undefined;

  // Site settings
  const schedulingMessage = (siteSettings?.fields.schedulingMessage as unknown as string) || "Online scheduling coming soon!";

  return (
    <div>
      {/* About Section */}
      <section className="relative bg-gradient-to-br from-[#E8D5CF]/40 to-[#E8EDE3]/60 py-20 md:py-28 overflow-hidden">
        {/* Decorative botanical element - top right */}
        <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
          <svg className="w-32 h-32 text-[#7D8B6E]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,10 Q70,30 60,50 Q50,70 30,60 Q10,50 30,30 Q50,10 50,10 Z M50,10 Q30,30 40,50 Q50,70 70,60 Q90,50 70,30 Q50,10 50,10 Z"/>
          </svg>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with photo and name */}
          <div className="text-center mb-12 animate-fade-in-up">
            {profilePhotoUrl && (
              <div className="mb-8 relative inline-block">
                {/* Decorative ring behind photo */}
                <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-br from-[#E8D5CF] to-[#E8EDE3] opacity-60"></div>
                <Image
                  src={`https:${profilePhotoUrl}`}
                  alt={profilePhotoDescription || `${therapistName} - Professional headshot`}
                  width={200}
                  height={200}
                  className="rounded-full relative shadow-soft-lg object-cover ring-4 ring-white/80"
                  priority
                />
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              {therapistName}
            </h1>
            <p className="text-xl md:text-2xl text-[#A34838] font-medium">
              {therapistTitle}
            </p>
            {therapistCredentials && therapistCredentials.length > 0 && (
              <p className="text-[#5C6B4D] mt-2 text-lg">
                {therapistCredentials.join(" · ")}
              </p>
            )}
          </div>

          {/* Bio Content */}
          <div className="mx-auto max-w-2xl text-gray-700 animate-fade-in-up animate-delay-200">
            {therapistBio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-lg md:text-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-white scroll-mt-20 texture-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-10 animate-fade-in-up animate-delay-100">
              I'd love to hear from you
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 animate-fade-in-up animate-delay-200">
              {therapistEmail && (
                <a
                  href={`mailto:${therapistEmail}`}
                  className="flex items-center gap-4 text-gray-700 hover:text-[#A34838] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8EDE3] to-[#E8EDE3]/60 flex items-center justify-center group-hover:from-[#E8D5CF] group-hover:to-[#E8D5CF]/60 transition-all duration-300 shadow-soft group-hover:shadow-soft-lg group-hover:scale-105">
                    <svg className="h-6 w-6 text-[#5C6B4D] group-hover:text-[#A34838] transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">{therapistEmail}</span>
                </a>
              )}
              {therapistPhone && (
                <a
                  href={`tel:${therapistPhone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-4 text-gray-700 hover:text-[#A34838] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8EDE3] to-[#E8EDE3]/60 flex items-center justify-center group-hover:from-[#E8D5CF] group-hover:to-[#E8D5CF]/60 transition-all duration-300 shadow-soft group-hover:shadow-soft-lg group-hover:scale-105">
                    <svg className="h-6 w-6 text-[#5C6B4D] group-hover:text-[#A34838] transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">{therapistPhone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#E8EDE3]/30 to-[#E8EDE3]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center animate-fade-in-up">
              Office Location
            </h2>
            <p className="text-gray-600 mb-12 text-center animate-fade-in-up animate-delay-100">
              Conveniently located in Austin
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in-up animate-delay-200">
              {/* Address */}
              <div className="text-center md:text-left">
                <div className="flex items-start justify-center md:justify-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C45B4C] to-[#A34838] flex items-center justify-center shadow-soft">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">5511 Parkcrest Dr</p>
                    <p className="text-lg text-gray-600">Austin, TX 78731</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=5511+Parkcrest+Dr,+Austin,+TX+78731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#5C6B4D] hover:text-[#A34838] transition-all duration-300 font-medium group"
                >
                  Get Directions
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-soft-lg ring-1 ring-black/5">
                <iframe
                  src="https://maps.google.com/maps?q=5511+Parkcrest+Dr,+Austin,+TX+78731&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Coming Soon Section */}
      <section className="relative bg-gradient-to-br from-[#5C6B4D] to-[#4a5940] pt-24 pb-20 overflow-hidden">
        {/* Wave divider at top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,0 L0,0 Z" fill="#E8EDE3" fillOpacity="0.3"/>
          </svg>
        </div>

        {/* Decorative botanical element */}
        <div className="absolute bottom-8 left-8 opacity-10 pointer-events-none">
          <svg className="w-24 h-24 text-white" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,90 Q30,70 40,50 Q50,30 70,40 Q90,50 70,70 Q50,90 50,90 Z"/>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Schedule an Appointment
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {schedulingMessage}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* COMMENTED OUT - Original multi-section homepage
import Link from "next/link";
import Image from "next/image";
import { contentfulClient } from "@/lib/contentful";
import type { TherapistProfileSkeleton } from "@/types/contentful";
import type { Entry } from "contentful";

async function getTherapistProfile(): Promise<Entry<TherapistProfileSkeleton>> {
  const entries = await contentfulClient.getEntries<TherapistProfileSkeleton>({
    content_type: "therapistProfile",
    limit: 1,
  });

  const profile = entries.items[0];

  if (!profile) {
    throw new Error(
      "Therapist profile not found in Contentful. Please create a therapistProfile entry before building."
    );
  }

  // Validate profile photo exists
  if (!profile.fields.profilePhoto) {
    throw new Error(
      "Profile photo is required. Please add a profilePhoto to the therapistProfile entry in Contentful."
    );
  }

  return profile;
}

export default async function Home() {
  const therapistProfile = await getTherapistProfile();

  // Access profile photo - type assertion needed due to Contentful SDK limitations
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profilePhoto = therapistProfile.fields.profilePhoto as any;
  const profilePhotoUrl = profilePhoto?.fields?.file?.url;
  const profilePhotoDescription = profilePhoto?.fields?.description;
  const therapistName = therapistProfile.fields.name;

  // Additional runtime validation
  if (!profilePhotoUrl) {
    throw new Error(
      "Profile photo URL not found. Please ensure the asset is properly uploaded and published in Contentful."
    );
  }

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
                <Image
                  src={`https:${profilePhotoUrl}`}
                  alt={profilePhotoDescription || `${therapistName} - Professional headshot`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
*/
