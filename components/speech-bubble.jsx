export function SpeechBubble({ children }) {
  return (
    <div className="pixel-text-box p-6 relative">
      {/* Triangle pointer */}
      <div className="absolute -left-4 top-8 w-0 h-0 border-t-8 border-r-8 border-b-8 border-l-0 border-transparent border-r-[#4a5568]"></div>
      {children}
    </div>
  )
}
