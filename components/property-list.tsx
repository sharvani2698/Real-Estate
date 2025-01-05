'use client'

import { PropertyCard } from './property-card'

interface PropertyListProps {
  type: 'buy' | 'rent' | 'sell'
}

const SAMPLE_PROPERTIES = [
  {
    id: '1',
    title: 'Modern Apartment in Baluwatar',
    price: 250000,
    location: 'Baluwatar, Kathmandu',
    beds: 3,
    baths: 2,
    sqft: 1500,
    imageUrl: '/placeholder.svg?height=200&width=300',
    type: 'sale'
  },
  {
    id: '2',
    title: 'Luxury Villa in Budhanilkantha',
    price: 3500,
    location: 'Budhanilkantha, Kathmandu',
    beds: 4,
    baths: 3,
    sqft: 2200,
    imageUrl: '/placeholder.svg?height=200&width=300',
    type: 'rent'
  },
  // Add more properties...
]

export function PropertyList({ type }: PropertyListProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Properties in Kathmandu
        </h1>
        <span className="text-muted-foreground">
          {SAMPLE_PROPERTIES.length} results
        </span>
      </div>
      <div className="grid gap-6">
        {SAMPLE_PROPERTIES.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  )
}

