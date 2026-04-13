'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('service_bulk_procurement'),
      icon: "🌾",
      desc: t('service_bulk_procurement_desc')
    },
    {
      title: t('service_quality_grading'),
      icon: "🔍",
      desc: t('service_quality_grading_desc')
    },
    {
      title: t('service_wholesale_supply'),
      icon: "📦",
      desc: t('service_wholesale_supply_desc')
    },
    {
      title: t('service_export_fac'),
      icon: "🚢",
      desc: t('service_export_fac_desc')
    }
  ];

  return (
    <>
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '80px', backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">{t('nav_services')}</h1>
          <div className="title-underline center"></div>
          <p className="section-subtitle">{t('services_subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {services.map((service, index) => (
              <div key={index} style={{ backgroundColor: 'white', padding: '3rem 2rem', borderRadius: '10px', boxShadow: 'var(--shadow-card)', textAlign: 'center', transition: 'var(--transition-smooth)' }} className="service-card">
                <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 2rem', color: 'var(--primary-brand)' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dark-brand)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.7', marginBottom: '1.5rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '5rem', backgroundColor: 'var(--primary-brand)', borderRadius: '15px', padding: '4rem 2rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>{t('custom_solution_title')}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: '0.9' }}>
              {t('custom_solution_desc')}
            </p>
            <Link href="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--dark-brand)' }}>{t('hero_cta_sec')}</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-hover);
        }
      `}</style>
    </>
  );
}
