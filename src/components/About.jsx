import Navbar from "./Navbar"
export default function About() {
  return (
    <>
    <Navbar/>
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f5f4f3] px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2f2e2e]"> 
          ¡Hola!, soy <a className="text-[#e15051]">Lauti</a> 👋
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-600">
          Soy desarrollador web full stack con foco en Frontend: React y Javascript.
          Me gusta crear experiencias digitales simples, elegantes y con impacto.
          Amo aprender cosas nuevas, y busco fusionar tecnología y diseño para hacer cosas únicas.
        </p>
      </div>
    </section>
    </>
  )
}