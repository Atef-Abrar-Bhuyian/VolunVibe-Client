import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "animate.css";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white px-8 py-12">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Terms and Conditions</title>
          <link rel="canonical" href="http://mysite.com/terms" />
        </Helmet>
      </HelmetProvider>

      <div className="max-w-6xl mx-auto">
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-4xl font-semibold text-purple-500 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Welcome to VolunVibe! By using our platform, you agree to the following terms and conditions.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">1. Introduction</h2>
            <p className="text-gray-300">
              These Terms and Conditions govern the use of the VolunVibe platform. By accessing or using our website, you agree to comply with and be bound by these terms. If you do not agree with these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">2. User Responsibilities</h2>
            <p className="text-gray-300">
              Users are responsible for maintaining the confidentiality of their accounts and for all activities that occur under their accounts. You agree to use the platform only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">3. Privacy Policy</h2>
            <p className="text-gray-300">
              Your privacy is important to us. Please review our <span className="text-purple-400">Privacy Policy</span> to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">4. Content Ownership</h2>
            <p className="text-gray-300">
              All content provided on VolunVibe, including but not limited to text, graphics, logos, and images, is the property of VolunVibe or its content providers and is protected by copyright laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">5. Termination of Access</h2>
            <p className="text-gray-300">
              VolunVibe reserves the right to suspend or terminate your account if we believe you have violated these Terms and Conditions or engaged in unlawful or harmful behavior.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300">
              VolunVibe is not liable for any damages arising from the use or inability to use our platform. We do not guarantee that the platform will be error-free or uninterrupted.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-300">
              VolunVibe reserves the right to update or change these Terms and Conditions at any time. We will notify users of any significant changes, but it is your responsibility to review these Terms periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">8. Governing Law</h2>
            <p className="text-gray-300">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which VolunVibe operates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">9. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms and Conditions, please contact us through our <span className="text-purple-400">Contact Us</span> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
