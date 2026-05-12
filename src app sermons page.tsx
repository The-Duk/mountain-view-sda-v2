import type { Metadata } from 'next';
import { Youtube, Facebook, Music2, Instagram, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sermons',
  description:
    'Watch and listen to sermons from Mountain View SDA Church Kantafu on YouTube, Facebook, TikTok, Instagram, and Telegram.',
};

const platforms = [
  {
    name: 'YouTube',
    description: 'Watch full sermons, Bible studies, and worship services.',
    url: 'https://youtube.com',
    icon: Youtube,
    color: 'bg-red-600 hover:bg-red-700',
  },
  {
    name: 'Facebook',
    description: 'Follow our page for live streams and sermon updates.',
    url: 'https://www.facebook.com',
    icon: Facebook,
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'TikTok',
    description: 'Watch short inspirational sermon clips and messages.',
    url: 'https://www.tiktok.com',
    icon: Music2,
    color: 'bg-black hover:bg-gray-900',
  },
  {
    name: 'Instagram',
    description: 'See highlights, reels, and sermon moments.',
    url: 'https://www.instagram.com',
    icon: Instagram,
    color: 'bg-pink-600 hover:bg-pink-700',
  },
  {
    name: 'Telegram',
    description: 'Join our channel to receive sermons directly.',
    url: 'https://t.me',
    icon: Send,
    color: 'bg-sky-500 hover:bg-sky-600',
  },
];

export default function SermonsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sda-green py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4">Experience the Word of God</h1>
          <p className="mx-auto max-w-3xl text-lg text-green-100">
            Watch, listen, and grow spiritually through our sermons and teachings.
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center">Follow & Watch Our Sermons</h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded bg-sda-green" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block transition-all hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${platform.color}`}
                  >
                    <platform.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                </div>
                <p className="text-gray-600">{platform.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-sda-green group-hover:underline">
                  Visit {platform.name} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
