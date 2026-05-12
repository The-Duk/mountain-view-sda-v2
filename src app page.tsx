import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { Heart, Users, BookOpen, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home',
};

const serviceTimes = [
  { title: 'Sabbath School', time: '9:00 AM', icon: BookOpen },
  { title: 'Lesson Discussion', time: '9:30 AM', icon: Users },
  { title: 'Song Service', time: '10:30 AM', icon: Heart },
  { title: 'Divine Hour', time: '11:00 AM', icon: Clock },
  { title: 'Bible Study', time: '2:00 PM', icon: BookOpen },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center">About Us</h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded bg-sda-green" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <BookOpen className="h-8 w-8 text-sda-green" />
              </div>
              <h3 className="mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To share the Advent message to all the world, with the love of Christ,
                and prepare people for His soon return.
              </p>
            </div>

            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Heart className="h-8 w-8 text-sda-green" />
              </div>
              <h3 className="mb-2">Our Community</h3>
              <p className="text-gray-600">
                A welcoming family where everyone belongs and grows in faith.
              </p>
            </div>

            <div className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Users className="h-8 w-8 text-sda-green" />
              </div>
              <h3 className="mb-2">Our Belief</h3>
              <p className="text-gray-600">
                We believe in the Bible as the Word of God and Jesus as our Saviour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center">Service Times</h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded bg-sda-green" />

          <div className="mx-auto max-w-2xl">
            {serviceTimes.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <service.icon className="h-6 w-6 text-sda-green" />
                  <span className="text-lg font-medium">{service.title}</span>
                </div>
                <span className="text-lg font-semibold text-sda-green">
                  {service.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Join us this Sabbath and experience the love of Christ in community.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
