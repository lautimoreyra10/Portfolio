import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar"

export default function About() {
  return (
    <>
      <Navbar />
      <motion.section
        className="relative w-full min-h-screen flex items-center justify-center bg-[#f5f4f3] px-6"
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, rotate: 10 }} // Desaparece hacia abajo con una leve rotación
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          className="flex flex-col max-w-2xl text-center w-3/4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="text-6xl md:text-5xl font-bold mb-6 text-[#2f2e2e]"
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0, rotate: -5 }}
            transition={{ duration: 0.6 }}
          >
            About.
          </motion.div>
        </motion.div>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f5f4f3] px-6">
        <div>
          <div>
            <img
              src="/public/img/yo4.png"
              alt="Lautaro Moreyra"
              className="w-2/4 h-2/4 mb-8"
            />
          </div>
          <div className="text-4xl font-bold pb-3">
            ¡Hola!, Soy <span className="text-[#e15051]">Lauti</span>{" "}
            <span className="inline-block animate-bounce">👋</span>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            Soy desarrollador web full stack con foco en Frontend: React y
            Javascript. <br />
            Me gusta crear experiencias digitales simples, elegantes y con impacto. <br />
            Amo aprender cosas nuevas, y busco fusionar tecnología y diseño <br />
            para hacer cosas únicas.
          </p>
        </div>
      </section>
      </motion.section>
    </>
  )
}
