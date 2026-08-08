"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { SLICE_PRICE } from "@/data/flavors"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "8%"])

  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      aria-label="Pode ser bolo?"
    >
      <div
        aria-hidden="true"
        className="bg-blush/70 pointer-events-none absolute -left-32 top-10 size-[28rem] rounded-full blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Coluna tipográfica */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-turquoise-foreground bg-turquoise/25 inline-flex items-center rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em]"
            >
              Fatias em Marília — SP
            </motion.p>

            <h1 className="font-serif text-cocoa mt-6 leading-[0.82] tracking-[-0.03em]">
              <motion.span
                className="block text-[clamp(3.4rem,15vw,9.5rem)] font-light italic"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease }}
              >
                Pode ser
              </motion.span>
              <motion.span
                className="block text-[clamp(4.2rem,19vw,12rem)] font-black"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease }}
              >
                bolo<span className="text-rose">?</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="font-serif text-rose mt-4 text-2xl font-bold italic md:text-3xl"
            >
              Sempre.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <p className="text-muted-foreground max-w-sm text-lg leading-relaxed text-pretty">
                Fatias generosas de bolos e tortas para deixar qualquer dia mais gostoso.
              </p>
              <div className="border-cocoa/15 flex items-baseline border-l-0 sm:border-l sm:pl-6">
                <span className="font-serif text-cocoa text-5xl font-black tracking-tight">
                  R$ {SLICE_PRICE}
                </span>
                <span className="text-muted-foreground ml-2 text-sm font-semibold uppercase tracking-[0.16em]">
                  / fatia
                </span>
              </div>
            </motion.div>
          </div>

          {/* Fotografia protagonista */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] sm:aspect-[5/5]"
            >
              <Image
                src="/images/sonho-de-valsa.png"
                alt="Fatia Sonho de Valsa alta e recheada, com bombom no topo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="bg-rose text-rose-foreground absolute -left-3 bottom-8 flex size-24 rotate-[-8deg] items-center justify-center rounded-full text-center md:-left-8 md:size-28"
              initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <span className="font-serif px-3 text-sm font-bold italic leading-tight">
                fatia
                <br />
                gigante
              </span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
