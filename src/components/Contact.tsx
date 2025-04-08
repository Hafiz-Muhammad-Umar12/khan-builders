"use client"

import { useState, useEffect } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import dynamic from "next/dynamic"
import emailjs from "emailjs-com"

const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
})

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    // Dynamically loading the EmailJS script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    script.async = true
    script.onload = () => {
      emailjs.init("W1STnRj_rqgjDJh9B")  // Replace with your public key
    }
    document.body.appendChild(script)

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const serviceID = "service_ncbcnd8" // Replace with your actual service ID
    const templateID = "template_ixkvmjl" // Replace with your actual template ID
    const userID = "YOUR_USER_ID" // Replace with your actual user ID

    // Logging the form data to check
    console.log("Form Data:", formData)

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Message sent successfully:", response)
        alert("Your message has been sent!")
      })
      .catch((error) => {
        console.error("Error sending message:", error)
        alert("Failed to send your message. Please try again later.")
      })

    setFormData({ name: "", email: "", company: "", subject: "", message: "" })
  }

  return (
    <section className="bg-white w-full min-h-screen relative overflow-hidden py-16 px-6">
      <ParticlesBackground />

      <div className="w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-black">Lets Talk</h2>
          <p className="text-gray-600 text-lg mt-2">
            Lets build something awesome together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition duration-300">
              <div className="text-yellow-500 text-3xl mb-2">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Email</h3>
              <p className="text-gray-700">hafizmuhammadumar@abc.com</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition duration-300">
              <div className="text-yellow-500 text-3xl mb-2">
                <FaPhone />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Phone</h3>
              <p className="text-gray-700">+92 3072502073</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition duration-300">
              <div className="text-yellow-500 text-3xl mb-2">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Address</h3>
              <p className="text-gray-700">123 Street, City, Country</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md p-8 rounded-xl border border-gray-200 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-4 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
