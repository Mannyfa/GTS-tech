// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from 'react';
import Footer from '../components/layout/Footer.jsx';

const PrivacyPolicy = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0C10] font-secondary text-[#191970] dark:text-gray-100 transition-colors duration-500">
      
      <div className="pt-40 pb-20 px-6 lg:px-24 max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="font-primary text-4xl md:text-5xl font-bold text-[#191970] dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-sm font-primary tracking-widest uppercase text-gray-500 dark:text-gray-400">Effective Date: May 16, 2026</p>
        </div>

        <div className="space-y-12 leading-relaxed text-gray-700 dark:text-gray-300">
          
          <section>
            <p className="mb-6">
              At Grand Tech Solutions (“Company,” “we,” “our,” or “us”), your privacy matters to us. This Privacy Policy explains how we collect, use, protect, and disclose information gathered through our website, services, consultations, and communications.
            </p>
            <p>
              By using our website or services, you agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">1. Information We Collect</h2>
            
            <h3 className="font-primary text-lg font-bold mt-6 mb-2">Personal Information</h3>
            <p className="mb-4">We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Billing information</li>
              <li>Project details</li>
              <li>Social media handles</li>
              <li>Information submitted through contact forms, consultations, or service inquiries</li>
            </ul>

            <h3 className="font-primary text-lg font-bold mt-6 mb-2">Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Referral sources</li>
              <li>Website usage data</li>
              <li>Cookies and analytics data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Schedule consultations</li>
              <li>Process payments and invoices</li>
              <li>Improve website functionality and user experience</li>
              <li>Send updates, promotions, newsletters, or marketing communications</li>
              <li>Maintain security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">3. Marketing Communications</h2>
            <p className="mb-4">We may send promotional emails, offers, updates, or educational content related to our services.</p>
            <p>You may unsubscribe from marketing communications at any time by clicking the “unsubscribe” link in our emails or by contacting us directly.</p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">4. Cookies & Tracking Technologies</h2>
            <p className="mb-4">Our website may use cookies, pixels, analytics tools, and similar technologies to improve user experience and analyze website traffic.</p>
            <p className="mb-4">These tools may collect information about your browsing behavior and interactions with our website.</p>
            <p>You can modify your browser settings to decline cookies; however, some features of the site may not function properly.</p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">5. Third-Party Services</h2>
            <p className="mb-4">We may use trusted third-party providers to help operate our business, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Website hosting providers</li>
              <li>Payment processors</li>
              <li>CRM and email marketing platforms</li>
              <li>Analytics providers</li>
              <li>Scheduling tools</li>
              <li>Social media platforms</li>
            </ul>
            <p className="mb-4">These third parties may have access to limited information necessary to perform services on our behalf.</p>
            <p>We are not responsible for the privacy practices of external websites or third-party platforms.</p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">6. Data Security</h2>
            <p className="mb-4">We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, misuse, or loss.</p>
            <p>However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">7. Data Retention</h2>
            <p className="mb-4">We retain personal information only as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide services</li>
              <li>Maintain business records</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">8. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Request access to your information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request information about how your data is used</li>
            </ul>
            <p>To exercise these rights, contact us using the information below.</p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">9. Children’s Privacy</h2>
            <p>Our website and services are not directed toward children under the age of 13. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">10. International Users</h2>
            <p>If you access our website from outside the United States, you understand that your information may be transferred to and processed in the United States.</p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">11. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update this Privacy Policy periodically. Updates will be posted on this page with the revised effective date.</p>
            <p>Your continued use of our website after updates constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="font-primary text-2xl font-bold text-[#191970] dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">12. Contact Information</h2>
            <p className="mb-4">If you have questions about this Privacy Policy or how your information is handled, please contact:</p>
            <address className="not-italic text-gray-600 dark:text-gray-400 p-6 bg-gray-50 dark:bg-[#12141A] rounded-xl border border-gray-200 dark:border-white/5">
              <strong>Grand Tech Solutions</strong><br />
              Atlanta, Georgia, USA<br /><br />
              <strong>Email:</strong> <a href="mailto:support@grandtech-solutions.com" className="text-teal-600 dark:text-teal-400 hover:underline">support@grandtech-solutions.com</a><br />
              <strong>Phone:</strong> +1 (229) 380-8878<br />
              <strong>Website:</strong> <a href="https://www.grandtech-solutions.com" className="text-teal-600 dark:text-teal-400 hover:underline">www.grandtech-solutions.com</a>
            </address>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;