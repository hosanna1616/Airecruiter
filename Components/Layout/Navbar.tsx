"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/Components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold">
            <span className="text-orange-500">AI</span>
            <span className="text-black"> HIRE</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* Desktop Signup Button */}
        <div className="hidden md:block">
          <Link href="/signup">
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full px-6 py-2 font-medium bg-transparent"
            >
              Signup
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full py-2 font-medium bg-transparent"
              >
                Signup
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
