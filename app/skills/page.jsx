"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { SkillBar } from "@/components/skill-bar"
import { Button } from "@/components/ui/button"

export default function SkillsPage() {
  const pageRef = useRef(null)

  const frontendSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 88 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 82 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "SQL", level: 75 },
    { name: "GraphQL", level: 70 },
  ]

  const otherSkills = [
    { name: "UI/UX Design", level: 85 },
    { name: "Git/GitHub", level: 90 },
    { name: "Responsive Design", level: 95 },
    { name: "Testing", level: 75 },
    { name: "Performance Optimization", level: 80 },
  ]

  const tools = [
    { name: "VS Code", icon: "📝", description: "Primary code editor" },
    { name: "Git", icon: "🔄", description: "Version control" },
    { name: "Figma", icon: "🎨", description: "UI/UX design" },
    { name: "Chrome DevTools", icon: "🔍", description: "Debugging & testing" },
    { name: "Terminal", icon: "💻", description: "Command line interface" },
    { name: "Postman", icon: "📮", description: "API testing" },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-category", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      })

      gsap.from(".tool-card", {
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

  return (
    <main ref={pageRef} className="min-h-screen bg-black text-white pixel-bg">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pixel-font text-yellow-400 mb-12 text-center">My Skills</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="skill-category">
            <h2 className="text-2xl pixel-font text-green-400 mb-6">Frontend Development</h2>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="blue" />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h2 className="text-2xl pixel-font text-green-400 mb-6">Backend Development</h2>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="purple" />
              ))}
            </div>
          </div>

          <div className="skill-category lg:col-span-2">
            <h2 className="text-2xl pixel-font text-green-400 mb-6">Other Skills</h2>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="green" />
              ))}
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2 className="text-2xl pixel-font text-green-400 mb-6 text-center">Achievements and Activities</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="pixel-text-box p-6">
              <h3 className="text-xl pixel-font text-yellow-300 mb-4">
                🏆 1st Prize – College-level hackathon Frame Fusion
              </h3>
              <p className="pixel-text text-lg text-gray-300 mb-4">Created a short film using AI.</p>
              <Button className="pixel-button" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </Button>
            </div>

            <div className="pixel-text-box p-6">
              <h3 className="text-xl pixel-font text-yellow-300 mb-4">
                🥉 3rd Prize – College-level HackSprint Hackathon
              </h3>
              <p className="pixel-text text-lg text-gray-300 mb-4">
                Developed a bot to assist visually impaired individuals.
              </p>
              <Button className="pixel-button" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </Button>
            </div>

            <div className="pixel-text-box p-6">
              <h3 className="text-xl pixel-font text-yellow-300 mb-4">🎓 Bachelor of Science (B.S.) IITM</h3>
              <p className="pixel-text text-lg text-gray-300 mb-4">
                Pursuing a hybrid Bachelor's degree in Data Science from IIT (2023-2027).
              </p>
              <Button className="pixel-button" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </Button>
            </div>

            <div className="pixel-text-box p-6">
              <h3 className="text-xl pixel-font text-yellow-300 mb-4">💼 Research Analyst - Quantish Openion</h3>
              <p className="pixel-text text-lg text-gray-300 mb-4">
                Data Analysis and Management: Used Excel to organize, analyze, and visualize data, applying formulas,
                pivot tables, and charts to uncover trends and insights. Created detailed reports and dashboards to
                present findings and recommendations clearly to stakeholders.
              </p>
              <Button className="pixel-button" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
