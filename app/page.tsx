"use client"

import { useState } from "react"
import QuizContainer from "@/components/quiz-container"
import ResultsPage from "@/components/results-page"
import { AnimatePresence } from "framer-motion"

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>([])

  const quizzes = [
    {
      id: 1,
      question: "What sound does a cat make?",
      options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
      correct: 1,
    },
    {
      id: 2,
      question: "What would you probably find in your fridge?",
      options: ["Shoes", "Ice Cream", "Books"],
      correct: 1,
    },
    {
      id: 3,
      question: "What color are bananas?",
      options: ["Blue", "Yellow", "Red"],
      correct: 1,
    },
    {
      id: 4,
      question: "How many stars are in the sky?",
      options: ["Two", "Infinite", "One Hundred"],
      correct: 1,
    },
  ]

  const handleAnswer = (selectedIndex: number) => {
    console.log("[v0] Answer selected:", selectedIndex, "Current question:", currentQuestion)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedIndex
    setAnswers(newAnswers)
  }

  const handleNavigate = (direction: "prev" | "next" | "submit") => {
    if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else if (direction === "next" && currentQuestion < quizzes.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else if (direction === "submit") {
      // Calculate score based on all answers
      let finalScore = 0
      answers.forEach((answer, index) => {
        if (answer === quizzes[index].correct) {
          finalScore += 1
        }
      })
      setScore(finalScore)
      setShowResults(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false)
    setAnswers([])
  }

  if (showResults) {
    return <ResultsPage score={score} totalQuestions={quizzes.length} userName="" onRestart={handleRestartQuiz} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7CB9E8] via-[#A8D8EA] to-[#5BA3D0] flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <QuizContainer
          key={currentQuestion}
          question={quizzes[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={quizzes.length}
          onAnswer={handleAnswer}
          onNavigate={handleNavigate}
          userName=""
          selectedAnswer={answers[currentQuestion] ?? null}
        />
      </AnimatePresence>
    </div>
  )
}
