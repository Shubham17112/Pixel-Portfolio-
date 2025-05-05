"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Timeline({ events }) {
  const timelineRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = timelineRef.current
    const items = timeline?.querySelectorAll(".timeline-item")

    if (timeline && items) {
      gsap.from(items, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={timelineRef} className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-pixel-primary"></div>

      {/* Timeline events */}
      {events.map((event, index) => (
        <div key={index} className="timeline-item relative flex mb-8 last:mb-0">
          <div className="absolute left-6 w-5 h-5 rounded-full bg-pixel-primary border-4 border-black mt-1.5"></div>

          <div className="ml-16">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{event.icon}</span>
              <h3 className="text-lg pixel-font text-pixel-primary">{event.title}</h3>
              <span className="ml-3 px-2 py-1 text-sm pixel-font bg-pixel-dark text-pixel-primary">{event.year}</span>
            </div>
            <p className="pixel-text text-lg text-gray-300">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
