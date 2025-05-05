"use client"

import { useEffect, useRef } from "react"
import { X, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ResponsiveImage } from "@/components/responsive-image"

export function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const modal = modalRef.current
    const content = contentRef.current

    if (modal && content) {
      // Animate modal background
      gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.3 })

      // Animate modal content
      gsap.fromTo(content, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, delay: 0.1 })

      // Close on escape key
      const handleEscape = (e) => {
        if (e.key === "Escape") onClose()
      }

      window.addEventListener("keydown", handleEscape)

      // Prevent scrolling on body
      document.body.style.overflow = "hidden"

      return () => {
        window.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = ""
      }
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={contentRef}
        className="pixel-text-box bg-pixel-dark max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        role="document"
      >
        <div className="sticky top-0 bg-pixel-dark z-10 flex justify-between items-center p-4 border-b-4 border-pixel-primary">
          <h2 id="modal-title" className="text-xl pixel-font text-pixel-primary">
            {project.title}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <div className="p-6">
          <div className="relative h-64 mb-6">
            <ResponsiveImage
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} project screenshot`}
              fill
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <p className="pixel-text text-lg text-gray-300 mb-6">{project.details}</p>

          <div className="mb-6">
            <h3 className="text-lg pixel-font text-pixel-secondary mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm pixel-font bg-pixel-dark border-2 border-pixel-accent text-pixel-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="pixel-button flex-1" asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            </Button>

            <Button className="pixel-button flex-1" variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                View Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
