"use client"

import { ArrowUpRight, Clock } from "lucide-react"
import { SCHEDULE } from "@/data/schedule"
import { useWeekday } from "@/hooks/use-today"
import { directionsUrl } from "@/lib/maps"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function RouteSection() {
  const weekday = useWeekday()

  return (
    <section id="rota" className="relative py-20 md:py-28" aria-labelledby="rota-title">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-rose text-xs font-bold uppercase tracking-[0.22em]">Agenda semanal</p>
          <h2
            id="rota-title"
            className="font-serif text-cocoa mt-4 text-[clamp(2.4rem,7vw,4.5rem)] font-black leading-[0.9] tracking-tight text-balance"
          >
            Nossa rota <span className="text-rose italic font-light">da semana</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed text-pretty">
            Cada dia tem um ponto, um horário e uma seleção de sabores já preparados. É só passar por
            lá.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {SCHEDULE.map((stop) => {
            const isToday = weekday === stop.weekday
            return (
              <StaggerItem key={stop.day}>
                <article
                  className={cn(
                    "group flex h-full flex-col rounded-[1.75rem] border p-6 transition-all duration-500",
                    isToday
                      ? "bg-cocoa text-cocoa-foreground border-cocoa shadow-[0_24px_60px_-34px_oklch(0.26_0.055_42_/_0.8)]"
                      : "bg-card border-cocoa/10 hover:border-rose/40 hover:-translate-y-1",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={cn(
                        "font-serif text-4xl font-black tracking-tight",
                        isToday ? "text-turquoise" : "text-cocoa",
                      )}
                    >
                      {stop.shortLabel}
                    </span>
                    {isToday ? (
                      <span className="bg-rose text-rose-foreground flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em]">
                        <span className="bg-rose-foreground size-1.5 rounded-full" aria-hidden="true" />
                        Hoje
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={cn(
                      "mt-4 flex items-center gap-2 text-sm font-semibold",
                      isToday ? "text-cocoa-foreground/85" : "text-turquoise-foreground",
                    )}
                  >
                    <Clock className="size-4 shrink-0" aria-hidden="true" />
                    {stop.hours}
                  </p>

                  <h3
                    className={cn(
                      "font-serif mt-4 text-2xl font-bold leading-tight text-balance",
                      isToday ? "text-cocoa-foreground" : "text-cocoa",
                    )}
                  >
                    {stop.location}
                  </h3>

                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      isToday ? "text-cocoa-foreground/70" : "text-muted-foreground",
                    )}
                  >
                    {stop.address}
                    {stop.addressExtra ? (
                      <>
                        <br />
                        {stop.addressExtra}
                      </>
                    ) : null}
                  </p>

                  <a
                    href={directionsUrl(stop)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold",
                      isToday ? "text-turquoise" : "text-rose",
                    )}
                  >
                    Como chegar
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only">até {stop.location}</span>
                  </a>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="text-muted-foreground border-cocoa/10 mt-8 border-t pt-6 text-sm leading-relaxed">
            Quarta, sábado e domingo não têm parada divulgada. Novidades e mudanças de última hora
            saem sempre primeiro nos Stories.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
