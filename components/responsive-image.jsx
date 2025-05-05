"use client"

import Image from "next/image"
import { useState } from "react"

export function ResponsiveImage({
  src,
  alt,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  className = "",
  fill = false,
  objectFit = "cover",
}) {
  const [isLoading, setIsLoading] = useState(true)

  // Use art direction with different image sources if provided
  const srcSet = [
    mobileSrc && { src: mobileSrc, media: "(max-width: 640px)" },
    tabletSrc && { src: tabletSrc, media: "(min-width: 641px) and (max-width: 1024px)" },
    desktopSrc && { src: desktopSrc, media: "(min-width: 1025px)" },
  ].filter(Boolean)

  return (
    <div className={`overflow-hidden ${fill ? "relative w-full h-full" : ""}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        priority={priority}
        fill={fill}
        className={`
          ${className}
          ${isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"}
          transition-all duration-500
          ${fill ? `object-${objectFit}` : ""}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        {...(srcSet.length > 0 && {
          srcSet: srcSet.map((item) => `${item.src} ${item.media}`).join(", "),
        })}
      />
    </div>
  )
}
