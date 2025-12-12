"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationButtonsProps {
  onNavigate: (direction: "prev" | "next" | "submit") => void
  canGoNext: boolean
}

export default function NavigationButtons({ onNavigate, canGoNext }: NavigationButtonsProps) {
  console.log("[v0] Navigation buttons - canGoNext:", canGoNext)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center gap-4"
    >
      <button
        onClick={() => onNavigate("prev")}
        className="bg-[#B0E0E6] hover:bg-[#A8D8EA] text-[#0F4C75] p-3 rounded-lg transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => onNavigate("next")}
        disabled={!canGoNext}
        className="bg-[#B0E0E6] hover:bg-[#A8D8EA] disabled:hover:bg-[#B0E0E6] text-[#0F4C75] disabled:text-gray-400 p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </motion.div>
  )
}
