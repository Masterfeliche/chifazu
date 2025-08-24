export default function Newsletter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-azu-amber to-yellow-400 bg-clip-text text-transparent">
            Newsletter
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay connected with exclusive updates, behind-the-scenes content, and early access to new releases
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-azu-amber">Join the AZU Community</h2>
            <p className="text-gray-300 text-lg">
              Get exclusive access to new music, tour announcements, and personal insights straight to your inbox.
            </p>
          </div>

          <form className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-azu-amber focus:border-transparent text-white placeholder-gray-400"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">First Name (Optional)</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-azu-amber focus:border-transparent text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium mb-3">What are you interested in? (Optional)</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 text-azu-amber focus:ring-azu-amber" />
                  <span className="text-gray-300">New music releases</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 text-azu-amber focus:ring-azu-amber" />
                  <span className="text-gray-300">Tour dates and events</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 text-azu-amber focus:ring-azu-amber" />
                  <span className="text-gray-300">Behind-the-scenes content</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 text-azu-amber focus:ring-azu-amber" />
                  <span className="text-gray-300">Merchandise updates</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 text-azu-amber focus:ring-azu-amber" />
                  <span className="text-gray-300">Book releases</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-azu-amber text-black py-3 px-6 rounded-lg font-medium hover:bg-yellow-400 transition-colors text-lg"
            >
              Subscribe Now
            </button>

            <p className="text-xs text-gray-400 mt-4 text-center">
              By subscribing, you agree to receive emails from AZU. You can unsubscribe at any time.
            </p>
          </form>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-azu-amber text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-azu-amber">Exclusive Content</h3>
            <p className="text-gray-400">
              Get access to unreleased tracks, demos, and personal stories before anyone else.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-azu-amber text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-azu-amber">Early Access</h3>
            <p className="text-gray-400">
              Be the first to know about tour dates, new releases, and special events.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-azu-amber text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-azu-amber">Community</h3>
            <p className="text-gray-400">
              Join a community of music lovers and connect with fellow fans.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-azu-amber text-center">Recent Newsletter</h3>
          <div className="border-l-4 border-azu-amber pl-6">
            <h4 className="text-xl font-bold mb-2">September 2025 Update</h4>
            <p className="text-gray-400 mb-4">Published 2 weeks ago</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              "Hey everyone! What an incredible month it's been. The response to 'Echoes' has been overwhelming, and I can't thank you enough for all the love and support. In this month's newsletter, I'm sharing some behind-the-scenes photos from the recording session, plus an exclusive acoustic version of the track that you won't find anywhere else..."
            </p>
            <button className="text-azu-amber hover:text-yellow-400 font-medium">
              Read Full Newsletter →
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Join over <span className="text-azu-amber font-bold">10,000</span> subscribers who never miss an update
          </p>
        </div>
      </div>
    </div>
  );
}