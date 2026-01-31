import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SinusTreatmentPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-16 lg:px-24">
        <section className="max-w-5xl mx-auto">
          <header className="mb-5">
            <h1 className="text-3xl md:text-3xl font-semibold mb-4">
              ENT Care – Expert Ear, Nose & Throat Treatment in India
            </h1>
            <p className="text-base leading-relaxed text-gray-600">
              At Eyehealthcure , our ENT Care services focus on the diagnosis, treatment, and management of conditions related to the ear, nose, throat, and associated head & neck structures. Our experienced ENT specialists (otolaryngologists) provide both medical and surgical care to improve hearing, breathing, speech, balance, and overall quality of life.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-base leading-relaxed text-gray-700">
              We treat a wide range of ENT conditions including sinusitis, hearing loss, tonsillitis, voice disorders, nasal blockage, ear infections, vertigo, and balance disorders using advanced and patient-friendly techniques.
            </p>
          </section>

          <Accordion type="single" collapsible className="w-full">
            {/* Sinus Treatment – Long-Lasting Relief from Sinus Problems */}
            <AccordionItem value="sinus-treatment">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Sinus Treatment – Long-Lasting Relief from Sinus Problems</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Chronic sinus issues can affect breathing, sleep, and daily comfort. At Eyehealthcure , we offer advanced and effective sinus treatment in India to relieve symptoms and restore healthy sinus function.
                </p>
                <p className="text-base leading-relaxed">
                  Our ENT experts provide personalized sinus care using modern diagnostic tools and minimally invasive treatments for long-term relief.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Sinus Treatment Procedure Details */}
            <AccordionItem value="procedure-details">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Sinus Treatment Procedure Details</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Our sinus treatments are designed to be safe, precise, and minimally invasive, depending on the severity of the condition.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Duration: Most sinus procedures take 20–30 minutes</li>
                  <li>Techniques used include medical management (medications and nasal therapies) and endoscopic sinus surgery for chronic or severe cases</li>
                  <li>Anesthesia is provided under local or general anesthesia as required</li>
                </ul>
                <p className="text-base leading-relaxed mb-4">The procedure involves:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Removal of sinus blockages</li>
                  <li>Improvement of sinus drainage</li>
                  <li>Reduction of inflammation and infection</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  Most sinus procedures are performed as day-care treatments, allowing patients to return home the same day.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Recovery After Sinus Treatment */}
            <AccordionItem value="recovery">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Recovery After Sinus Treatment</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Recovery after modern sinus treatment is usually quick and comfortable for most patients.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Symptom relief often begins within 24–48 hours</li>
                  <li>Minimal downtime with faster healing</li>
                  <li>Patients can resume normal activities within a few days</li>
                  <li>Follow-up consultations ensure proper healing and long-term results</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  Our ENT team at Eyehealthcure  provides complete post-treatment care guidance.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Effectiveness of Sinus Treatment */}
            <AccordionItem value="effectiveness">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Effectiveness of Sinus Treatment</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Advanced sinus treatments at Eyehealthcure  offer high success rates of over 90–95%, especially for chronic sinusitis.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Significant reduction in sinus infections and nasal blockage</li>
                  <li>Improved breathing and sleep quality</li>
                  <li>Long-lasting relief with reduced recurrence</li>
                  <li>Better overall nasal and sinus function</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* ENT & Sinus Treatment Eligibility */}
            <AccordionItem value="eligibility">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">ENT & Sinus Treatment Eligibility</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  You may be suitable for sinus or ENT treatment if you experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Chronic or recurring sinus infections</li>
                  <li>Nasal congestion, facial pain, or headaches</li>
                  <li>Difficulty breathing through the nose</li>
                  <li>Post-nasal drip or reduced sense of smell</li>
                  <li>Ear pain, hearing loss, dizziness, or throat discomfort</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  A detailed ENT evaluation at Eyehealthcure  helps determine the best treatment approach.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Benefits of ENT & Sinus Care at Eyehealthcure  */}
            <AccordionItem value="benefits">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Benefits of ENT & Sinus Care at Eyehealthcure </h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Advanced ENT diagnostic and treatment facilities</li>
                  <li>Minimally invasive and safe procedures</li>
                  <li>Faster recovery with minimal discomfort</li>
                  <li>Personalized treatment plans</li>
                  <li>Long-term symptom relief and improved quality of life</li>
                  <li>Experienced ENT specialists and modern technology</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Risks and Side Effects of Sinus Treatment */}
            <AccordionItem value="risks">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Risks and Side Effects of Sinus Treatment</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  ENT and sinus treatments are generally safe, but some temporary effects may occur:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Mild nasal discomfort or congestion</li>
                  <li>Temporary swelling or minor bleeding</li>
                  <li>Rare risk of infection or recurrence</li>
                  <li>Temporary dryness or irritation</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  Regular follow-ups and proper care minimize risks and ensure long-term success.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  );
}
