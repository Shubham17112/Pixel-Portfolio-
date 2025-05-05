"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function InventoryItem({ name, level, icon }) {
  const itemRef = useRef(null)

  useEffect(() => {
    const item = itemRef.current

    if (item) {
      const handleMouseEnter = () => {
        gsap.to(item, {
          y: -5,
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
          duration: 0.3,
        })
      }

      const handleMouseLeave = () => {
        gsap.to(item, {
          y: 0,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        })
      }

      item.addEventListener("mouseenter", handleMouseEnter)
      item.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter)
        item.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={itemRef} className="pixel-text-box p-4 transition-all duration-300">
      <div className="flex items-center mb-2">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-lg pixel-font text-pixel-primary">{name}</h3>
      </div>

      <div className="mt-2">
        <div className="flex justify-between mb-1">
          <span className="pixel-text text-sm text-gray-400">Level</span>
          <span className="pixel-text text-sm text-pixel-primary">{level}/100</span>
        </div>
        <div className="xp-bar">
          <div className="xp-bar-fill blue" style={{ width: `${level}%` }}></div>
        </div>
      </div>
    </div>
  )
}
