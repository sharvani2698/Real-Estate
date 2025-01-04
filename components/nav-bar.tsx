'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-teal-600">HOMES</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-teal-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Services
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-sm">
            Sign in
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 transition-colors">
            Sign up
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Contact
              </Link>
              <Button variant="ghost" className="justify-start">
                Sign in
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700 transition-colors">
                Sign up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

