"use client"

import { ArrowUpRight, Clock } from "lucide-react"
import { SCHEDULE } from "@/data/schedule"
import { useToday } from "@/hooks/use-today"
import { getMapsUrl } from "@/lib/maps"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function RouteSection() {
  const today = useToday()

  return (
    <section id="rota" className="relative py-20 md:py-28" aria-labelledby="rota-title">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-rose text-xs font-bold uppercase tracking-[0.22em]">Agenda semanal</p>
          <h2 id="rota-title" className="font-serif text-cocoa mt-4 text-[clamp(2.4rem,7vw,4.5rem)] font-black leading-[0.9] tracking-tight text-balance">
            Nossa rota <span className="text-rose italic font-light">da semana</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed text-pretty">
            Cada ponto confirmado tem endereço e horário para você chegar sem dúvida.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {SCHEDULE.map((stop) => {
            const isToday = today?.kind === "before" && today.stop.day === stop.day
            const isActive = today?.kind === "active" && today.stop.day === stop.day
            const highlighted = isToday || isActive
            return (
              <StaggerItem key={stop.day}>
                <article className={cn("group flex h-full flex-col rounded-[1.75rem] border p-6 transition-all duration-500", highlighted ? "bg-cocoa text-cocoa-foreground border-cocoa shadow-[0_24px_60px_-34px_oklch(0.26_0.055_42_/_0.8)]" : "bg-card border-cocoa/10 hover:border-rose/40 hover:-translate-y-1")}>
                  <div className="flex items-start justify-between gap-2">
                    <span className={cn("font-serif text-4xl font-black tracking-tight", highlighted ? "text-turquoise" : "text-cocoa")}>{stop.shortLabel}</span>
                    {highlighted ? <span className="bg-rose text-rose-foreground flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em]"><span className="bg-rose-foreground size-1.5 rounded-full" aria-hidden="true" />{isActive ? "Estamos aqui" : "Hoje"}</span> : null}
                  </div>
                  <p className={cn("mt-4 flex items-center gap-2 text-sm font-semibold", highlighted ? "text-cocoa-foreground/85" : "text-turquoise-foreground")}><Clock className="size-4 shrink-0" aria-hidden="true" />{stop.hours}</p>
                  <h3 className={cn("font-serif mt-4 text-2xl font-bold leading-tight text-balance", highlighted ? "text-cocoa-foreground" : "text-cocoa")}>{stop.location}</h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", highlighted ? "text-cocoa-foreground/70" : "text-muted-foreground")}>{stop.address}{stop.addressExtra ? <><br />{stop.addressExtra}</> : null}</p>
                  <a href={getMapsUrl(stop)} target="_blank" rel="noopener noreferrer" className={cn("mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold", highlighted ? "text-turquoise" : "text-rose")}>
                    Como chegar <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /><span className="sr-only">até {stop.location}</span>
                  </a>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="text-muted-foreground border-cocoa/10 mt-8 border-t pt-6 text-sm leading-relaxed">
            A rota pode variar durante a semana. Acompanhe as atualizações pelo Instagram.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
