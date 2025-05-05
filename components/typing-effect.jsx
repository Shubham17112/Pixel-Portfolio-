"use client"

import { useState, useEffect, useRef } from "react"

export function TypingEffect({ phrases, typingSpeed = 100, deletingSpeed = 50, delayBetweenPhrases = 2000 }) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  // Use a ref to track the current character index
  const charIndexRef = useRef(0)

  useEffect(() => {
    let timer

    // If we're in the waiting state, set a timeout to start deleting
    if (isWaiting) {
      timer = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetweenPhrases)
      return () => clearTimeout(timer)
    }

    const currentPhrase = phrases[phraseIndex]

    if (isDeleting) {
      // Deleting mode
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, charIndexRef.current - 1))
        charIndexRef.current -= 1

        // If we've deleted everything, move to the next phrase
        if (charIndexRef.current <= 0) {
          setIsDeleting(false)
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }
      }, deletingSpeed)
    } else {
      // Typing mode
      timer = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, charIndexRef.current + 1))
        charIndexRef.current += 1

        // If we've typed the full phrase, wait before deleting
        if (charIndexRef.current >= currentPhrase.length) {
          setIsWaiting(true)
        }
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, phraseIndex, isWaiting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}
