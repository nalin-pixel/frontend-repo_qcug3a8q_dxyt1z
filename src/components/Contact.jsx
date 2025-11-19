import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.detail || "Erro ao enviar");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus(err.message);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white">Peça um orçamento</h2>
            <p className="mt-3 text-slate-300">
              Diga-nos o que precisa para o seu playground. Respondemos rapidamente com uma proposta.
            </p>
            <ul className="mt-6 space-y-2 text-slate-300/90">
              <li>• Montagem de novos equipamentos</li>
              <li>• Manutenção preventiva e corretiva</li>
              <li>• Inspeções e certificação EN 1176/1177</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-200 text-sm">Nome</label>
                <input name="name" required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-slate-200 text-sm">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-slate-200 text-sm">Telefone</label>
                <input name="phone" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-slate-200 text-sm">Empresa (opcional)</label>
                <input name="company" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-slate-200 text-sm">Serviço</label>
                <select name="service" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white">
                  <option>Montagem</option>
                  <option>Manutenção</option>
                  <option>Inspeção</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-slate-200 text-sm">Mensagem</label>
                <textarea name="message" required rows="4" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition">
              Enviar pedido
            </button>
            {status === "loading" && <p className="mt-3 text-slate-300">A enviar…</p>}
            {status === "success" && <p className="mt-3 text-emerald-400">Pedido enviado com sucesso!</p>}
            {status && status !== "loading" && status !== "success" && (
              <p className="mt-3 text-rose-400">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
