import Image from "next/image";
import { CATEGORIES, INSTAGRAM_URL } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function Categories() {
  return (
    <section id="categorias" className="scroll-mt-24 py-20 md:py-28">
      <Reveal className="px-6 text-center">
        <p className="eyebrow text-stone">Universo Victoria</p>
        <h2 className="mt-3 font-serif text-[38px] leading-none font-light md:text-[52px]">
          Para cada momento
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-[1440px] gap-10 px-4 md:mt-16 md:grid-cols-3 md:gap-6 md:px-10">
        {CATEGORIES.map((category) => (
          <Reveal key={category.title}>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-6 text-center">
                <h3 className="font-serif text-[28px] leading-tight font-normal">{category.title}</h3>
                <p className="mx-auto mt-2 max-w-[320px] text-[14px] leading-relaxed font-light text-stone">
                  {category.description}
                </p>
                <span className="link-underline mt-5 text-ink">Descobrir</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
