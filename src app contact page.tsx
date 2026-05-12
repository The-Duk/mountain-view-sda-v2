import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Mountain View SDA Church Kantafu. Send us a message, find our location, or reach out by phone or email.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sda-green py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-lg text-green-100">
            We would love to hear from you. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100">
                    <Mail className="h-6 w-6 text-sda-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:mountainviewchurch1844@gmail.com"
                      className="text-gray-600 hover:text-sda-green"
                    >
                      mountainviewchurch1844@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100">
                    <Phone className="h-6 w-6 text-sda-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+254 722 377293</p>
                    <p className="text-gray-600">+254 706 450705</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100">
                    <MapPin className="h-6 w-6 text-sda-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Kantafu, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
