const badges = [
  { label: 'SaaS', cls: 'badge-green' },
  { label: 'Cloud', cls: 'badge-blue' },
  { label: 'Delivery', cls: 'badge-yellow' },
];

export default function Readme() {
  return (
    <section id="sobre" className="container-content mt-10 sm:mt-12">
      <div className="overflow-hidden rounded-xl border border-ink-500 bg-ink-800">
        {/* header bar */}
        <div className="flex items-center gap-2 border-b border-ink-500 px-4 py-3.5 font-mono text-[13px] text-ink-200">
          <span className="text-ink-400">📖</span>
          <span>README.md</span>
        </div>

        {/* body */}
        <div className="px-6 py-11 sm:px-[55px] sm:py-[55px]">
          {/* heading with badges */}
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <h2 className="m-0 text-[28px] tracking-tighter text-ink-50">
              👋 Oi, eu sou o Caipirasaas.
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {badges.map((b) => (
                <span key={b.label} className={`badge ${b.cls}`}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <p className="m-0 max-w-[760px] text-ink-200">
            Ou melhor: existe um desenvolvedor por trás disso. O Caipirasaas é
            a forma que encontrei de juntar duas coisas que normalmente aparecem
            separadas:{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              engenharia de software
            </code>{' '}
            +{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              negócio
            </code>
            .
          </p>

          <p className="mt-4 max-w-[760px] text-ink-200">
            Não trabalho com software de prateleira. Cada projeto começa
            entendendo como o negócio realmente funciona — depois vira software
            que serve pra valer.
          </p>

          <div className="sep" />

          {/* positioning block */}
          <div className="max-w-[760px]">
            <h3 className="m-0 mb-3 font-mono text-sm text-ink-300">
              <span className="text-green">#</span> posicionamento
            </h3>
            <blockquote className="m-0 border-l-2 border-green/60 pl-5 text-lg text-ink-100">
              Problema → Software → Produção.
              <br />
              <span className="text-ink-300">
                Sem currículo, sem barra de progresso, sem lista de
                tecnologias. Só resultado.
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
