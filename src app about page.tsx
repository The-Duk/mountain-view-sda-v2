import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Mountain View SDA Church Kantafu - our mission, vision, ministries, and 28 fundamental beliefs.',
};

const ministries = [
  {
    name: 'Adventurers',
    description:
      'A ministry for children aged 4–9 designed to strengthen parent-child relationships and help young children grow in Jesus through fun activities, Bible stories, and service.',
  },
  {
    name: 'Pathfinders',
    description:
      'A worldwide program for youth aged 10–15 that focuses on spiritual growth, leadership skills, camping, community service, and character building.',
  },
  {
    name: 'Ambassadors',
    description:
      'A ministry for young people aged 16–21 that encourages leadership, discipleship, and active involvement in church and community life.',
  },
  {
    name: 'Youth Ministry (AY)',
    description:
      'Adventist Youth Ministry nurtures the spiritual growth of young people through Bible study, fellowship, outreach, and leadership opportunities.',
  },
  {
    name: 'AMM (Adventist Men\'s Ministry)',
    description:
      'Focuses on mentoring men to become spiritual leaders in their families, church, and society.',
  },
  {
    name: 'AWM (Adventist Women\'s Ministry)',
    description:
      'Empowers women to grow spiritually, support one another, and serve the church and community.',
  },
];

const fundamentalBeliefs = [
  'The Holy Scriptures',
  'The Trinity',
  'The Father',
  'The Son',
  'The Holy Spirit',
  'Creation',
  'The Nature of Humanity',
  'The Great Controversy',
  'The Life, Death, and Resurrection of Christ',
  'The Experience of Salvation',
  'Growing in Christ',
  'The Church',
  'The Remnant and Its Mission',
  'Unity in the Body of Christ',
  'Baptism',
  'The Lord\'s Supper',
  'Spiritual Gifts and Ministries',
  'The Gift of Prophecy',
  'The Law of God',
  'The Sabbath',
  'Stewardship',
  'Christian Behavior',
  'Marriage and the Family',
  'Christ\'s Ministry in the Heavenly Sanctuary',
  'The Second Coming of Christ',
  'Death and Resurrection',
  'The Millennium and the End of Sin',
  'The New Earth',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sda-green py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4">Who We Are</h1>
          <p className="mx-auto max-w-3xl text-lg text-green-100">
            Mountain View SDA Church Kantafu is a Seventh-day Adventist congregation
            committed to spreading the Gospel of Jesus Christ, nurturing spiritual
            growth, and serving the community with love and compassion.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="card">
              <h2 className="mb-4 text-sda-green">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To make disciples of Jesus Christ who live as His loving witnesses,
                sharing the everlasting gospel with our community and beyond.
              </p>
            </div>
            <div className="card">
              <h2 className="mb-4 text-sda-green">Our Vision</h2>
              <p className="text-lg text-gray-600">
                A Christ-centered community transformed by God&apos;s love, growing in
                faith and preparing for the soon return of Jesus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center">SDA Ministries & Classes</h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded bg-sda-green" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry) => (
              <div key={ministry.name} className="card">
                <h3 className="mb-2 text-sda-green">{ministry.name}</h3>
                <p className="text-gray-600">{ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 28 Fundamental Beliefs */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center">28 Fundamental Beliefs</h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded bg-sda-green" />

          <div className="mx-auto max-w-3xl">
            <ol className="grid gap-2 sm:grid-cols-2">
              {fundamentalBeliefs.map((belief, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sda-green text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{belief}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
