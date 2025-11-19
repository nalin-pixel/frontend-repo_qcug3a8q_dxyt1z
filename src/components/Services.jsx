export default function Services() {
  const services = [
    {
      title: "Montagem de Parques",
      desc: "Instalação profissional de equipamentos de playground com normas de segurança.",
      icon: "🏗️",
    },
    {
      title: "Manutenção & Inspeção",
      desc: "Planos preventivos, reparações e inspeções certificadas (EN 1176/1177).",
      icon: "🛠️",
    },
    {
      title: "Requalificação",
      desc: "Atualização de espaços, substituição de peças e melhoria de pisos amortecedores.",
      icon: "♻️",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Serviços</h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">
          Soluções completas para parques infantis — da montagem à manutenção contínua.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 hover:bg-slate-800/70 transition">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
