"use client"

import { Clock, MapPin, Navigation } from "lucide-react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useToday } from "@/hooks/use-today"
import { getMapsUrl } from "@/lib/maps"
import { WEEKDAY_SHORT, type TodayState } from "@/lib/today"
import type { Stop } from "@/data/schedule"

function StopDetails({ stop }: { stop: Stop }) {
  return (
    <dl className="mt-5 space-y-3 text-[0.95rem]">
      <div className="flex items-start gap-3">
        <dt className="sr-only">Horário</dt>
        <Clock className="text-turquoise mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <dd className="text-cocoa font-semibold">{stop.hours}</dd>
      </div>
      <div className="flex items-start gap-3">
        <dt className="sr-only">Endereço</dt>
        <MapPin className="text-turquoise mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <dd className="text-muted-foreground leading-relaxed">
          {stop.address}
          {stop.addressExtra ? (
            <>
              <br />
              {stop.addressExtra}
            </>
          ) : null}
        </dd>
      </div>
    </dl>
  )
}

function MapButton({ stop, children }: { stop: Stop; children: ReactNode }) {
  return (
    <a
      href={getMapsUrl(stop)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} — ${stop.location}`}
      className="bg-cocoa text-cocoa-foreground hover:bg-rose flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold transition-colors sm:w-auto sm:min-w-56"
    >
      <Navigation className="size-4" aria-hidden="true" />
      {children}
    </a>
  )
}

function TodayContent({ state }: { state: TodayState }) {
  if (state.kind === "before") {
    return (
      <>
        <p className="text-rose text-xs font-bold uppercase tracking-[0.22em]">
          Hoje • {WEEKDAY_SHORT[state.weekday]}
        </p>
        <p className="font-serif text-cocoa/70 mt-4 text-xl font-light italic leading-snug">Hoje tem Pode Ser Bolo? 🤎</p>
        <h2 className="font-serif text-cocoa mt-3 text-3xl font-black leading-[1.05] tracking-tight text-balance sm:text-4xl">
          {state.stop.location}
        </h2>
        <p className="text-turquoise-foreground mt-4 text-base font-bold">A partir das {state.stop.hours.split(" às ")[0]}</p>
        <StopDetails stop={state.stop} />
        <div className="mt-7"><MapButton stop={state.stop}>Como chegar</MapButton></div>
      </>
    )
  }

  if (state.kind === "active") {
    return (
      <>
        <p className="text-rose flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]">
          <span className="bg-rose inline-flex size-2 rounded-full" aria-hidden="true" />
          Estamos aqui hoje
        </p>
        <p className="text-cocoa/65 mt-4 text-sm font-bold uppercase tracking-[0.18em]">{WEEKDAY_SHORT[state.weekday]}</p>
        <h2 className="font-serif text-cocoa mt-2 text-3xl font-black leading-[1.05] tracking-tight text-balance sm:text-4xl">
          {state.stop.location}
        </h2>
        <StopDetails stop={state.stop} />
        <div className="mt-7"><MapButton stop={state.stop}>Como chegar</MapButton></div>
      </>
    )
  }

  const isAfter = state.kind === "after"
  const next = state.next
  return (
    <>
      <p className="text-turquoise-foreground bg-turquoise/25 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.22em]">
        Próxima parada confirmada
      </p>
      <p className="font-serif text-cocoa/70 mt-4 text-xl font-light italic leading-snug text-pretty">
        {isAfter ? "Encerramos por hoje 🤎" : "A próxima parada confirmada já está marcada 🤎"}
      </p>
      <h2 className="font-serif text-cocoa mt-4 text-3xl font-black leading-[1.05] tracking-tight text-balance sm:text-4xl">
        {next.label.replace("-feira", "")}
        <span className="text-rose">,</span> {next.location}
      </h2>
      <StopDetails stop={next} />
      <div className="mt-7"><MapButton stop={next}>Ver próxima parada</MapButton></div>
    </>
  )
}

export function TodayPanel() {
  const today = useToday()

  return (
    <section
      id="hoje"
      aria-labelledby="hoje-title"
      className="bg-card border-cocoa/10 relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_18px_50px_-30px_oklch(0.26_0.055_42_/_0.45)] sm:p-8"
    >
      <div aria-hidden="true" className="bg-turquoise/25 absolute -right-16 -top-16 size-40 rounded-full blur-2xl" />
      <h2 id="hoje-title" className="sr-only">Hoje</h2>

      {today === null ? (
        <div className="relative min-h-[16rem] animate-pulse space-y-4" aria-label="Carregando a parada de hoje">
          <div className="bg-muted h-4 w-28 rounded-full" />
          <div className="bg-muted h-9 w-3/4 rounded-full" />
          <div className="bg-muted h-4 w-1/2 rounded-full" />
          <div className="bg-muted h-4 w-2/3 rounded-full" />
          <div className="bg-muted h-12 w-full rounded-full" />
        </div>
      ) : (
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <TodayContent state={today} />
        </motion.div>
      )}
    </section>
  )
}
