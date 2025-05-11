"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, BarChart2, LineChart, TrendingUp, Briefcase } from "lucide-react"

const markets = [
  {
    icon: <DollarSign className="h-8 w-8 text-purple-500" />,
    title: "Forex",
    description: "Trade major, minor, and exotic currency pairs with competitive spreads.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-purple-500" />,
    title: "Stocks",
    description: "Access global stock markets and trade shares of the world's leading companies.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-purple-500" />,
    title: "Indices",
    description: "Trade the world's major stock indices with flexible leverage options.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
    title: "Commodities",
    description: "Trade gold, silver, oil, and other commodities with low spreads.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-purple-500" />,
    title: "Crypto",
    description: "Trade popular cryptocurrencies with 24/7 market access.",
  },
]

export function AccessMarkets() {
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

  const textVariants = {
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
    <section className="py-20 px-4 relative bg-gradient-to-b from-[#0c0014] to-[#120025]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-purple-500">Access</span> Every Market <span className="text-purple-500">in</span> One
            Click
          </motion.h2>
          <motion.p variants={textVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trade a wide range of financial instruments all from a single platform.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {markets.map((market, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-black/30 backdrop-blur-sm border-gray-800 h-full hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-black/50 rounded-full">{market.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{market.title}</h3>
                  <p className="text-gray-400 text-sm">{market.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
