'use client'

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function PropertyFilters() {
  return (
    <div className="sticky top-14 z-20 bg-background border-b">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search in Kathmandu..." 
                className="pl-10"
                defaultValue="Kathmandu, Nepal"
              />
            </div>
          </div>
          
          <Select defaultValue="any-price">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-price">Any Price</SelectItem>
              <SelectItem value="0-50k">Under $50k</SelectItem>
              <SelectItem value="50k-100k">$50k - $100k</SelectItem>
              <SelectItem value="100k-200k">$100k - $200k</SelectItem>
              <SelectItem value="200k+">$200k+</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="any-beds">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Beds & Baths" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-beds">Any Beds & Baths</SelectItem>
              <SelectItem value="1">1+ Bed</SelectItem>
              <SelectItem value="2">2+ Beds</SelectItem>
              <SelectItem value="3">3+ Beds</SelectItem>
              <SelectItem value="4">4+ Beds</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="any-type">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Home Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-type">Any Home Type</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90">
            Save search
          </Button>
        </div>
      </div>
    </div>
  )
}

