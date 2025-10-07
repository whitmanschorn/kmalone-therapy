import type { Metadata } from "next";
import Image from "next/image";
import { contentfulClient } from "@/lib/contentful";
import type { TherapistProfileSkeleton } from "@/types/contentful";
import type { Entry } from "contentful";

export const metadata: Metadata = {
  title: "About - Kathryn Malone Therapy",
  description: "Learn about Kathryn Malone, LPC, and her holistic approach to therapy",
};

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

export default async function AboutPage() {
  const therapistProfile = await getTherapistProfile();

  // Access profile photo - type assertion needed due to Contentful SDK limitations
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profilePhoto = therapistProfile.fields.profilePhoto as any;
  const profilePhotoUrl = profilePhoto?.fields?.file?.url;
  const profilePhotoDescription = profilePhoto?.fields?.description;
  const therapistName = therapistProfile.fields.name;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Kathryn Malone, LPC
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              A holistic approach to healing, honoring mind, body, and soul
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo Column */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-lg sticky top-24 overflow-hidden">
                {profilePhotoUrl ? (
                  <Image
                    src={`https:${profilePhotoUrl}`}
                    alt={profilePhotoDescription || `${therapistName} - Professional headshot`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm p-4 text-center">
                    Professional photo will be loaded from Contentful
                  </div>
                )}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  My Philosophy
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    I believe that every person is inherently worthy, has a valuable mission, and
                    deserves to be seen and understood in the uniqueness of one's life story. Therapy
                    provides a space of safety and unconditional acceptance which allows a person to
                    show up fully, more able to explore one's vulnerabilities and the deepest parts
                    of oneself.
                  </p>
                  <p>
                    I believe it is through relationships that we come to know ourselves and learn
                    how to strengthen our connections with those we love.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Background
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Upon discovering my love for Psychology, Neuroscience and Mental Health advocacy
                    while at Oberlin College, I later went on to earn my Master's in Counseling at
                    Texas State in 2022.
                  </p>
                  <p>
                    I work with kids, teens, adults, couples, non-monogamous relationships, LGBTQ+
                    individuals, and parents. I have experience supporting clients through anxiety,
                    depression, gender identity and expression, grief and loss, life transitions,
                    marriage and family issues, PTSD and trauma, self-esteem, self-harm, and
                    substance use.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Credentials & Training
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Licensed Professional Counselor (LPC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Master's in Counseling, Texas State University (2022)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>B.A. in Psychology & Neuroscience, Oberlin College</span>
                  </li>
                  {/* More credentials will be loaded from Contentful */}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  My Approach
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    I come to therapy with a holistic approach that centers the balance of mind, body,
                    and soul. I enjoy bringing in my wide variety of interests in different healing
                    modalities, from spiritual perspectives, to mindfulness- and somatic-based practices
                    such as meditation, movement and dance, along with expressive arts, sound and music
                    healing, and tea ceremony.
                  </p>
                  <p>
                    I look forward to being your companion as we walk along this beautiful, hard, and
                    often messy path of healing and discovery.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Ready to get started?
                </h3>
                <p className="text-gray-600 mb-4">
                  I offer a free 15-minute consultation to discuss your needs and answer any questions.
                </p>
                <a
                  href="/contact#schedule"
                  className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-base font-medium text-white hover:bg-blue-800 transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
