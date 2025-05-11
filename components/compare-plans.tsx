"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const plans = [
  {
    name: "Zuper Vintage",
    description: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    initialCapital: "$10%",
    spreadAdvantage: "from 0.2 pips",
    tradingFees: "No Commission",
    leverageCapacity: "1:Unlimited",
    minimumLotSize: "0.01",
    tradeExecutionLimit: "200 trades during peak hours",
    openPositionCapacity: "Unlimited",
    stopOutThreshold: "0%",
    marginCallActivation: "30%",
    swapPolicy: "0%",
    riskExposure: "Moderate",
    assetOptions: "Forex, Crypto, Stocks, Commodities, Indices",
  },
  {
    name: "Zuper Cent",
    description: "Designed for beginners ready to step into the trading world with minimal risk.",
    initialCapital: "$10",
    spreadAdvantage: "from 0.3 pips",
    tradingFees: "Zero Commission",
    leverageCapacity: "1:Unlimited",
    minimumLotSize: "Same",
    tradeExecutionLimit: "200 trades during peak hours",
    openPositionCapacity: "Unlimited",
    stopOutThreshold: "0%",
    marginCallActivation: "30%",
    swapPolicy: "0%",
    riskExposure: "Low",
    assetOptions: "Forex, Crypto, Stocks, Commodities, Indices",
  },
  {
    name: "Zuper Pro",
    description: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    initialCapital: "$500",
    spreadAdvantage: "from 0.1 pips",
    tradingFees: "No Commission",
    leverageCapacity: "1:Unlimited",
    minimumLotSize: "Same",
    tradeExecutionLimit: "200 trades during peak hours",
    openPositionCapacity: "Unlimited",
    stopOutThreshold: "0%",
    marginCallActivation: "30%",
    swapPolicy: "0%",
    riskExposure: "High",
    assetOptions: "Forex, Crypto, Stocks, Commodities, Indices",
  },
]

export function ComparePlans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="plans" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Compare your <span className="text-purple-500">Zuper</span> plan
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible Deposits for Every Trader
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="border-b border-gray-800">
                <TableHead className="text-left py-4 px-6 text-gray-400 w-1/4">Who It's For</TableHead>
                {plans.map((plan, index) => (
                  <TableHead key={index} className="text-center py-4 px-6 bg-[#1a0a2e] rounded-t-lg">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-400 h-16">{plan.description}</p>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Initial Capital Requirement</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.initialCapital}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Spread Advantage</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.spreadAdvantage}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Trading Fees</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.tradingFees}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Leverage Capacity</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.leverageCapacity}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Minimum Lot Size</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.minimumLotSize}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Trade Execution Limit</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.tradeExecutionLimit}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Open Position Capacity</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.openPositionCapacity}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Stop Out Threshold</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.stopOutThreshold}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Margin Call Activation</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.marginCallActivation}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Swap Policy</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.swapPolicy}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell className="py-4 px-6 text-gray-400">Risk Exposure</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.riskExposure}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6 text-gray-400">Asset Options</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-center py-4 px-6 bg-[#12071d]">
                    {plan.assetOptions}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}
