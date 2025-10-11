import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Me | Get Your Website Built",
  description: "Get in touch to discuss your website project. Affordable solutions for schools, businesses, and healthcare organizations.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ContactForm />
    </div>
  );
}

