import Image from "next/image";
import { InstagramIcon } from "@/components/icons";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

const GALLERY = [
  { src: "/images/lavanda-mesa.jpg", alt: "Sacola de presente Victoria Candle" },
  { src: "/images/pomar-wax-melt.jpg", alt: "Wax melt Pomar" },
  { src: "/images/signature-rotulo.jpg", alt: "Vela Signature" },
  { src: "/images/orvalho-wax-melt.jpg", alt: "Wax melt Orvalho" },
  { src: "/images/saquinho-veludo.jpg", alt: "Saquinho de veludo Victoria Candle" },
  { src: "/images/car-diffuser.jpg", alt: "Car diffuser Victoria Candle" },
] as const;

export function InstagramCta() {
  return (
    <section className="py-20 md:py-28">
      <Reveal className="px-6 text-center">
        <p className="eyebrow text-stone">Siga</p>
        <h2 className="mt-3 font-serif text-[38px] leading-none font-light md:text-[52px]">
          {INSTAGRAM_HANDLE}
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[15px] leading-relaxed font-light text-stone">
          Lançamentos, bastidores do ateliê e encomendas. Envie uma mensagem e faça o seu pedido.
        </p>
      </Reveal>

      <ul className="mx-auto mt-12 grid max-w-[1440px] grid-cols-3 gap-1 px-4 md:grid-cols-6 md:px-10">
        {GALLERY.map((item) => (
          <li key={item.src}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden bg-sand"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 16vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-ivory opacity-0 transition-all duration-500 group-hover:bg-ink/35 group-hover:opacity-100">
                <InstagramIcon className="size-6" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-ink px-9 py-4 text-[12px] font-medium tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-deep"
        >
          <InstagramIcon className="size-4" />
          Fazer meu pedido
        </a>
      </div>
    </section>
  );
}
