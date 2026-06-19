import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ThemeCards.css'
import manpower from '../../assets/man power.png'
import stall from '../../assets/stall.png'
import pamplet from '../../assets/pamplet.png'
import mass from '../../assets/massgath.png'
import seminar from '../../assets/seminar.png'
import roadshow from '../../assets/roadshow.png'
gsap.registerPlugin(ScrollTrigger)

const CARDS = [
  {
    id: 'brand-promotions',
    title: 'Brand Promotions',
    subtitle: 'Offline Marketing',
    description:
      'Targeted campaigns that increase brand awareness and create meaningful audience engagement — built to put your brand directly in front of the people who matter.',
    image: 'https://ppms.in/wp-content/uploads/2025/08/Product-Promotion.jpg',
    services: ['Audience Targeting', 'Engagement Strategy', 'On-Ground Execution', 'Brand Visibility', 'Performance Tracking'],
    accent: '#E91E8C',
    tag: '01 / Brand Promotions',
  },
  {
    id: 'mass-gathering',
    title: 'Mass Gathering Campaigns',
    subtitle: 'Large-Scale Activation',
    description:
      'Large-scale public activations designed to attract attention and maximize reach — turning footfall and crowds into real brand impact.',
    image: mass,
    services: ['Crowd Engagement', 'High-Footfall Targeting', 'Live Activation', 'Brand Amplification', 'Reach Maximization'],
    accent: '#0D9488',
    tag: '02 / Mass Gathering',
  },
  {
    id: 'manpower',
    title: 'Manpower Services',
    subtitle: 'Trained On-Ground Teams',
    description:
      'Professionally trained teams for promotions, registrations, crowd management, and event support — reliable manpower for every activation.',
    image: manpower,
    services: ['Promotional Staff', 'Registration Support', 'Crowd Management', 'Event Support', 'Trained Personnel'],
    accent: '#111111',
    tag: '03 / Manpower Services',
  },
  {
    id: 'pamphlet',
    title: 'Pamphlet Distribution',
    subtitle: 'Strategic Reach',
    description:
      'Strategic flyer distribution in high-footfall locations including malls, colleges, business hubs, and public spaces to maximize visibility.',
    image: pamplet,
    services: ['Mall & College Targeting', 'Business Hub Coverage', 'Public Space Reach', 'Footfall Analysis', 'Route Planning'],
    accent: '#F050A8',
    tag: '04 / Pamphlet Distribution',
  },
  {
    id: 'expo-stall',
    title: 'Expo Stall Management',
    subtitle: 'Exhibition Excellence',
    description:
      'Complete exhibition stall setup, visitor engagement, branding, and operational support — from build to breakdown, fully managed.',
    image: stall ,
    services: ['Stall Setup & Design', 'Visitor Engagement', 'On-Site Branding', 'Operational Support', 'Lead Capture'],
    accent: '#16A34A',
    tag: '05 / Expo Stall Management',
  },
  {
    id: 'seminar-hostess',
    title: 'Seminar Hostesses',
    subtitle: 'Professional Guest Management',
    description:
      'Professional hostesses for delegate assistance, guest management, registrations, and attendee support — polished and dependable, every time.',
    image: seminar,
    services: ['Delegate Assistance', 'Guest Management', 'Registration Desk', 'Attendee Support', 'Professional Presentation'],
    accent: '#0D9488',
    tag: '06 / Seminar Hostesses',
  },
  {
    id: 'roadshows',
    title: 'Road Shows',
    subtitle: 'On-Ground Visibility',
    description:
      'Dynamic on-ground campaigns that generate excitement and strong local visibility — taking your brand directly to the streets.',
    image: roadshow,
    services: ['Live On-Ground Activation', 'Local Visibility', 'Crowd Engagement', 'Brand Excitement', 'Multi-Location Coverage'],
    accent: '#E91E8C',
    tag: '07 / Road Shows',
  },
  
  {
  id: 'wedding',
  title: 'Wedding Planning',
  subtitle: 'Elegant Event Experiences',
  description:
    'From intimate ceremonies to grand celebrations, we handle venue décor, guest coordination, entertainment, and complete wedding execution — creating unforgettable moments from start to finish.',

  image: 'https://the-wedding-house.co.uk/wp-content/uploads/2025/02/about-image.jpg',

  services: [
    'Venue Decoration',
    'Guest Management',
    'Stage & Floral Design',
    'Photography & Videography',
    'Entertainment Coordination'
  ],

  accent: '#F050A8',

  tag: '08 / Wedding Planning',
},
  {
    id: 'corporate-execution',
    title: 'Corporate Event Execution',
    subtitle: 'End-to-End Management',
    description:
      'End-to-end management of conferences, seminars, annual meetings, and corporate gatherings — handled with precision from start to finish.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=85',
    services: ['Conference Management', 'Seminar Execution', 'Annual Meetings', 'Full Event Coordination', 'Vendor Management'],
    accent: '#111111',
    tag: '09 / Corporate Execution',
  },
]


