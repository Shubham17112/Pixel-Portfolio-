import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { name: "GitHub", icon: <Github />, url: "https://github.com" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://linkedin.com" },
    { name: "Twitter", icon: <Twitter />, url: "https://twitter.com" },
    { name: "Instagram", icon: <Instagram />, url: "https://instagram.com" },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pixel-primary transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-pixel-primary rounded-full"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
