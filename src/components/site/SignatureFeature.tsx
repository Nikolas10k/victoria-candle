import Image from "next/image";
import { INSTAGRAM_URL } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function SignatureFeature() {
  return (
    <section id="signature" className="scroll-mt-24 bg-sand">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[760px]">
          <Image
            src="/images/signature-tampa-dourada.jpg"
            alt="Vela Signature com tampa dourada e rótulo verde"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-20 md:px-16 lg:px-24">
          <Reveal className="max-w-[460px]">
            <p className="eyebrow text-forest">Coleção Signature</p>
            <h2 className="mt-5 font-serif text-[48px] leading-[0.95] font-light tracking-[0.12em] text-forest-deep uppercase md:text-[64px]">
              Signature
            </h2>
            <p className="mt-3 font-serif text-[22px] italic text-stone">
              Capim-limão &amp; manjericão
            </p>
            <div className="my-8 h-px w-16 bg-gold" />
            <p className="text-[15px] leading-relaxed font-light text-ink/80">
              A nossa assinatura. Copo de vidro, tampa dourada e rótulo verde-floresta guardam um
              perfume fresco e herbal, que acalma e renova o ambiente. Entregue em saquinho de veludo,
              pronta para presentear.
            </p>
            <div className="relative mt-10 aspect-[16/10] w-full max-w-[360px] overflow-hidden">
              <Image
                src="/images/signature-rotulo.jpg"
                alt="Detalhe do rótulo da vela Signature"
                fill
                sizes="360px"
                className="object-cover object-[50%_40%]"
              />
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-10 text-forest-deep"
            >
              Encomendar a Signature
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
