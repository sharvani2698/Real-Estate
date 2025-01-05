'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function PropertyMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
          version: 'weekly',
          libraries: ['places']
        })

        const { Map } = await loader.importLibrary('maps')

        // Kathmandu coordinates
        const center = { lat: 27.7172, lng: 85.3240 }

        const mapOptions = {
          center,
          zoom: 13,
          mapId: 'DEMO_MAP_ID',
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        }

        const map = new Map(mapRef.current!, mapOptions)

        // Example property locations in Kathmandu
        const locations = [
          { lat: 27.7172, lng: 85.3240, price: '$250,000', title: 'Modern Apartment' },
          { lat: 27.7272, lng: 85.3340, price: '$180,000', title: 'Family Home' },
          { lat: 27.7072, lng: 85.3140, price: '$320,000', title: 'Luxury Villa' },
        ]

        // Create and add markers
        locations.forEach(location => {
          const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map,
            title: location.title,
            label: {
              text: location.price,
              className: 'bg-white px-2 py-1 rounded shadow text-sm font-medium',
            },
            animation: google.maps.Animation.DROP,
          })

          // Add click event listener
          marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div class="p-2">
                  <h3 class="font-bold">${location.title}</h3>
                  <p class="text-lg">${location.price}</p>
                  <p class="text-sm text-gray-600">Click to view details</p>
                </div>
              `
            })
            infoWindow.open(map, marker)
          })
        })

      } catch (err) {
        console.error('Error initializing map:', err)
        setError('Failed to load the map. Please try again later.')
      }
    }

    initMap()
  }, [])

  if (error) {
    return (
      <div className="p-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-0">
      <div ref={mapRef} className="absolute inset-0" />
    </div>
  )
}

