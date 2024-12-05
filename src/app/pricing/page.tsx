import { Navbar } from "@/components/navbar"
import { PriceCard } from "@/components/price-card"

const pricingPlans = [
  {
    title: "Starter",
    price: "$9",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24/7 email support",
      "1GB storage",
      "API access",
    ],
  },
  {
    title: "Pro",
    price: "$29",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "API access",
      "Custom integrations",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Unlimited storage",
      "Custom features",
      "SLA guarantee",
      "Advanced security",
      "Training sessions",
    ],
    ctaText: "Contact Sales",
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto p-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  max-w-7xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <PriceCard key={i} {...plan} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All plans include automatic platform updates and community support.
            <br />
            Need something different?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact us
            </a>{" "}
            for custom pricing.
          </p>
        </div>
      </div>
    </>
  )
}
