import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const images = [
  {
    src: "/img/matecito.jpg",
    caption: "I love drinking mate while I code 🧉",
  },
  {
    src: "/img/Guitarreando.jpg",
    caption: "Huge fan of making music 🎸",
  },
  {
    src: "/img/friends.jpg",
    caption: "I enjoy hang out with friends",
  },
  {
    src: "/img/cocinando.jpg",
    caption: "Love cooking and trying new recipes 🍳",
  },
];

export default function RandomFactsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = images[currentIndex];
  const left = images[(currentIndex + images.length - 1) % images.length];
  const right = images[(currentIndex + 1) % images.length];

  const rotateTo = (dir) => {
    setCurrentIndex((prev) =>
      dir === "left"
        ? (prev - 1 + images.length) % images.length
        : (prev + 1) % images.length
    );
  };

  return (
    <div className="relative w-full flex flex-col items-center mt-10">
      {/* Flechas */}
      <button
        onClick={() => rotateTo("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => rotateTo("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        <ChevronRight />
      </button>

      {/* Carrusel */}
      <div className="flex items-center justify-center gap-8 relative w-full max-w-4xl px-6">
        {/* Imagen izquierda */}
        <img
          src={left.src}
          alt=""
          onClick={() => rotateTo("left")}
          className="w-48 h-64 object-cover rounded-xl blur-[2px] opacity-60 hover:opacity-80 hover:cursor-pointer transition"
        />

        {/* Imagen central con transición */}
        <div
          className="w-64 h-80 rounded-xl shadow-lg overflow-hidden"
          style={{ perspective: 1000 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.src}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full"
              whileHover={{
                rotateX: -5,
                rotateY: 5,
                scale: 1.03,
                transition: { type: "spring", stiffness: 200, damping: 10 },
              }}
            >
              <img
                src={current.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Imagen derecha */}
        <img
          src={right.src}
          alt=""
          onClick={() => rotateTo("right")}
          className="w-48 h-64 object-cover rounded-xl blur-[2px] opacity-60 hover:opacity-80 hover:cursor-pointer transition"
        />
      </div>
      {/* Caption con transición */}
      <div className="mt-6 h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={current.caption}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-center text-gray-700 italic text-lg max-w-xl absolute"
          >
            {current.caption}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