export default function ThemeCards() {
  const sectionRef = useRef(null)
  const pinWrapRef = useRef(null)
  const trackRef = useRef(null)
  const headerRef = useRef(null)
  const cardRefs = useRef([])
  const progressFillRef = useRef(null)
  const progressLabelRef = useRef(null)

  useEffect(() => {
    // Header fade in
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      }
    )

    const cards = cardRefs.current

    const setupHorizontal = () => {
      const track = trackRef.current
      const pinWrap = pinWrapRef.current
      if (!track || !pinWrap) return

      // Kill any existing ScrollTriggers on this section before re-creating
      ScrollTrigger.getAll()
        .filter((t) => t.vars.trigger === pinWrap)
        .forEach((t) => t.kill())

      const totalScrollWidth = track.scrollWidth
      const viewportWidth = pinWrap.offsetWidth
      const moveDistance = totalScrollWidth - viewportWidth

      if (moveDistance <= 0) return

      // Helper: scale/dim cards based on distance from viewport center
      const updateActiveCard = () => {
        const wrapRect = pinWrap.getBoundingClientRect()
        const wrapCenter = wrapRect.left + wrapRect.width / 2

        cards.forEach((card) => {
          if (!card) return
          const cardRect = card.getBoundingClientRect()
          const cardCenter = cardRect.left + cardRect.width / 2
          const distance = Math.abs(wrapCenter - cardCenter)
          const maxDistance = wrapRect.width * 0.75
          const proximity = gsap.utils.clamp(0, 1, 1 - distance / maxDistance)

          gsap.to(card, {
            scale: gsap.utils.interpolate(0.92, 1, proximity),
            opacity: gsap.utils.interpolate(0.55, 1, proximity),
            duration: 0.3,
            ease: 'none',
            overwrite: 'auto',
          })

          const glow = card.querySelector('.tc__card-glow')
          if (glow) {
            gsap.to(glow, {
              opacity: proximity > 0.85 ? 1 : 0,
              duration: 0.3,
              overwrite: 'auto',
            })
          }
        })
      }

      // Main horizontal-scroll tween with progress bar + active-card updates
      gsap.to(track, {
        x: -moveDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: pinWrap,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressFillRef.current) {
              gsap.set(progressFillRef.current, { scaleX: self.progress })
            }
            const activeIndex = Math.min(
              CARDS.length - 1,
              Math.round(self.progress * (CARDS.length - 1))
            )
            if (progressLabelRef.current) {
              progressLabelRef.current.textContent = `${String(
                activeIndex + 1
              ).padStart(2, '0')} / ${String(CARDS.length).padStart(2, '0')}`
            }
            updateActiveCard()
          },
          onRefresh: updateActiveCard,
        },
      })

      updateActiveCard()

      // One-time entrance reveal for each card's inner content
      cards.forEach((card) => {
        if (!card) return
        const content = card.querySelectorAll(
          '.tc__subtitle, .tc__title, .tc__desc, .tc__service-item, .tc__cta'
        )
        gsap.set(content, { opacity: 0, y: 16 })
        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          delay: 0.3,
        })
      })
    }

    const timer = setTimeout(setupHorizontal, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="tc" id="themes">
      {/* Header */}
      <div ref={headerRef} className="tc__header">
        <span className="section-label">Offline Marketing & Brand Activations</span>
        <h2 className="tc__heading">Transform Visibility Into Results</h2>
      </div>

      {/* Pinned horizontal scroll wrapper */}
      <div ref={pinWrapRef} className="tc__pin-wrap">
        <div ref={trackRef} className="tc__track">
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="tc__card"
              style={{ '--card-accent': card.accent }}
            >
              {/* Glow ring shown only when card is "active" / centered */}
              <div className="tc__card-glow" />

              {/* Image */}
              <div className="tc__image-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="tc__image"
                />
                <div
                  className="tc__image-overlay"
                  style={{ '--card-accent': card.accent }}
                />
                
                <span className="tc__index-badge">{String(i + 1).padStart(2, '0')}</span>
              </div>

              {/* Content */}
              <div className="tc__content">
                <span className="tc__subtitle">{card.subtitle}</span>
                <h3 className="tc__title">{card.title}</h3>
                <p className="tc__desc">{card.description}</p>

                <ul className="tc__services">
                  {card.services.map((s) => (
                    <li key={s} className="tc__service-item">
                      <span
                        className="tc__service-dot"
                        style={{ background: card.accent }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>

                <a
  href={`https://wa.me/918056135773?text=${encodeURIComponent(
    `Hello Fusion 360, I would like to book the "${card.title}" service. Please share the details, pricing, and availability.`
  )}`}
  className="tc__cta"
  style={{ '--card-accent': card.accent }}
  target="_blank"
  rel="noopener noreferrer"
>
  Book This Service

  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</a>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll progress bar + counter */}
        <div className="tc__progress">
          <div className="tc__progress-track">
            <div ref={progressFillRef} className="tc__progress-fill" />
          </div>
          <div className="tc__progress-meta">
            <span ref={progressLabelRef} className="tc__progress-count">01 / 09</span>
            
          </div>
        </div>
      </div>
    </section>
  )
}