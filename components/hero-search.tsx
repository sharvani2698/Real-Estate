'use client'

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/animations"

export function HeroSearch() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ 
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shree-bunglow-usine-studio-img~f0719638097724cd_4-8874-1-85e2dfb.jpg-uDj8SJCq9gemGy8Kba8sRVEzAqdn0O.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center text-white"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Discover Your Dream Home<br />
          in Kathmandu
        </h1>
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex gap-2 bg-white/10 backdrop-blur-md rounded-lg p-2 shadow-xl">
            <Input 
              type="text" 
              placeholder="Enter an address, neighborhood, city, or ZIP code" 
              className="flex-1 text-white placeholder:text-white/70 bg-transparent border-white/20"
              defaultValue="Kathmandu, Nepal"
            />
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-white/90 transition-all duration-300"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

