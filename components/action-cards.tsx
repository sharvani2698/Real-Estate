'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Key } from 'lucide-react'
import { motion } from "framer-motion"
import { fadeIn, stagger } from "@/utils/animations"

export function ActionCards() {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeIn}>
          <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white group">
            <CardContent className="space-y-6 p-0">
              <div className="relative h-32 mx-auto flex items-center justify-center">
                <div className="p-6 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
                  <Home className="w-12 h-12 text-pink-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Buy a home
              </h2>
              <p className="text-muted-foreground">
                Find your place with an immersive photo experience and the most listings, including
                things you won't find anywhere else.
              </p>
              <Button 
                asChild 
                className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
              >
                <Link href="/buy">Browse homes</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white group">
            <CardContent className="space-y-6 p-0">
              <div className="relative h-32 mx-auto flex items-center justify-center">
                <div className="p-6 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
                  <Building2 className="w-12 h-12 text-pink-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Sell a home
              </h2>
              <p className="text-muted-foreground">
                No matter what path you take to sell your home, we can help you navigate a
                successful sale.
              </p>
              <Button 
                asChild 
                className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
              >
                <Link href="/sell">See your options</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white group">
            <CardContent className="space-y-6 p-0">
              <div className="relative h-32 mx-auto flex items-center justify-center">
                <div className="p-6 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
                  <Key className="w-12 h-12 text-pink-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Rent a home
              </h2>
              <p className="text-muted-foreground">
                We're creating a seamless online experience – from shopping on the largest
                rental network, to applying, to paying rent.
              </p>
              <Button 
                asChild 
                className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
              >
                <Link href="/rent">Find rentals</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

