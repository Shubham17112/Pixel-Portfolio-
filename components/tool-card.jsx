"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function ToolCard({ name, icon, description }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current

    if (card) {
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          borderColor: "#ecc94b",
          duration: 0.3,
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          borderColor: "#4a5568",
          duration: 0.3,
        })
      }

      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={cardRef} className="tool-card p-4 flex flex-col items-center text-center">
      <span className="text-4xl mb-2">{icon}</span>
      <h3 className="text-lg pixel-font text-pixel-primary mb-1">{name}</h3>
      <p className="pixel-text text-gray-400">{description}</p>
    </div>
  )
}
