import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: ' fusion360.eventplanner@gmail.com',
    href: 'mailto:hello@fusion360events.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 6380134415, +91 8056135773',
    href: 'tel:+918056135773',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+91 6380134415, +91 8056135773',
    href: 'https://wa.me/918056135773',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
    color: '#25D366',
  },
  {
    label: 'Instagram',
    value: '@fusion_360_event_management',
    href: 'https://www.instagram.com/fusion_360_event__management/?hl=en',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    color: '#E1306C',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
      }
    )

    gsap.fromTo(
      leftRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 80%' },
      }
    )

    gsap.fromTo(
      rightRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 80%' },
      }
    )

    // Stagger contact items
    gsap.fromTo(
      leftRef.current.querySelectorAll('.contact__item'),
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 75%' },
      }
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={sectionRef} className="contact" id="contact">
      <div className="contact__inner">
        {/* Header */}
        <div ref={headerRef} className="contact__header">
          <span className="section-label">Get In Touch</span>
          <h2 className="contact__heading">Let&rsquo;s Plan Your Event</h2>
          
        </div>

        <div className="contact__body">
          {/* Left — contact details */}
          <div ref={leftRef} className="contact__left">
            <div className="contact__items">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact__item"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <span
                    className="contact__item-icon"
                    style={{ color: item.color || 'var(--color-accent)' }}
                  >
                    {item.icon}
                  </span>
                  <div className="contact__item-text">
                    <span className="contact__item-label">{item.label}</span>
                    <span className="contact__item-value">{item.value}</span>
                  </div>
                  <svg className="contact__item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/918056135773?text=Hi%20Fusion%20360!%20I%20would%20like%20to%20book%20a%20consultation."
              className="contact__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Book a Free Consultation
            </a>
          </div>

          {/* Right — map placeholder */}
          <div ref={rightRef} className="contact__right">
            <div className="contact__map">
              <div className="contact__map-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p>Chennai, Tamil Nadu</p>
              </div>
              <div className="contact__map-grid" aria-hidden="true">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="contact__map-cell" />
                ))}
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-row">
                <span className="contact__info-label">Event Management Solution  </span>
                <strong className="contact__info-val">Fusion 360</strong>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
