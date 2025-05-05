"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"

export function MenuCard({ title, description, icon, href }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current

    if (card) {
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
          duration: 0.3,
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
    <Link
      href={href}
      aria-label={`Navigate to ${title}`}
      className="focus:outline-none focus:ring-2 focus:ring-pixel-primary rounded-sm"
    >
      <div ref={cardRef} className="pixel-text-box p-6 cursor-pointer transition-all duration-300" tabIndex={-1}>
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4" aria-hidden="true">
            {icon}
          </span>
          <h2 className="text-base sm:text-lg md:text-xl pixel-font text-pixel-primary break-words">{title}</h2>
        </div>
        <p className="pixel-text text-lg text-gray-300">{description}</p>
      </div>
    </Link>
  )
}
