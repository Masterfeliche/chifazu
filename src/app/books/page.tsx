import Image from "next/image";
import Link from "next/link";
export default function Books() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-azu-amber to-yellow-400 bg-clip-text text-transparent">
            Books & Writings
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my literary works, from music memoirs to creative fiction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
            <div className="h-60 bg-gradient-to-br from-azu-amber to-orange-600 flex items-center justify-center">
                  <Image
                    src="/covers/lsd.jpg"
                    alt="The difficult years and struggles"
                    width={350}
                    height={400}
                    className="object-cover"
                    quality={80}
                  />
              
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">LSD</h3>
              <p className="text-gray-400 mb-4">A memoir about my journey through music, creativity, and self-discovery.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Memoir • 2025</span>
                <span className="text-2xl font-bold text-azu-amber">$0.00</span>
              </div>
            <a href="/books/LSD.pdf" download>
              <button className="w-full bg-azu-amber text-black py-2 px-4 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                Download Now
              </button>
            </a>
                          
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
            <div className="h-60 bg-gradient-to-br from-azu-amber to-orange-600 flex items-center justify-center">
                  <Image
                    src="/covers/MAPANCHA NA MAZAGA (Front) (2).jpg"
                    alt="The difficult years and struggles"
                    width={350}
                    height={400}
                    className="object-cover"
                    quality={80}
                  />
              
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">MAPANCHA NA MAZAGA</h3>
              <p className="text-gray-400 mb-4">A memoir about my journey through music, creativity, and self-discovery.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Memoir • 2025</span>
                <span className="text-2xl font-bold text-azu-amber">$0.00</span>
              </div>
              <a href="/books/MAPANCHA NA MAZAGA.pdf" download>
              <button className="w-full bg-azu-amber text-black py-2 px-4 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                Download Now
              </button>
            </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
            <div className="h-60 bg-gradient-to-br from-azu-amber to-orange-600 flex items-center justify-center">
                  <Image
                    src="/covers/lsd.jpg"
                    alt="The difficult years and struggles"
                    width={350}
                    height={400}
                    className="object-cover"
                    quality={80}
                  />
              
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Rhythms of the Soul</h3>
              <p className="text-gray-400 mb-4">A memoir about my journey through music, creativity, and self-discovery.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Memoir • 2024</span>
                <span className="text-2xl font-bold text-azu-amber">$24.99</span>
              </div>
              <button className="w-full bg-azu-amber text-black py-2 px-4 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                Download Now
              </button>
            </div>
          </div>

          

          

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
            <div className="h-80 bg-gradient-to-br from-red-900 to-pink-900 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">LYRICS</h3>
                <p className="text-lg">& POETRY</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Lyrics & Poetry</h3>
              <p className="text-gray-400 mb-4">A compilation of my song lyrics and personal poetry.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Poetry • 2022</span>
                <span className="text-2xl font-bold text-azu-amber">$16.99</span>
              </div>
              <button className="w-full bg-azu-amber text-black py-2 px-4 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
            <div className="h-80 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">BEHIND</h3>
                <p className="text-lg">THE MUSIC</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Behind the Music</h3>
              <p className="text-gray-400 mb-4">Stories and insights from my recording sessions and collaborations.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Biography • 2022</span>
                <span className="text-2xl font-bold text-azu-amber">$22.99</span>
              </div>
              <button className="w-full bg-azu-amber text-black py-2 px-4 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all border-2 border-azu-amber">
            <div className="h-80 bg-gradient-to-br from-yellow-600 to-azu-amber flex items-center justify-center">
              <div className="text-center text-black">
                <h3 className="text-2xl font-bold mb-2">COMING</h3>
                <p className="text-lg">SOON</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Untitled Project</h3>
              <p className="text-gray-400 mb-4">My next book is currently in development. Stay tuned for updates!</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">TBA • 2025</span>
                <span className="text-2xl font-bold text-azu-amber">TBA</span>
              </div>
              <button className="w-full bg-gray-600 text-gray-400 py-2 px-4 rounded-full font-medium cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8 text-azu-amber">Featured Excerpt</h2>
          <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
            <blockquote className="text-lg italic text-gray-300 leading-relaxed mb-6">
              "Music isn't just sound waves traveling through air—it's emotion given form, memory made tangible, and dreams translated into a language everyone can understand. In those moments when the melody hits just right, when the rhythm matches your heartbeat, you realize that music isn't something you listen to—it's something you become."
            </blockquote>
            <cite className="text-azu-amber font-medium">— From "Rhythms of the Soul"</cite>
          </div>
        </div>
      </div>
    </div>
  );
}