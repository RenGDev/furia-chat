'use client'
import { motion } from "framer-motion"

export default function ChatMock() {
  return (
    <main className="bg-zinc-900 text-white py-16 px-4 flex flex-col items-center text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tudo o que um fã precisa. Em um só lugar.
      </motion.h2>

      <motion.img
        src="./82a15c35-e9b0-41ce-940d-e2c7d65c026e.png"
        alt="Chat da FURIA em funcionamento"
        className="w-full max-w-3xl rounded-2xl shadow-xl border border-zinc-700"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      />
    </main>
  );
}
