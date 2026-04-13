'use client';

import { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SplashScreen>
        <Navigation />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </SplashScreen>
    </LanguageProvider>
  );
}
