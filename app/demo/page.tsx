"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ParticlesSphere } from "@/components/particles-sphere"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart, TrendingUp, Zap } from "lucide-react"

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0c0014] text-white overflow-hidden">
      <Navbar />
      <div className="relative min-h-screen">
        <ParticlesSphere />

        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Experience the <span className="text-purple-500">Zuperior</span> Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our platform features and see how Zuperior can transform your trading experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid grid-cols-3 max-w-md mx-auto bg-black/30 backdrop-blur-sm border border-gray-800">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="trading">Trading</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-black/30 backdrop-blur-sm border-gray-800 text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="mr-2 h-5 w-5 text-purple-500" />
                        Market Overview
                      </CardTitle>
                      <CardDescription className="text-gray-400">Real-time market data and trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] bg-black/20 rounded-md flex items-center justify-center">
                        <p className="text-gray-500">Chart Visualization</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 backdrop-blur-sm border-gray-800 text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-purple-500" />
                        Quick Actions
                      </CardTitle>
                      <CardDescription className="text-gray-400">Access your most used features</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">New Trade</Button>
                        <Button className="w-full bg-black/50 hover:bg-black/70 border border-gray-700">
                          Portfolio Analysis
                        </Button>
                        <Button className="w-full bg-black/50 hover:bg-black/70 border border-gray-700">
                          Market News
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 backdrop-blur-sm border-gray-800 text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart className="mr-2 h-5 w-5 text-purple-500" />
                        Performance
                      </CardTitle>
                      <CardDescription className="text-gray-400">Your trading performance summary</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Win Rate</span>
                          <span className="text-green-500">68%</span>
                        </div>
                        <div className="w-full bg-black/50 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Profit Factor</span>
                          <span className="text-purple-500">2.4</span>
                        </div>
                        <div className="w-full bg-black/50 rounded-full h-2.5">
                          <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="trading" className="mt-8">
                <Card className="bg-black/30 backdrop-blur-sm border-gray-800 text-white">
                  <CardHeader>
                    <CardTitle>Trading Interface</CardTitle>
                    <CardDescription className="text-gray-400">Advanced trading tools and charts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] bg-black/20 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">Trading Interface Visualization</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-black/30 backdrop-blur-sm border-gray-800 text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <LineChart className="mr-2 h-5 w-5 text-purple-500" />
                        Performance Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] bg-black/20 rounded-md flex items-center justify-center">
                        <p className="text-gray-500">Performance Chart</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 backdrop-blur-sm border-gray-800 text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <PieChart className="mr-2 h-5 w-5 text-purple-500" />
                        Portfolio Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] bg-black/20 rounded-md flex items-center justify-center">
                        <p className="text-gray-500">Portfolio Chart</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-6">Ready to experience the full platform?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6">
                Create Account <span className="ml-1">↗</span>
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-white/10 px-8 py-6">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
