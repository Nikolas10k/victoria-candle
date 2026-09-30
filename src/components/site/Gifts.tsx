import Image from "next/image";
import { INSTAGRAM_URL } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function Gifts() {
  return (
    <section id="presentes" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 md:grid-cols-2 md:gap-0 md:px-10">
        <Reveal className="order-2 px-2 md:order-1 md:px-16 lg:px-24">
          <p className="eyebrow text-stone">Presentes</p>
          <h2 className="mt-4 font-serif text-[40px] leading-[1.05] font-light md:text-[56px]">
            A arte de <em>presentear</em>
          </h2>
          <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed font-light text-stone">
            Nossas velas podem ser entregues em saquinhos de veludo verde com a marca Victoria Candle em
            dourado. Um presente que se revela aos poucos — primeiro no toque, depois no perfume.
          </p>
          <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed font-light text-stone">
            Fale com a gente para montar kits para datas especiais, eventos ou presentes corporativos.
          </p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="link-underline mt-10 text-ink">
            Montar um presente
          </a>
        </Reveal>

        <div className="order-1 grid grid-cols-[3fr_2fr] gap-4 md:order-2">
          <Reveal className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/saquinho-veludo.jpg"
              alt="Saquinho de veludo verde Victoria Candle"
              fill
              sizes="(min-width: 768px) 30vw, 60vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="relative mt-16 aspect-[3/4] overflow-hidden">
            <Image
              src="/images/saquinhos.jpg"
              alt="Vários saquinhos de veludo prontos para presente"
              fill
              sizes="(min-width: 768px) 20vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
