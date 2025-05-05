"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function SkillBar({ name, level, color }) {
  const barRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const bar = barRef.current
    const fill = fillRef.current

    if (bar && fill) {
      // Initial state
      gsap.set(fill, { width: 0 })

      // Animate on scroll
      gsap.to(fill, {
        width: `${level}%`,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 80%",
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [level])

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="pixel-font text-sm">{name}</span>
        <span className="pixel-font text-sm text-pixel-primary">{level}%</span>
      </div>
      <div ref={barRef} className="xp-bar">
        <div ref={fillRef} className={`xp-bar-fill ${color}`} style={{ width: "0%" }}></div>
      </div>
    </div>
  )
}
