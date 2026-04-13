'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo">
          <div className="logo-image-wrapper">
            <Image 
              src="/logo.jpeg" 
              alt="Gopinath Trading Logo" 
              width={140} 
              height={50}
              className="logo-image"
              priority
            />
          </div>
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>{t('nav_home')}</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>{t('nav_about')}</Link>
          <Link href="/products" onClick={() => setMobileMenuOpen(false)}>{t('nav_products')}</Link>
          <Link href="/process" onClick={() => setMobileMenuOpen(false)}>{t('nav_process')}</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>{t('nav_services')}</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>{t('nav_contact')}</Link>
          
          <button 
            className="lang-toggle"
            onClick={() => setLanguage(language === 'en' ? 'gu' : 'en')}
          >
            {language === 'en' ? 'ગુજરાતી' : 'English'}
          </button>
        </nav>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
