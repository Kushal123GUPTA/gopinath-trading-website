'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './SplashScreen.css';

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // 1. Show logo in center (pulseLogo animation runs immediately)
    
    // 2. Start flying to corner after 1.5s
    const timer1 = setTimeout(() => {
      setAnimateOut(true);
    }, 1500); 

    // 3. Force remove splash screen after 3s total
    const timer2 = setTimeout(() => {
      setShowSplash(false);
    }, 3000); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {showSplash && (
        <div className={`splash-screen ${animateOut ? 'fade-out' : ''}`}>
          <div className="splash-logo-container">
            <Image 
              src="/logo.jpeg" 
              alt="Gopinath Trading" 
              width={220} 
              height={220} 
              priority
              className="splash-logo"
            />
          </div>
        </div>
      )}
      <div className="app-content">
        {children}
      </div>
    </>
  );
}
