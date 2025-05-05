'use client'
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Header() {
  const router = useRouter()

  function handleHome() {
    router.push("/")
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white py-6 px-4 flex justify-center"
    >
      <img
        src="./logo-furia.svg"
        alt="Logo FURIA"
        onClick={handleHome}
        className="w-36 md:w-40 cursor-pointer hover:scale-105 transition-transform duration-300"
      />
    </motion.header>
  )
}
