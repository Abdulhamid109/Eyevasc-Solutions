import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SeptoplastyTreatmentPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-16 lg:px-24">
        <section className="max-w-5xl mx-auto">
          <header className="mb-5">
            <h1 className="text-3xl md:text-3xl font-semibold mb-4">
              Septoplasty Surgery – Effective Treatment for Deviated Nasal Septum
            </h1>
            <p className="text-base leading-relaxed text-gray-600">
              Septoplasty is a surgical procedure performed to correct a deviated nasal septum, the wall of cartilage and bone that separates the two nostrils. When the septum is misaligned, it can cause breathing difficulties, chronic nasal blockage, recurrent sinus infections, snoring, and nosebleeds.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-base leading-relaxed text-gray-700">
              At Eyehealthcure , septoplasty is performed using advanced ENT surgical techniques to restore proper nasal airflow and improve long-term breathing comfort.
            </p>
          </section>

          <Accordion type="single" collapsible className="w-full">
            {/* Septoplasty Procedure Details */}
            <AccordionItem value="procedure-details">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Septoplasty Procedure Details</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Our experienced ENT surgeons ensure a safe and precise septoplasty procedure tailored to the patient’s condition.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Duration: Typically 30–90 minutes, depending on the severity of deviation</li>
                  <li>Anesthesia: Performed under general anesthesia or local anesthesia with sedation</li>
                  <li>An incision is made inside the nose</li>
                  <li>Deviated portions of cartilage and bone are reshaped or removed</li>
                  <li>The septum is repositioned to the center</li>
                  <li>No external incisions or visible scars</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  Septoplasty is usually completed as a day-care surgery, allowing patients to return home the same day.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Recovery After Septoplasty */}
            <AccordionItem value="recovery">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Recovery After Septoplasty</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Recovery after septoplasty is gradual and generally well tolerated with proper post-operative care.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Most patients return home on the same day</li>
                  <li>Nasal swelling, congestion, and mild discomfort are common initially</li>
                  <li>Improvement in breathing is noticed as healing progresses</li>
                  <li>Complete recovery usually takes a few weeks</li>
                </ul>
                <p className="text-base leading-relaxed mt-4 font-medium">
                  Post-surgery care instructions include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Avoid strenuous activities for a few weeks</li>
                  <li>Use prescribed nasal sprays or saline rinses</li>
                  <li>Attend scheduled follow-up appointments</li>
                  <li>Keep the nasal area clean and protected</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Effectiveness of Septoplasty */}
            <AccordionItem value="effectiveness">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Effectiveness of Septoplasty</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Septoplasty is highly effective for correcting nasal obstruction caused by septal deviation.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Significant improvement in nasal airflow and breathing</li>
                  <li>Reduction in nasal congestion and sinus infections</li>
                  <li>Relief from sleep disturbances and snoring</li>
                  <li>Enhanced overall comfort and quality of life</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Who is Eligible for Septoplasty? */}
            <AccordionItem value="eligibility">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Who is Eligible for Septoplasty?</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  You may be a suitable candidate for septoplasty if you experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Difficulty breathing through one or both nostrils</li>
                  <li>Chronic sinusitis related to deviated nasal septum</li>
                  <li>Sleep problems caused by nasal blockage</li>
                  <li>Frequent nosebleeds or persistent nasal discomfort</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  A detailed ENT evaluation at Eyehealthcure  ensures accurate diagnosis and suitability for surgery.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Benefits of Septoplasty */}
            <AccordionItem value="benefits">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Benefits of Septoplasty</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Restores normal nasal breathing</li>
                  <li>Improves sleep quality and reduces snoring</li>
                  <li>Relieves chronic nasal congestion</li>
                  <li>Reduces frequency of sinus infections</li>
                  <li>Enhances oxygen intake and overall health</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Risks and Side Effects of Septoplasty */}
            <AccordionItem value="risks">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Risks and Side Effects of Septoplasty</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Septoplasty is generally safe, but some temporary effects may occur during the healing period.
                </p>
                <p className="text-base leading-relaxed mb-2 font-medium">Common side effects:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Temporary nasal swelling or congestion</li>
                  <li>Mild pain or bruising</li>
                  <li>Minor nasal bleeding</li>
                </ul>
                <p className="text-base leading-relaxed mb-2 font-medium">Rare complications:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Infection</li>
                  <li>Changes in nasal shape</li>
                  <li>Persistent nasal obstruction (rare)</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  Following post-operative care instructions and choosing an experienced ENT surgeon significantly reduces these risks.
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
