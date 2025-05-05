'use client'
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full flex flex-col md:flex-row items-center justify-between bg-white text-black px-8 py-10 gap-6"
    >
      {/* Redes sociais */}
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-2">
          <img src="./icons8-instagram-48.png" alt="Instagram" className="w-5 h-5" />
          <a href="https://www.instagram.com/furiagg/" target="_blank">@furiagg</a>
        </div>
        <div className="flex items-center gap-2">
          <img src="./icons8-x-48.png" alt="X/Twitter" className="w-5 h-5" />
          <a href="https://x.com/FURIA" target="_blank">@FURIA</a>
        </div>
        <div className="flex items-center gap-2">
          <img src="./icons8-twitch-48.png" alt="Twitch" className="w-5 h-5" />
          <a href="https://www.twitch.tv/furiatv" target="_blank">FURIAtv</a>
        </div>
      </div>

      {/* Logo central */}
      <img src="./logo-furia.svg" alt="Logo FURIA" className="w-28 md:w-36" />

      {/* Créditos */}
      <p className="text-sm text-center md:text-right">Desenvolvido por: Lorenzo Q. Gonçalves</p>
    </motion.footer>
  );
}
