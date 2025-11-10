import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Web Development Services | Custom Websites",
  description: "Expert web developer offering custom websites, CRM solutions, school management systems, healthcare applications, and restaurant platforms. Affordable pricing starting from ₹5,000.",
  openGraph: {
    title: "Professional Web Development Services | Custom Websites",
    description: "Expert web developer offering custom websites, CRM solutions, school management systems, healthcare applications, and restaurant platforms. Affordable pricing starting from ₹5,000.",
    url: "https://serviwo.com",
    type: "website",
    images: [
      {
        url: "https://serviwo.com/serviwo.png",
        width: 1200,
        height: 630,
        alt: "Serviwo Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Development Services | Custom Websites",
    description: "Expert web developer offering custom websites, CRM solutions, school management systems, healthcare applications, and restaurant platforms.",
    images: ["https://serviwo.com/serviwo.png"],
  },
  alternates: {
    canonical: "https://serviwo.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <CTA />
    </>
  );
}

