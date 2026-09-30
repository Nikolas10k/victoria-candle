import { Gift, Hand, MessageCircle } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

const ICONS = [Hand, Gift, MessageCircle] as const;

export function Services() {
  return (
    <section className="border-y border-border bg-sand">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-3 md:gap-10 md:py-24">
        {SERVICES.map((service, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal key={service.title} className="text-center">
              <Icon className="mx-auto size-6 text-gold" strokeWidth={1.1} />
              <h3 className="mt-5 font-serif text-[24px] font-normal">{service.title}</h3>
              <p className="mx-auto mt-3 max-w-[300px] text-[14px] leading-relaxed font-light text-stone">
                {service.text}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
