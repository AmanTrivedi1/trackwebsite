"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { ShinyButton } from "./shiny-button"

interface PriceCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
}

export function PriceCard({
  title,
  price,
  description,
  features,
  popular = false,
  ctaText = "Get Started",
}: PriceCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl shadow-md p-8  transition-all ",
        popular && "border-2 border-primary shadow-2xl bg-primary/5"
      )}
    >
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
            Most Popular
          </div>
        </div>
      )}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && (
            <span className="ml-1 text-muted-foreground">/month</span>
          )}
        </div>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <ShinyButton className="w-full h-12">{ctaText}</ShinyButton>
      </div>
    </div>
  )
}
