import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyehealthcure.com"),
  title: {
    default: "Eyehealthcure | Expert Eye & Health Care Solutions in India",
    template: "%s | Eyehealthcure",
  },
  description:
    "Eyehealthcure provides expert eye and health care solutions across India. Specialized treatments including LASIK, Cataract Surgery, ENT procedures, and more. 24/7 emergency care, free consultations, and all insurance accepted.",
  keywords: [
    "eye health solutions",
    "best eye care in India",
    "LASIK surgery India",
    "cataract surgery India",
    "eye care in Mumbai",
    "eye care in Delhi",
    "eye care in Bangalore",
    "eye care in Pune",
    "lasik surgery in mumbai",
    "lasik surgery in pune",
    "lasik surgery in bangalore",
    "cataract treatment",
    "sinus treatment",
    "tonsillectomy",
    "septoplasty",
    "rhinoplasty",
    "gynecomastia treatment",
    "ear perforation treatment",
    "affordable eye treatments",
    "24/7 emergency eye care",
    "free medical consultation India",
    "best ophthalmologist India",
    "ENT specialist India",
  ],
  authors: [{ name: "Eyehealthcure", url: "https://eyehealthcure.com" }],
  creator: "Eyehealthcure",
  publisher: "Eyehealthcure",
  openGraph: {
    title: "Eyehealthcure | Expert Eye & Health Care Solutions in India",
    description:
      "Expert eye and health care with advanced technology. LASIK, Cataract Surgery, ENT treatments. 24/7 care, free consultations across India.",
    url: "https://eyehealthcure.com",
    siteName: "Eyehealthcure",
    images: [
      {
        url: "https://eyehealthcure.com/dr.jpg",
        width: 1200,
        height: 630,
        alt: "Eyehealthcure - Expert Eye & Health Care Solutions",
      },
      {
        url: "https://ik.imagekit.io/abdulhamid109/companyPics/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Eyehealthcure Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyehealthcure | Expert Eye & Health Care Solutions in India",
    description:
      "Expert eye and health care with advanced technology. LASIK, Cataract Surgery, ENT treatments. 24/7 care, free consultations across India.",
    images: ["https://eyehealthcure.com/dr.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://eyehealthcure.com",
  },
  
  verification: {
    google: "DUT7_THw83wvn0v4eJjRyJ332y6wwhOocJZWtanwMlo",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive structured data for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://eyehealthcure.com/#organization",
    "name": "Eyehealthcure",
    "legalName": "Eyehealthcure",
    "description": "Eyehealthcure provides expert eye and health care solutions across India. Specialized treatments including LASIK, Cataract Surgery, ENT procedures, and more with 24/7 emergency care.",
    "url": "https://eyehealthcure.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ik.imagekit.io/abdulhamid109/companyPics/logo.jpeg",
      "width": 800,
      "height": 600
    },
    "image": "https://eyehealthcure.com/dr.jpg",
    "telephone": "+91-9137909447",
    "email": "eyehealthcure@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400043",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/share/1B2ZdSDr9P/",
      "https://www.facebook.com/share/1AcZDXLns5/",
      "https://www.instagram.com/eyehealthcure/"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City",
        "name": "Delhi"
      },
      {
        "@type": "City",
        "name": "Bangalore"
      },
      {
        "@type": "City",
        "name": "Pune"
      },
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "City",
        "name": "Kolkata"
      },
      {
        "@type": "City",
        "name": "Lucknow"
      }
    ],
    "medicalSpecialty": [
      "Ophthalmology",
      "Otolaryngology",
      "Plastic Surgery"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "LASIK Eye Surgery",
        "description": "Advanced laser eye surgery for vision correction"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Cataract Surgery",
        "description": "Modern cataract removal and lens replacement"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Sinus Treatment",
        "description": "Comprehensive sinus infection and inflammation treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Tonsillectomy",
        "description": "Surgical removal of tonsils"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Septoplasty",
        "description": "Nasal septum correction surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Rhinoplasty",
        "description": "Nose reshaping and reconstruction surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Gynecomastia Treatment",
        "description": "Male breast reduction surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Ear Perforation Treatment",
        "description": "Eardrum repair and reconstruction"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Consultation",
            "description": "No-obligation consultation with expert doctors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Care",
            "description": "Round-the-clock emergency medical services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Insurance Coverage",
            "description": "All major insurance providers accepted"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EMI Options",
            "description": "No-cost EMI payment plans available"
          }
        }
      ]
    }
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://eyehealthcure.com/#website",
    "url": "https://eyehealthcure.com",
    "name": "Eyehealthcure",
    "description": "Expert Eye & Health Care Solutions in India",
    "publisher": {
      "@id": "https://eyehealthcure.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://eyehealthcure.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb schema for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://eyehealthcure.com"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Structured Data - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="canonical" href="https://eyehealthcure.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}