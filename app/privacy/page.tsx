import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="mb-6 text-lg">
          Eyehealthcure (“we”, “us”, “our”) is committed to protecting the privacy, confidentiality, and security of personal and sensitive personal data of its users, patients, and visitors. This Privacy Policy is issued in accordance with applicable Indian laws, including but not limited to the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (“SPDI Rules”).
        </p>
        <p className="mb-6 text-lg">
          By accessing our website, booking appointments, or availing healthcare services through Eyehealthcure, you consent to the collection, use, processing, and disclosure of your information as described in this Privacy Policy.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Definitions */}
          <AccordionItem value="definitions">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              1. Definitions
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Information that identifies an individual, such as name, phone number, email address, and location.</li>
                <li><strong>Sensitive Personal Data or Information (SPDI):</strong> Medical records, health history, diagnostic reports, insurance details, and financial information as defined under Indian law.</li>
                <li><strong>User / Patient:</strong> Any individual accessing the website or availing services from Eyehealthcure.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Information We Collect */}
          <AccordionItem value="information-collect">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              2. Information We Collect
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p className="mb-4">We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Personal Information:</strong> Full name, contact number, email address, city, gender, age, and other details provided during appointment booking or inquiries.</li>
                <li><strong>Sensitive Personal Data (Health Information):</strong> Medical history, clinical notes, consultation details, prescriptions, test results, diagnostic reports, and treatment-related information shared voluntarily by the user.</li>
                <li><strong>Financial Information:</strong> Payment details, billing records, and insurance-related data, where applicable.</li>
                <li><strong>Technical & Usage Data:</strong> IP address, browser type, device information, cookies, and website interaction data.</li>
                <li><strong>Communication Data:</strong> Records of calls, emails, WhatsApp messages, or online chats with our support or medical coordination team.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Method of Information Collection */}
          <AccordionItem value="method-collection">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              3. Method of Information Collection
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Information is collected through the following lawful means:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Online forms and appointment booking systems</li>
                <li>Telephonic, online, or in-person consultations</li>
                <li>Diagnostic centers, hospitals, or partner healthcare providers (with user consent)</li>
                <li>Website cookies and analytics tools</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Purpose of Data Collection & Processing */}
          <AccordionItem value="purpose-collection">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              4. Purpose of Data Collection & Processing
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Collected information is used strictly for lawful and legitimate purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Providing healthcare services and medical consultations</li>
                <li>Coordinating diagnostics, treatment, and follow-ups</li>
                <li>Processing payments and insurance claims</li>
                <li>Communicating appointments, reports, and service updates</li>
                <li>Improving service quality and operational efficiency</li>
                <li>Compliance with statutory, regulatory, and medico-legal obligations</li>
                <li>Prevention of fraud, misuse, or unauthorized access</li>
              </ul>
              <p className="mt-4">Eyehealthcure does not sell, trade, or commercially exploit personal or sensitive data.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Disclosure of Information */}
          <AccordionItem value="disclosure">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              5. Disclosure of Information
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Information may be disclosed only on a need-to-know basis and under strict confidentiality to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Registered medical practitioners and healthcare providers</li>
                <li>Diagnostic laboratories, hospitals, and treatment partners</li>
                <li>Insurance companies and third-party administrators</li>
                <li>Technology service providers bound by confidentiality agreements</li>
                <li>Government authorities, courts, or regulatory bodies when legally mandated</li>
              </ul>
              <p className="mt-4">All disclosures comply with applicable Indian laws.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Data Security Practices */}
          <AccordionItem value="security">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              6. Data Security Practices
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Eyehealthcure implements reasonable security practices as mandated under Indian law, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Secure servers and encrypted digital records</li>
                <li>Restricted access to sensitive data</li>
                <li>Authentication and authorization controls</li>
                <li>Regular security audits and system updates</li>
                <li>Secure retention and disposal of physical and electronic records</li>
              </ul>
              <p className="mt-4">Despite best efforts, no system is completely secure, and users acknowledge inherent risks associated with digital data transmission.</p>
            </AccordionContent>
          </AccordionItem>

          {/* User Rights */}
          <AccordionItem value="user-rights">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              7. User Rights
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>As a data subject, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access and review your personal information</li>
                <li>Request correction or updation of inaccurate data</li>
                <li>Withdraw consent (subject to legal and medical record retention requirements)</li>
                <li>Restrict or object to processing for non-essential purposes</li>
              </ul>
              <p className="mt-4">Requests may be denied where retention is mandated by law.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Data Retention */}
          <AccordionItem value="retention">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              8. Data Retention
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Medical records and related data shall be retained for the period required under applicable Indian laws, regulations, and medical council guidelines (generally 7–10 years). Thereafter, data shall be securely archived or disposed of.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Cookies & Tracking Technologies */}
          <AccordionItem value="cookies">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              9. Cookies & Tracking Technologies
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Eyehealthcure uses cookies to enhance website performance, user experience, and security. Users may disable cookies through browser settings; however, certain website features may not function optimally.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Grievance Redressal */}
          <AccordionItem value="grievance">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              10. Grievance Redressal
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>In compliance with the Information Technology Act, 2000, the contact details of the Grievance Officer are provided below:</p>
              <p className="mt-3"><strong>Grievance Officer – Eyehealthcure</strong></p>
              <p>📧 Email: support@Eyehealthcuresolution.com</p>
              <p>📞 Phone: +91-XXXXXXXXXX</p>
              <p className="mt-4">All grievances shall be addressed within the timelines prescribed by applicable law.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Amendments to This Policy */}
          <AccordionItem value="amendments">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              11. Amendments to This Policy
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>Eyehealthcure reserves the right to amend this Privacy Policy at any time to reflect changes in law, technology, or services. Updated versions will be published on the website with revised effective dates.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Jurisdiction */}
          <AccordionItem value="jurisdiction">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50 text-xl font-medium">
              12. Jurisdiction
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p>This Privacy Policy shall be governed by and interpreted in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts located in India.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
