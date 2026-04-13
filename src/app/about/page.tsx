'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '80px', backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">{t('nav_about')}</h1>
          <div className="title-underline center"></div>
          <p className="section-subtitle">{t('about_subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-image-shape"></div>
              <div className="about-image" style={{ aspectRatio: '4/5', background: 'var(--text-dark)', position: 'relative', overflow: 'hidden' }}>
                <Image 
                  src="/WhatsApp Image 2026-04-12 at 18.19.42.jpeg"
                  alt="Nitin Maradiya - Founder of Gopinath Trading"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
              </div>
            </div>
            <div className="about-content">
              <h2>{t('about_secondary_title')}</h2>
              <br/>
              <p className="about-text" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                {t('about_secondary_text1')}
              </p>
              <p className="about-text" style={{ fontSize: '1.05rem' }}>
                {t('about_secondary_text2')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section section-light" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">{t('why_choose_us')}</h2>
          <div className="title-underline center"></div>
          <div className="products-grid" style={{ marginTop: '2rem', justifyContent: 'center' }}>
            <div className="product-card">
              <div className="product-icon">🏅</div>
              <h3 className="product-name">{t('quality_assurance')}</h3>
              <p style={{ color: 'var(--text-light)' }}>{t('quality_assurance_desc')}</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🌍</div>
              <h3 className="product-name">{t('global_reach')}</h3>
              <p style={{ color: 'var(--text-light)' }}>{t('global_reach_desc')}</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🤝</div>
              <h3 className="product-name">{t('trusted_partnerships')}</h3>
              <p style={{ color: 'var(--text-light)' }}>{t('trusted_partnerships_desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
