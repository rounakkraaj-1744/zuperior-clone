"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col items-center">
            <Link href="/" className="text-2xl font-bold">
              FramerClone
            </Link>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">Sign in to your account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Or{" "}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                create a new account
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Label htmlFor="email">Email address</Label>
                  <div className="mt-2">
                    <Input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <div className="text-sm">
                      <Link href="/forgot-password" className="font-medium text-primary hover:underline">
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Input id="password" name="password" type="password" autoComplete="current-password" required />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center space-x-2"
                >
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden h-full flex-1 lg:flex">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="mt-4 text-lg">
              Sign in to continue building your amazing website with our intuitive platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
