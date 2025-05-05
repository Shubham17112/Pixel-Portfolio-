import Link from "next/link"
import { Button } from "@/components/ui/button"
import PixelAvatar from "@/components/pixel-avatar"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pixel-bg relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <PixelAvatar className="mb-8" />

        <div className="pixel-text-box p-6 mb-8 max-w-2xl w-full text-center">
          <h1 className="text-2xl md:text-4xl mb-4 pixel-font text-yellow-400 animate-blink">
            Hi, I'm Siddarth – Web Developer
          </h1>
          <p className="text-lg md:text-xl mb-8 pixel-font">
            Welcome to my pixel world! Explore my projects, skills, and more.
          </p>

          <Button variant="outline" className="pixel-button text-sm sm:text-lg w-full sm:w-auto animate-pulse" asChild>
            <Link href="/menu">
              Press Start! <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
