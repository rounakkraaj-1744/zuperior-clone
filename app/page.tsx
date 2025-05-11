import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhyZuperior } from "@/components/why-zuperior"
import { AccessMarkets } from "@/components/access-markets"
import { TradingPlatforms } from "@/components/trading-platforms"
import { BecomeProSteps } from "@/components/become-pro-steps"
import { ComparePlans } from "@/components/compare-plans"
import { GetFunded } from "@/components/get-funded"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0014] text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <WhyZuperior />
      <AccessMarkets />
      <TradingPlatforms />
      <BecomeProSteps />
      <ComparePlans />
      <GetFunded />
      <Footer />
    </main>
  )
}
