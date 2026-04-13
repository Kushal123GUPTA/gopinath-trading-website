'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-image-wrapper">
                <Image
                  src="/logo.jpeg"
                  alt="Gopinath Trading Logo"
                  width={150}
                  height={55}
                  className="logo-image"
                />
              </div>
            </div>
            <p className="footer-desc">
              {t('footer_desc')}
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{t('footer_quick_links')}</h4>
            <ul className="footer-links">
              <li><Link href="/">{t('nav_home')}</Link></li>
              <li><Link href="/about">{t('nav_about')}</Link></li>
              <li><Link href="/products">{t('nav_products')}</Link></li>
              <li><Link href="/process">{t('nav_process')}</Link></li>
              <li><Link href="/services">{t('nav_services')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{t('footer_contact_us')}</h4>
            <ul className="footer-contact">
              <li>📍 Gopinath trading co.
                164, S S MARKET YARD,DEESA
                GUJARAT 385535</li>
              <li>📞 9773242912 Nitin Maradiya</li>
              <li>📞 9979221900 Nitin Maradiya</li>
              <li>✉️ gopinathtradingdeesa@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gopinath Trading. {t('footer_rights')}</p>
          <p>{t('footer_founder')}: Nitin Maradiya</p>
        </div>
      </div>
    </footer>
  );
}
