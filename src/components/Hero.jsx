import { motion } from "framer-motion";

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_20%_-10%,rgba(56,189,248,0.2),transparent),radial-gradient(circle_700px_at_80%_10%,rgba(99,102,241,0.18),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
            >
              Playgrounds seguros e felizes
              <span className="block text-cyan-300">Taludos — montagem e manutenção</span>
            </motion.h1>
            <p className="mt-6 text-lg text-slate-300">
              Projetamos, montamos e mantemos parques infantis que inspiram brincadeiras
              e aprendizagem ao ar livre. Certificação, inspeções e assistência técnica.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onCTAClick} className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition">
                Pedir orçamento
              </button>
              <a href="#servicos" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition">
                Ver serviços
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-slate-300/80 text-sm">
              <div>Instalação certificada</div>
              <div className="w-1 h-1 rounded-full bg-slate-400" />
              <div>Planos de manutenção</div>
              <div className="w-1 h-1 rounded-full bg-slate-400" />
              <div>Resposta em 24h</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-white/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1600&auto=format&fit=crop"
                alt="Playground colorido"
                className="w-full h-full object-cover mix-blend-luminosity"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900/80 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur">
              <p className="text-sm text-slate-200">+200 instalações realizadas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
