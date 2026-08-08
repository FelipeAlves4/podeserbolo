"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { SLICE_PRICE } from "@/data/flavors"
import { Reveal } from "@/components/reveal"

export function SliceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", reduced ? "-4%" : "6%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, reduced ? 1.06 : 1])

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28"
      aria-labelledby="fatia-title"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-[2.5rem] rounded-bl-[7rem]">
            <motion.div style={{ y, scale }} className="relative aspect-[4/5] w-full">
              <Image
                src="/images/fatia-generosa-real.png"
                alt="Fatia generosa com cobertura, servida em embalagem"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          <div>
            <Reveal>
              <h2
                id="fatia-title"
                className="font-serif text-cocoa text-[clamp(3rem,10vw,7rem)] font-black leading-[0.85] tracking-[-0.03em]"
              >
                Uma fatia.
                <br />
                <span className="text-rose">R$ {SLICE_PRICE}.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="font-serif text-cocoa/70 mt-8 text-2xl font-light italic leading-snug text-pretty md:text-3xl">
                Mas chamar de fatia talvez seja pouco.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-10 space-y-4">
                {[
                  "Generosa no tamanho.",
                  "Generosa no recheio.",
                  "Do jeito Pode Ser Bolo?.",
                ].map((line, i) => (
                  <li
                    key={line}
                    className="border-cocoa/10 flex items-baseline gap-4 border-b pb-4 last:border-b-0"
                  >
                    <span
                      className="bg-turquoise size-2 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                    <span
                      className={
                        i === 2
                          ? "font-serif text-cocoa text-xl font-bold md:text-2xl"
                          : "text-cocoa text-xl font-medium md:text-2xl"
                      }
                    >
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
