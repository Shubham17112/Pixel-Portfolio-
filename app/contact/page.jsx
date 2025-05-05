import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pixel-bg">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl pixel-font text-yellow-400 mb-12 text-center">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="pixel-text-box p-6">
            <h2 className="text-2xl pixel-font text-green-400 mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          <div className="pixel-text-box p-6">
            <h2 className="text-2xl pixel-font text-green-400 mb-6">Connect With Me</h2>
            <p className="pixel-font text-lg mb-6">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="mb-6">
              <h3 className="text-xl pixel-font text-yellow-300 mb-2">Email</h3>
              <p className="pixel-font text-lg break-all">personal17122004@gmail.com</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl pixel-font text-yellow-300 mb-2">Phone</h3>
              <p className="pixel-font text-lg">9354801641</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl pixel-font text-yellow-300 mb-2">Location</h3>
              <p className="pixel-font text-lg">Noida Sector 5, Uttar Pradesh 201301</p>
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  )
}
