"use client"
import Navbar from '@/components/Navbar';
import axios, { AxiosError } from 'axios';
// import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';



const Page = () => {

  

  return (
    <div className='min-h-screen bg-gradient-to-br bg-[url(/bgimage.png)] bg-cover bg-repeat-none h-[250vh] from-blue-50 via-white to-blue-50'>
      <Navbar />

      {/* Hero Section */}
      <div id='home' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Expert Eye & Vascular Care, <span className="text-blue-600">When You Need It</span>
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              At EyeVasc Solution, we combine advanced technology with compassionate care to ensure the best outcomes for your health.
            </p>

            {/* Features */}
            <div className="space-y-5 mt-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg mt-0.5">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800">24/7 Emergency Care</h3>
                  <p className="text-sm text-gray-600 mt-1">Our specialists are available round the clock for your urgent needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg mt-0.5">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800">Free Expert Consultation</h3>
                  <p className="text-sm text-gray-600 mt-1">Get a no-obligation consultation with our top doctors, anywhere in India.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg mt-0.5">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800">In-Person & Online Appointments</h3>
                  <p className="text-sm text-gray-600 mt-1">Consult with our experienced doctors from home or at our clinics.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg font-medium text-gray-800">
                Your <span className="text-blue-600">Health</span>, Our <span className="text-blue-600">Priority</span>.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/dr.jpg"
                alt="EyeVasc Solution doctor consultation"
                className="rounded-lg shadow-xl w-full max-w-md h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md border border-gray-100">
                <div className="text-yellow-500 font-bold text-xl">★★★★★</div>
                <p className="text-xs text-gray-600 mt-0.5">Trusted by 10,000+ patients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600 mt-1.5">Expert Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600 mt-1.5">Specialized Treatments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600 mt-1.5">Cities Across India</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Ready to Take Control of Your Health?</h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Book your free consultation today and experience the EyeVasc Solution difference.
          </p>
          <div className="flex justify-center mt-6">
            <Link href={"/booknow"} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Free Appointment
            </Link>
          </div>
        </div>
      </div>


      {/* our treatment */}
      <section id='treatments' className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Specialized Treatments
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Comprehensive, advanced care tailored to your needs by our expert specialists.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {[
        { name: "Lasik Treatment", emoji: "👁️", href: "/lasik" },
        { name: "Cataract Surgery", emoji: "🌟", href: "/cataract" },
        { name: "Sinus Treatment", emoji: "👃", href: "/Sinus" },
        { name: "Tonsillectomy", emoji: "🏥", href: "/Tonsillectomy" },
        { name: "Septoplasty", emoji: "🩺", href: "/Septoplasty" },
        { name: "Ear Perforation", emoji: "🎧", href: "/Ear" },
        { name: "Rhinoplasty", emoji: "👃", href: "/Rhinoplasty" },
        { name: "Gynecomastia", emoji: "💪", href: "/Gynecomastia" },
      ].map((treatment, i) => (
        <Link
          key={i}
          href={treatment.href}
          className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden hover:scale-105 hover:transition-all hover:duration-200 hover:shadow-blue-200"
        >
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
              <span className="text-3xl">{treatment.emoji}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
              {treatment.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>



      
      <section id='insurance' className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Insurance Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading insurance providers to ensure you receive the best care and coverage.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 ">
            {[
              "Acko General Insurance",
        "Aditya Birla Health Insurance",
        "Bajaj Allianz General Insurance",
        "Bharti AXA General Insurance",
        "Care Health Insurance (Religare)",
        "Cholamandalam MS General Insurance",
        "Edelweiss General Insurance",
        "Future Generali India Insurance",
        "Go Digit General Insurance",
        "HDFC ERGO General Insurance",
        "ICICI Lombard General Insurance",
        "Kotak Mahindra General Insurance",
        "IFFCO TOKIO General Insurance",
        "Liberty General Insurance",
        "Magma HDI General Insurance",
        "Manipal Cigna Health Insurance",
        "Max Bupa Health Insurance",
        "Navi General Insurance",
        "National Insurance Company",
        "Reliance General Insurance",
        "Royal Sundaram General Insurance",
        "SBI General Insurance",
        "Star Health and Allied Insurance",
        "Tata AIG General Insurance",
        "The New India Assurance Company",
        "The Oriental Insurance Company",
        "United India Insurance Company",
        "Universal Sompo General Insurance"
            ].map((partner, i) => (
              <div
                key={i}
                className="p-4 overflow-hidden hover:scale-105 hover:transition-all hover:duration-200 hover:shadow-blue-200 bg-white rounded-lg shadow-sm text-center hover:shadow-md transition-all"
              >
                <p className="font-medium text-gray-800">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id='about' className="py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To empower patients by providing India&apos;s most trusted and comprehensive platform for all elective surgeries, ensuring access to top-tier medical expertise and personalized care.      </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To transform lives by making advanced, affordable, and high-quality healthcare accessible to everyone. We strive to help every individual live a healthier, longer, and happier life through expert medical solutions and compassionate support.      </p>
          </div>
        </div>
      </section>






      <div className='bg-blue-50 py-12 md:py-16 mt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10'>
            Our Values
          </h3>
          <div className='text-center text-black font-sans p-2'>
            At Eyevasc Solutions, we are committed to transparency, integrity, and accountability in every aspect of our care. We believe in building trust through fairness and inclusivity, ensuring that everyone has access to high-quality healthcare. Your well-being is our priority, and we strive to deliver compassionate, world-class medical solutions tailored to your needs
          </div>

          <div className='w-full max-w-4xl mx-auto px-4 mb-5'>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000
                })
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6 md:p-8 text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Passion</h3>
                      <p className="text-sm md:text-base text-gray-600">Dedication to improving lives with exceptional care.</p>
                    </div>
                  </Card>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6 md:p-8 text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Integrity</h3>
                      <p className="text-sm md:text-base text-gray-600">Building trust through honesty and fairness.</p>
                    </div>
                  </Card>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6 md:p-8 text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Transparency</h3>
                      <p className="text-sm md:text-base text-gray-600">Always honest and upfront in all we do.</p>
                    </div>
                  </Card>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6 md:p-8 text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Accountability</h3>
                      <p className="text-sm md:text-base text-gray-600">Taking ownership and delivering promises.</p>
                    </div>
                  </Card>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6 md:p-8 text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Keep Promises</h3>
                      <p className="text-sm md:text-base text-gray-600">Ensuring trust through commitment and action.</p>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>


          {/* Features Section */}
          <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Choose Us?
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Experience the difference with our patient-centered approach and advanced medical care.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ">
      {[
        { name: "Quick Discharge", emoji: "⚡", desc: "Minimize hospital stay with our efficient processes." },
        { name: "Advanced Equipment", emoji: "🔬", desc: "State-of-the-art technology for precise diagnosis and treatment." },
        { name: "Expert Specialists", emoji: "👨‍⚕️", desc: "Highly qualified doctors with years of specialized experience." },
        { name: "Affordable Treatment", emoji: "💰", desc: "Quality care at competitive prices, ensuring value for every patient." },
        { name: "Painless Procedures", emoji: "😊", desc: "Modern techniques to ensure comfort and minimal discomfort." },
        { name: "No Cost EMI’s", emoji: "💳", desc: "Flexible payment options to make healthcare accessible." },
        { name: "All Insurance Covered", emoji: "🛡️", desc: "Seamless insurance processing for hassle-free treatment." },
        { name: "State-of-Art", emoji: "🏆", desc: "Internationally recognized facilities and best practices." },
      ].map((feature, i) => (
        <div
          key={i}
          className="group p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 hover:transition-all hover:duration-200 hover:shadow-blue-200"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
            <span className="text-3xl">{feature.emoji}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 text-center mb-2 group-hover:text-blue-600">
            {feature.name}
          </h3>
          <p className="text-sm text-gray-600 text-center">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



          <section id='contact' className="py-16 bg-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                Have questions? We&apos;re here to help. Reach out to us anytime and our team will get back to you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Call Us", detail: "+91 8286745659", sub: "Available 24/7", icon: "📞" },
                  { title: "Email Us", detail: "info@eyevascsolution.com", sub: "Response within 24 hours", icon: "✉️" },
                  { title: "Visit Us", detail: "Multiple Locations", sub: "Mumbai, Delhi, Bangalore, Pune", icon: "📍" },
                ].map((contact, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-105 hover:transition-all hover:duration-200 hover:shadow-blue-200"
                  >
                    <div className="text-4xl mb-4">{contact.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                    <p className="text-blue-600 font-medium">{contact.detail}</p>
                    <p className="text-sm text-gray-500">{contact.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>



        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Page;