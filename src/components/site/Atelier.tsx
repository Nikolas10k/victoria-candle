import Image from "next/image";
import { ATELIER_STEPS } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function Atelier() {
  return (
    <section id="atelie" className="scroll-mt-24 bg-forest-deep text-ivory">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-4 py-20 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-20 md:px-10 md:py-28">
        <Reveal className="mx-auto w-full max-w-[420px]">
          <div className="relative aspect-[9/16] overflow-hidden">
            <video
              className="absolute inset-0 size-full object-cover"
              src="/videos/atelie.mp4"
              poster="/images/signature-rotulo.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-label="Bastidores da produção das velas no ateliê"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-gold">O Ateliê</p>
            <h2 className="mt-4 font-serif text-[40px] leading-[1.05] font-light md:text-[60px]">
              Feitas à mão,
              <br />
              <em>uma a uma</em>
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed font-light text-ivory/75">
              Do derretimento da cera ao último detalhe do rótulo, cada vela Victoria Candle passa pelas
              nossas mãos. Um processo lento e cuidadoso — do jeito que um bom aroma merece.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-5">
            {ATELIER_STEPS.map((step) => (
              <li key={step.number}>
                <Reveal>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 640px) 20vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 font-serif text-[15px] text-gold italic">{step.number}</p>
                  <h3 className="mt-1 font-serif text-[24px] font-normal">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed font-light text-ivory/70">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
