import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - K Malone Therapy",
  description: "Get in touch to schedule a consultation or ask questions about therapy services",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Ready to take the first step? I'm here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:555-123-4567" className="hover:text-blue-900 transition-colors">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@kmalonetherapy.com" className="hover:text-blue-900 transition-colors">
                        contact@kmalonetherapy.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office Location</h3>
                    <p className="text-gray-600">
                      123 Main Street, Suite 200<br />
                      Your City, ST 12345
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Telehealth sessions also available
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Saturday - Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div>
              <div id="schedule" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Schedule an Appointment
                </h2>
                <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
                  <div className="text-center mb-6">
                    <svg className="mx-auto h-12 w-12 text-blue-900 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Book Your Free Consultation
                    </h3>
                    <p className="text-gray-600">
                      Start with a complimentary 15-minute consultation to discuss your needs
                      and see if we're a good fit.
                    </p>
                  </div>

                  {/* Placeholder for Google Calendar scheduling */}
                  <div className="bg-white rounded-lg p-6 text-center">
                    <p className="text-gray-600 mb-4">
                      Click below to view available appointment times:
                    </p>
                    <a
                      href="https://calendar.google.com/calendar/appointments/schedules/placeholder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                      </svg>
                      View Available Times
                    </a>
                    <p className="text-sm text-gray-500 mt-4">
                      Or call (555) 123-4567 to schedule by phone
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-sm font-semibold">
                      1
                    </span>
                    <span>Schedule your free 15-minute consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-sm font-semibold">
                      2
                    </span>
                    <span>We'll discuss your needs and answer your questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-sm font-semibold">
                      3
                    </span>
                    <span>If we're a good fit, we'll schedule your first session</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-12 bg-red-50 border-t border-red-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              In Case of Emergency
            </h2>
            <p className="text-red-800 mb-6">
              If you are experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline)
              or go to your nearest emergency room. For immediate danger, call 911.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:988" className="text-red-900 font-semibold hover:text-red-700">
                988 - Crisis Lifeline
              </a>
              <span className="text-red-300">|</span>
              <a href="tel:911" className="text-red-900 font-semibold hover:text-red-700">
                911 - Emergency Services
              </a>
              <span className="text-red-300">|</span>
              <a href="sms:741741" className="text-red-900 font-semibold hover:text-red-700">
                Text HOME to 741741 - Crisis Text Line
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
