"use client";

import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/site/Logo";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_ITEMS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Stay out of the way over the immersive hero; slide in once it has scrolled past.
    const onScroll = () => {
      const hero = document.getElementById("topo");
      setVisible(hero ? hero.getBoundingClientRect().bottom < 120 : window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b border-border bg-ivory/95 shadow-[0_1px_24px_rgba(29,26,23,0.06)] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
          visible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 md:h-[76px] md:px-10">
          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-ink transition-opacity hover:opacity-60"
            >
              <Menu className="size-5" strokeWidth={1.3} />
              <span className="eyebrow hidden md:inline">Menu</span>
            </button>
            <a href="#colecao" aria-label="Buscar" className="hidden text-ink transition-opacity hover:opacity-60 md:block">
              <Search className="size-[18px]" strokeWidth={1.3} />
            </a>
          </div>

          <a href="#topo" aria-label="Victoria Candle — início" className="text-ink">
            <Logo size="md" className="scale-90 md:scale-100" />
          </a>

          <div className="flex items-center justify-end gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-ink transition-opacity hover:opacity-60"
            >
              <InstagramIcon className="size-[19px]" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Fazer pedido"
              className="text-ink transition-opacity hover:opacity-60"
            >
              <ShoppingBag className="size-[19px]" strokeWidth={1.3} />
            </a>
          </div>
        </div>

        <nav
          aria-label="Principal"
          className={cn(
            "hidden justify-center gap-10 pb-4 md:flex",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="eyebrow text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-[visibility] duration-500",
          open ? "visible" : "invisible delay-500",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Fechar menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/40 transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 flex w-full max-w-[420px] flex-col bg-ivory px-8 py-8 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <button
              type="button"
              aria-label="Fechar menu"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="text-ink transition-opacity hover:opacity-60"
            >
              <X className="size-6" strokeWidth={1.2} />
            </button>
          </div>
          <ul className="mt-14 space-y-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="font-serif text-[32px] leading-none font-light text-ink transition-colors hover:text-rose"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            className="mt-auto flex items-center gap-3 text-stone transition-colors hover:text-ink"
          >
            <InstagramIcon className="size-5" />
            <span className="eyebrow">{INSTAGRAM_HANDLE}</span>
          </a>
        </aside>
      </div>
    </>
  );
}
