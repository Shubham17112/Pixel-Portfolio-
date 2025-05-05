"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ResponsiveImage } from "@/components/responsive-image"

export function ProjectCard({ project, onClick }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current

    if (card) {
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -10,
          rotate: "2deg",
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          rotate: "0deg",
          duration: 0.3,
          ease: "power2.out",
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      ref={cardRef}
      className="project-card cursor-pointer"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details of ${project.title}`}
    >
      <div className="relative h-48">
        <ResponsiveImage
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project thumbnail`}
          fill
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg pixel-font text-pixel-primary mb-2">{project.title}</h3>
        <p className="pixel-text text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs pixel-font bg-pixel-dark text-pixel-accent">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 text-xs pixel-font bg-pixel-dark text-pixel-accent">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
