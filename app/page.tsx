'use client'

import { SiteHeader } from "@/components/site-header"
import { HeroSearch } from "@/components/hero-search"
import { PropertyCard } from "@/components/property-card"
import { ActionCards } from "@/components/action-cards"
import { motion } from "framer-motion"
import { stagger } from "@/utils/animations"

const FEATURED_PROPERTIES = [
  {
    id: "1",
    title: "Modern Villa in Baluwatar",
    price: 250000,
    location: "Baluwatar, Kathmandu",
    beds: 3,
    baths: 2,
    sqft: 1500,
    imageUrl: "/placeholder.svg?height=200&width=300",
    type: "sale" as const
  },
  {
    id: "2",
    title: "Luxury Apartment in Budhanilkantha",
    price: 3500,
    location: "Budhanilkantha, Kathmandu",
    beds: 4,
    baths: 3,
    sqft: 2200,
    imageUrl: "/placeholder.svg?height=200&width=300",
    type: "rent" as const
  },
  {
    id: "3",
    title: "Commercial Space in Thamel",
    price: 450000,
    location: "Thamel, Kathmandu",
    beds: 0,
    baths: 2,
    sqft: 3000,
    imageUrl: "/placeholder.svg?height=200&width=300",
    type: "sale" as const
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <SiteHeader />
      <HeroSearch />
      <ActionCards />
      <main className="flex-1 container mx-auto px-4 py-16">
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <h2 className="text-3xl font-bold mb-8">Featured Properties in Kathmandu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}

