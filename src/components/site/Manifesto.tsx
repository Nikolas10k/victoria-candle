import { Reveal } from "@/components/site/Reveal";

export function Manifesto() {
  return (
    <section id="manifesto" className="border-b border-border px-6 py-24 text-center md:py-32">
      <Reveal className="mx-auto max-w-[880px]">
        <p className="eyebrow text-stone">Nossa essência</p>
        <p className="mt-8 font-serif text-[30px] leading-[1.2] font-light text-ink md:text-[46px]">
          “Uma vela aromática é o melhor remédio para{" "}
          <em className="text-rose">desacelerar</em>.”
        </p>
        <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-relaxed font-light text-stone">
          Na Victoria Candle, cada fragrância nasce para criar pausas: um momento de calma em casa,
          no trabalho ou no caminho. Feitas à mão, em pequenos lotes, com o cuidado de um ateliê.
        </p>
      </Reveal>
    </section>
  );
}
