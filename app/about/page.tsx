import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - K Malone Therapy",
  description: "Learn about Katherine Malone, LCSW, and her approach to therapy",
};

export default function AboutPage() {
  // TODO: Replace with data from Contentful
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Katherine Malone, LCSW
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Compassionate, evidence-based therapy for healing and growth
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-lg sticky top-24">
                {/* Placeholder for therapist photo from Contentful */}
                <div className="flex items-center justify-center h-full text-gray-400 text-sm p-4 text-center">
                  Professional photo will be loaded from Contentful
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Thank you for taking the time to learn more about me and my practice.
                    I'm Katherine Malone, a Licensed Clinical Social Worker dedicated to
                    providing compassionate, evidence-based mental health care.
                  </p>
                  <p>
                    I believe that seeking therapy is an act of courage, and I'm honored
                    to support individuals on their journey toward healing and personal growth.
                    My approach is collaborative, trauma-informed, and tailored to meet each
                    client's unique needs and goals.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Background
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    With extensive training and experience in clinical social work, I specialize
                    in working with adults facing a range of challenges including anxiety, depression,
                    trauma, and major life transitions.
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
                    <span>Licensed Clinical Social Worker (LCSW)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Trauma-Informed Care Specialist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Master of Social Work (MSW)</span>
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
                    I integrate various therapeutic modalities to create a personalized treatment
                    approach for each client. My work is grounded in cognitive-behavioral therapy (CBT),
                    mindfulness-based interventions, and trauma-informed practices.
                  </p>
                  <p>
                    I strive to create a warm, non-judgmental space where you can feel safe to
                    explore your thoughts, emotions, and experiences. Together, we'll work toward
                    your goals at a pace that feels comfortable for you.
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
