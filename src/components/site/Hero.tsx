"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { heroState } from "@/components/site/hero3d/heroState";
import { INSTAGRAM_URL } from "@/lib/content";

const CandleScene = dynamic(() => import("@/components/site/hero3d/CandleScene"), {
  ssr: false,
});

const PILLS = [
  { label: "Coleção", href: "#colecao" },
  { label: "Ateliê", href: "#atelie" },
  { label: "Pedidos", href: INSTAGRAM_URL, external: true },
] as const;

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = section.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? Math.min(Math.max(-rect.top / travel, 0), 1) : 0;
      heroState.progress = p;
      overlay.current?.style.setProperty("--hero-p", p.toFixed(3));
    };
    const onPointer = (e: PointerEvent) => {
      heroState.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      heroState.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <section id="topo" ref={section} className="relative h-[210vh]">
      <div
        ref={overlay}
        className="sticky top-0 h-svh overflow-hidden bg-[radial-gradient(ellipse_at_58%_55%,#fff9ef_0%,#f6eee3_45%,#efe4d6_100%)] [--hero-p:0]"
      >
        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center px-4 pt-5 md:px-10 md:pt-7">
          <p className="eyebrow hidden text-[10px] text-stone md:block">Velas artesanais · Feitas à mão</p>
          <a
            href="#topo"
            aria-label="Victoria Candle"
            className="col-start-2 flex h-10 w-[74px] items-center justify-center rounded-[50%] border border-ink/70 font-serif text-[15px] tracking-[0.12em] text-ink"
          >
            VC
          </a>
          <nav aria-label="Atalhos" className="flex justify-end gap-1.5">
            {PILLS.map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                {...("external" in pill ? { target: "_blank", rel: "noreferrer" } : {})}
                className="hidden rounded-full border border-ink/25 bg-ivory/50 px-4 py-1.5 text-[10px] font-medium tracking-[0.16em] text-ink uppercase backdrop-blur-sm transition-colors hover:border-ink hover:bg-ink hover:text-ivory sm:inline-block"
              >
                {pill.label}
              </a>
            ))}
            <a
              href="#colecao"
              className="rounded-full border border-ink/25 bg-ivory/50 px-4 py-1.5 text-[10px] font-medium tracking-[0.16em] text-ink uppercase backdrop-blur-sm sm:hidden"
            >
              Coleção
            </a>
          </nav>
        </div>

        {/* Wordmark (behind the WebGL layer so the wax ribbon can pour over it) */}
        <div className="absolute inset-x-0 top-[13vh] z-0 px-4 opacity-[calc(1-var(--hero-p)*1.6)] md:top-[10vh] md:px-10">
          <h1 className="relative inline-block translate-y-[calc(var(--hero-p)*-18vh)]">
            <span className="block font-serif text-[clamp(88px,16vw,260px)] leading-[0.82] font-medium tracking-[-0.03em] text-ink">
              Victoria
            </span>
            <span className="hero-script absolute right-[-2%] bottom-[-40%] font-script text-[clamp(60px,10vw,160px)] leading-none text-forest md:right-auto md:bottom-[-46%] md:left-[18%]">
              candle
            </span>
          </h1>
          <p className="mt-[9vh] max-w-[320px] text-[13px] leading-relaxed font-light text-stone md:mt-[11vh] md:text-[14px]">
            Velas aromáticas feitas à mão — o melhor remédio para desacelerar.
          </p>
        </div>

        {/* WebGL */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <CandleScene />
        </div>

        {/* Bottom details */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-4 pb-6 opacity-[calc(1-var(--hero-p)*2)] md:px-10 md:pb-8">
          <svg viewBox="0 0 40 12" className="h-3 w-10 text-ink" aria-hidden="true">
            <path d="M1 9 L7 3 L13 9 L19 3 L25 9 L31 3 L39 11" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <a href="#manifesto" className="flex flex-col items-center gap-2 text-ink">
            <span className="eyebrow text-[10px]">Role para descobrir</span>
            <ArrowDown className="size-4 animate-bounce" strokeWidth={1.3} />
          </a>
          <p className="eyebrow hidden max-w-[220px] text-right text-[10px] leading-relaxed text-stone md:block">
            Signature · capim-limão &amp; manjericão
          </p>
          <span className="w-10 md:hidden" />
        </div>
      </div>
    </section>
  );
}
