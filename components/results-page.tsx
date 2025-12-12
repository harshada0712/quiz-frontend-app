"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface ResultsPageProps {
  score: number
  totalQuestions: number
  userName: string
  onRestart: () => void
}

export default function ResultsPage({ score, totalQuestions, userName, onRestart }: ResultsPageProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const [displayedPercentage, setDisplayedPercentage] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    const incrementPercentage = () => {
      setDisplayedPercentage((prev) => {
        if (prev < percentage) {
          return Math.min(prev + 2, percentage)
        }
        return prev
      })
    }

    interval = setInterval(incrementPercentage, 30)

    return () => clearInterval(interval)
  }, [percentage])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F0F5] via-[#F5FBFE] to-[#E8F0F5] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-gray-600 mb-6"
        >
          Keep Learning!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-3xl font-bold text-[#0F4C75] mb-2"
          style={{ fontStyle: "italic" }}
        >
          Your Final score is
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
          className="text-8xl font-bold text-[#0FA3B1] mb-8"
        >
          {displayedPercentage}
          <span className="text-5xl">%</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-gray-600 mb-4 text-sm"
        >
          You answered {score} out of {totalQuestions} questions correctly
        </motion.p>

        {userName && userName !== "Guest" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="text-[#0F4C75] font-semibold mb-8"
          >
            Great job, {userName}!
          </motion.p>
        )}

        <motion.button
          onClick={onRestart}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#B0E0E6] text-[#0F4C75] font-semibold py-3 px-8 rounded-lg hover:bg-[#A8D8EA] transition-colors"
        >
          Start Again
        </motion.button>
      </motion.div>
    </div>
  )
}
