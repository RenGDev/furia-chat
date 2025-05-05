'use client'
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Hero() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  function handleNext() {
    setLeaving(true);
    setTimeout(() => router.push("/chat"), 500); // espera animação antes de trocar de rota
  }

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.main
          className="flex flex-col items-center justify-center gap-16 min-h-screen px-6 text-center bg-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo com animação de flutuação infinita */}
            <motion.img
              src="/Furia_Esports_logo.png"
              alt="Logo da FURIA"
              className="w-32 md:w-48"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <h1 className="text-3xl md:text-5xl font-bold max-w-md">
              A torcida da <span className="text-purple-500">FURIA</span> agora tem voz!
            </h1>
          </motion.div>

          <motion.button
            onClick={handleNext}
            className="bg-white text-black font-bold px-6 py-3 cursor-pointer rounded-xl hover:bg-zinc-200 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar no chat
          </motion.button>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
