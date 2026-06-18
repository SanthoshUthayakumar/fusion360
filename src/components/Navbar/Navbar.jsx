import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#themes' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fusion_360_event__management/?hl=en',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  
  {
    label: 'WhatsApp',
    href: 'https://wa.me/918056135773',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const menuItemsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuRef.current) return

    if (menuOpen) {
      gsap.set(mobileMenuRef.current, { display: 'flex' })
      gsap.fromTo(
        mobileMenuRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.45, ease: 'power3.out' }
      )
      gsap.fromTo(
        menuItemsRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out', delay: 0.15 }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => gsap.set(mobileMenuRef.current, { display: 'none' }),
      })
    }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header ref={navRef} className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} id="home">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          Fusion <span>360</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__socials">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} className="navbar__social-icon" aria-label={s.label} target="_blank" rel="noopener noreferrer">
              {s.icon}
            </a>
          ))}
        </div>

        <button
          className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="navbar__mobile" aria-hidden={!menuOpen}>
        <button className="navbar__mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} ref={(el) => (menuItemsRef.current[i] = el)}>
                <a href={link.href} className="navbar__mobile-link" onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar__mobile-socials">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} className="navbar__social-icon navbar__social-icon--mobile" aria-label={s.label} target="_blank" rel="noopener noreferrer">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
