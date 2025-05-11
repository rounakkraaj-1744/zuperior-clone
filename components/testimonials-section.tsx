"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "This platform has completely transformed how I build websites. It's intuitive, powerful, and the results are stunning.",
    author: "Alex Johnson",
    role: "Freelance Designer",
    avatar: "AJ",
  },
  {
    quote:
      "We've cut our website development time in half. The templates are beautiful and the customization options are endless.",
    author: "Sarah Williams",
    role: "Marketing Director",
    avatar: "SW",
  },
  {
    quote:
      "As someone with no coding experience, I was able to create a professional website for my business in just a few hours.",
    author: "Michael Chen",
    role: "Small Business Owner",
    avatar: "MC",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-muted/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Don't just take our word for it. Here's what people are saying about our platform.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-lg">{testimonial.quote}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
