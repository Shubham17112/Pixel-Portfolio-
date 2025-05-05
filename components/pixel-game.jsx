"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function PixelGame({ onComplete }) {
  const canvasRef = useRef(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [coinsCollected, setCoinsCollected] = useState(0)
  const [totalCoins, setTotalCoins] = useState(10)

  useEffect(() => {
    if (!gameStarted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Game variables
    const player = {
      x: 50,
      y: 200,
      width: 32,
      height: 32,
      speed: 5,
      jumping: false,
      velocityY: 0,
      color: "#ecc94b",
    }

    const coins = []

    // Generate coins
    for (let i = 0; i < totalCoins; i++) {
      coins.push({
        x: 150 + Math.random() * (canvas.width - 200),
        y: 50 + Math.random() * (canvas.height - 100),
        width: 16,
        height: 16,
        collected: false,
      })
    }

    // Game controls
    const keys = {}

    window.addEventListener("keydown", (e) => {
      keys[e.key] = true
    })

    window.addEventListener("keyup", (e) => {
      keys[e.key] = false
    })

    // Game loop
    let animationId

    function gameLoop() {
      // Clear canvas
      ctx.fillStyle = "#1a202c"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "#2d3748"
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += 16) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += 16) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Player movement
      if (keys["ArrowLeft"] || keys["a"]) {
        player.x -= player.speed
      }
      if (keys["ArrowRight"] || keys["d"]) {
        player.x += player.speed
      }

      // Jumping
      if ((keys["ArrowUp"] || keys[" "] || keys["w"]) && !player.jumping) {
        player.jumping = true
        player.velocityY = -15
      }

      // Apply gravity
      player.velocityY += 0.8
      player.y += player.velocityY

      // Floor collision
      if (player.y > canvas.height - player.height) {
        player.y = canvas.height - player.height
        player.jumping = false
        player.velocityY = 0
      }

      // Wall collision
      if (player.x < 0) player.x = 0
      if (player.x > canvas.width - player.width) player.x = canvas.width - player.width

      // Draw player
      ctx.fillStyle = player.color
      ctx.fillRect(player.x, player.y, player.width, player.height)

      // Draw and check coins
      let collected = 0

      coins.forEach((coin, index) => {
        if (!coin.collected) {
          // Draw coin
          ctx.fillStyle = "#ecc94b"
          ctx.beginPath()
          ctx.arc(coin.x + coin.width / 2, coin.y + coin.height / 2, coin.width / 2, 0, Math.PI * 2)
          ctx.fill()

          // Check collision
          if (
            player.x < coin.x + coin.width &&
            player.x + player.width > coin.x &&
            player.y < coin.y + coin.height &&
            player.y + player.height > coin.y
          ) {
            coin.collected = true
            setCoinsCollected((prev) => prev + 1)
          }
        } else {
          collected++
        }
      })

      // Draw UI
      ctx.fillStyle = "#edf2f7"
      ctx.font = '16px "Press Start 2P", cursive'
      ctx.fillText(`Coins: ${collected}/${totalCoins}`, 20, 30)

      // Check win condition
      if (collected === totalCoins) {
        cancelAnimationFrame(animationId)
        onComplete()
        return
      }

      animationId = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("keydown", (e) => {
        keys[e.key] = true
      })
      window.removeEventListener("keyup", (e) => {
        keys[e.key] = false
      })
    }
  }, [gameStarted, onComplete, totalCoins])

  return (
    <div className="flex flex-col items-center">
      {!gameStarted ? (
        <div className="text-center mb-8">
          <p className="pixel-font text-lg mb-6">Use arrow keys or WASD to move. Space to jump. Collect all coins!</p>
          <Button onClick={() => setGameStarted(true)} className="pixel-button">
            Start Game
          </Button>
        </div>
      ) : (
        <>
          <div className="mb-4 pixel-font text-sm">
            Coins collected: {coinsCollected}/{totalCoins}
          </div>
          <canvas ref={canvasRef} width={800} height={400} className="game-canvas" />
          <p className="pixel-font text-sm mt-4 text-gray-400">Arrow keys or WASD to move. Space to jump.</p>
        </>
      )}
    </div>
  )
}
