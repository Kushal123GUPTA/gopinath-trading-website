import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Gopinath Trading | Agricultural Trading Company",
  description: "Connecting Markets with Quality Agro Products. Gopinath Trading is a key link in the agricultural supply chain based in Deesa, Gujarat.",
  keywords: "agricultural trading company India, seed supplier Gujarat, bulk agro commodities supplier, export quality seeds India, Nitin Maradiya"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
