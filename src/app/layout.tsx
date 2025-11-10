import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://serviwo.com";
const siteName = "Serviwo - Web Development Services";
const siteDescription = "Professional web development services specializing in CRM solutions, healthcare applications, and custom websites for schools and businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Web Developer | Full Stack Developer Portfolio",
    template: "%s | Serviwo"
  },
  description: siteDescription,
  keywords: [
    "web developer",
    "full stack developer",
    "CRM development",
    "healthcare websites",
    "school websites India",
    "custom web applications",
    "Next.js developer",
    "React developer",
    "TypeScript developer"
  ],
  authors: [{ name: "Serviwo" }],
  creator: "Serviwo",
  publisher: "Serviwo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Web Developer | Full Stack Developer Portfolio",
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/serviwo.png`,
        width: 1200,
        height: 630,
        alt: "Serviwo - Professional Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer | Full Stack Developer Portfolio",
    description: siteDescription,
    images: [`${siteUrl}/serviwo.png`],
    creator: "@serviwo",
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
  verification: {
    // Add your verification tokens here when you get them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

