import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CataractTreatmentPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-16 lg:px-24">
        <section className="max-w-5xl mx-auto">
          <header className="mb-5">
            <h1 className="text-3xl md:text-3xl font-semibold mb-4">
              Best Cataract Treatment in India – Restore Clear Vision
            </h1>
            <p className="text-base leading-relaxed text-gray-600">
              Looking for the best cataract treatment in India? At Eyevasc Solutions, we provide advanced cataract surgery that is safe, fast, and highly effective in restoring clear vision affected by cataracts. Using the latest minimally invasive techniques, our cataract treatment offers permanent visual clarity with minimal pain, no hospital stay, and quick recovery.
            </p>
          </header>

          <section className="mb-5">
            <p className="text-base leading-relaxed text-gray-700">
              Our experienced eye specialists focus on precision, safety, and long-term results to help patients enjoy a clear and confident life without visual limitations.
            </p>
          </section>

          <Accordion type="single" collapsible className="w-full">
            {/* What is Cataract Treatment? */}
            <AccordionItem value="what-is-cataract">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">What is Cataract Treatment?</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Cataract treatment is a minor yet highly effective surgical procedure used to remove the cloudy natural lens of the eye and replace it with a clear artificial lens. Cataracts commonly develop with age and cause blurred or cloudy vision, glare, and difficulty in daily activities.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  At Eyevasc Solutions, we use advanced cataract surgery techniques that ensure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Painless and stitchless treatment</li>
                  <li>Faster healing</li>
                  <li>Long-lasting improvement in vision</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Cataract Surgery Procedure Details */}
            <AccordionItem value="procedure-details">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Cataract Surgery Procedure Details</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Eyevasc Solutions uses advanced phacoemulsification cataract surgery, the most trusted modern technique for cataract removal.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>The cloudy lens is gently broken using ultrasound technology</li>
                  <li>The affected lens is removed and replaced with a high-quality intraocular lens (IOL)</li>
                  <li>The procedure is minimally invasive and stitchless</li>
                  <li>Performed under local anesthesia</li>
                  <li>Takes approximately 20–30 minutes</li>
                  <li>Conducted as an outpatient (day-care) surgery</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  Patients can return home the same day, ensuring a smooth and comfortable experience.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Recovery After Cataract Surgery */}
            <AccordionItem value="recovery">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Recovery After Cataract Surgery</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Recovery after modern cataract surgery is usually quick and uncomplicated.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Noticeable vision improvement within 24–48 hours</li>
                  <li>Most patients resume daily activities within a few days</li>
                  <li>Minimal pain and discomfort due to advanced techniques</li>
                  <li>Complete healing typically occurs within one week</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  At Eyevasc Solutions, our medical team provides clear post-surgery care instructions to ensure safe healing and long-term visual clarity.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Effectiveness of Cataract Treatment */}
            <AccordionItem value="effectiveness">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Effectiveness of Cataract Treatment</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Cataract surgery at Eyevasc Solutions has a success rate of over 95%.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Significant improvement in vision clarity</li>
                  <li>Reduced dependence on glasses in many cases</li>
                  <li>Long-lasting and stable visual results</li>
                  <li>Lower risk of complications compared to older surgical methods</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  With advanced technology and premium lens implants, cataract treatment delivers reliable and safe results.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Cataract Surgery Eligibility */}
            <AccordionItem value="eligibility">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Cataract Surgery Eligibility</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  You may be eligible for cataract treatment if you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Are generally 50 years or older with diagnosed cataracts</li>
                  <li>Experience blurry, cloudy, or dim vision affecting daily life</li>
                  <li>Have difficulty reading, driving, or seeing clearly at night</li>
                  <li>Do not have active eye infections or uncontrolled medical conditions</li>
                  <li>Seek long-term vision improvement through advanced surgical care</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  A detailed eye examination at Eyevasc Solutions helps determine the most suitable treatment approach.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Benefits of Cataract Treatment */}
            <AccordionItem value="benefits">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Benefits of Cataract Treatment</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Painless and stitchless surgery</li>
                  <li>Day-care procedure with no hospital stay</li>
                  <li>Faster recovery and minimal downtime</li>
                  <li>Long-lasting clear vision and improved quality of life</li>
                  <li>Reduced risk of infection and complications</li>
                  <li>Safe, effective, and comfortable treatment using modern technology</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Risks and Side Effects of Cataract Surgery */}
            <AccordionItem value="risks">
              <AccordionTrigger className="border p-4 rounded-lg hover:bg-blue-50">
                <h2 className="text-xl font-semibold">Risks and Side Effects of Cataract Surgery</h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
                <p className="text-base leading-relaxed mb-4">
                  Cataract surgery is very safe, but some temporary effects may occur:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Mild discomfort, itching, or irritation during early healing</li>
                  <li>Temporary glare, halos, or light sensitivity</li>
                  <li>Rare risks of infection, inflammation, or lens-related issues</li>
                  <li>Occasional minor vision disturbances, usually correctable with follow-up care</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  At Eyevasc Solutions, patient safety is our top priority, supported by expert surgeons and comprehensive post-operative care.
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
