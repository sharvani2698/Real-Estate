'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/sell", label: "Sell" },
    { href: "/loans", label: "Home Loans" },
    { href: "/agents", label: "Find an Agent" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">NepalHomes</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-pink-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center ml-auto space-x-4">
          <Button variant="ghost" size="sm" className="hover:text-pink-600">
            Manage Rentals
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-pink-600">
            Advertise
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-pink-600">
            Help
          </Button>
          <Button 
            variant="default" 
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
          >
            Sign In
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-2 py-1 text-lg hover:text-pink-600"
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-4" />
              <Button 
                variant="default" 
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
              >
                Sign In
              </Button>
              <Button variant="ghost" className="w-full hover:text-pink-600">
                Manage Rentals
              </Button>
              <Button variant="ghost" className="w-full hover:text-pink-600">
                Advertise
              </Button>
              <Button variant="ghost" className="w-full hover:text-pink-600">
                Help
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

