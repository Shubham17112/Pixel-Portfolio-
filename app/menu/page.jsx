import Link from "next/link"
import { MenuCard } from "@/components/menu-card"
import PixelAvatar from "@/components/pixel-avatar"

export default function MenuPage() {
  const menuItems = [
    {
      title: "About",
      description: "Learn about my journey",
      icon: "👤",
      href: "/about",
    },
    {
      title: "Projects",
      description: "View my game cartridges",
      icon: "🎮",
      href: "/projects",
    },
    {
      title: "Skills",
      description: "Check my XP levels",
      icon: "📊",
      href: "/skills",
    },
    {
      title: "Certifications",
      description: "Browse my achievements",
      icon: "🏆",
      href: "/certifications",
    },
    {
      title: "Contact",
      description: "Send me a message",
      icon: "📬",
      href: "/contact",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pixel-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-12">
          <PixelAvatar className="mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl pixel-font text-yellow-400 mb-2 text-center">Main Menu</h1>
          <p className="text-lg pixel-font text-gray-400">Select an option to continue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <MenuCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/game"
            className="text-sm pixel-font text-gray-500 hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 p-2 rounded-md"
            aria-label="Secret game area"
          >
            ? ? ? Secret Area ? ? ?
          </Link>
        </div>
      </div>
    </main>
  )
}
