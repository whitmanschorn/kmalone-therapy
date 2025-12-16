import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Kathryn Malone Therapy - Licensed Professional Counselor",
  description: "Professional mental health therapy services in a compassionate, supportive environment. Specializing in anxiety, depression, trauma, and life transitions.",
  keywords: ["therapy", "mental health", "LPC", "counseling", "anxiety", "depression", "trauma"],
  authors: [{ name: "Kathryn Malone, LPC" }],
  openGraph: {
    title: "Kathryn Malone Therapy",
    description: "Professional mental health therapy services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
