import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import ReactCountryFlag from "react-country-flag";
import SkillsPieChart from "../components/SkillsPieChart";
import RandomFactsCarousel from "../components/RandomFactsCarousel";

export default function About() {
  const [activeSection, setActiveSection] = useState("about");

  // Configuración común para los observers
  const observerOptions = {
    threshold: 0.2,
    triggerOnce: false,
  };

  // Hooks para cada sección (se activan tanto al entrar como al salir)
  const [dividerRef, dividerInView] = useInView(observerOptions);
  const [descriptionRef, descriptionInView] = useInView(observerOptions);
  const [skillsRef, skillsInView] = useInView(observerOptions);
  const [randomFactsRef, randomFactsInView] = useInView(observerOptions);

  return (
    <>
      <Navbar
        onAboutClick={() => setActiveSection("about")}
        onPortfolioClick={() => setActiveSection("portfolio")}
        onContactClick={() => setActiveSection("contact")}
      />

      <motion.section
        className="relative w-full flex flex-col justify-start pr-6 pt-20"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, rotate: 10 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Título + Imagen */}
        <div className="w-full flex justify-between items-start px-10">
          {/* Título izquierda */}
          <div className="w-1/2 mt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                className="text-6xl md:text-5xl font-bold text-[#2f2e2e]"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0, rotate: 10 }}
                transition={{ duration: 0.4 }}
              >
                {activeSection === "about" && "About."}
                {activeSection === "portfolio" && "Portfolio."}
                {activeSection === "contact" && "Contact."}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Imagen a la derecha */}
          <motion.div
            className="flex justify-end items-start"
            key={activeSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            {activeSection === "about" && (
              <section className="pb-[3%]">
                <img
                  src="/img/yosaturado.png"
                  alt="Lautaro Moreyra"
                  className="h-2/4 mb-[5%] shadow-[inset_10px_0_10px_-10px_rgba(245,244,243,1)] mask-gradient-b"
                />
              </section>
            )}
          </motion.div>
        </div>

        {/* Divider - Animación de entrada y salida */}
        {activeSection === "about" && (
          <motion.div
            ref={dividerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              dividerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="w-full flex items-center justify-center my-12 px-6 mb-[5%]">
              <span className="mx-4 text-gray-400 text-sm tracking-wide font-medium">
                Between the digital and the real
              </span>
            </div>
          </motion.div>
        )}

        {/* Descripción - Animación completa */}
        {activeSection === "about" && (
          <motion.div
            ref={descriptionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: descriptionInView ? 0.2 : 0,
            }}
            className="flex flex-row-reverse mt-10 pb-[5%]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="p-[4%]">
              <div className="text-3xl text-[#2f2e2e] text-justify tracking-tight">
                I'm a web developer from{" "}
                <span className="font-semibold hover:text-[#e15051]">
                  Argentina
                </span>{" "}
                <ReactCountryFlag countryCode="AR" svg />
                <br /> I love creating web applications and exploring new
                technologies.
                <br />
                My goal is to create beautiful and functional applications that
                make a difference.
                <br /> I have a passion for learning and sharing knowledge with
                others.
              </div>
            </div>
            <div className="w-1/3 flex justify-start items-start">
              <img
                src="/img/ill.png"
                alt="Vector"
                className="pl-[4%] w-[65%]"
              />
            </div>
          </motion.div>
        )}

        {/* Skills Section - Animación completa */}
        {activeSection === "about" && (
          <motion.section
            ref={skillsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: skillsInView ? 0.3 : 0,
            }}
            className="w-[100vw] flex flex-col items-center border-t border-gray-200 shadow-[0px_-1px_2px_0px_rgba(0,_0,_0,_0.1)] pt-[3%]"
          >
            <div className="flex justify-center items-center gap-16 flex-wrap lg:flex-nowrap py-16 px-6">
              {/* Parte izquierda */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Coder</h2>
                <ul className="text-gray-700 space-y-2">
                  <li>Front-end development</li>
                  <li>HTML / Tailwind</li>
                  <li>JavaScript / Typescript</li>
                  <li>React / Next</li>
                  <li>Back-end development</li>
                </ul>
              </div>

              {/* Pie chart */}
              <div className="w-64 h-64">
                <SkillsPieChart />
              </div>

              {/* Parte derecha */}
              <div className="text-right">
                <h2 className="text-2xl font-bold mb-4 text-[#e15051]">
                  Designer
                </h2>
                <ul className="text-gray-700 space-y-2">
                  <li>UX design</li>
                  <li>UI design</li>
                  <li>Design Patterns</li>
                  <li>Prototyping</li>
                  <li>Design Systems</li>
                </ul>
              </div>
            </div>
          </motion.section>
        )}
        {/*Random facts */}
        {activeSection === "about" && (
          <motion.section
            ref={randomFactsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              randomFactsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: randomFactsInView ? 0.3 : 0,
            }}
            className="w-[100vw] flex flex-col items-center border-t border-gray-200 shadow-[0px_-1px_2px_0px_rgba(0,_0,_0,_0.1)] pt-[3%] pb-[3%]"
          >
            <h2 className="text-2xl font-bold mb-8 text-[#2f2e2e]">
              Random facts
            </h2>
            <RandomFactsCarousel />
          </motion.section>
        )}

        {/* Portfolio y Contacto*/}
        {activeSection === "portfolio" && (
          <div className="text-xl text-gray-600 mt-10 text-center">
            Projects 🎨 that I've worked on.
          </div>
        )}

        {activeSection === "contact" && (
          <div className="text-xl text-gray-600 mt-10 text-center">
            Let's get in touch! 📧
          </div>
        )}
      </motion.section>
    </>
  );
}
