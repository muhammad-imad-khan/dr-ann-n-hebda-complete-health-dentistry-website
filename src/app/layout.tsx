import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ann N. Hebda: Complete Health Dentistry | Dentist",
  description: "Dr. Ann N. Hebda: Complete Health Dentistry is a dental practice renowned for its comprehensive approach to oral health care. With a perfect 5-star rating ",
  keywords: ["dentist in [Location]","cosmetic dentistry [Location]","family dentist [Location]"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
