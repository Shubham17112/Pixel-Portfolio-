import Link from "next/link"
import { SocialLinks } from "@/components/social-links"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t-4 border-pixel-primary py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="pixel-font text-xl text-pixel-primary" aria-label="Shubham Mishra - Home">
              SHUBHAM
            </Link>
            <p className="pixel-text text-gray-400 mt-2">Web Developer & Data Analyst</p>
          </div>

          <div className="mb-6 md:mb-0">
            <SocialLinks />
          </div>

          <div className="text-center md:text-right">
            <p className="pixel-text text-gray-400">&copy; {currentYear} Shubham Mishra</p>
            <p className="pixel-text text-gray-500 text-sm mt-1">Made with ❤️ and pixels</p>
          </div>
        </div>

        <nav className="mt-8 pt-6 border-t border-gray-800" aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <li>
              <Link
                href="/about"
                className="pixel-text text-gray-400 hover:text-pixel-primary transition-colors focus:outline-none focus:ring-2 focus:ring-pixel-primary rounded-sm px-2 py-1"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="pixel-text text-gray-400 hover:text-pixel-primary transition-colors focus:outline-none focus:ring-2 focus:ring-pixel-primary rounded-sm px-2 py-1"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="pixel-text text-gray-400 hover:text-pixel-primary transition-colors focus:outline-none focus:ring-2 focus:ring-pixel-primary rounded-sm px-2 py-1"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/certifications"
                className="pixel-text text-gray-400 hover:text-pixel-primary transition-colors focus:outline-none focus:ring-2 focus:ring-pixel-primary rounded-sm px-2 py-1"
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="pixel-text text-gray-400 hover:text-pixel-primary transition-colors focus:outline-none focus:ring-2 focus:ring-pixel-primary rounded-sm px-2 py-1"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
