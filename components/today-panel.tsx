"use client"

import { Clock, MapPin, Navigation } from "lucide-react"
import { motion } from "framer-motion"
import { useToday } from "@/hooks/use-today"
import { directionsUrl } from "@/lib/maps"
import { WEEKDAY_SHORT } from "@/lib/today"

export function TodayPanel() {
  const today = useToday()

  return (
    <div
      id="hoje"
      className="bg-card border-cocoa/10 relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_18px_50px_-30px_oklch(0.26_0.055_42_/_0.45)] sm:p-8"
    >
      <div
        aria-hidden="true"
        className="bg-turquoise/25 absolute -right-16 -top-16 size-40 rounded-full blur-2xl"
      />

      {today === null ? (
        <div className="relative min-h-[15rem] animate-pulse space-y-4" aria-hidden="true">
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
          {today.kind === "open" ? (
            <>
              <p className="text-rose flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]">
                <span className="relative flex size-2">
                  <span className="bg-rose absolute inset-0 animate-ping rounded-full opacity-70" />
                  <span className="bg-rose relative inline-flex size-2 rounded-full" />
                </span>
                Hoje • {WEEKDAY_SHORT[today.weekday]}
              </p>

              <h2 className="font-serif text-cocoa mt-3 text-3xl font-black leading-[1.05] tracking-tight text-balance sm:text-4xl">
                {today.stop.location}
              </h2>

              <dl className="mt-5 space-y-3 text-[0.95rem]">
                <div className="flex items-start gap-3">
                  <dt className="sr-only">Horário</dt>
                  <Clock className="text-turquoise mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <dd className="text-cocoa font-semibold">{today.stop.hours}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="sr-only">Endereço</dt>
                  <MapPin className="text-turquoise mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <dd className="text-muted-foreground leading-relaxed">
                    {today.stop.address}
                    {today.stop.addressExtra ? (
                      <>
                        <br />
                        {today.stop.addressExtra}
                      </>
                    ) : null}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={directionsUrl(today.stop)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cocoa text-cocoa-foreground hover:bg-rose flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold transition-colors"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Como chegar
                </a>
                <a
                  href="#sabores"
                  className="border-cocoa/20 text-cocoa hover:bg-blush flex flex-1 items-center justify-center rounded-full border px-6 py-4 text-base font-semibold transition-colors"
                >
                  Ver sabores
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="text-turquoise-foreground bg-turquoise/25 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.22em]">
                Próxima parada
              </p>

              <p className="font-serif text-cocoa/70 mt-4 text-xl font-light italic leading-snug text-pretty">
                Hoje não estamos na rua… mas a próxima parada já está marcada.
              </p>

              <h2 className="font-serif text-cocoa mt-4 text-3xl font-black leading-[1.05] tracking-tight text-balance sm:text-4xl">
                {today.next.label.replace("-feira", "")}
                <span className="text-rose">,</span> {today.next.location}
              </h2>

              <dl className="mt-5 space-y-3 text-[0.95rem]">
                <div className="flex items-start gap-3">
                  <dt className="sr-only">Horário</dt>
                  <Clock className="text-turquoise mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <dd className="text-cocoa font-semibold">{today.next.hours}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="sr-only">Endereço</dt>
                  <MapPin className="text-turquoise mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <dd className="text-muted-foreground leading-relaxed">
                    {today.next.address}
                    {today.next.addressExtra ? (
                      <>
                        <br />
                        {today.next.addressExtra}
                      </>
                    ) : null}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#rota"
                  className="bg-cocoa text-cocoa-foreground hover:bg-rose flex flex-1 items-center justify-center rounded-full px-6 py-4 text-base font-semibold transition-colors"
                >
                  Ver rota da semana
                </a>
                <a
                  href={directionsUrl(today.next)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-cocoa/20 text-cocoa hover:bg-blush flex flex-1 items-center justify-center gap-2 rounded-full border px-6 py-4 text-base font-semibold transition-colors"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Como chegar
                </a>
              </div>
            </>
          )}
        </motion.div>
      )}
    </div>
  )
}
