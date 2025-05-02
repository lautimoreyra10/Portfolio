import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoL from "../assets/LogoL.svg?react";
import { useEffect, useState } from "react";

export default function Navbar({ onAboutClick, onPortfolioClick, onContactClick }) {
  const [hide, setHide] = useState({
    about: false,
    portfolio: false,
    contact: false,
  });

  const [scrolled, setScrolled] = useState(false);

  const handleClick = (section, callback) => {
    setHide((prev) => ({ ...prev, [section]: true }));
    setTimeout(() => {
      callback();
      setHide((prev) => ({ ...prev, [section]: false }));
    }, 400);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full py-4 px-6 fixed top-0 z-50  flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f4f3]/70"
          : "bg-[#f5f4f3]"
      } text-[#2f2e2e]`}
    >
      <div className="flex-shrink-0">
        <a href="/">
          <LogoL className="w-10 h-10 hover:rotate-12 transition-transform duration-300" />
        </a>
      </div>

      <div className="flex gap-80">
        {["about", "portfolio", "contact"].map((section) => (
          <motion.div
            key={section}
            animate={hide[section] ? { y: -60, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl hover:text-[#e15051] cursor-pointer min-h-[48px] flex items-center"
            onClick={() => {
              const callback =
                section === "about"
                  ? onAboutClick
                  : section === "portfolio"
                  ? onPortfolioClick
                  : onContactClick;
              handleClick(section, callback);
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 text-2xl">
        <Link to="https://www.instagram.com/lauti_moreyra_/">
          <FaInstagram className="hover:text-[#e15051]" />
        </Link>
        <Link to="https://x.com/LautiMoreyra10" target="_blank">
          <FaTwitter className="hover:text-[#e15051]" />
        </Link>
        <Link to="https://www.linkedin.com/in/lautaro-moreyra/">
          <FaLinkedin className="hover:text-[#e15051]" />
        </Link>
        <Link to="https://github.com/lautimoreyra10">
          <FaGithub className="hover:text-[#e15051]" />
        </Link>
      </div>
    </nav>
  );
}
