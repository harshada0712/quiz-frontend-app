"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface MascotCharacterProps {
  showBubble?: boolean
  userName?: string
}

export default function MascotCharacter({ showBubble = false, userName = "" }: MascotCharacterProps) {
  return (
    <div className="hidden md:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-56 h-56 flex items-end"
      >
        {/* User Name Tag */}
        {showBubble && userName && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="absolute top-2 -left-12 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20"
          >
            {userName}
          </motion.div>
        )}

        {/* Speech Bubble */}
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="absolute -top-16 -left-24 bg-white rounded-3xl px-6 py-3 shadow-lg border-4 border-[#5BA3D0] w-48 z-10"
          >
            {/* Tail pointer */}
            <div className="absolute -bottom-2 right-12 w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-[#5BA3D0]"></div>

            <p className="text-center text-[#0F4C75] font-bold text-base" style={{ fontFamily: "cursive" }}>
              Best of Luck!
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/mascot-paw.gif"
            alt="Cute cat paw mascot"
            width={160}
            height={180}
            priority
            className="drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
