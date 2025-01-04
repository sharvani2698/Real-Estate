'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-yellow-50" />
      
      <div className="container relative mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Find Your Best
            <br />
            <span className="text-teal-600">Real Estate</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Find your perfect home with us, we will help you find the most suitable residence for you.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-2xl p-6 shadow-xl space-y-6 max-w-2xl">
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
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="central">Central Area</SelectItem>
                  <SelectItem value="north">North Area</SelectItem>
                  <SelectItem value="south">South Area</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100k">$0 - $100k</SelectItem>
                  <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                  <SelectItem value="500k+">$500k+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700">
              <Search className="mr-2 h-4 w-4" /> Search Property
            </Button>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[500px]">
            <Image
              src="https://s.tmimgcdn.com/scr/800x500/328100/real-estate-website-hero-section-02_328178-original.jpg"
              alt="Real Estate Illustration"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
              width={640}
              height={400}
            />
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 bg-white p-3 rounded-full shadow-lg"
            >
              <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                🏠
              </div>
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg"
            >
              <div className="h-8 w-8 bg-teal-500 rounded-full flex items-center justify-center text-white">
                📍
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

