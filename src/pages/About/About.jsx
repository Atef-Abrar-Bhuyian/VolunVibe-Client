import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "animate.css";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white px-8 py-12">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | About Us</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <h1 className="text-4xl font-semibold text-purple-500 mb-6">
              About Us
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Welcome to{" "}
              <span className="text-purple-400 font-semibold">VolunVibe</span>! We
              are a platform dedicated to connecting volunteers with meaningful
              opportunities to make a difference.
            </p>
            <p className="text-gray-300 mb-6">
              Our mission is to empower communities by bridging the gap between
              volunteers and organizations in need. Whether you're looking to
              contribute your skills, gain experience, or simply give back, we have
              a place for you.
            </p>
            <p className="text-gray-300">
              Join us in creating a positive impact, one volunteer at a time.
              Let's build a better future together!
            </p>
          </div>

          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <div className="bg-purple-600 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Our Vision</h2>
              <p className="text-gray-200">
                VolunVibe strives to make volunteering accessible and impactful, ensuring that
                people can easily contribute to their communities and make a difference in the world.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-3xl font-semibold text-purple-500 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-6">
            We would love to hear from you! If you have any questions or suggestions, feel free to reach out.
          </p>
          <form className="max-w-xl mx-auto bg-purple-900 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-100 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-100 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-100 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-950 text-white font-semibold rounded-lg hover:border hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
