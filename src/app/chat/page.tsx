'use client'
import { db } from "@/lib/firebase";
import { onChildAdded, push, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messagesRef = ref(db, "chat");

    onChildAdded(messagesRef, (snapshot) => {
      const message: Message = snapshot.val();
      setMessages((prev) => [...prev, message]);
    });

    if (messages.length === 0) {
      sendMessage({ sender: "bot", text: "👋 Bem-vindo ao Chat da Torcida FURIA!" });
      sendMessage({ sender: "bot", text: "Digite /proximojogo, /jogadores ou /curiosidade" });
    }
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (msg: Message) => {
    const messagesRef = ref(db, "chat");
    await push(messagesRef, msg);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { sender: "user", text: input };
    sendMessage(userMsg);
    handleBotResponse(input);
    setInput("");
  };

  const handleBotResponse = (command: string) => {
    const normalized = command.trim().toLowerCase();
    if (!normalized.startsWith("/")) return;

    let response = "❓ Comando não reconhecido. Tente /proximojogo, /jogadores, /curiosidade";

    if (normalized === "/proximojogo") {
      response = "📅 Próximo jogo: FURIA vs Natus Vincere — 05/05 às 18h (BO3)";
    } else if (normalized === "/jogadores") {
      response = "👥 KSCERATO, yuurih, chelo, FalleN, arT";
    } else if (normalized === "/curiosidade") {
      response = "🔥 FURIA foi o 1º time BR a alcançar Top 3 mundial com lineup majoritariamente brasileira.";
    } else if (normalized === "/torcida") {
      response = "📢 VAI FURIAAAA! 🔥🔥🔥";
    }

    setTimeout(() => {
      sendMessage({ sender: "bot", text: response });
    }, 600);
  };

  return (
    <div className="h-[90dvh] bg-black text-white flex flex-col">
      <header className="bg-zinc-900 text-center py-4 text-lg font-bold">
        Chat da Torcida FURIA
      </header>

      {/* Mensagens com scroll e scrollbar custom */}
      <div className="flex-1 h-0 px-4 py-2 space-y-2 overflow-y-auto custom-scrollbar">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-[80%] p-3 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-purple-600 self-end ml-auto text-right"
                  : "bg-zinc-800 self-start"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={endRef} />
      </div>

      <div className="p-4 bg-zinc-900 flex items-center gap-2">
        <input
          type="text"
          placeholder="Digite seu comando..."
          className="flex-1 rounded-2xl px-4 py-2 bg-zinc-800 text-white focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-2xl font-bold"
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
