import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Rhinoplasty() {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <header className="mb-5">
          <h1 className="text-3xl font-semibold mb-4">
            Rhinoplasty Surgery – Reshape Your Nose, Redefine Your Confidence
          </h1>
          <p className="text-lg leading-relaxed">
            Looking for the best rhinoplasty treatment in India? At{" "}
            <strong>Eyehealthcure</strong>, we offer advanced rhinoplasty
            (nose reshaping surgery) designed to enhance facial harmony while
            preserving a natural appearance. Rhinoplasty may be performed for
            cosmetic improvement or to correct breathing difficulties caused by
            structural nasal issues.
          </p>
          <p className="mt-4 leading-relaxed">
            Our experienced ENT and cosmetic surgeons focus on both aesthetics and
            nasal function to deliver balanced, safe, and confidence-enhancing
            results with minimal downtime.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full">
          {/* What is Rhinoplasty? */}
          <AccordionItem value="what-is-rhinoplasty">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">What is Rhinoplasty?</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p className="leading-relaxed">
                Rhinoplasty is a surgical procedure used to change the shape, size, or
                structure of the nose for cosmetic or functional reasons. It can help
                improve facial symmetry, correct congenital defects, repair injuries,
                or address breathing problems caused by nasal structural abnormalities.
              </p>
              <p className="mt-4">
                At Eyehealthcure, modern rhinoplasty techniques ensure:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>High safety standards</li>
                <li>Faster healing and recovery</li>
                <li>Natural-looking, long-term results</li>
                <li>Improved nasal airflow when required</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Rhinoplasty Procedure Details */}
          <AccordionItem value="procedure-details">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Rhinoplasty Procedure Details</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p className="mb-4">
                Rhinoplasty involves precise reshaping of the nasal bone and cartilage
                to suit the patient’s facial features and medical needs.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Duration:</strong> Approximately 1–2 hours
                </li>
                <li>
                  <strong>Anesthesia:</strong> Local or general anesthesia, depending
                  on the case
                </li>
                <li>
                  <strong>Surgical Technique:</strong> Minimal incisions, often hidden
                  inside the nose
                </li>
                <li>
                  <strong>Precision:</strong> Careful reshaping of bone and cartilage
                  for balanced results
                </li>
                <li>
                  <strong>Type of Surgery:</strong> Usually performed as a day-care
                  (outpatient) procedure
                </li>
              </ul>
              <p className="mt-4">
                Advanced techniques help ensure minimal scarring, improved aesthetics,
                and reduced recovery time.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Recovery After Rhinoplasty */}
          <AccordionItem value="recovery">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Recovery After Rhinoplasty</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>Patients are usually discharged the same day</li>
                <li>Light activities can be resumed within 2–3 days</li>
                <li>Mild swelling, bruising, or nasal congestion is common initially</li>
                <li>Visible improvement appears within 7–10 days</li>
                <li>
                  Final nose shape gradually refines over the next few months
                </li>
              </ul>
              <p className="mt-4">
                Discomfort is typically mild and managed with prescribed medications
                and post-operative care instructions.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Effectiveness of Rhinoplasty */}
          <AccordionItem value="effectiveness">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Effectiveness of Rhinoplasty</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p className="mb-4">
                Rhinoplasty has a high success rate (over 90%), with most patients
                reporting satisfaction in both appearance and nasal function.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enhances facial symmetry and nasal aesthetics</li>
                <li>Corrects breathing issues caused by structural defects</li>
                <li>Long-lasting and stable results</li>
                <li>Low risk of complications with experienced surgeons</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Who is Eligible for Rhinoplasty? */}
          <AccordionItem value="eligibility">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Who is Eligible for Rhinoplasty?</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>18 years or older with good general health</li>
                <li>Desire to improve nose shape, size, or symmetry</li>
                <li>Breathing difficulty due to nasal structural problems</li>
                <li>Realistic expectations from the surgery</li>
                <li>No active skin infections or uncontrolled medical conditions</li>
              </ul>
              <p className="mt-4">
                A detailed evaluation at Eyehealthcure helps determine the most
                suitable surgical approach.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Benefits of Rhinoplasty Surgery */}
          <AccordionItem value="benefits">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Benefits of Rhinoplasty Surgery</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <ul className="list-disc pl-6 space-y-2">
                <li>Day-care surgery with no hospital stay</li>
                <li>Quick recovery and minimal discomfort</li>
                <li>Improved nasal appearance and facial balance</li>
                <li>Enhanced breathing and nasal function when required</li>
                <li>Long-lasting results with fewer after-effects</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Risks and Side Effects of Rhinoplasty */}
          <AccordionItem value="risks">
            <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
              <h2 className="text-xl font-semibold">Risks and Side Effects of Rhinoplasty</h2>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p className="mb-4">
                Rhinoplasty is generally safe when performed by skilled surgeons, but
                some temporary effects may occur.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mild swelling, bruising, or nasal congestion</li>
                <li>Temporary numbness around the nose</li>
                <li>Rare risks of bleeding, infection, or scarring</li>
                <li>In very few cases, revision surgery may be required</li>
              </ul>
              <p className="mt-4">
                Choosing an experienced surgeon and following post-operative care
                instructions significantly reduces risks and ensures optimal results.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
