'use client'
import { motion } from "framer-motion"
import {
  Gamepad2,
  MessageCircle,
  BarChart2,
  Brain
} from "lucide-react"

export default function Functions() {
  const features = [
    {
      icon: Gamepad2,
      text: "Acompanhe jogos ao vivo",
      color: "text-purple-500",
    },
    {
      icon: MessageCircle,
      text: "Chat com outros fãs",
      color: "text-pink-500",
    },
    {
      icon: BarChart2,
      text: "Estatísticas em tempo real",
      color: "text-blue-500",
    },
    {
      icon: Brain,
      text: "Curiosidades e quizzes",
      color: "text-yellow-500",
    },
  ];

  return (
    <main className="bg-white py-20 px-6 text-black justify-center flex flex-col items-center gap-12 min-h-screen">
      <h2 className="text-4xl font-bold text-center">
        Tudo o que um fã precisa. Em um só lugar.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center gap-4 text-xl font-medium group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`transition duration-300 ease-in-out group-hover:scale-110 ${feature.color}`}
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-10 h-10" />
              </motion.div>
              <h3>{feature.text}</h3>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
