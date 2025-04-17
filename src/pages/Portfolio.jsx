import { motion } from "framer-motion";
import Navbar from "../components/Navbar";


export default function Portfolio() {
  return (
    <>
      <Navbar />
      <motion.section
        className="relative w-full min-h-screen flex items-center justify-center bg-[#f5f4f3] px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex flex-col max-w-2xl text-center w-3/4">
          <motion.div
            className="text-6xl md:text-5xl font-bold mb-6 text-[#2f2e2e]"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio.
          </motion.div>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            Acá vas a encontrar una selección de mis trabajos favoritos, donde combino diseño y desarrollo para crear experiencias digitales únicas.
          </p>
        </div>
      </motion.section>
    </>
  );
}
