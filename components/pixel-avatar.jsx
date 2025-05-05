"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function PixelAvatar({ className = "", size = "medium", src = "/photo.png", alt = "Avatar" }) {
  const avatarRef = useRef(null)

  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-32 h-32",
    large: "w-48 h-48",
  }

  useEffect(() => {
    const avatar = avatarRef.current

    if (avatar) {
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
        <div className="w-full h-full bg-gradient-to-b py-3 from-pixel-dark to-gray-800 flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover scale-[1.4] object-bottom " style={{
              transform: "scale(1.3)", // Zoom the image by 1.3 times
              objectPosition: "center bottom", // Anchor the image to the bottom
            }}
          />
        </div>
      </div>
    </div>
  )
}
