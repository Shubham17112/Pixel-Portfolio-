"use client"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResponsiveImage } from "@/components/responsive-image"
import { useState } from "react"

const certifications = [
  {
    id: 1,
    title: "Certified Data Analyst",
    issuer: "TCA",
    date: "2023",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://drive.google.com/file/d/10u3JMpfNXFq0Y0MLwR3qma05cZXRlBPn/view?usp=sharing",
    skills: [
      "Data Analysis",
      "Excel",
      "Data Visualization",
      "Reporting",
      "Power BI",
      "SQL",
      "Tableau",
      "Python (Pandas, NumPy)",
      "Statistics",
      "Business Intelligence",
      "Problem Solving",
    ],
  },
  {
    id: 2,
    title: "Certified Django Developer",
    issuer: "Coursera",
    date: "2025",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://drive.google.com/file/d/1KQKwnokhHJEVWa09Yld34zrCYMi4Af5e/view?usp=sharing",
    skills: [
      "Django (Web Framework)",
      "Python",
      "Back-End Applications",
      "Object Relational Mapping (ORM)",
      "Relational Database (RDBMS)",
      "SQL",
      "API Development",
      "Django REST Framework",
      "Authentication & Authorization",
      "MVC Architecture",
      "Form Handling",
      "Template Rendering",
      "Unit Testing",
    ],
  },
  
]

function CertificationCard({ cert }) {
  const [showMore, setShowMore] = useState(false)
  const skillsToShow = showMore ? cert.skills : cert.skills.slice(0, 4)

  return (
    <div key={cert.id} className="pixel-text-box p-6 flex flex-col h-full" tabIndex={0}>
      <div className="relative h-40 mb-4 overflow-hidden border-2 border-pixel-primary">
        <ResponsiveImage
          src={cert.image || "/placeholder.svg"}
          alt={`${cert.title} certificate`}
          fill
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <h2 className="text-xl pixel-font text-pixel-primary mb-2">{cert.title}</h2>

      <div className="mb-4 flex-grow">
        <div className="flex flex-wrap justify-between mb-2">
          <span className="pixel-text text-gray-300">{cert.issuer}</span>
          <span className="pixel-text text-gray-400">{cert.date}</span>
        </div>

        <div className="mt-4">
          <h3 className="text-sm pixel-font text-yellow-300 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skillsToShow.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs pixel-font bg-pixel-dark text-pixel-accent border border-pixel-accent"
              >
                {skill}
              </span>
            ))}
          </div>
          {cert.skills.length > 4 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-xs text-blue-300 underline"
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>

      <Button className="pixel-button mt-4 w-full" asChild>
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View credential for ${cert.title}`}
        >
          <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
          View Credential
        </a>
      </Button>
    </div>
  )
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black text-white pixel-bg">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pixel-font text-yellow-400 mb-12 text-center">
          My Certifications
        </h1>

        <div className="responsive-grid">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </main>
  )
}
