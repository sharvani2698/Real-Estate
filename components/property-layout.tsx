'use client'

import { useState } from 'react'
import { SiteHeader } from './site-header'
import { PropertyFilters } from './property-filters'
import { PropertyMap } from './property-map'
import { PropertyList } from './property-list'
import { Button } from '@/components/ui/button'
import { MapIcon, ListIcon } from 'lucide-react'

interface PropertyLayoutProps {
  title: string
  type: 'buy' | 'rent' | 'sell'
}

export function PropertyLayout({ title, type }: PropertyLayoutProps) {
  const [showMap, setShowMap] = useState(true)

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <PropertyFilters />
      
      {/* Mobile View Toggle */}
      <div className="lg:hidden sticky top-16 z-10 bg-background p-2 border-b">
        <div className="flex gap-2">
          <Button
            variant={showMap ? "default" : "outline"}
            className="flex-1"
            onClick={() => setShowMap(true)}
          >
            <MapIcon className="w-4 h-4 mr-2" />
            Map
          </Button>
          <Button
            variant={!showMap ? "default" : "outline"}
            className="flex-1"
            onClick={() => setShowMap(false)}
          >
            <ListIcon className="w-4 h-4 mr-2" />
            List
          </Button>
        </div>
      </div>

      <div className="flex-1 lg:grid lg:grid-cols-2">
        {/* Map Section */}
        <div className={`
          ${showMap ? 'block' : 'hidden'}
          lg:block lg:sticky lg:top-[144px] lg:h-[calc(100vh-144px)]
        `}>
          <PropertyMap />
        </div>

        {/* Property List Section */}
        <div className={`
          ${!showMap ? 'block' : 'hidden'}
          lg:block overflow-auto
        `}>
          <PropertyList type={type} />
        </div>
      </div>
    </div>
  )
}

