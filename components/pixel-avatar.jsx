"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function PixelAvatar({ className = "", size = "medium" }) {
  const avatarRef = useRef(null)

  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-32 h-32",
    large: "w-48 h-48",
  }

  useEffect(() => {
    const avatar = avatarRef.current

    if (avatar) {
      // Simple floating animation
      gsap.to(avatar, {
        y: "-10px",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }

    return () => {
      gsap.killTweensOf(avatar)
    }
  }, [])

  return (
    <div ref={avatarRef} className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full bg-pixel-dark rounded-lg overflow-hidden border-4 border-pixel-primary">
        <div className="w-full h-full bg-gradient-to-b from-pixel-dark to-gray-800 flex items-center justify-center">
          {/* Placeholder for pixel art avatar */}
          <div className="pixel-text text-4xl text-pixel-primary">{size === "small" ? "S" : "SD"}</div>
        </div>
      </div>
    </div>
  )
}
