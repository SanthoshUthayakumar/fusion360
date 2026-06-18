import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Generic fade-up animation on scroll entry.
 * Returns a ref to attach to the target element.
 */
export function useFadeUp(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      y = 50,
      duration = 0.8,
      delay = 0,
      ease = 'power3.out',
      start = 'top 85%',
    } = options

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * Staggered fade-up for child elements.
 * Pass a selector string for children.
 */
export function useStaggerFadeUp(childSelector = '*', options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      y = 40,
      duration = 0.6,
      stagger = 0.1,
      ease = 'power3.out',
      start = 'top 80%',
    } = options

    const ctx = gsap.context(() => {
      const targets = ref.current.querySelectorAll(childSelector)
      if (!targets.length) return

      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * Horizontal slide-in animation.
 * direction: 'left' | 'right'
 */
export function useSlideIn(direction = 'left', options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      distance = 60,
      duration = 0.8,
      ease = 'power3.out',
      start = 'top 80%',
    } = options

    const x = direction === 'left' ? -distance : distance

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { x, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [direction])

  return ref
}

/**
 * Scale-in animation.
 */
export function useScaleIn(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      from = 0.85,
      duration = 0.7,
      ease = 'back.out(1.4)',
      start = 'top 85%',
    } = options

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { scale: from, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * Parallax scroll effect on a background element.
 * yPercent controls how far the element shifts.
 */
export function useParallax(yPercent = 20) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [yPercent])

  return ref
}
