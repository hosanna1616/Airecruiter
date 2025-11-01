"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div>
              <span className="text-2xl font-bold">
                <span className="text-orange-500">AI</span>
                <span className="text-white"> HIRE</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 max-w-md leading-relaxed">
              Revolutionizing the hiring process with AI-powered solutions. Eliminate biases and enhance candidate
              experience with data-driven insights.
            </p>

            {/* Quick Links */}
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                Services
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right Section - Robot Character */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-xs">
              {/* Robot Image with black theme */}
              <Image
                src="/Aiimage.png"
                alt="AI Robot Character"
                width={300}
                height={400}
                className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 AI HIRE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
