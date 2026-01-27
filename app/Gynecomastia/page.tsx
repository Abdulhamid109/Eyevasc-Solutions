import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Gynecomastia() {
  return (
    <div>
        <Navbar/>
        <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Gynecomastia Treatment – Restore a Flat, Masculine Chest
        </h1>
        <p className="text-lg leading-relaxed">
          Gynecomastia is a condition in which male breast tissue becomes
          enlarged due to hormonal imbalance, obesity, genetics, or certain
          medications. It may cause physical discomfort as well as emotional
          distress and self-consciousness.
        </p>
        <p className="mt-4 leading-relaxed">
          At <strong>Eyevasc Solutions</strong>, we offer advanced gynecomastia
          treatment in India to safely reduce excess breast tissue and restore a
          firm, masculine chest contour with natural and long-lasting results.
          Each procedure is personalized based on body type, severity, and
          patient expectations.
        </p>
      </header>

      {/* Procedure Details */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Gynecomastia Surgery Procedure Details
        </h2>
        <p className="mb-4">
          Gynecomastia treatment may involve one or a combination of the
          following surgical techniques, depending on the nature and severity
          of the condition.
        </p>

        <h3 className="text-xl font-semibold mb-2">Surgical Techniques</h3>

        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li>
            <strong>Liposuction:</strong> Removes excess fatty tissue through
            small, discreet incisions. Best suited for mild cases with minimal
            glandular tissue.
          </li>
          <li>
            <strong>Excision Surgery:</strong> Removes dense glandular tissue and
            excess skin. In severe cases, repositioning of the nipple or areola
            may be required.
          </li>
          <li>
            <strong>Combination Surgery:</strong> A combination of liposuction
            and excision for moderate to severe gynecomastia, offering optimal
            contouring results.
          </li>
        </ul>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Anesthesia:</strong> General anesthesia or local anesthesia
            with sedation
          </li>
          <li>
            <strong>Duration:</strong> Approximately 1–3 hours, depending on
            complexity
          </li>
        </ul>
      </section>

      {/* Recovery */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Recovery After Gynecomastia Surgery
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Swelling, bruising, and mild discomfort are common initially</li>
          <li>
            A compression garment is worn for several weeks to support healing
          </li>
          <li>Light activities and desk work can usually resume within 7 days</li>
          <li>Strenuous exercise should be avoided for 4–6 weeks</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Results Timeline</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Visible improvement is often seen immediately after surgery</li>
          <li>
            Final results become apparent within 3–6 months as swelling
            completely subsides
          </li>
        </ul>
      </section>

      {/* Effectiveness */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Effectiveness of Gynecomastia Treatment
        </h2>
        <p className="mb-4">
          Gynecomastia surgery provides long-term and often permanent results
          when performed by experienced surgeons.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Creates a flatter and more contoured chest</li>
          <li>Eliminates physical discomfort and self-consciousness</li>
          <li>Improves confidence and comfort in fitted clothing</li>
          <li>High patient satisfaction rates</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Eligibility for Gynecomastia Surgery
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Persistent breast enlargement not improved by exercise or diet</li>
          <li>Good overall physical health</li>
          <li>Non-smoker or willing to stop smoking during recovery</li>
          <li>Realistic expectations regarding surgical outcomes</li>
        </ul>
        <p className="mt-4">
          A comprehensive evaluation at Eyevasc Solutions determines the most
          appropriate treatment plan.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Benefits of Gynecomastia Treatment
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Firmer, flatter, and more masculine chest appearance</li>
          <li>Improved self-confidence and body image</li>
          <li>Minimally invasive options with reduced scarring</li>
          <li>Faster recovery using advanced surgical techniques</li>
          <li>Long-lasting results with a healthy lifestyle</li>
        </ul>
      </section>

      {/* Risks */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Risks and Side Effects of Gynecomastia Surgery
        </h2>
        <p className="mb-4">
          Gynecomastia treatment is generally safe, though temporary side
          effects may occur.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Swelling, bruising, or mild numbness</li>
          <li>Temporary discomfort during healing</li>
          <li>Rare risks of infection, uneven contours, or noticeable scarring</li>
        </ul>
        <p className="mt-4">
          Following post-operative care instructions and attending regular
          follow-up visits help minimize risks and ensure optimal results.
        </p>
      </section>
    </div>
    <Footer/>
    </div>
  );
}
