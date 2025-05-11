"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 px-4 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#0c0014]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm">z</span>
          </div>
          <span className="text-white text-xl font-medium">zuperior</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="#why" className="text-gray-300 hover:text-white transition-colors">
            Why Zuperior
          </Link>
          <Link href="#platforms" className="text-gray-300 hover:text-white transition-colors">
            Platforms
          </Link>
          <Link href="#plans" className="text-gray-300 hover:text-white transition-colors">
            Plans
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact Us
          </Link>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Globe className="h-5 w-5" />
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
            CREATE ACCOUNT <span className="ml-1">↗</span>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Globe className="h-5 w-5" />
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 py-2 text-sm">
            CREATE ACCOUNT
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
