import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import ReactCountryFlag from "react-country-flag";
import SkillsPieChart from "../components/SkillsPieChart";

export default function About() {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  // Configuración común para los observers
  const observerOptions = {
    threshold: 0.2,
    // Cambia esto si quieres que se animen solo una vez
    triggerOnce: false 
  };
  
  // Hooks para cada sección (ahora se activarán tanto al entrar como al salir)
  const [dividerRef, dividerInView] = useInView(observerOptions);
  const [descriptionRef, descriptionInView] = useInView(observerOptions);
  const [skillsRef, skillsInView] = useInView(observerOptions);

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
        {/* Contenedor: Título + Imagen */}
        <div className="w-full flex justify-between items-start px-10">
          {/* Título a la izquierda */}
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

        {/* Divider - Ahora con animación de entrada y salida */}
        {activeSection === "about" && (
          <motion.div
            ref={dividerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={dividerInView ? 
              { opacity: 1, y: 0 } : 
              { opacity: 0, y: 40 }
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
            animate={descriptionInView ? 
              { opacity: 1, y: 0 } : 
              { opacity: 0, y: 40 }
            }
            transition={{ 
              duration: 0.5, 
              ease: "easeInOut",
              // Delay solo cuando aparece, no cuando desaparece
              delay: descriptionInView ? 0.2 : 0 
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
            animate={skillsInView ? 
              { opacity: 1, y: 0 } : 
              { opacity: 0, y: 40 }
            }
            transition={{ 
              duration: 0.5, 
              ease: "easeInOut",
              delay: skillsInView ? 0.3 : 0
            }}
            className="w-[100vw] flex flex-col items-start border-t border-gray-200 shadow-[0px_-1px_2px_0px_rgba(0,_0,_0,_0.1)] pt-[3%] pl-[4%] h-[50vh]"
          >
            <div className="w-full max-w-6xl">
              <div className="flex w-full justify-start mb-8">
                <h2 className="text-3xl font-bold text-[#2f2e2e] text-left">
                  Skills
                </h2>
              </div>

              <div className="flex flex-row items-center justify-center w-full relative">
                <div className="w-[220px] h-[220px] relative">
                  <SkillsPieChart setHoveredSkill={setHoveredSkill} />
                </div>

                <div className="relative w-[300px] ml-10">
                  <AnimatePresence>
                    {hoveredSkill && (
                      <motion.div
                        key={hoveredSkill.title}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }}
                        className="backdrop-blur-md bg-white/30 rounded-2xl shadow-xl p-6"
                      >
                        <h3 className="font-bold text-xl text-[#2f2e2e] mb-2 text-center">
                          {hoveredSkill.title}
                        </h3>
                        <p className="text-gray-700 text-sm text-center">
                          {hoveredSkill.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.section>
        )}
        
        {/* Portfolio y Contact*/}
        {activeSection === "portfolio" && (
          <div className="text-xl text-gray-600 mt-10 text-center">
            Projects 🎨 that I've worked on.
          </div>
        )}

        {activeSection === "contact" && (
          <div className="text-xl text-gray-600 mt-10 text-center">
            ¡Mandame un mensaje o conectemos en redes! 📬
          </div>
        )}
      </motion.section>
    </>
  );
}