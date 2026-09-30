import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { word: "text-[22px] tracking-[0.16em]", sub: "text-[8px] tracking-[0.5em]" },
  md: { word: "text-[30px] tracking-[0.16em]", sub: "text-[9px] tracking-[0.55em]" },
  lg: { word: "text-[44px] tracking-[0.16em] md:text-[56px]", sub: "text-[11px] tracking-[0.6em]" },
} as const;

export function Logo({ className, size = "md" }: LogoProps) {
  const s = SIZES[size];
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <span className={cn("font-serif font-medium uppercase", s.word)}>Victoria</span>
      <span className={cn("mt-1 pl-[0.5em] font-sans font-normal uppercase", s.sub)}>Candle</span>
    </span>
  );
}
