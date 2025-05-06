import { Timeline } from "@/components/timeline"
import { InventoryItem } from "@/components/inventory-item"
import PixelAvatar from "@/components/pixel-avatar"
import { SpeechBubble } from "@/components/speech-bubble"

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2023",
      title: "Started Coding Journey",
      description: "Learned HTML, CSS, and JavaScript",
      icon: "💻", // Laptop for starting coding
    },
    {
      year: "2023",
      title: "First Web Project",
      description: "Built my first website",
      icon: "🌐", // Globe for website
    },
    {
      year: "2023",
      title: "Learned React/ Explore More",
      description: "Mastered React and modern frontend",
      icon: "⚛️", // Atom for React
    },
    {
      year: "2024",
      title: "Freelance Developer",
      description: "Started working with clients",
      icon: "🧑‍💼", // Person in suit for freelance work
    },
    {
      year: "2024",
      title: "Learn Django-Flask & Data Analyst tools",
      description: "Switched to Python",
      icon: "🐍", // Snake for Python
    },
    {
      year: "2024",
      title: "Join a company as a Research Analyst – Quantish Opinion",
      description: "Gain Hand-on experience in Data Analysis",
      icon: "📊", // Bar chart for data analysis
    },
    {
      year: "2024",
      title: "Began Participating in Hackathons and Secured Wins in Several",
      description: "Worked with a team to develop innovative projects integrating AI and Machine Learning.",
      icon: "🏆", // Trophy for winning
    },
    {
      year: "2025",
      title: "Learn Django Rest Framework and Imporove Data Analysis Skills",
      description: "Improvement",
      icon: "📈", // Upwards graph for improvement
    }
  ]
  

  const inventoryItems =[
  { name: "React.js", level: 40, icon: "⚛️" },              // ⚛️ is appropriate
  { name: "Next.js", level: 40, icon: "🌐" },               // "▲" is a placeholder; 🌐 represents full-stack/web
  { name: "JavaScript", level: 85, icon: "🟨" },             // 📘 is misleading (blue book); use 🟨 for yellow JS
  { name: "Django / Django REST API", level: 80, icon: "🌿" }, // 🟢 is okay, 🌿 for Django (green-themed)
  { name: "Tailwind CSS", level: 80, icon: "💨" },           // 🎨 works too, but 💨 (wind) is Tailwind’s emoji match
  { name: "PostgreSQL", level: 90, icon: "🐘" },             // 🍃 is for MongoDB; 🐘 is PostgreSQL's official mascot
  { name: "Python", level: 90, icon: "🐍" },                 // 🐍 is perfect
  { name: "Flask", level: 60, icon: "🥃" },                  // 📚 is generic; 🥃 is often used for Flask
  { name: "Data Analyst Tools", level: 70, icon: "📊" }     // 📊 better represents data analysis
]

  return (
    <main className="min-h-screen bg-black text-white pixel-bg overflow-x-hidden">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pixel-font text-yellow-400 mb-12 text-center">About Me</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <PixelAvatar size="large" />
          </div>

          <div className="w-full md:w-2/3">
            <SpeechBubble>
              <p className="pixel-font text-lg mb-4">
                Greetings, traveler! I'm Shubham Mishra, a passionate web developer & Data Analyst based in Noida Sector
                5, Uttar Pradesh.
              </p>
              <p className="pixel-font text-lg">
                I'm currently pursuing a hybrid Bachelor's degree in Data Science from IIT (2023-2027).
              </p>
            </SpeechBubble>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl pixel-font text-green-400 mb-6 text-center">My Journey</h2>
          <Timeline events={timelineEvents} />
        </div>

        <div>
          <h2 className="text-2xl pixel-font text-green-400 mb-6 text-center">Tech Inventory</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {inventoryItems.map((item) => (
              <InventoryItem key={item.name} name={item.name} level={item.level} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
