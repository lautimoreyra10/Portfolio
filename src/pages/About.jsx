import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function About() {
  const [activeSection, setActiveSection] = useState("about");

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <>
      <Navbar
        onAboutClick={() => setActiveSection("about")}
        onPortfolioClick={() => setActiveSection("portfolio")}
        onContactClick={() => setActiveSection("contact")}
      />

      <motion.section
        className="relative w-full min-h-screen flex flex-col items-center justify-start bg-[#f5f4f3] px-6 pt-20"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, rotate: 10 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Título + Imagen */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-between items-start px-10 mt-16"
        >
          {/* Título */}
          <div className="w-1/2">
            <div className="text-6xl md:text-5xl font-bold text-[#2f2e2e]">
              About.
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-end items-start">
            <img
              src="/img/yosaturado.png"
              alt="Lautaro Moreyra"
              className="h-2/4 mb-8 shadow-[inset_30px_0_30px_-10px_rgba(245,244,243,1)] mask-gradient-b"
            />
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex items-center justify-center my-12 px-6"
        >
          <hr className="flex-grow border-t border-gray-200 max-w-[40%]" />
          <span className="mx-4 text-gray-400 text-sm tracking-wide font-medium">
            Between the digital and the real
          </span>
          <hr className="flex-grow border-t border-gray-200 max-w-[40%]" />
        </motion.div>

        {/* Texto de descripción */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mt-10 pb-[3%]"
        >
          <span className="text-2xl text-[#2f2e2e] text-justify ">
            I'm a software developer from{" "}
            <span className="font-semibold hover:text-[#e15051]">
              Argentina
            </span>{" "}
            <ReactCountryFlag countryCode="AR" svg />
            <br /> I love creating web applications and exploring new
            technologies.
            <br /> I have a passion for learning and sharing knowledge with
            others.
            <br />
            My goal is to create beautiful and functional applications that
            make a difference.
            <br /> I enjoy working with React, Javascript or Typescript,
            <br /> Tailwind and other modern web technologies.
          </span>
        </motion.div>
      </motion.section>
    </>
  );
}
