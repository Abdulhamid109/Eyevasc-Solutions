import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EarPerforationTreatment() {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <header className="mb-5">
          <h1 className="text-3xl font-semibold mb-4">
            Eardrum Perforation Treatment – Safe & Effective Hearing Restoration
          </h1>
          <p className="text-lg leading-relaxed">
            Eardrum perforation, also known as a ruptured tympanic membrane, is a condition where a tear or hole develops in the thin tissue separating the ear canal from the middle ear. This condition can lead to hearing loss, ear pain, discharge, and recurrent ear infections if left untreated.
          </p>
          <p className="mt-4 leading-relaxed">
            At <strong>Eyevasc Solutions</strong>, we provide advanced eardrum perforation treatment using both non-surgical and surgical ENT techniques to restore hearing and protect long-term ear health.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full">
          {/* Common Symptoms of Eardrum Perforation */}
          <AccordionItem value="symptoms">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Common Symptoms of Eardrum Perforation</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>Sharp or sudden ear pain</li>
                <li>Reduced or muffled hearing</li>
                <li>Ear discharge (clear, bloody, or pus-like)</li>
                <li>Ringing in the ear (tinnitus)</li>
                <li>Dizziness or balance issues in severe cases</li>
              </ul>
              <p className="mt-3">
                Early diagnosis and treatment help prevent long-term complications.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Treatment Options for Eardrum Perforation */}
          <AccordionItem value="treatment-options">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Treatment Options for Eardrum Perforation</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p className="mb-4">
                Treatment depends on the size of the perforation, severity of symptoms, and level of hearing involvement.
              </p>

              <h3 className="text-lg font-semibold mb-2">
                Non-Surgical Treatment Options
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Observation for minor perforations that may heal naturally</li>
                <li>Antibiotic ear drops to prevent or treat infection</li>
                <li>Pain relievers to reduce discomfort</li>
                <li>Avoiding swimming and keeping the ear dry</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">
                Surgical Treatment Options
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Tympanoplasty:</strong> Surgical repair using tissue grafts to close the perforation and restore hearing
                </li>
                <li>
                  <strong>Myringoplasty:</strong> Minimally invasive repair for small perforations focusing only on the eardrum
                </li>
                <li>
                  <strong>Ossiculoplasty:</strong> Performed when middle ear bones are damaged to improve sound conduction
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Advanced ENT Techniques at Eyevasc Solutions */}
          <AccordionItem value="advanced-techniques">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Advanced ENT Techniques at Eyevasc Solutions</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>Laser-assisted eardrum repair for higher precision</li>
                <li>Endoscopic ear surgery for minimal invasiveness</li>
                <li>Modern equipment ensuring safety and high success rates</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Recovery and Aftercare */}
          <AccordionItem value="recovery">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Recovery and Aftercare</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>Healing time ranges from a few weeks to 1–2 months</li>
                <li>Regular follow-ups to monitor healing and hearing improvement</li>
                <li>Avoid loud noises and pressure changes such as flying or diving</li>
                <li>Keep the ear dry during the recovery period</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Effectiveness & Benefits of Treatment */}
          <AccordionItem value="effectiveness">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Effectiveness & Benefits of Treatment</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>Restores hearing ability</li>
                <li>Reduces recurrent ear infections</li>
                <li>Relieves ear pain and discomfort</li>
                <li>Improves balance and overall ear health</li>
                <li>Enhances quality of life</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Risks and Precautions */}
          <AccordionItem value="risks">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Risks and Precautions</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p className="mb-4">
                Eardrum repair procedures are generally safe when performed by experienced ENT specialists.
              </p>
              <h3 className="text-lg font-semibold mb-2">Common Side Effects</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Mild ear discomfort</li>
                <li>Temporary ear fullness or blocked sensation</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Rare Complications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infection</li>
                <li>Graft failure</li>
                <li>Persistent hearing issues (rare and treatable)</li>
              </ul>
              <p className="mt-4">
                Following post-treatment instructions and attending follow-up visits significantly reduces risks and ensures successful outcomes.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
