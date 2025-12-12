"use client"
import { motion } from "framer-motion"
import ProgressBar from "./progress-bar"
import QuestionCard from "./question-card"
import OptionButton from "./option-button"
import NavigationButtons from "./navigation-buttons"
import MascotCharacter from "./mascot-character"

interface QuizContainerProps {
  question: {
    id: number
    question: string
    options: string[]
    correct: number
  }
  questionNumber: number
  totalQuestions: number
  onAnswer: (selectedIndex: number) => void
  onNavigate: (direction: "prev" | "next" | "submit") => void
  userName: string
  selectedAnswer: number | null
}

export default function QuizContainer({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNavigate,
  userName,
  selectedAnswer,
}: QuizContainerProps) {
  const handleOptionClick = (index: number) => {
    onAnswer(index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-6xl"
    >
      <div className="rounded-3xl p-1 bg-gradient-to-b from-white to-gray-50 shadow-2xl">
        <div className="bg-gray-100 rounded-3xl p-6">
          {/* Inner white box for content */}
          <div className="bg-white rounded-2xl p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-serif italic text-[#0F4C75] mb-1">Test Your Knowledge</h1>
            </div>

            <p className="text-center text-gray-700 text-xs md:text-sm mb-6">
              Answer all questions to see your results
            </p>

            {/* Progress Bar */}
            <div className="mb-6">
              <ProgressBar current={questionNumber} total={totalQuestions} />
            </div>

            {/* Question Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-6"
            >
              <QuestionCard questionNumber={questionNumber} question={question.question} userName={userName} />
            </motion.div>

            {/* Options - Reduced gap and spacing */}
            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                >
                  <OptionButton
                    label={option}
                    isSelected={selectedAnswer === index}
                    isCorrect={false}
                    isWrong={false}
                    onClick={() => handleOptionClick(index)}
                    disabled={false}
                  />
                </motion.div>
              ))}
            </div>

            {/* Navigation or Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {questionNumber === totalQuestions ? (
                <button
                  onClick={() => onNavigate("submit")}
                  disabled={selectedAnswer === null}
                  className="w-full bg-[#B0E0E6] text-[#0F4C75] font-semibold py-3 rounded-lg hover:bg-[#A8D8EA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              ) : (
                <NavigationButtons onNavigate={onNavigate} canGoNext={selectedAnswer !== null} />
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {questionNumber === 1 && (
        <div className="absolute lg:bottom-24 bottom-32 -left-12 lg:-left-16">
          <MascotCharacter showBubble={true} userName={userName} />
        </div>
      )}
    </motion.div>
  )
}
