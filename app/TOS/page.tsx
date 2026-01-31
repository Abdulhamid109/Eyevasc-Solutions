import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
        <p className="text-center text-lg mb-8">Effective Date: 31 January 2026</p>

        <p className="mb-6 text-lg">
          Welcome to Eyehealthcure  / Global Healthkure (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of our website, mobile platforms, digital services, and healthcare facilitation services.
        </p>
        <p className="mb-8 text-lg">
          By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Nature of Services */}
          <AccordionItem value="nature-of-services">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              1. Nature of Services
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Eyehealthcure  / Global Healthkure acts as a healthcare facilitation and coordination platform. We:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Assist patients in finding doctors, hospitals, clinics, and diagnostic services.</li>
                <li>Enable appointment bookings, consultations (online/offline), and follow-up coordination.</li>
                <li>Provide health-related information for general awareness purposes.</li>
              </ul>
              <p className="mt-4 bg-yellow-50 p-3 rounded border-l-4 border-yellow-600">
                ⚠️ We do not provide direct medical diagnosis or treatment unless expressly mentioned. Final medical decisions rest solely with qualified medical professionals.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Eligibility to Use Services */}
          <AccordionItem value="eligibility">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              2. Eligibility to Use Services
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>You must:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Be at least 18 years of age, or</li>
                <li>Use the services under parental or legal guardian supervision.</li>
              </ul>
              <p className="mt-4">By using our platform, you represent that all information provided by you is true, accurate, and complete.</p>
            </AccordionContent>
          </AccordionItem>

          {/* User Responsibilities */}
          <AccordionItem value="user-responsibilities">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              3. User Responsibilities
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accurate personal, medical, and contact information.</li>
                <li>Use the platform only for lawful and genuine healthcare purposes.</li>
                <li>Not misuse the platform for fraudulent, misleading, or harmful activities.</li>
              </ul>
              <p className="mt-4">You shall not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Impersonate another person or entity.</li>
                <li>Upload false medical records or forged documents.</li>
                <li>Attempt to access restricted systems or data.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Medical Disclaimer */}
          <AccordionItem value="medical-disclaimer">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              4. Medical Disclaimer
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Health information on our website is not a substitute for professional medical advice.</li>
                <li>Always consult qualified doctors before making healthcare decisions.</li>
                <li>We are not responsible for outcomes arising from reliance on general content displayed on the platform.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Appointments & Consultations */}
          <AccordionItem value="appointments">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              5. Appointments & Consultations
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Appointment availability depends on doctors/hospitals.</li>
                <li>We do not guarantee consultation outcomes or treatment results.</li>
                <li>Delays, rescheduling, or cancellations may occur due to medical or administrative reasons.</li>
              </ul>
              <p className="mt-4">Online consultations are subject to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Internet availability</li>
                <li>Doctor availability</li>
                <li>Patient cooperation</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Payments, Fees & Refunds */}
          <AccordionItem value="payments">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              6. Payments, Fees & Refunds
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Some services may involve consultation fees, procedure costs, or service charges.</li>
                <li>Prices are communicated before confirmation.</li>
                <li>Payments are processed through secure third-party payment gateways.</li>
              </ul>
              <p className="mt-4">Refunds, if applicable, are governed by:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Hospital/doctor cancellation policies</li>
                <li>Nature of the service booked</li>
                <li>No refunds shall be issued once medical services are delivered.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Privacy & Data Protection */}
          <AccordionItem value="privacy">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              7. Privacy & Data Protection
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Your personal and health data is processed in accordance with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Information Technology Act, 2000</li>
                <li>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                <li>Digital Personal Data Protection Act, 2023 (India)</li>
              </ul>
              <p className="mt-4">Please refer to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for detailed information.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Intellectual Property Rights */}
          <AccordionItem value="ip-rights">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              8. Intellectual Property Rights
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>All content on the platform—including text, graphics, logos, images, and design—is:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Owned by or licensed to Eyehealthcure  / Global Healthkure</li>
                <li>Protected under Indian copyright and trademark laws</li>
              </ul>
              <p className="mt-4">You may not copy, reproduce, modify, or distribute content without written permission.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Third-Party Links & Services */}
          <AccordionItem value="third-party">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              9. Third-Party Links & Services
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Our platform may contain links to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Hospitals</li>
                <li>Diagnostic centers</li>
                <li>Insurance providers</li>
                <li>External websites</li>
              </ul>
              <p className="mt-4">We are not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Accuracy of third-party information</li>
                <li>Services provided by third parties</li>
                <li>Any loss or damage arising from third-party interactions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Limitation of Liability */}
          <AccordionItem value="liability">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              10. Limitation of Liability
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>To the maximum extent permitted under Indian law:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>We shall not be liable for indirect, incidental, or consequential damages.</li>
                <li>We are not responsible for medical negligence, malpractice, or outcomes of treatments provided by third-party healthcare professionals.</li>
                <li>Our liability, if any, shall not exceed the amount paid by you for the specific service.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Indemnification */}
          <AccordionItem value="indemnification">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              11. Indemnification
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>You agree to indemnify and hold harmless Eyehealthcure  / Global Healthkure from:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Claims arising due to misuse of services</li>
                <li>Violation of these Terms</li>
                <li>False or misleading information provided by you</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Suspension & Termination */}
          <AccordionItem value="suspension">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              12. Suspension & Termination
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Suspend or terminate access without notice</li>
                <li>Restrict users violating laws or platform policies</li>
              </ul>
              <p className="mt-4">Termination does not affect obligations incurred prior to termination.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Force Majeure */}
          <AccordionItem value="force-majeure">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              13. Force Majeure
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>We shall not be liable for failure or delay in services due to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Natural disasters</li>
                <li>Government actions</li>
                <li>Epidemics or pandemics</li>
                <li>Internet or technical failures beyond control</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Governing Law & Jurisdiction */}
          <AccordionItem value="governing-law">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              14. Governing Law & Jurisdiction
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>These Terms are governed by the laws of India.</p>
              <p className="mt-2">Courts located in India shall have exclusive jurisdiction over disputes.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Changes to Terms */}
          <AccordionItem value="changes">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              15. Changes to Terms
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>We may revise these Terms periodically. Updated versions will be posted on our website with the revised effective date.</p>
              <p className="mt-2">Continued use after changes constitutes acceptance.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Contact Information */}
          <AccordionItem value="contact">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              16. Contact Information
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>For queries, concerns, or legal notices:</p>
              <p className="mt-2"><strong>Eyehealthcure  / Global Healthkure</strong></p>
              <p>📧 Email: support@yourdomain.com</p>
              <p>📞 Phone: +91-XXXXXXXXXX</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="mt-8 text-lg">
          By using our platform, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
