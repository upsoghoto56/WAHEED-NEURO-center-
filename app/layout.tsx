import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dr. Muhammad Bilal Waheed | Best Neurologist in Faisalabad | Waheed Neuro & Stroke Centre",
  description:
    "Book an appointment with Dr. Muhammad Bilal Waheed, expert neurologist at Prime Care Hospital Faisalabad. 4.7 stars, 117+ reviews, stroke & neurology specialist. Call +92 330 9227583",
  keywords:
    "best neurologist Faisalabad, Dr Bilal Waheed, Waheed Neuro Stroke Centre, stroke doctor Faisalabad, neurology specialist, Prime Care Hospital Faisalabad",
  openGraph: {
    title: "Dr. Muhammad Bilal Waheed | Best Neurologist in Faisalabad | Waheed Neuro & Stroke Centre",
    description:
      "Book an appointment with Dr. Muhammad Bilal Waheed, expert neurologist at Prime Care Hospital Faisalabad. 4.7 stars, 117+ reviews, stroke & neurology specialist. Call +92 330 9227583",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
