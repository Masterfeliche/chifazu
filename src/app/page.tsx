import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden" role="banner">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <Image
            src="/azuyeye/IMG_4304.jpg"
            alt="AZU Hero Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main title with enhanced styling */}
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-4 animate-fade-in tracking-wider">
                AZU
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-azu-amber to-yellow-400 mx-auto mb-6"></div>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-light tracking-wide animate-fade-in-delay">
                Artist & Musician
              </p>
            </div>

            {/* Enhanced description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              Creating immersive soundscapes that blend artistic vision with
              contemporary beats. Experience the journey through music that
              speaks to the soul.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay">
              <Link
                href="/music"
                className="group relative overflow-hidden bg-gradient-to-r from-azu-amber via-yellow-400 to-orange-400 text-black px-12 py-5 rounded-2xl text-lg font-bold transition-all duration-500 transform hover:scale-110 hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-azu-amber/50 shadow-2xl hover:shadow-azu-amber/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🎵 Explore Music
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                href="/mystory"
                className="group relative overflow-hidden bg-black/20 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all duration-500 transform hover:scale-110 hover:-rotate-1 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ My Journey
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white opacity-70">
            <span className="text-sm mb-2 font-light">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Latest Releases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover my newest tracks and explore the evolution of my sound
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <div className="relative h-48">
                <Image
                  src="/covers/AXT.png"
                  alt="Echoes Single Cover"
                  fill
                  className="object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AXT EP</h3>
                <p className="text-gray-400 mb-4">Extended playlist • 2024</p>
                <Link
                  href="https://youtube.com/playlist?list=OLAK5uy_nQ1swnkkH3V1Xl6b-7-yJCkNMqdMF2qFs&si=jyl2iqeQvg6opee8"
                  className="text-azu-amber hover:text-yellow-400 font-medium"
                >
                  Listen Now →
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <div className="relative h-48">
                <Image
                  src="/covers/SISTABUDDY.jpg"
                  alt="Midnight Dreams Album Cover"
                  fill
                  className="object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">MAPANCHA NA MAZAGA</h3>
                <p className="text-gray-400 mb-4">single • 2024</p>
                <Link
                  href="https://ffm.to/lyrpyqm"
                  className="text-azu-amber hover:text-yellow-400 font-medium"
                >
                  Explore it →
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <div className="relative h-48">
                <Image
                  src="/covers/EMOTIONAL.png"
                  alt="Collaboration Cover"
                  fill
                  className="object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">EMOTIONAL</h3>
                <p className="text-gray-400 mb-4">feat. Tridybane • 2024</p>
                <Link
                  href="https://ffm.to/gmd2npr"
                  className="text-azu-amber hover:text-yellow-400 font-medium"
                >
                  Listen Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About AZU
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Music has always been my language of choice—a way to express
                what words alone cannot capture. From intimate acoustic sessions
                to electronic soundscapes, I create music that bridges the gap
                between emotion and experience.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My journey spans multiple genres and collaborations, always
                seeking to push boundaries and explore new sonic territories.
                Each track tells a story, each album marks a chapter in an
                ongoing musical evolution.
              </p>
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-azu-amber to-yellow-400 text-black px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-azu-amber/40 focus:outline-none focus:ring-4 focus:ring-azu-amber/50"
              >
                <span>Learn More</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/azuyeye/DSC04354.jpg"
                  alt="AZU Artist Photo"
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join my newsletter for exclusive updates, behind-the-scenes content,
            and early access to new releases.
          </p>
          <Link
            href="/newsletter"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-azu-amber via-yellow-400 to-orange-400 text-black px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-azu-amber/50 focus:outline-none focus:ring-4 focus:ring-azu-amber/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3">
              📧 Subscribe Now
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
