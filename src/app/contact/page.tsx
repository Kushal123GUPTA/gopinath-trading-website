'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-header" style={{ paddingTop: '150px', paddingBottom: '80px', backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">{t('nav_contact')}</h1>
          <div className="title-underline center"></div>
          <p className="section-subtitle">{t('contact_subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--dark-brand)' }}>{t('contact_info_title')}</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
                {t('footer_desc')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--primary-brand)' }}>📍</div>
                  <div>
                    <h4 style={{ marginBottom: '0.3rem' }}>{t('address_label')}</h4>
                    <p style={{ color: 'var(--text-light)' }}>Gopinath trading co.
                      164, S S MARKET YARD,<br />Deesa, Gujarat – 385535, India</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--primary-brand)' }}>📞</div>
                  <div>
                    <h4 style={{ marginBottom: '0.3rem' }}>{t('phone_label')}</h4>
                    <p style={{ color: 'var(--text-light)' }}>9773242912 Nitin Maradiya
                      <br />9979221900 Nitin Maradiya</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--primary-brand)' }}>✉️</div>
                  <div>
                    <h4 style={{ marginBottom: '0.3rem' }}>{t('email_label')}</h4>
                    <p style={{ color: 'var(--text-light)' }}>gopinathtradingdeesa@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '10px', boxShadow: 'var(--shadow-card)' }}>
              <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>{t('contact_form_title')}</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact_form_name')}</label>
                  <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact_form_email')}</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('contact_form_message')}</label>
                  <textarea placeholder="How can we help you?" rows={5} style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>{t('contact_form_submit')}</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
