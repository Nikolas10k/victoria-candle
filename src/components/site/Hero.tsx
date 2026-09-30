import Image from "next/image";

export function Hero() {
  return (
    <section id="topo" className="relative bg-ink">
      <div className="grid h-[calc(100svh-110px)] min-h-[560px] md:h-[calc(100svh-150px)] md:min-h-[640px] md:grid-cols-2">
        <div className="relative overflow-hidden">
          <video
            className="absolute inset-0 size-full object-cover"
            src="/videos/ritual-lavanda.mp4"
            poster="/images/ritual-lavanda-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Pessoa sentindo o aroma da vela Lavanda"
          />
        </div>
        <div className="relative hidden overflow-hidden md:block">
          <Image
            src="/images/pomar-wax-melt.jpg"
            alt="Wax melt Pomar da Victoria Candle"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent md:from-ink/55" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-14 text-center text-ivory md:pb-20">
        <p className="eyebrow text-ivory/85">Victoria Candle</p>
        <h1 className="mt-4 max-w-[760px] font-serif text-[44px] leading-[1.02] font-light md:text-[76px]">
          A arte de <em className="font-normal">desacelerar</em>
        </h1>
        <a href="#colecao" className="link-underline pointer-events-auto mt-8 text-ivory">
          Descubra a coleção
        </a>
      </div>
    </section>
  );
}
