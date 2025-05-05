import Link from "next/link"
import { Button } from "@/components/ui/button"
import PixelAvatar from "@/components/pixel-avatar"
import { ArrowRight } from "lucide-react"
import { TypingEffect } from "@/components/typing-effect"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pixel-bg relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
      <PixelAvatar
  size="large"
 src="/photo.png"
  alt="My Pixel Avatar"
/>
        <div className="pixel-text-box p-6 mb-8 max-w-2xl w-full text-center">
          <h1 className="text-2xl md:text-4xl mb-4 pixel-font text-yellow-400 animate-blink">
            Hi, I'm Shubham –{" "}
            <TypingEffect
              phrases={["Web Developer", "ML Enthusi..", "Data Analyst"]}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetweenPhrases={2000}
            />
          </h1>
          <p className="text-lg md:text-xl mb-8 pixel-font">
            Welcome to my Coding  world! Explore my projects, skills, and more.
          </p>

          <Button variant="outline" className="pixel-button text-sm sm:text-lg w-full sm:w-auto animate-pulse" asChild>
            <Link href="/menu">
              Press Start!
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
