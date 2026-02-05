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
  title: {
    default: "EyeHealthCure | Best Eye Health Solutions in India",
    template: "%s | EyeHealthCure",
  },
  description:
    "EyeHealthCure provides expert eye health solutions in India. Discover natural treatments, expert tips, and products for optimal eye care in Mumbai, Delhi, Bangalore, and across India.",
  keywords: [
    "eye health solutions",
    "best eye care in India",
    "natural eye treatments",
    "expert eye care tips",
    "eye health products",
    "eye care in Mumbai",
    "eye care in Delhi",
    "eye care in Bangalore",
    "affordable eye treatments",
    "optimal eye health",
    "best lasik surgery",
    "cataract treatment",
    "lasik surgery in mumbai",
    "lasik surgery in pune",
    "lasik surgery in banglore",
  ],
  authors: [{ name: "Eyehealthcure", url: "https://eyehealthcure.com" }],
  creator: "Eyehealthcure",
  publisher: "Eyehealthcure",
  openGraph: {
    title: "EyeHealthCure | Best Eye Health Solutions in India",
    description:
      "Discover expert eye health solutions in India. EyeHealthCure offers natural treatments, tips, and products for optimal eye care.",
    url: "https://eyehealthcure.com",
    siteName: "EyeHealthCure",
    images: [
      {
        url: "https://ik.imagekit.io/abdulhamid109/companyPics/logo.jpeg",
        width: 800,
        height: 600,
        alt: "EyeHealthCure - Best Eye Health Solutions in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    title: "EyeHealthCure | Best Eye Health Solutions in India",
    description:
      "Discover expert eye health solutions in India. EyeHealthCure offers natural treatments, tips, and products for optimal eye care.",
    images: ["https://ik.imagekit.io/abdulhamid109/companyPics/logo.jpeg"],
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
    "geo.position": "19.0760;72.8777", // Latitude and Longitude of Mumbai
    "ICBM": "19.0760, 72.8777",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add structured data for AEO */}
        
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                "name": "EyeHealthCure",
                "description": "EyeHealthCure provides the best eye health solutions in India. Discover natural treatments, expert tips, and products for optimal eye care.",
                "url": "https://eyehealthcure.com",
                "telephone": "+91-9137909447",
                "email": "eyehealthcure@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Mumbai",
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
                "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00",
                "sameAs": [
                  "https://www.facebook.com/share/1B2ZdSDr9P/",
                  "https://www.facebook.com/share/1AcZDXLns5/",
                  "https://www.instagram.com/eyehealthcure/",
                ],
                "areaServed": [
                  {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": "19.0760",
                      "longitude": "72.8777"
                    },
                    "geoRadius": "1000000" // Radius in meters (covers most of India)
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
                ]
              }
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
