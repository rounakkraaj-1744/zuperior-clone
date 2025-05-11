"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ParticlesSphere } from "@/components/particles-sphere"
import Link from "next/link"

export default function RegisterPage() {
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
            <h1 className="text-3xl font-bold mb-6">Create Account</h1>
            <p className="text-gray-300 mb-8">Join Zuperior today and start your trading journey.</p>

            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="bg-black/50 border-gray-700 text-white mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black/50 border-gray-700 text-white mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="bg-black/50 border-gray-700 text-white mt-1"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-400 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-purple-400 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Register Now</Button>

              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-purple-400 hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
