import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TonsillectomyTreatmentPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-16 lg:px-24">
        <section className="max-w-5xl mx-auto">
          <header className="mb-5">
            <h1 className="text-3xl md:text-3xl font-semibold mb-4">
              Tonsillectomy Treatment – Safe & Effective Relief from Recurrent Tonsillitis
            </h1>
            <p className="text-base leading-relaxed text-gray-600">
              A tonsillectomy is a surgical procedure performed to remove the tonsils—two oval-shaped lymph tissues located at the back of the throat that help protect the body from infections. When tonsils become frequently infected, enlarged, or cause breathing and swallowing difficulties, surgical removal becomes the most effective treatment.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-base leading-relaxed text-gray-700">
              At Eyehealthcure , tonsillectomy is performed using safe and advanced ENT surgical techniques to ensure minimal discomfort, faster recovery, and long-term relief from recurring tonsil problems.
            </p>
          </section>

          <Accordion type="single" collapsible className="w-full">
            {/* Tonsillectomy Procedure Details */}
            <AccordionItem value="procedure-details">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Tonsillectomy Procedure Details</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Our ENT specialists perform tonsillectomy with precision and care to deliver optimal clinical outcomes.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Duration: Approximately 30–60 minutes</li>
                  <li>Anesthesia: Performed under general anesthesia, ensuring the patient is fully asleep and pain-free</li>
                  <li>Tonsils are removed through the mouth</li>
                  <li>No external cuts or visible scars</li>
                  <li>Advanced techniques such as cautery or laser may be used to reduce bleeding</li>
                  <li>Minimally invasive approach with no external incisions for quicker healing</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Recovery After Tonsillectomy */}
            <AccordionItem value="recovery">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Recovery After Tonsillectomy</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Recovery after tonsillectomy is gradual and generally smooth when proper post-operative care is followed.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Patients are monitored for a few hours and usually discharged the same day</li>
                  <li>Initial recovery period typically lasts 7–10 days</li>
                  <li>Mild to moderate pain while swallowing is common during healing</li>
                  <li>Complete recovery usually occurs within 2 weeks</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">Common post-surgery symptoms may include:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Sore throat</li>
                  <li>Mild fever</li>
                  <li>Ear pain</li>
                  <li>Throat discomfort or swelling</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  These symptoms generally improve within one week.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Effectiveness of Tonsillectomy */}
            <AccordionItem value="effectiveness">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Effectiveness of Tonsillectomy</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Tonsillectomy is highly effective in managing chronic or recurrent tonsillitis and related complications.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Significant reduction in the frequency of throat infections</li>
                  <li>Relief from persistent sore throat and swallowing difficulties</li>
                  <li>Improved overall comfort and quality of life</li>
                  <li>Long-term relief for patients with recurring tonsil problems</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Benefits of Tonsillectomy */}
            <AccordionItem value="benefits">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Benefits of Tonsillectomy</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Reduced frequency of tonsil infections</li>
                  <li>Improved breathing by removing airway obstruction</li>
                  <li>Better sleep quality, especially for patients with snoring or sleep apnea</li>
                  <li>Fewer sore throats and related discomfort</li>
                  <li>Improved daily comfort and overall well-being</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Risks and Side Effects of Tonsillectomy */}
            <AccordionItem value="risks">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Risks and Side Effects of Tonsillectomy</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Tonsillectomy is generally safe, but some side effects may occur during the recovery phase.
                </p>
                <p className="text-base leading-relaxed mb-2 font-medium">Common side effects:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Sore throat and ear pain</li>
                  <li>Mild fever and discomfort</li>
                  <li>Swelling around the throat</li>
                </ul>
                <p className="text-base leading-relaxed mb-2 font-medium">Rare complications:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Infection at the surgical site</li>
                  <li>Post-surgical bleeding (usually manageable)</li>
                  <li>Dehydration due to difficulty swallowing fluids</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Post-Operative Care After Tonsillectomy */}
            <AccordionItem value="post-operative-care">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Post-Operative Care After Tonsillectomy</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Take prescribed medications as advised</li>
                  <li>Stay hydrated and consume soft foods</li>
                  <li>Avoid spicy, hard, or hot foods during healing</li>
                  <li>Rest adequately and avoid strenuous activities</li>
                  <li>Attend all scheduled follow-up appointments</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  );
}
