'use client'

import { useEffect } from 'react'
import { animate, useMotionValue, useSpring } from 'framer-motion'

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (!href) return

        const targetId = href.replace('#', '')
        const element = document.getElementById(targetId)

        if (element) {
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset

          animate(window.pageYOffset, targetPosition, {
            duration: 1.8,
            ease: [0.25, 0.1, 0.25, 1], // Custom bezier curve para smooth
            onUpdate: (latest) => {
              window.scrollTo(0, latest)
            }
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])
}
