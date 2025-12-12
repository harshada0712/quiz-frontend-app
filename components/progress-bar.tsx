"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`h-1.5 flex-1 rounded-full origin-left ${index < current ? "bg-[#0FA3B1]" : "bg-gray-300"}`}
        />
      ))}
    </div>
  )
}
