"use client";
import Link from "next/link";
import { useState } from "react";

export default function MyStory() {
  const [activeChapter] = useState(1);
  const [showFullTimeline, setShowFullTimeline] = useState(false);

  const chapters = [
    {
      id: 1,
      title: " The Foundation",
      year: "2009-2010",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      title: "EVOLUTION",
      year: "2016-2020",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "COLLABORATIONS",
      year: "2023",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 4,
      title: "MORE SINGLES",
      year: "2024",
      color: "from-azu-amber to-yellow-400",
    },
    {
      id: 5,
      title: "NOW",
      year: "2025",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            My Story
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            The journey of a dreamer who found their voice through music
          </p>

         

          {/* Timeline Toggle */}
          <button
            onClick={() => setShowFullTimeline(!showFullTimeline)}
            className="text-azu-amber hover:text-yellow-400 font-medium mb-8"
          >
            {showFullTimeline ? "Hide" : "Show"} Full Timeline
          </button>

          {/* Visual Timeline */}
          {showFullTimeline && (
            <div className="bg-gray-800 rounded-lg p-6 mb-12">
              <div className="flex justify-between items-center overflow-x-auto">
                {chapters.map((chapter, index) => (
                  <div
                    key={chapter.id}
                    className="flex flex-col items-center min-w-0 flex-1"
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${chapter.color} mb-2`}
                    ></div>
                    <div className="text-xs text-gray-400 mb-1">
                      {chapter.year}
                    </div>
                    <div className="text-sm font-medium text-center">
                      {chapter.title}
                    </div>
                    {index < chapters.length - 1 && (
                      <div className="w-full h-px bg-gray-600 mt-4 hidden md:block"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Timeline with Interactive Chapters */}
        <div className="space-y-16">
          {/* Chapter 1: Early Years */}
          <div
            className={`relative transition-all duration-500 ${
              activeChapter === 1 ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  The Beginning
                </h2>
                <p className="text-gray-400 text-sm">
                  2009-2010 • The Foundation
                </p>
              </div>
            </div>
            <div className="ml-22 pl-6 border-l-2 border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  His earliest memories of falling in love with music stretch back to childhood, persistently asking his mother to bring home printed lyrics of Michael Jackson songs. But it was the daily Bajaj rides to primary school that solidified this passion. The driver’s music system would blast various tracks, and one particular day, he found himself captivated by Eminem’s &ldquo;I&apos;m Not Afraid.&rdquo; At just over 11 years old, he asked the driver to replay the song repeatedly, memorizing it fully within four days of constant listening during those 15-minute rides.
                  </p>
                </div>
                <div className="relative h-120 rounded-lg overflow-hidden">
                  <img
                    src="/azuyeye/IMG_4293.jpg"
                    alt="Early musical beginnings"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/60 to-purple-500/30"></div>

                </div>
              </div>

              {/* Key Moments */}
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-white mb-4">Key Moments:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">
                      First piano lesson at age 8
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">
                      Wrote first song at age 12
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">Joined school choir</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">
                      First public performance
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 italic text-gray-400 border-l-4 border-blue-500">
                &ldquo;Music became my language before I even knew I was speaking it.&rdquo;
              </div>
            </div>
          </div>

          {/* Chapter 2: Discovery */}
          <div
            className={`relative transition-all duration-500 ${
              activeChapter === 2 ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                    EVOLUTION
                </h2>
                <p className="text-gray-400 text-sm">
                  2016-2020 
                </p>
              </div>
            </div>
            <div className="ml-22 pl-6 border-l-2 border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Until 2020, Azu hadn’t fully accepted his own voice. For years, despite being confident in his songwriting and melodies, he preferred others to sing his parts. Back in 2016, during a secondary school break, he boldly told his father to give him three months to make it as a musician—a leap that didn’t happen, but it sharpened his skills in producing beats. By high school, his instrumentals were strong enough to attract interest, yet he often found himself unimpressed by how others performed on them. After moving to Chicago to work and study, he realized he couldn’t rely on finding artists to record his music. He dropped out of Harold Washington College to pursue his dream of music and, out of sheer faith, returned to Tanzania in August of 2021, a decision both bold and reckless in its conviction. From there, he continued to dedicate himself to learning to sing his own songs, gradually embracing his voice and refining his craft. Over hundreds of sessions, voice memos, and unreleased tracks, he evolved from creating good beats with weak vocals to delivering complete songs that prompted listeners to ask when they’d be released—marking a clear, hard-earned progression in his artistry.
                  </p>
                 
                </div>
                <div className="relative h-120 rounded-lg overflow-hidden">
                  <img
                    src="/azuyeye/DSC04354.jpg"
                    alt="Finding my voice in music"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t "></div>
                 
                </div>
              </div>

              {/* Skills Developed */}
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-white mb-4">
                  Skills Developed:
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      🎹
                    </div>
                    <span className="text-gray-300 text-sm">Piano Mastery</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      🎤
                    </div>
                    <span className="text-gray-300 text-sm">
                      Vocal Training
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      🎵
                    </div>
                    <span className="text-gray-300 text-sm">Songwriting</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="font-bold text-white mb-3">
                  First Breakthrough Moment:
                </h4>
                <p className="text-gray-300 italic">
                  &ldquo;The night I played &apos;Whispered Dreams&apos; at the local venue and
                  saw people in the audience crying— that's when I knew music
                  was more than just sound. It was connection.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3: The Struggle */}
          <div
            className={`relative transition-all duration-500 ${
              activeChapter === 3 ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                3
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  COLLABORATIONS
                </h2>
                <p className="text-gray-400 text-sm">2023 </p>
              </div>
            </div>
            <div className="ml-22 pl-6 border-l-2 border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  There’s a reason Azu always emphasizes that whatever happens to someone creates a line they must cross to move forward, and often, that line becomes thinner and thinner. In late 2021, Azu faced significant setbacks, losing nearly half of his resources due to unfortunate circumstances of being in the wrong place at the wrong time. It left him deeply heartbroken—he recalls mornings when he woke up desperately wishing it had all been just a bad dream. Yet, that difficult chapter soon gave way to a promising new beginning. During that period, Madebeats—a talented producer from Rwanda, in the midst of working on Diamond Platnumz’s record with The Ben titled “Why”—was in Azu’s orbit. Through sessions with Madebeats, doors opened, and Azu was introduced to Bruce Melody. This connection led to Azu flying out to Rwanda, where he had the incredible opportunity to collaborate with the acclaimed Bruce Melody. Azu went on to contribute to Bruce Melody’s 2025 album Colorful Generation, with standout songs including “Maya,” “Energy,” “Ulo,” and “Diva.”
                  </p>
                
                </div>
                <div className="relative h-120 rounded-lg overflow-hidden">
                  <img
                    src="/azuyeye/IMG_4304.jpg"
                    alt="The difficult years and struggles"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t "></div>
                  
                </div>
              </div>

              {/* Challenges Faced */}
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-white mb-4">
                  Challenges Overcome:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">
                      200+ rejection letters from labels
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">
                      Worked 3 part-time jobs to survive
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">
                      Played 500+ small venue gigs
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">
                      Slept on studio couches for months
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-red-500">
                <p className="text-gray-300 italic">
                  "The darkest period taught me that persistence isn't just
                  about not giving up— it's about finding new ways to believe in
                  yourself when no one else does."
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 4: The Breakthrough */}
          <div
            className={`relative transition-all duration-500 ${
              activeChapter === 4 ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-azu-amber to-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                4
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  WHERE IS THE JOURNEY NOW?
                </h2>
                <p className="text-gray-400 text-sm">
                  2025 
                </p>
              </div>
            </div>
            <div className="ml-22 pl-6 border-l-2 border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  In 2025, Azu continues to expand his musical versatility, effortlessly crossing genres—from heartfelt acoustic tracks like "Kisingizio," to catchy pop melodies such as "Like U," and rhythmic Afrobeat songs like "Jana." Singles are steadily dropping, further solidifying his presence following the momentum of last year's collaborative project "AXT," created alongside his long-time friend and fellow musician, Tridybane. Toward the end of last year, he delivered a memorable performance show, marking a milestone in his artistic journey. Currently, his creative process spans from crafting songs in the studio to designing cover art, animations, and engaging lyric videos featured prominently on his YouTube channel.
                </p>
  
                </div>
                <div className="relative h-120 rounded-lg overflow-hidden">
                  <img
                    src="/azuyeye/IMG_3035.jpg"
                    alt="The breakthrough moment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t"></div>
                  
                </div>
              </div>

              {/* Success Metrics */}
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-white mb-4">
                  Breakthrough Achievements:
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-azu-amber mb-2">
                      10M+
                    </div>
                    <div className="text-gray-300 text-sm">Total Streams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-azu-amber mb-2">
                      50+
                    </div>
                    <div className="text-gray-300 text-sm">
                      Countries Reached
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-azu-amber mb-2">
                      5
                    </div>
                    <div className="text-gray-300 text-sm">
                      Record Label Offers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-azu-amber mb-2">
                      100K+
                    </div>
                    <div className="text-gray-300 text-sm">New Followers</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-azu-amber to-yellow-400 rounded-lg p-6 text-black">
                <h4 className="font-bold mb-3">
                  The Moment Everything Changed:
                </h4>
                <p className="italic">
                  "When 'Midnight Echoes' hit 1 million streams, I wasn't
                  thinking about the numbers. I was thinking about the million
                  people who had chosen to spend 3 minutes and 47 seconds of
                  their lives with my music."
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 5: Present Day */}
          <div
            className={`relative transition-all duration-500 ${
              activeChapter === 5 ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                5
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Today & Tomorrow
                </h2>
                <p className="text-gray-400 text-sm">
                  EVRYMOMENT • The miracle
                </p>
              </div>
            </div>
            <div className="ml-22 pl-6">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Today, I&apos;m living the dream I once thought was impossible.
                    But success hasn&apos;t changed the core of who I am or why I
                    make music. Every song is still written with the same
                    passion, the same vulnerability, and the same hope that it
                    will connect with someone who needs to hear it.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I&apos;ve learned that being an artist isn&apos;t just about
                    creating—it&apos;s about constantly evolving, pushing boundaries,
                    and staying true to your vision while remaining open to new
                    influences and collaborations. The journey continues, and
                    I&apos;m excited about every step ahead.
                  </p>
                </div>
                <div className="relative h-120 rounded-lg overflow-hidden">
                  <img
                    src="/azuyeye/IMG_4304.jpg"
                    alt="Current projects and future"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t "></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold">
                  
                  </div>
                </div>
              </div>

              {/* Current Focus Areas */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="font-bold text-white mb-3">
                    Current Projects:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      New album &ldquo;Metamorphosis&rdquo; (80% complete)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      World tour planning for 2025
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Documentary about my journey
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      Music education foundation
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="font-bold text-white mb-3">
                    Future Goals:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Grammy nomination by 2026
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Collaborate with symphony orchestras
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Launch artist mentorship program
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Create music for film soundtracks
                    </li>
                  </ul>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 text-white">
                <h4 className="font-bold mb-3">My Philosophy Today:</h4>
                <p className="italic">
                  "Success isn't measured by charts or streams—it's measured by
                  the moments when someone tells you your music helped them
                  through their darkest hour, or gave them hope when they had
                  none left."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats Section */}
        {/* <div className="mt-20 bg-gray-800 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Journey by Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-azu-amber mb-2">15+</div>
              <div className="text-gray-400 text-sm">Years of Music</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-azu-amber mb-2">50M+</div>
              <div className="text-gray-400 text-sm">Total Streams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-azu-amber mb-2">
                1000+
              </div>
              <div className="text-gray-400 text-sm">Live Performances</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-azu-amber mb-2">25+</div>
              <div className="text-gray-400 text-sm">Collaborations</div>
            </div>
          </div>
        </div> */}

        {/* Fan Messages Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            What Fans Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 italic mb-4">
                "Your music saved my life during the darkest period. Thank you
                for sharing your gift with the world."
              </p>
              <div className="text-azu-amber font-medium">- Sarah, UK</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 italic mb-4">
                "Every song tells a story that resonates with my soul. You're
                not just an artist, you're a storyteller."
              </p>
              <div className="text-azu-amber font-medium">- Marcus, USA</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 italic mb-4">
                "Been following since the early days. Watching your journey has
                been incredible. Keep inspiring us!"
              </p>
              <div className="text-azu-amber font-medium">- Elena, Spain</div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-20 text-center bg-gradient-to-r from-azu-amber to-yellow-400 rounded-2xl p-12 text-black">
          <h2 className="text-3xl font-bold mb-6">The Story Continues</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            This is just the beginning. Every day brings new experiences, new
            inspirations, and new opportunities to connect through music. Thank
            you for being part of this journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music"
              className=" text-azu-amber px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Listen to My Music
            </Link>
            <Link
              href="/newsletter"
              className="bg-transparent border-2 border-black text-black hover:border-none hover:text-azu-amber px-8 py-3 rounded-full font-medium transition-colors"
            >
              Follow My NewsLetter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
