'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('process_p1_title'),
      icon: "🏪",
      desc: t('process_p1_desc')
    },
    {
      title: t('process_p2_title'),
      icon: "🏭",
      desc: t('process_p2_desc')
    },
    {
      title: t('process_p3_title'),
      icon: "🔄",
      desc: t('process_p3_desc')
    },
    {
      title: t('process_p4_title'),
      icon: "🚢",
      desc: t('process_p4_desc')
    }
  ];

  return (
    <>
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '80px', backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">{t('nav_process')}</h1>
          <div className="title-underline center"></div>
          <p className="section-subtitle">{t('process_page_subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            
            {/* Connecting Line */}
            <div style={{ position: 'absolute', top: '0', bottom: '0', left: '50px', width: '2px', backgroundColor: 'var(--primary-brand)', opacity: '0.2', zIndex: '1' }}></div>
            
            {steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', position: 'relative', zIndex: '2' }}>
                <div style={{ flex: '0 0 100px', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', border: '2px solid var(--primary-brand)' }}>
                    {step.icon}
                  </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', boxShadow: 'var(--shadow-card)', flex: '1', border: '1px solid #f9f9f9' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dark-brand)' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
