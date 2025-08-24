import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-azu-amber to-yellow-400 bg-clip-text text-transparent">
            About AZU
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Artist, musician, storyteller—exploring the infinite possibilities of sound and emotion
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-1 gap-16 items-center mb-20">
          <div>
            <div className="bg-gradient-to-br from-azu-amber rounded-lg h-96 flex items-center justify-center mb-8">
              <Image src="/azuyeye/IMG_4304.jpg" alt="azu portarit" fill  style={{objectFit: 'cover'}} />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-azu-amber mb-6">The Artist Behind the Music</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Music isn't just what I do—it's who I am. From the moment I first touched a piano key at age seven, 
              I knew I had found my voice. What started as childhood curiosity has evolved into a lifelong passion 
              for creating sounds that move people, challenge perceptions, and bridge the gap between different worlds.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach to music is deeply personal yet universally relatable. I draw inspiration from everyday 
              moments—the rhythm of rain on windows, conversations overheard in coffee shops, the silence between 
              heartbeats. These fragments of life become the foundation for melodies that tell stories without words.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Over the years, I've had the privilege of collaborating with incredible artists, each bringing their 
              own perspective to our shared creative vision. These partnerships have taught me that music is not 
              just about individual expression—it's about connection, community, and the magic that happens when 
              different voices harmonize.
            </p>
          </div>
        </div>

        {/* Musical Philosophy */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-azu-amber mb-8 text-center">Musical Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-azu-amber text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-azu-amber">Authenticity</h3>
              <p className="text-gray-400">
                Every note, every lyric comes from a place of genuine emotion and experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-azu-amber text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-azu-amber">Connection</h3>
              <p className="text-gray-400">
                Music is a bridge between hearts, minds, and souls across all boundaries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-azu-amber text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-azu-amber">Innovation</h3>
              <p className="text-gray-400">
                Constantly pushing boundaries and exploring new sonic territories.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="flex justify-center items-center mb-20 gap-18">

            <div className=" mb-20">
              
              <div className="grid md:grid-cols-1 gap-8">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-azu-amber">Notable Collaborations</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Tridybane - "Emotional" (2023)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Tridybane - "Angelina" (2022)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Sunya - "Mwenyewe" (2024)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Dramma - "Tunapush" (2025)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
            <div className=" mb-20">
              
              <div className="grid md:grid-cols-1 gap-8">
                
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-azu-amber">Notable Collaborations</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Tridybane - "Emotional" (2023)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Tridybane - "Angelina" (2022)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Sunya - "Mwenyewe" (2024)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Dramma - "Tunapush" (2025)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" mb-20">
              
              <div className="grid md:grid-cols-1 gap-8">
                
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-azu-amber">Notable Collaborations</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Tridybane - "Emotional" (2023)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Tridybane - "Angelina" (2022)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Sunya - "Mwenyewe" (2024)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-azu-amber rounded-full mr-3"></span>
                      Dramma - "Tunapush" (2025)
                    </li>
                  </ul>
                </div>
              </div>
            </div>


        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-gray-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6 text-azu-amber">Want to Know More?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Dive deeper into my journey, discover the stories behind the songs, and learn about the experiences that shaped my music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mystory"
              className="bg-azu-amber text-black px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors"
            >
              Read My Story
            </Link>
            <Link
              href="/music"
              className="bg-transparent border-2 border-azu-amber text-azu-amber hover:bg-azu-amber hover:text-red-600 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Explore My Music
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
