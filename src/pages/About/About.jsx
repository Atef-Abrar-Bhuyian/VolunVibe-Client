import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen bg-[#11111d] text-white px-4 md:px-8 py-16">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | About Us</title>
          <link rel="canonical" href="http://mysite.com/about" />
        </Helmet>
      </HelmetProvider>

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg">
            About VolunVibe
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empowering communities by connecting people with purposeful
            volunteering.
          </p>
        </div>

        {/* About Text Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Welcome to{" "}
              <span className="text-purple-400 font-medium">VolunVibe</span> —
              your space to discover meaningful volunteer work that creates real
              impact.
            </p>
            <p>
              We’re building bridges between individuals who want to help and
              the causes that need them most. From local initiatives to global
              movements, we believe every contribution counts.
            </p>
            <p>
              Whether you're here to give back, grow personally, or support
              change, there's a place for you at VolunVibe.
            </p>
            <p className="text-purple-300 font-semibold">
              Let's build a better future together — one volunteer at a time.
            </p>
          </div>

          {/* Vision Box */}
          <div className="bg-[#1a1a2e] border border-purple-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To make volunteering more accessible, impactful, and
              community-driven — allowing everyone to contribute meaningfully to
              the world around them.
            </p>
          </div>
        </section>

        {/* Why VolunVibe Section */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-center mb-10 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg">
            Why VolunVibe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a2e] p-6 rounded-xl border border-purple-700 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Easy to Use
              </h3>
              <p className="text-gray-400 text-sm">
                A simple, intuitive platform designed to help you find the right
                opportunity fast.
              </p>
            </div>
            <div className="bg-[#1a1a2e] p-6 rounded-xl border border-purple-700 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Real Impact
              </h3>
              <p className="text-gray-400 text-sm">
                Every post is vetted to ensure you’re making a meaningful
                contribution to real causes.
              </p>
            </div>
            <div className="bg-[#1a1a2e] p-6 rounded-xl border border-purple-700 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Made for New Generation
              </h3>
              <p className="text-gray-400 text-sm">
                Crafted with modern aesthetics and real-time speed — smooth,
                snappy, and totally in sync with your lifestyle.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
