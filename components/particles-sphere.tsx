"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  z: number
  size: number
  color: string
  alpha: number
}

export function ParticlesSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create particles
    const particles: Particle[] = []
    const particleCount = 2000
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.4

    for (let i = 0; i < particleCount; i++) {
      // Create points on a sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      // Random size and color
      const size = Math.random() * 2 + 0.5

      // Generate colors in the purple/blue spectrum
      const hue = Math.random() * 60 + 240 // Blue to purple
      const saturation = Math.random() * 50 + 50
      const lightness = Math.random() * 30 + 50
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

      particles.push({
        x,
        y,
        z,
        size,
        color,
        alpha: Math.random() * 0.8 + 0.2,
      })
    }

    // Animation variables
    let animationFrameId: number
    let rotationX = 0
    let rotationY = 0
    let rotationZ = 0

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Slowly rotate the sphere
      rotationX += 0.0003
      rotationY += 0.0005
      rotationZ += 0.0001

      // Sort particles by z-index for proper rendering
      const sortedParticles = [...particles].sort((a, b) => a.z - b.z)

      // Draw particles
      for (const particle of sortedParticles) {
        // Apply rotation
        const cosX = Math.cos(rotationX)
        const sinX = Math.sin(rotationX)
        const cosY = Math.cos(rotationY)
        const sinY = Math.sin(rotationY)
        const cosZ = Math.cos(rotationZ)
        const sinZ = Math.sin(rotationZ)

        // Rotate around X axis
        const y1 = particle.y * cosX - particle.z * sinX
        const z1 = particle.y * sinX + particle.z * cosX

        // Rotate around Y axis
        const x2 = particle.x * cosY + z1 * sinY
        const z2 = -particle.x * sinY + z1 * cosY

        // Rotate around Z axis
        const x3 = x2 * cosZ - y1 * sinZ
        const y3 = x2 * sinZ + y1 * cosZ

        // Project 3D point to 2D space
        const scale = 1000 / (1000 + z2)
        const x2d = x3 * scale + canvas.width / 2
        const y2d = y3 * scale + canvas.height / 2

        // Calculate distance from center for glow effect
        const distanceFromCenter = Math.sqrt(x3 * x3 + y3 * y3 + z2 * z2)
        const normalizedDistance = distanceFromCenter / radius

        // Only draw particles within a certain range
        if (normalizedDistance <= 1.2) {
          // Adjust alpha based on distance from center
          const alphaFactor = normalizedDistance > 1 ? (1.2 - normalizedDistance) / 0.2 : 1 - normalizedDistance * 0.5

          ctx.globalAlpha = particle.alpha * alphaFactor
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(x2d, y2d, particle.size * scale, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}
