'use client'

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square } from 'lucide-react'
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/animations"

interface PropertyCardProps {
  id: string
  title: string
  price: number
  location: string
  beds: number
  baths: number
  sqft: number
  imageUrl: string
  type: "sale" | "rent"
}

export function PropertyCard({
  id,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  imageUrl,
  type
}: PropertyCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/properties/${id}`}>
        <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl border-0 bg-white/5 backdrop-blur">
          <div className="relative h-[250px] overflow-hidden group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/577997b7da69918a93e04165a575f0c6.jpg-6wsB9LYucKusDuuEGX83aM1QXKfnLl.jpeg"
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Badge 
              className="absolute top-4 left-4"
              variant={type === "sale" ? "default" : "secondary"}
            >
              {type === "sale" ? "For Sale" : "For Rent"}
            </Badge>
          </div>
          <CardContent className="p-6">
            <div className="text-3xl font-bold mb-2">
              ${price.toLocaleString()}
              {type === "rent" && "/mo"}
            </div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </CardContent>
          <CardFooter className="px-6 py-4 border-t bg-muted/50 flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              {beds} beds
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              {baths} baths
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4" />
              {sqft.toLocaleString()} sqft
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

