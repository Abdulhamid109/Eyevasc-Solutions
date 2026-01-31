import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LasikTreatmentPage() {
  return (
    <div className="">
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-16 lg:px-24">
        <section className="max-w-5xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-3xl font-semibold mb-4">
              LASIK Treatment in India – Clear Vision for a Confident Life
            </h1>
            <p className="text-base leading-relaxed text-gray-600">
              Looking for advanced and reliable LASIK treatment in India? At Eyehealthcure, we offer world-class LASIK eye surgery using advanced laser technology to correct vision problems such as nearsightedness (myopia), farsightedness (hypermetropia), and astigmatism. LASIK is a safe, quick, and minimally invasive eye procedure that provides long-term vision clarity with minimal discomfort and fast recovery.
            </p>
          </header>

          <Accordion type="single" collapsible className="w-full">
            {/* What is LASIK Eye Surgery? */}
            <AccordionItem value="what-is-lasik">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">What is LASIK Eye Surgery?</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  LASIK (Laser-Assisted In Situ Keratomileusis) is one of the most advanced laser vision correction procedures available today. It works by reshaping the cornea so that light entering the eye is properly focused on the retina.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  At Eyehealthcure, we use state-of-the-art LASIK laser technology to ensure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Painless treatment</li>
                  <li>High accuracy</li>
                  <li>Faster recovery</li>
                  <li>Long-lasting vision improvement</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* LASIK Surgery Procedure Details */}
            <AccordionItem value="procedure-details">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">LASIK Surgery Procedure Details</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  The LASIK procedure is performed using highly precise and computer-guided lasers to reshape the cornea accurately.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Performed under local (topical) anesthesia</li>
                  <li>Takes approximately 20–30 minutes</li>
                  <li>Conducted as an outpatient procedure</li>
                  <li>No stitches required in most cases</li>
                  <li>Patients can return home the same day</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  This makes LASIK a comfortable and convenient option for vision correction.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Recovery After LASIK Surgery */}
            <AccordionItem value="recovery">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Recovery After LASIK Surgery</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Recovery after LASIK eye surgery is quick and smooth for most patients.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Normal activities can usually be resumed within 1–2 days</li>
                  <li>Vision improvement is noticed within a few hours</li>
                  <li>Complete healing typically takes about one week</li>
                  <li>Mild discomfort or dryness may occur temporarily</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  Our team at Eyehealthcure provides detailed post-operative care instructions for the best results.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Effectiveness of LASIK Treatment */}
            <AccordionItem value="effectiveness">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Effectiveness of LASIK Treatment</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  LASIK eye surgery has a success rate of over 95%, making it one of the most effective vision correction procedures available.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Significant improvement in vision quality</li>
                  <li>Reduced or complete elimination of glasses and contact lenses</li>
                  <li>Long-term or near-permanent results</li>
                  <li>Fewer complications compared to traditional vision correction methods</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* LASIK Eligibility Criteria */}
            <AccordionItem value="eligibility">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">LASIK Eligibility Criteria</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  You may be eligible for LASIK surgery if you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Are 18 years or older with a stable vision prescription</li>
                  <li>Have myopia, hypermetropia, or astigmatism within treatable limits</li>
                  <li>Want freedom from glasses or contact lenses</li>
                  <li>Have healthy corneas with sufficient thickness</li>
                  <li>Do not have active eye infections or serious eye diseases</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  A complete eye evaluation at Eyehealthcure helps determine your suitability for LASIK treatment.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Benefits of LASIK Eye Surgery */}
            <AccordionItem value="benefits">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Benefits of LASIK Eye Surgery</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Safe and painless procedure</li>
                  <li>No stitches and no hospital admission</li>
                  <li>Fast recovery with minimal downtime</li>
                  <li>Long-term vision correction</li>
                  <li>Lower risk of infection compared to conventional eye surgeries</li>
                  <li>Improved quality of life and visual freedom</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Risks and Side Effects of LASIK */}
            <AccordionItem value="risks">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Risks and Side Effects of LASIK</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  LASIK is generally safe, but some temporary side effects may occur:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Mild eye dryness or irritation for a few days</li>
                  <li>Temporary glare, halos, or light sensitivity, especially at night</li>
                  <li>Rare risks of under-correction, over-correction, or infection (minimized with proper care and follow-ups)</li>
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
