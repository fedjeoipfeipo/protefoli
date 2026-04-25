'use client'
import { useEffect, useRef } from 'react'

export default function CursorAndScroll() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const rx = useRef(0), ry = useRef(0)
  const mx = useRef(0), my = useRef(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`
    }
    document.addEventListener('mousemove', onMove)

    let raf: number
    const animateRing = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx.current - 18}px,${ry.current - 18}px)`
      raf = requestAnimationFrame(animateRing)
    }
    raf = requestAnimationFrame(animateRing)

    // Hover effects
    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => {
        if (!ringRef.current) return
        ringRef.current.style.width = '60px'
        ringRef.current.style.height = '60px'
        ringRef.current.style.borderColor = 'rgba(184,149,106,0.8)'
      })
      el.addEventListener('mouseleave', () => {
        if (!ringRef.current) return
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(184,149,106,0.5)'
      })
    }
    document.querySelectorAll('a, article').forEach(addHover)

    // Intersection observer for scroll animations
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('[data-observe]').forEach(el => obs.observe(el))

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
