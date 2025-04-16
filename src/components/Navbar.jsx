import { Link } from 'react-router-dom';
import  LogoL from '../assets/LogoL.svg?react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-[#f5f4f3] text-[#2f2e2e] flex justify-between items-center fixed top-0 z-50">
      {/* Logo */}
      <div className='flex-shrink-0'>
        <LogoL className="w-10 h-10 hover:rotate-12 transition-transform duration-300"/>
      </div>
      {/* Enlaces */}
      <div className='flex gap-8 font-bold text-xl'>
        <Link to="/" className="hover:text-[#e15051]">Sobre mí</Link>
        <Link to="/proyectos" className="hover:text-[#e15051]">Proyectos</Link>
        <Link to="/contacto" className="hover:text-[#e15051]">Contacto</Link>
      </div>
      {/* Redes sociales */}
      <div className='flex gap-4 text-2xl'>
        <Link to="https://www.instagram.com/lauti_moreyra_/"><FaInstagram className='hover:text-[#e15051]'/></Link>
        <Link to="https://x.com/LautiMoreyra10" target="_blank"><FaTwitter className='hover:text-[#e15051]'/></Link>
        <Link to="https://www.linkedin.com/in/lautaro-moreyra/"><FaLinkedin className='hover:text-[#e15051]'/></Link>
        <Link to="https://github.com/lautimoreyra10"><FaGithub className='hover:text-[#e15051]'/></Link>
      </div>
    </nav>
  )
}
