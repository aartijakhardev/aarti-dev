import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get Your Website Built",
  description: "Get in touch to discuss your website project. Affordable web development solutions for schools, businesses, and healthcare organizations. Free consultation available.",
  openGraph: {
    title: "Contact Us | Get Your Website Built",
    description: "Get in touch to discuss your website project. Affordable web development solutions for schools, businesses, and healthcare organizations. Free consultation available.",
    url: "https://serviwo.com/contact",
    type: "website",
    images: [
      {
        url: "https://serviwo.com/serviwo.png",
        width: 1200,
        height: 630,
        alt: "Contact Serviwo for Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get Your Website Built",
    description: "Get in touch to discuss your website project. Affordable web development solutions for schools, businesses, and healthcare organizations.",
    images: ["https://serviwo.com/serviwo.png"],
  },
  alternates: {
    canonical: "https://serviwo.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ContactForm />
    </div>
  );
}

