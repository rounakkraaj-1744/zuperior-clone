"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, CreditCard, BarChart4, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: <UserPlus className="h-10 w-10 text-purple-500" />,
    title: "Create your account",
    description: "Sign up in minutes with our simple registration process.",
  },
  {
    number: "02",
    icon: <CreditCard className="h-10 w-10 text-purple-500" />,
    title: "Deposit your funds",
    description: "Fund your account using multiple secure payment methods.",
  },
  {
    number: "03",
    icon: <BarChart4 className="h-10 w-10 text-purple-500" />,
    title: "Compare your Zuper plan",
    description: "Choose the plan that best fits your trading style and goals.",
  },
  {
    number: "04",
    icon: <LineChart className="h-10 w-10 text-purple-500" />,
    title: "Start trading",
    description: "Access the markets and begin your trading journey.",
  },
]

export function BecomeProSteps() {
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
    <section className="py-20 px-4 relative bg-gradient-to-b from-[#120025] to-[#0c0014]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Become a <span className="text-purple-500">Zuperior Pro</span> in seconds...
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to start your trading journey with Zuperior.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-black/30 backdrop-blur-sm border-gray-800 h-full relative overflow-hidden">
                <div className="absolute -top-4 -left-4 text-7xl font-bold text-purple-900/20">{step.number}</div>
                <CardContent className="pt-6 relative z-10">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
