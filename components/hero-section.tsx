"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ParticlesSphere } from "@/components/particles-sphere"
import { Users } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesSphere />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
            <Users className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-300">1,00,000 Active Users</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          Think Superior,
          <br />
          Trade <span className="text-purple-500">Zuperior</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-300 text-xl mb-10"
        >
          Your Future of Trading Starts here...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white border border-gray-700 rounded-full px-8 py-6 w-full sm:w-auto">
            Register Now
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full px-8 py-6 w-full sm:w-auto">
            FREE Demo →
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
