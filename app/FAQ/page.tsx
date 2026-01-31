import Navbar from '@/components/Navbar'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from '@/components/Footer'

const FAQPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow flex flex-col justify-center items-center py-12 px-4'>
        <h1 className='text-center font-bold text-3xl mb-10'>Frequently Asked Questions</h1>
        <Accordion
          type="single"
          collapsible
          defaultValue="Q1"
          className="w-full max-w-3xl p-5"
        >
          <AccordionItem value="Q1">
            <AccordionTrigger className='text-xl font-medium hover:no-underline'>
              What medical services does Eyehealthcure offer?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Eyehealthcure provides advanced medical treatments in the following specialties:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ophthalmology:</strong> LASIK, cataract treatment, and ICL procedures.</li>
                  <li><strong>ENT Care:</strong> Sinus treatment, septoplasty, tonsillectomy, and ear drum perforation solutions.</li>
                  <li><strong>Aesthetics:</strong> Rhinoplasty and gynecomastia treatment.</li>
                </ul>
                <p>Our team is dedicated to delivering high-quality, personalized care using the latest medical technologies.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Q2">
            <AccordionTrigger className='text-xl font-medium hover:no-underline'>
              How does Eyehealthcure ensure affordable treatment costs?
            </AccordionTrigger>
            <AccordionContent>
              <p>We use an asset-light model, partnering with both private and government hospitals to keep costs reasonable. Additionally, we offer flexible financial support options to make your treatment accessible and stress-free.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Q3">
            <AccordionTrigger className='text-xl font-medium hover:no-underline'>
              How does Eyehealthcure assist with insurance claims?
            </AccordionTrigger>
            <AccordionContent>
              <p>Our platform simplifies the insurance claim process with end-to-end assistance. We handle all necessary paperwork efficiently, so you can focus on your recovery without worrying about administrative hassles.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Q4">
            <AccordionTrigger className='text-xl font-medium hover:no-underline'>
              In which cities does Eyehealthcure operate?
            </AccordionTrigger>
            <AccordionContent>
              <p>Eyehealthcure collaborates with over 50+ NABH-approved hospitals in major cities, including Delhi-NCR, Mumbai, Pune, Bangalore, and more. We are continuously expanding our network to serve patients across India.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Q5">
            <AccordionTrigger className='text-xl font-medium hover:no-underline'>
              Are the doctors and hospitals partnered with Eyehealthcure reliable?
            </AccordionTrigger>
            <AccordionContent>
              <p>Yes, we partner with highly experienced doctors and NABH-approved hospitals equipped with state-of-the-art technologies. Our partnerships ensure the highest standards of care and reliability for all our patients.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  )
}

export default FAQPage
