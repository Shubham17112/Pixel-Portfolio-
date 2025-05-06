"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"

export default function SkillsPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-animate", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      })

      gsap.from(".card-animate", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.5,
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  const achievements = [
    {
      title: "🏆 1st Prize – College-level hackathon Frame Fusion",
      desc:
        "Created a short movie with consistent characters and scenes using AI tools. Our team showcased skills in prompt engineering, editing, sound design, content creation, and team spirit.",
      url: "https://drive.google.com/file/d/1xRPCsPSE9ACAyC-RgFQJr2gzrnQtXiMk/view?usp=sharing", // Replace with actual Google Drive link
    },
    {
      title: "🥉 3rd Prize – HackSprint Hackathon",
      desc:
        "Developed an automated voice-controlled app to assist the visually impaired with daily tasks. Our 'Third Eye' could analyze surroundings, read newspapers, recognize currency, and much more.",
      url: "https://www.linkedin.com/posts/shubh78_last-time-we-proudly-secured-1st-position-activity-7284249018560323584-zk_b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEma_3cB9HFibuVC7OeLgV1OEYplH-jra4A", // Replace with actual Google Drive link
    },
   
  ]

  const activities = [
    {
      title: "🧠 Organized AI Image Generation Hackathon – Paraverse AI",
      desc: "Conducted and managed an AI-themed hackathon focused on generative tools and creative innovation.",
      url: "https://drive.google.com/file/d/1ZlHdzxgKNawKU5gUBHUl2aAHIGz5bhpE/view?usp=sharing", // Replace with actual link
    },
    {
      title: "🤖 Participated in Hackathon 2025 – Job Application Bot",
      desc: "Built a bot to automate job applications using resume parsing and API-based job discovery.",
      url: "https://drive.google.com/file/d/14wfp0j2qhRU9L5hdNtdVHjJeQm0gs4X_/view?usp=sharing", // Replace with actual link
    },
    {
      title: "⚙️ Improved Job Bot – Hackathon 2025 (Follow-up)",
      desc: "Enhanced the automation bot to apply intelligently based on job descriptions and matching scores.",
      url: "https://drive.google.com/file/d/1p5FunATVhmjX_hrZsz8dY_lKLEqdctRS/view?usp=sharing", // Replace with actual link
    },
  ]

  return (
    <main ref={pageRef} className="min-h-screen bg-black text-white pixel-bg">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pixel-font text-yellow-400 mb-12 text-center skill-animate transform-gpu">
          My Skills
        </h1>

        <div className="skill-animate">
          <h2 className="text-2xl pixel-font text-green-400 mb-6 text-center transform-gpu">
            Achievements
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {achievements.map((item, index) => (
              <div key={index} className="pixel-text-box p-6 card-animate transform-gpu">
                <h3 className="text-xl pixel-font text-yellow-300 mb-4">{item.title}</h3>
                <p className="pixel-text text-lg text-gray-300 mb-4">{item.desc}</p>
                <Button className="pixel-button" asChild>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-2xl pixel-font text-blue-400 mt-16 mb-6 text-center transform-gpu">
            Activities
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {activities.map((item, index) => (
              <div key={index} className="pixel-text-box p-6 card-animate transform-gpu">
                <h3 className="text-xl pixel-font text-yellow-300 mb-4">{item.title}</h3>
                <p className="pixel-text text-lg text-gray-300 mb-4">{item.desc}</p>
                <Button className="pixel-button" asChild>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
