"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Zap, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <Award className="h-10 w-10 text-purple-500" />,
    title: "Award-Winning Platform",
    description: "Recognized for excellence in trading technology and user experience.",
  },
  {
    icon: <Shield className="h-10 w-10 text-purple-500" />,
    title: "Secure & Reliable",
    description: "Advanced security measures to protect your funds and personal information.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    title: "Ultra-Fast Execution",
    description: "Lightning-fast trade execution with minimal slippage.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-purple-500" />,
    title: "Advanced Analytics",
    description: "Powerful tools and insights to make informed trading decisions.",
  },
]

export function WhyZuperior() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="why" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Why Zuperior - <span className="text-purple-500">The Edge You Need to Win</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our cutting-edge trading platform designed for traders of all levels.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-black/30 backdrop-blur-sm border-gray-800 h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
