import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "animate.css";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white px-6 py-12 font-sans">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>VolunVibe | Terms and Conditions</title>
          <link rel="canonical" href="http://mysite.com/terms" />
        </Helmet>
      </HelmetProvider>

      <div className="max-w-5xl mx-auto animate__animated animate__fadeIn animate__slow">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using VolunVibe.
          </p>
        </div>

        {/* Terms Sections */}
        {[
          {
            title: "1. Introduction",
            text: "These Terms and Conditions govern the use of the VolunVibe platform. By accessing or using our website, you agree to comply with and be bound by these terms. If you do not agree with these terms, please do not use our services.",
          },
          {
            title: "2. User Responsibilities",
            text: "Users are responsible for maintaining the confidentiality of their accounts and for all activities that occur under their accounts. You agree to use the platform only for lawful purposes and in accordance with these Terms.",
          },
          {
            title: "3. Privacy Policy",
            text: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.",
          },
          {
            title: "4. Content Ownership",
            text: "All content provided on VolunVibe, including but not limited to text, graphics, logos, and images, is the property of VolunVibe or its content providers and is protected by copyright laws.",
          },
          {
            title: "5. Termination of Access",
            text: "VolunVibe reserves the right to suspend or terminate your account if we believe you have violated these Terms and Conditions or engaged in unlawful or harmful behavior.",
          },
          {
            title: "6. Limitation of Liability",
            text: "VolunVibe is not liable for any damages arising from the use or inability to use our platform. We do not guarantee that the platform will be error-free or uninterrupted.",
          },
          {
            title: "7. Changes to Terms",
            text: "VolunVibe reserves the right to update or change these Terms and Conditions at any time. We will notify users of any significant changes, but it is your responsibility to review these Terms periodically.",
          },
          {
            title: "8. Governing Law",
            text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which VolunVibe operates.",
          },
          {
            title: "9. Contact Information",
            text: "If you have any questions about these Terms and Conditions, please contact us through our Contact Us page.",
          },
        ].map((section, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">
              {section.title}
            </h2>
            <p className="text-base leading-relaxed text-gray-300">
              {section.text}
            </p>
            <div className="w-20 h-1 mt-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsPage;
