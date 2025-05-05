"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PixelGame } from "@/components/pixel-game"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Download, Trophy } from "lucide-react"

export default function GamePage() {
  const [gameCompleted, setGameCompleted] = useState(false)
  const [showReward, setShowReward] = useState(false)

  const handleGameComplete = () => {
    setGameCompleted(true)
    setShowReward(true)
  }

  return (
    <main className="min-h-screen bg-black text-white pixel-bg">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl pixel-font text-yellow-400 mb-6 text-center">Secret Mini-Game</h1>
        <p className="text-lg pixel-font text-center mb-8">Collect all the coins to unlock a special reward!</p>

        <div className="max-w-4xl mx-auto">
          <PixelGame onComplete={handleGameComplete} />
        </div>

        <Dialog open={showReward} onOpenChange={setShowReward}>
          <DialogContent className="pixel-text-box border-yellow-400">
            <DialogHeader>
              <DialogTitle className="text-2xl pixel-font text-yellow-400 flex items-center">
                <Trophy className="mr-2 h-6 w-6 text-yellow-400" />
                Congratulations!
              </DialogTitle>
              <DialogDescription className="text-lg pixel-font">
                You've completed the secret game and unlocked a special reward!
              </DialogDescription>
            </DialogHeader>

            <div className="py-4">
              <p className="pixel-font text-white mb-6">
                As a token of appreciation for your gaming skills, you can now download my full resume with detailed
                experience and qualifications.
              </p>

              <div className="flex justify-center">
                <Button className="pixel-button">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}
