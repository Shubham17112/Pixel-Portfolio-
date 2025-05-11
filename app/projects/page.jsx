"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-featured online store with payment processing",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Django", "SQLite", "HTML", "CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      details: "Built a complete e-commerce solution with product catalog, cart, payment integration, and admin dashboard.",
      category: "webdev",
    },
    {
      id: 2,
      title: "AI-Based Resume Creator",
      description: "Resume generator using AI",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Django", "Google Gemini API", "HTML", "CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      details: "Developed a resume generator that uses Google Gemini API to create professional resumes based on user input.",
      category: "webdev",
    },
    {
      id: 3,
      title: "Frame Fusion",
      description: "AI-powered short film creator",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "AI", "Video Processing"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      details: "Created a short film using AI that won 1st prize in a college-level hackathon.",
      category: "datascience",
    },
    {
      id: 4,
      title: "Assistance Bot for Visually Impaired",
      description: "Bot to assist visually impaired individuals",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "AI", "Accessibility"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      details: "Developed a bot to assist visually impaired individuals that won 3rd prize in the college-level HackSprint Hackathon.",
      category: "datascience",
    },
    {
      id: 5,
      title: "Call Center Data Analysis – Excel Project",
      description: "Tools Used: Microsoft Excel (Pivot Tables, Advanced Formulas, Charts, Conditional Formatting)",
      image: "/image.png",
      tech: ["Excel"],
      demoUrl: "https://drive.google.com/file/d/1suKJiFrPEGP6EYgH5AFkrz_HdOOid1J1/view?usp=sharing",
      githubUrl: "https://github.com/Shubham17112/Excel-Call-CenterDataAny..git",
      details: [
        "Developed an interactive Excel dashboard for call center and sales analytics using Power Pivot and DAX.",
        "Automated data cleaning with Remove Duplicates and dynamic formulas (FILTER, SORT, INDEX, MATCH).",
        "Used conditional aggregation (SUMIF, COUNTIF, AVERAGEIF, etc.) for multi-condition reporting.",
        "Built dynamic lookup solutions (VLOOKUP, INDEX+MATCH, XLOOKUP).",
        "Visualized metrics using PivotTables, slicers, and conditional formatting.",
        "Applied advanced formulas and FILTER for multi-match queries.",
        "Delivered YTD sales and call activity reports to aid management decisions."
      ],
      category: "dataanalyst",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "webdev", label: "Web Dev Projects" },
    { id: "dataanalyst", label: "Data Analyst Projects" },
    { id: "datascience", label: "Data Science Projects" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <main className="min-h-screen bg-black text-white pixel-bg">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pixel-font text-yellow-400 mb-8 text-center">My Projects</h1>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`pixel-button ${
                activeFilter === filter.id ? "bg-pixel-primary text-black" : "bg-pixel-dark text-white"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center pixel-text-box p-8 max-w-md mx-auto">
            <p className="pixel-font text-lg text-yellow-400">No projects found in this category!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        )}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  )
}
