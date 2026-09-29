import type { ReactNode } from "react";

export function LegalHeading({ children }: { children: ReactNode }) {
  return <h2 className="pt-6 font-display text-xl font-extrabold leading-tight text-primary sm:text-2xl">{children}</h2>;
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return <h3 className="pt-3 font-display text-base font-extrabold leading-snug text-foreground sm:text-lg">{children}</h3>;
}

export function LegalNote({ children }: { children: ReactNode }) {
  return <aside className="border-l-4 border-accent bg-secondary p-4 text-sm italic leading-relaxed text-foreground sm:p-5">{children}</aside>;
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-primary">{children}</ul>;
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="bg-accent/25 px-1 font-semibold text-foreground">{children}</span>;
}