import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "StudentsxCEOs",
  description: "Empowering the next generation of global leaders",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${manrope.variable} font-display bg-background-light dark:bg-background-dark transition-colors duration-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
