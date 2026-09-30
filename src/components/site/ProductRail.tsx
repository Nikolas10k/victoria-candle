"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { INSTAGRAM_URL, PRODUCTS } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function ProductRail() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : 320;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section id="colecao" className="scroll-mt-24 py-20 md:py-28">
      <Reveal className="mx-auto flex max-w-[1440px] items-end justify-between px-4 md:px-10">
        <div>
          <p className="eyebrow text-stone">Novidades</p>
          <h2 className="mt-3 font-serif text-[38px] leading-none font-light md:text-[52px]">
            A coleção
          </h2>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            className="flex size-11 items-center justify-center border border-ink/20 transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
          >
            <ChevronLeft className="size-4" strokeWidth={1.3} />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => scrollBy(1)}
            className="flex size-11 items-center justify-center border border-ink/20 transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
          >
            <ChevronRight className="size-4" strokeWidth={1.3} />
          </button>
        </div>
      </Reveal>

      <ul
        ref={trackRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 md:mt-14 md:scroll-px-10 md:px-10"
      >
        {PRODUCTS.map((product) => (
          <li
            key={product.slug}
            className="group w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[calc((100%-72px)/4)]"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="block">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 44vw, 78vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
                />
                {product.badge ? (
                  <span className="eyebrow absolute top-4 left-4 bg-ivory/90 px-2.5 py-1.5 text-[10px] text-ink">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <div className="pt-5 text-center">
                <p className="eyebrow text-[10px] text-stone">{product.type}</p>
                <h3 className="mt-2 font-serif text-[26px] leading-tight font-normal">{product.name}</h3>
                <p className="mt-1 text-[14px] font-light text-stone">{product.notes}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-ink uppercase opacity-70 transition-opacity group-hover:opacity-100">
                  Encomendar <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.3} />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
