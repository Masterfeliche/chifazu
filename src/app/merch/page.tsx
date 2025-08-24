import Image from "next/image";

export default function Merch() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Merchandise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Official AZU merchandise - wear your passion for music
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-azu-amber hover:shadow-2xl hover:shadow-azu-amber/50 hover:ring-2 hover:ring-azu-amber/30">
            <div className="relative h-64">
              <Image
                src="/MERCH/GONE & OVER.png"
                alt="Gone & Over Merchandise"
                fill
                className="object-cover"
                quality={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Gone & Over</h3>
              <p className="text-gray-400 mb-4">Official merchandise design</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-azu-amber">
                  $29.99
                </span>
                <button className="bg-azu-amber text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-400/50 hover:ring-2 hover:ring-purple-400/30">
            <div className="relative h-64">
              <Image
                src="/MERCH/MO DISTRACTIONS (Z - MOD).png"
                alt="Mo Distractions Merchandise"
                fill
                className="object-cover"
                quality={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Mo Distractions</h3>
              <p className="text-gray-400 mb-4">Z - MOD collection design</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-azu-amber">
                  $49.99
                </span>
                <button className="bg-azu-amber text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-400/50 hover:ring-2 hover:ring-pink-400/30">
            <div className="relative h-64">
              <Image
                src="/MERCH/MY BABY.png"
                alt="My Baby Merchandise"
                fill
                className="object-cover"
                quality={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">My Baby</h3>
              <p className="text-gray-400 mb-4">Special collection design</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-azu-amber">
                  $19.99
                </span>
                <button className="bg-azu-amber text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-400/50 hover:ring-2 hover:ring-blue-400/30">
            <div className="relative h-64">
              <Image
                src="/MERCH/PRETTY MUCH.png"
                alt="Pretty Much Merchandise"
                fill
                className="object-cover"
                quality={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Pretty Much</h3>
              <p className="text-gray-400 mb-4">Stylish design collection</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-azu-amber">
                  $24.99
                </span>
                <button className="bg-azu-amber text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-green-400 hover:shadow-2xl hover:shadow-green-400/50 hover:ring-2 hover:ring-green-400/30">
            <div className="relative h-64">
              <Image
                src="/MERCH/SISTABUDDY.png"
                alt="Sistabuddy Merchandise"
                fill
                className="object-cover"
                quality={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sistabuddy</h3>
              <p className="text-gray-400 mb-4">Exclusive design collection</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-azu-amber">
                  $39.99
                </span>
                <button className="bg-azu-amber text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-red-400 hover:shadow-2xl hover:shadow-red-400/50 hover:ring-2 hover:ring-red-400/30">
            <div className="relative h-64">
              <Image
                src="/MERCH/VISA.png"
                alt="Visa Merchandise"
                fill
                className="object-cover"
                quality={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Visa</h3>
              <p className="text-gray-400 mb-4">Premium design collection</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-azu-amber">
                  $34.99
                </span>
                <button className="bg-azu-amber text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/50 hover:ring-2 hover:ring-cyan-400/30">
            <div className="relative h-64">
              <Image
                src="/MERCH/WYM.png"
                alt="WYM Merchandise"
                fill
                className="object-cover"
                quality={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">WYM</h3>
              <p className="text-gray-400 mb-4">What You Mean collection</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-azu-amber">
                  $27.99
                </span>
                <button className="bg-azu-amber text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
