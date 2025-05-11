"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ParticlesSphere } from "@/components/particles-sphere"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0c0014] text-white overflow-hidden">
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center">
        <ParticlesSphere />

        <div className="relative z-10 w-full max-w-md mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-gray-800"
          >
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-300 mb-8">
              Have questions about Zuperior? We're here to help. Fill out the form below and we'll get back to you as
              soon as possible.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="bg-black/50 border-gray-700 text-white" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="bg-black/50 border-gray-700 text-white"
                  rows={4}
                />
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
