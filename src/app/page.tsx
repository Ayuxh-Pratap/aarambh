"use client"

import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-white min-h-screen py-10">
      <Navbar />
      <div className="relative">
        <div className="mx-auto max-w-[1400px] px-6 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Section with Image */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative w-full aspect-square bg-[#FF6B6B] rounded-[32px] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/entrepreneur.jpg"
                  alt="Entrepreneur in a collaborative setting"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>

            {/* Middle Section with Content */}
            <div className="lg:col-span-4 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <h1 className="text-[64px] leading-[1.1] font-bold tracking-[-0.02em] text-[#0A2647]">
                  Transform Your Vision into Reality
                </h1>
                <p className="text-[#2C3E50] text-lg leading-relaxed">
                  Join Aarambh to turn your innovative ideas into successful ventures. Get expert mentorship, resources, and support to accelerate your entrepreneurial journey.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="group flex items-center gap-3 px-8 py-4 bg-[#0A2647] text-white rounded-full text-sm font-medium hover:bg-[#0A2647]/90 transition-colors"
                  >
                    Begin Your Journey
                    <div className="w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#0A2647] transition-colors">
                      <span className="transform rotate-45">→</span>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Section - Stats Card */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -top-3 right-4 z-10">
                  <div className="flex items-center gap-2 bg-[#4CAF50] text-white px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">SUCCESS RATE</span>
                    <span className="text-lg font-bold">+</span>
                  </div>
                </div>
                <div className="bg-[#0A2647] text-white p-6 rounded-[24px]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-300">Impact Metrics</p>
                      <p className="text-2xl font-medium mt-1">85%</p>
                    </div>
                    <div className="p-2 bg-[#FF6B6B] rounded-full">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="text-sm">Startup Success Rate</p>
                    <p className="text-sm text-gray-300 mt-1">Last 12 Months</p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-full bg-[#FF6B6B] rounded-r-[24px]"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
