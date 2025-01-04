'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { NavBar } from '@/components/nav-bar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function RealEstate() {
  const [view, setView] = useState<'map' | 'satellite'>('map')

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-[calc(100vh-4rem)] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-yellow-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Find Your Dream Home in
              <br />
              <span className="text-teal-600">Kathmandu</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
{`              Discover the perfect property in the heart of Nepal's capital. From modern apartments to traditional homes, we have it all.
`}
            </p>

            {/* Search Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-xl space-y-6 max-w-2xl"
            >
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                  <TabsTrigger value="sell">Sell</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="grid sm:grid-cols-3 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thamel">Thamel</SelectItem>
                    <SelectItem value="patan">Patan</SelectItem>
                    <SelectItem value="bhaktapur">Bhaktapur</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5m">0 - 5M NPR</SelectItem>
                    <SelectItem value="5m-10m">5M - 10M NPR</SelectItem>
                    <SelectItem value="10m+">10M+ NPR</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 transition-colors">
                <Search className="mr-2 h-4 w-4" /> Search Property
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hidden lg:block h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625949266!2d85.29111321259316!3d27.70903193652254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1633697288140!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Property Listings Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24"
      >
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PropertyCard
            image="/house.png"
            price="15000000"
            address="Thamel, Kathmandu"
            beds={3}
            baths={2}
            sqft={1500}
          />
          <PropertyCard
            image="/house.png"
            price="25000000"
            address="Patan Durbar Square, Lalitpur"
            beds={4}
            baths={3}
            sqft={2200}
          />
          <PropertyCard
            image="/house.png"
            price="18000000"
            address="Bhaktapur Durbar Square, Bhaktapur"
            beds={3}
            baths={2}
            sqft={1800}
          />
        </div>
      </motion.section>

      {/* Full Width Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="h-[600px] w-full relative"
      >
        <div className="absolute top-4 left-4 z-10 bg-white rounded-md shadow-lg">
          <Button
            variant={view === 'map' ? 'default' : 'ghost'}
            className="rounded-r-none"
            onClick={() => setView('map')}
          >
            Map
          </Button>
          <Button
            variant={view === 'satellite' ? 'default' : 'ghost'}
            className="rounded-l-none"
            onClick={() => setView('satellite')}
          >
            Satellite
          </Button>
        </div>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625949266!2d85.29111321259316!3d27.70903193652254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e${view === 'satellite' ? '1' : '0'}!3m2!1sen!2sus!4v1633697288140!5m2!1sen!2sus`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </motion.section>
    </div>
  )
}

function PropertyCard({
  image,
  price,
  address,
  beds,
  baths,
  sqft
}: {
  image: string
  price: string
  address: string
  beds: number
  baths: number
  sqft: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-[4/3] relative">
          <img
            src={image}
            alt="Property"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="text-2xl font-bold">{Number(price).toLocaleString()} NPR</div>
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
            <span>{address}</span>
          </div>
          <div className="flex gap-4">
            <Badge icon="🛏️" value={beds} />
            <Badge icon="🚿" value={baths} />
            <Badge icon="📏" value={sqft} />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function Badge({ icon, value }: { icon: string; value: number }) {
  return (
    <div className="px-3 py-1 bg-secondary rounded-full text-sm flex items-center gap-1.5">
      <span>{icon}</span>
      <span>{value}</span>
    </div>
  )
}

