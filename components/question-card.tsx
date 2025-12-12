"use client"

import { motion } from "framer-motion"

interface QuestionCardProps {
  questionNumber: number
  question: string
  userName: string
}

export default function QuestionCard({ questionNumber, question, userName }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-[#D0E8F2] to-[#B0E0E6] rounded-2xl p-6 text-center"
    >
      {userName && userName !== "Guest" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block bg-[#FF69B4] text-white px-3 py-1 rounded-full text-xs font-bold mb-3"
        >
          {userName}
        </motion.div>
      )}
      <p className="text-lg font-semibold text-[#0F4C75]">
        {questionNumber}. {question}
      </p>
    </motion.div>
  )
}
