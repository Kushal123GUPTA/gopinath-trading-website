'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import "./home.css";

export default function Home() {
  const { t } = useLanguage();

  const products = [
    { name: t('prod_groundnut'), icon: "🥜", image: "/groundnut-1.jpeg" },
    { name: t('prod_roasted_peanuts'), icon: "🥜", image: "/groundnut-2.jpeg" },
    { name: t('prod_mustard'), icon: "🟡", image: "/mustard-1.jpeg" },
    { name: t('prod_castor'), icon: "🌱", image: "/castor (1).jpeg" },
    { name: t('prod_cumin'), icon: "🌾", image: "/WhatsApp Image 2026-04-12 at 14.53.55.jpeg" },
    { name: t('prod_millets'), icon: "🌾", image: "/millet.jpeg" },
    { name: t('prod_amaranth'), icon: "🪴", image: "/amarnath.jpeg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-fade-in">{t('hero_tagline')}</h1>
          <p className="hero-subtitle animate-fade-in delay-1">{t('hero_subtext')}</p>
          <div className="hero-ctas animate-fade-in delay-2">
            <Link href="/contact" className="btn btn-primary">{t('hero_cta')}</Link>
            <Link href="/services" className="btn btn-secondary hero-btn-outline">{t('hero_cta_sec')}</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">{t('about_title')}</h2>
              <div className="title-underline"></div>
              <p className="about-text">{t('about_text')}</p>
              <ul className="about-features">
                <li>✅ {t('about_feature1')}</li>
                <li>✅ {t('about_feature2')}</li>
                <li>✅ {t('about_feature3')}</li>
              </ul>
              <Link href="/about" className="btn btn-primary mt-4">{t('read_more')}</Link>
            </div>
            <div className="about-image-wrapper">
              <div className="about-image-shape"></div>
              <div className="about-image">
                <Image
                  src="/groundnut-1.jpeg"
                  alt="Gopinath Trading Agriculture"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain / Business Process */}
      <section className="section section-light" id="process">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">{t('process_title')}</h2>
            <div className="title-underline center"></div>
            <p className="section-subtitle">{t('process_subtitle')}</p>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-icon">🏪</div>
              <h3>{t('process_step1_title')}</h3>
              <p>{t('process_step1_desc')}</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-icon">🏭</div>
              <h3>{t('process_step2_title')}</h3>
              <p>{t('process_step2_desc')}</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-icon">📦</div>
              <h3>{t('process_step3_title')}</h3>
              <p>{t('process_step3_desc')}</p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-icon">🚢</div>
              <h3>{t('process_step4_title')}</h3>
              <p>{t('process_step4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section" id="products">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">{t('products_title')}</h2>
            <div className="title-underline center"></div>
          </div>

          <div className="products-grid">
            {products.map((prod, index) => (
              <div className="product-card" key={index} style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '180px', width: '100%', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {prod.image ? (
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ fontSize: '3rem' }}>{prod.icon}</div>
                  )}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="product-name" style={{ marginBottom: '1rem', textAlign: 'left' }}>{prod.name}</h3>
                  <Link href="/products" className="product-link">{t('read_more')} &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Partner with Us?</h2>
          <p>Get the best quality agricultural commodities for your business needs.</p>
          <Link href="/contact" className="btn btn-primary cta-btn">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
}
