import { InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/site/Logo";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/content";

const COLUMNS = [
  {
    title: "Coleções",
    links: [
      { label: "Velas aromáticas", href: "#colecao" },
      { label: "Wax melts", href: "#categorias" },
      { label: "Car diffuser", href: "#categorias" },
      { label: "Signature", href: "#signature" },
    ],
  },
  {
    title: "Victoria Candle",
    links: [
      { label: "O Ateliê", href: "#atelie" },
      { label: "Presentes", href: "#presentes" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Encomendas pelo Instagram", href: INSTAGRAM_URL },
      { label: "Presentes corporativos", href: INSTAGRAM_URL },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 pt-20 pb-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo size="md" className="items-start" />
            <p className="mt-6 max-w-[300px] text-[14px] leading-relaxed font-light text-ivory/60">
              Velas aromáticas, wax melts e aromatizadores feitos à mão para transformar pausas em
              rituais.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-ivory/80 transition-colors hover:text-gold"
            >
              <InstagramIcon className="size-5" />
              <span className="eyebrow">{INSTAGRAM_HANDLE}</span>
            </a>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="eyebrow text-gold">{column.title}</h3>
              <ul className="mt-6 space-y-3">
                {column.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="text-[14px] font-light text-ivory/70 transition-colors hover:text-ivory"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 text-[12px] font-light text-ivory/50 md:flex-row">
          <p>© {new Date().getFullYear()} Victoria Candle. Todos os direitos reservados.</p>
          <p className="tracking-[0.14em] uppercase">Feito à mão com carinho</p>
        </div>
      </div>
    </footer>
  );
}
