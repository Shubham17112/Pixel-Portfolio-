"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus("success")

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="pixel-text-box border-none text-lg pixel-text"
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="pixel-text-box border-none text-lg pixel-text"
        />
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="pixel-text-box border-none text-lg pixel-text min-h-[150px]"
        />
      </div>

      <Button type="submit" className="pixel-button w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>

      {submitStatus === "success" && (
        <div className="p-3 bg-green-900/50 border-2 border-green-500 text-green-300 pixel-font text-sm">
          Message sent successfully!
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-3 bg-red-900/50 border-2 border-red-500 text-red-300 pixel-font text-sm">
          Error sending message. Please try again.
        </div>
      )}
    </form>
  )
}
