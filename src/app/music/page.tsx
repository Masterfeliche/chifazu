import Image from "next/image";
import Link from "next/link";

export default function Music() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Music
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my musical journey through various genres and collaborations
          </p>
        </div>

        {/* Featured Album */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-azu-amber text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
                Latest Album
              </span>
              <h2 className="text-4xl font-bold mb-4 text-white">AXT EP</h2>
              <p className="text-gray-300 mb-6">
                An extended playlist showcasing diverse sounds and artistic
                evolution through multiple tracks.
              </p>
              <div className="flex items-center space-x-4 text-gray-400 mb-6">
                <span>2024</span>
                <span>•</span>
                <span>8 tracks</span>
                <span>•</span>
                <span>32:15</span>
              </div>
              <Link href={"https://open.spotify.com/album/4TG9dCo89z20ARYJvFeS9E?si=GEB6m-ExQNuvuzTwPyLzuQ"} target="_blank">
              <button className="bg-azu-amber text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                Listen Now
              </button>
              </Link>
            </div>
            <div className="relative h-80">
              <Image
                src="/covers/AXT.png"
                alt="AXT EP Album Cover"
                fill
                className="object-cover rounded-xl"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Music Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <div className="relative h-48 mb-6">
              <Image
                src="/covers/ENTIRELY.png"
                alt="Albums"
                fill
                className="object-cover rounded-lg"
                quality={80}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Spotify</h3>
            <p className="text-gray-300 mb-4">
              Complete collections of all songs of Azu in Spotify
            </p>
            <Link href={"https://open.spotify.com/artist/3jcvfDKsvH2TUHO65orcU4"} target="_blank" >
            <button className="bg-azu-amber text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
              Listen
            </button>
            </Link>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <div className="relative h-48 mb-6">
              <Image
                src="/covers/MA.jpeg"
                alt="Singles"
                fill
                className="object-cover rounded-lg"
                quality={80}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Youtube</h3>
            <p className="text-gray-300 mb-4">
              Individual tracks that showcase different aspects of my artistic
              vision.
            </p>
            <Link href={"https://www.youtube.com/watch?v=Zx4Tt1jIrMI"} target="_blank">
            <button className="bg-azu-amber text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
              Listen
            </button>
            </Link>
            
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <div className="relative h-48 mb-6">
              <Image
                src="/covers/EMOTIONAL.png"
                alt="Collaborations"
                fill
                className="object-cover rounded-lg"
                quality={80}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Apple music
            </h3>
            <p className="text-gray-300 mb-4">
              Working with other artists to create unique and innovative sounds.
            </p>
            <Link href={"https://music.apple.com/us/artist/azu/1570359996"} target="_blank">

            <button className="bg-azu-amber text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
              Listen
            </button>
            </Link>
            
          </div>
        </div>

        {/* Featured Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Tracks
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/covers/REAZONS.png"
                    alt="Reazons Track"
                    fill
                    className="object-cover rounded-lg"
                    quality={80}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Kisingizio</h4>
                  <p className="text-gray-400">Single • 4:23</p>
                </div>
              </div>
              <Link href={"https://ffm.to/5poapa8"} target="_blank">
              <button className="bg-azu-amber text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                ▶️
              </button>
              
              </Link>
              
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/covers/KISINGIZIO.png"
                    alt="Kisingizio Track"
                    fill
                    className="object-cover rounded-lg"
                    quality={80}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Emotional</h4>
                  <p className="text-gray-400">ft Tridybane • 3:47</p>
                </div>
              </div>
              <Link href={"https://ffm.to/gmd2npr"} target="_blank">
              <button className="bg-azu-amber text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                ▶️
              </button>
              
              </Link>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/covers/EMOTIONAL.png"
                    alt="Emotional Track"
                    fill
                    className="object-cover rounded-lg"
                    quality={80}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Endelea</h4>
                  <p className="text-gray-400">Single • 5:12</p>
                </div>
              </div>
              <Link href={"https://ffm.to/57gnqar"} target="_blank">
              <button className="bg-azu-amber text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                ▶️
              </button>
              
              </Link>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/covers/ENDELEA.png"
                    alt="Endelea Track"
                    fill
                    className="object-cover rounded-lg"
                    quality={80}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Reasons</h4>
                  <p className="text-gray-400">Single • 4:05</p>
                </div>
              </div>
              <Link href={"https://ffm.to/bpwm5ve"} target="_blank">
              <button className="bg-azu-amber text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                ▶️
              </button>
              
              </Link>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/covers/WHAT IF .png"
                    alt="What If Track"
                    fill
                    className="object-cover rounded-lg"
                    quality={80}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">What If</h4>
                  <p className="text-gray-400">Single • 3:28</p>
                </div>
              </div>
              <Link href={"https://ffm.to/6oz8mn7"} target="_blank">
              <button className="bg-azu-amber text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                ▶️
              </button>
              
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-8 text-white">
            Music Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-azu-amber mb-2">50M+</div>
              <div className="text-gray-400">Total Streams</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-azu-amber mb-2">25</div>
              <div className="text-gray-400">Released Tracks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-azu-amber mb-2">5</div>
              <div className="text-gray-400">Albums</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-azu-amber mb-2">15+</div>
              <div className="text-gray-400">Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
