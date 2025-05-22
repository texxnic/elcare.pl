import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-0">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between bg-[#f8fafc] px-8 py-16 md:py-24 md:pl-24 md:pr-16"
      >
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Help Your Baby
            <br />
            Sleep Peacefully
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Gentle and personalized solutions for better nights and brighter
            days.
          </p>
          <div className="flex items-center gap-4 mb-2">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-purple-700 font-medium hover:underline">
              <span className="inline-block w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7L8 5z" fill="#7c3aed" />
                </svg>
              </span>
              Watch intro Video
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10 flex-shrink-0">
          {/* Placeholder illustration */}
          <div className="w-64 h-64 bg-[#ede9fe] rounded-full flex items-center justify-center relative">
            <span className="absolute text-7xl">🧸</span>
            <span className="absolute text-6xl left-16 top-20">👶</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center gap-8 bg-white px-8 py-16 md:py-20 md:px-24 border-b border-gray-100"
      >
        <div className="flex-shrink-0">
          {/* Placeholder profile photo */}
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <span className="text-5xl">👩‍⚕️</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">About Me</h2>
          <p className="text-gray-700 mb-4 max-w-xl">
            I'm a certified pediatricist sleep consultant with over 10 years of
            experience. My approach is gentle, to your family's needs, and
            designed to foster healthy sleep habits for your little one.
          </p>
          <div className="flex gap-6 text-gray-700 text-base">
            <div className="flex items-center gap-2">
              <span className="text-purple-500">★</span> Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">★</span> 5-Star Reviews
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">★</span> Virtual Available
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section id="offer" className="bg-[#ede9fe] px-8 py-16 md:py-20 md:px-24">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center md:text-left">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🛏️</span>
            <div className="font-semibold text-lg mb-1">
              Personalized Sleep Plans
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">👶</span>
            <div className="font-semibold text-lg mb-1">
              Newborn Sleep Support
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🧸</span>
            <div className="font-semibold text-lg mb-1">
              Toddler Transitions
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">📞</span>
            <div className="font-semibold text-lg mb-1">
              Ongoing Virtual Coaching
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="bg-white px-8 py-16 md:py-20 md:px-24 border-b border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center md:text-left">
          Pricing
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-[#ede9fe] rounded-xl shadow p-8 flex-1 min-w-[220px] max-w-xs flex flex-col items-center">
            <div className="font-bold text-xl mb-2">Starter</div>
            <div className="text-3xl font-bold text-purple-600 mb-4">$99</div>
            <ul className="text-gray-700 mb-4 text-center">
              <li>1:1 Consultation</li>
              <li>Personalized Sleep Plan</li>
              <li>Email Support (1 week)</li>
            </ul>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
              Choose
            </button>
          </div>
          <div className="bg-[#ede9fe] rounded-xl shadow p-8 flex-1 min-w-[220px] max-w-xs flex flex-col items-center border-2 border-purple-500">
            <div className="font-bold text-xl mb-2">Premium</div>
            <div className="text-3xl font-bold text-purple-600 mb-4">$199</div>
            <ul className="text-gray-700 mb-4 text-center">
              <li>Everything in Starter</li>
              <li>2 Weeks Support</li>
              <li>Follow-up Call</li>
            </ul>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
              Choose
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-[#f8fafc] px-8 py-16 md:py-20 md:px-24"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center md:text-left">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <span className="text-5xl">👶</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <p className="text-lg text-gray-800 mb-2">
              "Our little one now sleeps through the night, and we feel like new
              parents!"
            </p>
            <div className="text-gray-600 font-semibold">Emma, Jack's mom</div>
          </div>
        </div>
      </section>
    </div>
  );
}
