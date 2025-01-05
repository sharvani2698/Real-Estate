import { SiteHeader } from "@/components/site-header"
import { PropertyCard } from "@/components/property-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SEARCH_RESULTS = [
  {
    id: "1",
    title: "Modern Apartment in Baluwatar",
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
    title: "Luxury Villa in Budhanilkantha",
    price: 3500,
    location: "Budhanilkantha, Kathmandu",
    beds: 4,
    baths: 3,
    sqft: 2200,
    imageUrl: "/placeholder.svg?height=200&width=300",
    type: "rent" as const
  },
  // Add more properties...
]

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          <Input 
            placeholder="Location" 
            className="max-w-xs"
            defaultValue="Kathmandu, Nepal"
          />
          <Select defaultValue="any">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Price</SelectItem>
              <SelectItem value="0-100k">$0 - $100k</SelectItem>
              <SelectItem value="100k-300k">$100k - $300k</SelectItem>
              <SelectItem value="300k+">$300k+</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="any">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
          <Button>Apply Filters</Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SEARCH_RESULTS.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </main>
    </div>
  )
}

