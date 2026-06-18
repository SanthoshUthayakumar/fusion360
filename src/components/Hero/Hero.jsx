import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'
import video from '../../assets/hero-video.mp4'
import logo from '../../assets/logo.png'
gsap.registerPlugin(ScrollTrigger)

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fusion_360_event__management/?hl=en',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  
]

export default function Hero() {
  const heroRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const taglineRef = useRef(null)
  const btnsRef = useRef(null)
  const socialsRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
    .fromTo(
      titleRef.current.querySelectorAll('.hero__title-line'),
      { y: 80, opacity: 0, skewY: 4 },
      { y: 0, opacity: 1, skewY: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(
      taglineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      btnsRef.current.children,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(
      socialsRef.current.children,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)' },
      '-=0.3'
    )
    .fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.2'
    )

    // Parallax on scroll
    gsap.to(videoRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(contentRef.current, {
      yPercent: 15,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Scroll indicator bounce
    gsap.to(scrollIndicatorRef.current.querySelector('.hero__scroll-arrow'), {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: 'sine.inOut',
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={heroRef} className="hero" id="hero">
      {/* Background Video */}
      <div className="hero__video-wrap" ref={videoRef}>
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div ref={overlayRef} className="hero__overlay" />

      {/* Noise texture */}
      <div className="hero__noise" />

      {/* Content */}
      <div ref={contentRef} className="hero__content">
        <span className="section-label hero__eyebrow"></span>

        <div ref={titleRef} className="hero__logo-wrap">
  <img
    src={logo}
    alt="Fusion 360"
    className="hero__logo"
  />
</div>

        <p ref={taglineRef} className="hero__tagline">
          Event Managment Solutions
        </p>

        <div ref={btnsRef} className="hero__buttons">
          <a  href="https://wa.me/918056135773?text=Hello%20Fusion%20360,%20I%20would%20like%20to%20book%20an%20event.%20Please%20share%20the%20details." target="_blank"
          rel="noopener noreferrer" className="hero__btn hero__btn--primary">Book a Event</a>
          <a href="#contact" className="hero__btn hero__btn--outline">Contact Us</a>
        </div>

        <div ref={socialsRef} className="hero__socials">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} className="hero__social" aria-label={s.label} target="_blank" rel="noopener noreferrer">
              {s.icon}
            </a>
          ))}
          <a
  href="https://wa.me/918056135773?text=Hello%20Fusion%20360,%20I%20would%20like%20to%20book%20an%20event.%20Please%20share%20the%20details."
  className="hero__whatsapp"
  target="_blank"
  rel="noopener noreferrer"
>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
           
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="hero__scroll">
        
      </div>
    </section>
  )
}
