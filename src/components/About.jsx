export default function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-slate-800/40 p-8">
          <h2 className="text-3xl font-bold text-white">Sobre a Taludos</h2>
          <p className="mt-4 text-slate-300">
            Somos especialistas em parques infantis. A Taludos dedica-se à montagem, manutenção e
            requalificação de playgrounds para municípios, escolas, condomínios e espaços privados.
            Trabalhamos com foco na segurança, durabilidade e alegria das crianças.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-6 text-center">
            <div className="rounded-xl bg-slate-900/60 p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-cyan-300">10+</div>
              <div className="text-slate-300">anos de experiência</div>
            </div>
            <div className="rounded-xl bg-slate-900/60 p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-cyan-300">200+</div>
              <div className="text-slate-300">instalações</div>
            </div>
            <div className="rounded-xl bg-slate-900/60 p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-cyan-300">24h</div>
              <div className="text-slate-300">tempo médio de resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
