import { Timeline } from "@/components/timeline"
import { InventoryItem } from "@/components/inventory-item"
import PixelAvatar from "@/components/pixel-avatar"
import { SpeechBubble } from "@/components/speech-bubble"

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2018",
      title: "Started Coding Journey",
      description: "Learned HTML, CSS, and JavaScript",
      icon: "🧠",
    },
    {
      year: "2019",
      title: "First Web Project",
      description: "Built my first portfolio website",
      icon: "🌐",
    },
    {
      year: "2020",
      title: "Learned React",
      description: "Mastered React and modern frontend",
      icon: "⚛️",
    },
    {
      year: "2021",
      title: "Freelance Developer",
      description: "Started working with clients",
      icon: "💼",
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      description: "Expanded skills to backend development",
      icon: "🔧",
    },
    {
      year: "2023",
      title: "Senior Developer",
      description: "Leading projects and mentoring",
      icon: "🚀",
    },
  ]

  const inventoryItems = [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "MongoDB", level: 75, icon: "🍃" },
  ]

  return (
    <main className="min-h-screen bg-black text-white pixel-bg">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pixel-font text-yellow-400 mb-12 text-center">About Me</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <PixelAvatar size="large" />
          </div>

          <div className="w-full md:w-2/3">
            <SpeechBubble>
              <p className="pixel-font text-lg mb-4">
                Greetings, traveler! I'm Shubham Mishra, a passionate web developer based in Noida Sector 5, Uttar
                Pradesh.
              </p>
              <p className="pixel-font text-lg">
                I'm currently pursuing a hybrid Bachelor's degree in Data Science from IIT (2023-2027). I specialize in
                building modern web applications using React, Next.js, Django, and other cutting-edge technologies.
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
