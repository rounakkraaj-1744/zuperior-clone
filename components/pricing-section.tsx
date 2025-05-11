"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small projects",
    features: ["1 website", "100 pages", "Free SSL certificate", "Basic analytics", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    description: "Ideal for growing businesses and teams",
    features: [
      "5 websites",
      "Unlimited pages",
      "Free SSL certificate",
      "Advanced analytics",
      "Priority support",
      "Custom domains",
      "Remove branding",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited websites",
      "Unlimited pages",
      "Free SSL certificate",
      "Advanced analytics",
      "24/7 dedicated support",
      "Custom domains",
      "Remove branding",
      "API access",
      "Team collaboration",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the plan that's right for you and start building your website today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className={`flex flex-col h-full w-full ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
