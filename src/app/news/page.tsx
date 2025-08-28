export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-azu-amber to-yellow-400 bg-clip-text text-transparent">
            Latest News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with my latest releases, tours, and behind-the-scenes content
          </p>
        </div>

        <div className="space-y-8">
          <article className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
            <div className="flex items-center mb-4">
              <span className="bg-azu-amber text-black px-3 py-1 rounded-full text-sm font-medium mr-4">
                Acknowledgement 
              </span>
              <span className="text-gray-400">September 9, 2025</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-azu-amber">
            📢 Tate Brothers’ The Real World Highlights Azu’s MAIMEA
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
            On April 1, 2024, a professor on the Tate Brothers’ The Real World platform featured and previewed Azu’s song MAIMEA—even reviewing his website and advising, “Now all you need to do is get out there more.”
            Half in Swahili and still resonating globally, MAIMEA remains a fan favorite and sits proudly in Azu’s Top 3 on Spotify a year later.
            </p>
            <button className="text-azu-amber hover:text-yellow-400 font-medium">
              Read More →
            </button>
          </article>

          <article className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
            <div className="flex items-center mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                Tour Update
              </span>
              <span className="text-gray-400">December 15, 2025</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-azu-amber">
              2026 Tour Dates Announced
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The wait is over! I&apos;m thrilled to announce my 2025 tour dates across major cities. This will be my most ambitious tour yet, featuring new stage production and exclusive performances of unreleased tracks.
            </p>
            <button className="text-azu-amber hover:text-yellow-400 font-medium">
              Read More →
            </button>
          </article>

          <article className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
            <div className="flex items-center mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                Behind the Scenes
              </span>
              <span className="text-gray-400">January 7, 2026</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-azu-amber">
              Studio Sessions: Creating the Perfect Sound
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Take a look behind the curtain as I share insights from my recent studio sessions. From experimenting with vintage synthesizers to collaborating with talented session musicians, discover the creative process behind my upcoming album.
            </p>
            <button className="text-azu-amber hover:text-yellow-400 font-medium">
              Read More →
            </button>
          </article>

          <article className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
            <div className="flex items-center mb-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                Collaboration
              </span>
              <span className="text-gray-400">February 5, 2026</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-azu-amber">
              Exciting Collaboration with Rising Artist Sunya and FockyBeatz
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m excited to share that I&apos;ve been working on a special collaboration with the incredibly talented Luna. Our combined styles create something truly unique, and I can&apos;t wait for you to hear what we&apos;ve been cooking up in the studio.
            </p>
            <button className="text-azu-amber hover:text-yellow-400 font-medium">
              Read More →
            </button>
          </article>
        </div>

        <div className="text-center mt-16">
          <button className="bg-azu-amber text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}