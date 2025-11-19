import { useRef } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">Taludos</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
            <button onClick={scrollToContact} className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold">Pedir orçamento</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero onCTAClick={scrollToContact} />
        <Services />
        <About />
        <Contact ref={contactRef} />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <div>© {new Date().getFullYear()} Taludos. Todos os direitos reservados.</div>
          <div className="flex gap-4">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
