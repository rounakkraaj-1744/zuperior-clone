"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Zap, Palette, Globe } from "lucide-react"

const features = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Drag & Drop Editor",
    description: "Build your website visually with our intuitive drag and drop interface.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Optimized for speed and performance, ensuring your website loads quickly.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Customizable Themes",
    description: "Choose from a variety of themes or create your own to match your brand.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global CDN",
    description: "Your website is delivered from edge locations worldwide for minimal latency.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Powerful Features</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything you need to create stunning websites without writing a single line of code.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
