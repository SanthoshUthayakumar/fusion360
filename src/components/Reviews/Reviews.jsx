import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Reviews.css'

gsap.registerPlugin(ScrollTrigger)

const REVIEWS = [
  {
    id: 1,
    name: 'Priya Ramanathan',
    role: 'Bride',
    event: 'Wedding Reception',
    review:
      'Fusion 360 turned our dream wedding into reality. Every single detail was handled with such care and precision — from the floral arch at the entrance to the farewell sparkler exit. Our guests are still talking about it months later.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80',
    color: '#0D9488',
  },
  {
    id: 2,
    name: 'Arjun Kumar',
    role: 'CEO',
    event: 'Corporate Annual Day',
    review:
      'We trusted Fusion 360 with our company\'s biggest event of the year — 400 attendees, live keynotes, and a product reveal. They delivered flawlessly. Professional, responsive, and incredibly detail-oriented.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80',
    color: '#c704ee',
  },
  {
    id: 3,
    name: 'Keerthana ',
    role: 'Mother',
    event: 'Baby Shower',
    review:
      'Fusion 360 executed our brand promotion campaign exceptionally well. Their team was professional, energetic, and highly organized. We saw a significant increase in audience engagement and brand visibility.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80',
    color: '#E91E8C',
  },
]

function StarRating({ count }) {
  return (
    <div className="reviews__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? '#E91E8C' : 'none'}
          stroke={i < count ? '#E91E8C' : '#ccc'}
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Header animation
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

    // Cards stagger fade-up
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={sectionRef} className="reviews" id="reviews">
      <div className="reviews__inner">
        {/* Header */}
        <div ref={headerRef} className="reviews__header">
          <span className="section-label">Testimonials</span>
          <h2 className="reviews__heading">What Our Clients Say</h2>
        </div>

        {/* Cards Grid */}
        <div className="reviews__grid">
          {REVIEWS.map((review, i) => (
            <article
              key={review.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="reviews__card"
            >
              <div className="reviews__card-top">
                <div className="reviews__avatar-wrap">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="reviews__avatar"
                    loading="lazy"
                  />
                  <span
                    className="reviews__avatar-ring"
                    style={{ borderColor: review.color }}
                  />
                </div>
                <div className="reviews__meta">
                  <strong className="reviews__name">{review.name}</strong>
                  
                  <StarRating count={review.rating} />
                </div>
              </div>

              <blockquote className="reviews__quote">
                <span className="reviews__quote-mark" style={{ color: review.color }}>&ldquo;</span>
                {review.review}
              </blockquote>

              <div
                className="reviews__card-accent"
                style={{ background: review.color }}
              />
            </article>
          ))}
        </div>

        {/* Trust bar */}
        <div className="reviews__trust">
          <div className="reviews__trust-item">
            <span className="reviews__trust-number">50+</span>
            <span className="reviews__trust-label">Events Delivered</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-item">
            <span className="reviews__trust-number">98%</span>
            <span className="reviews__trust-label">Client Satisfaction</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-item">
            <span className="reviews__trust-number">2+</span>
            <span className="reviews__trust-label">Years of Excellence</span>
          </div>
          <div className="reviews__trust-divider" />
          <div className="reviews__trust-item">
            <span className="reviews__trust-number">3K+</span>
            <span className="reviews__trust-label">Happy Guests</span>
          </div>
        </div>
      </div>
    </section>
  )
}
