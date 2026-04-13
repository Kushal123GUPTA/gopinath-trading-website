'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Products() {
  const { t } = useLanguage();

  const products = [
    { name: t('prod_roasted_peanuts'), icon: "🥜", image: "/groundnut-1.jpeg", desc: t('prod_roasted_peanuts_desc') },
    { name: t('prod_groundnut'), icon: "🥜", image: "/groundnut-2.jpeg", desc: t('prod_groundnut_desc') },
    { name: t('prod_mustard'), icon: "🟡", image: "/mustard-1.jpeg", desc: t('prod_mustard_desc') },
    { name: t('prod_castor'), icon: "🌱", image: "/castor (1).jpeg", desc: t('prod_castor_desc') },
    { name: t('prod_cumin'), icon: "🌾", image: "/WhatsApp Image 2026-04-12 at 14.53.55.jpeg", desc: t('prod_cumin_desc') },
    { name: t('prod_millets'), icon: "🌾", image: "/millet.jpeg", desc: t('prod_millets_desc') },
    { name: t('prod_amaranth'), icon: "🪴", image: "/amarnath.jpeg", desc: t('prod_amaranth_desc') },
  ];

  return (
    <>
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '80px', backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">{t('nav_products')}</h1>
          <div className="title-underline center"></div>
          <p className="section-subtitle">{t('products_subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {products.map((prod, index) => (
              <div key={index} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-card)', transition: 'var(--transition-smooth)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column' }}
                className="product-card-page">
                <div style={{ position: 'relative', height: '220px', width: '100%', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {prod.image ? (
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="product-img-hover"
                    />
                  ) : (
                    <div style={{ fontSize: '4rem' }}>{prod.icon}</div>
                  )}
                </div>
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-dark)', fontWeight: '700' }}>{prod.name}</h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{prod.desc}</p>
                  <div>
                    <Link href="/contact" style={{ color: 'var(--primary-brand)', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      {t('request_quote')} <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .product-card-page:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-hover);
        }
        .product-img-hover {
          transition: transform 0.5s ease;
        }
        .product-card-page:hover .product-img-hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
