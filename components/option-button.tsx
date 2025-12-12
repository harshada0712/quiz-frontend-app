"use client"

import { motion } from "framer-motion"

interface OptionButtonProps {
  label: string
  isSelected: boolean
  isCorrect: boolean
  isWrong: boolean
  onClick: () => void
  disabled: boolean
}

export default function OptionButton({ label, isSelected, isCorrect, isWrong, onClick, disabled }: OptionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 border-2 ${
        isCorrect
          ? "bg-green-100 border-green-500 text-green-800"
          : isWrong
            ? "bg-red-100 border-red-500 text-red-800"
            : isSelected
              ? "bg-[#B0E0E6] border-[#0FA3B1] text-[#0F4C75]"
              : "bg-white border-gray-300 text-gray-800 hover:border-[#B0E0E6] hover:bg-[#F0F9FF]"
      }`}
    >
      {label}
    </motion.button>
  )
}
