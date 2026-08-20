import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="container-content mt-20 sm:mt-24">
      <div className="relative overflow-hidden rounded-xl border border-ink-500 px-6 py-14 text-center sm:px-12 sm:py-16">
        {/* glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(63,185,80,0.12), transparent 65%)',
          }}
          aria-hidden="true"
        />

        <div className="relative">
          <div className="mono-label mb-4 flex items-center justify-center gap-2">
            <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_12px_rgba(63,185,80,0.8)]" />
            vamos conversar
          </div>

          <h2 className="m-0 text-[clamp(30px,5vw,48px)] tracking-tighter text-ink-50">
            Tem um problema que merece software?
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-ink-200">
            Me conte como sua empresa funciona. A gente descobre juntos se isso
            deveria virar um SaaS.
          </p>

          <a
            href="mailto:hello@caipirasaas.dev"
            className="btn btn-primary mt-7"
          >
            <Mail size={16} />
            hello@caipirasaas.dev
            <ArrowRight size={16} />
          </a>

          <p className="mt-5 font-mono text-xs text-ink-400">
            Não é template. É seu.
          </p>
        </div>
      </div>
    </section>
  );
}
