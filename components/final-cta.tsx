"use client"

import { motion, useReducedMotion } from "framer-motion"
import { INSTAGRAM_URL } from "@/data/social"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-rose text-rose-foreground relative overflow-hidden py-24 md:py-36" aria-labelledby="cta-title">
      <div
        aria-hidden="true"
        className="bg-turquoise/25 absolute -bottom-24 -left-16 size-[26rem] rounded-full blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 text-center md:px-8">
        <Reveal>
          <p className="font-serif text-[clamp(2.4rem,9vw,6rem)] font-light italic leading-none">
            E aí…
          </p>
        </Reveal>

        <Reveal delay={0.18} y={34}>
          <h2
            id="cta-title"
            className="font-serif mt-6 text-[clamp(3.2rem,15vw,11rem)] font-black leading-[0.82] tracking-[-0.04em]"
          >
            Pode ser bolo?
          </h2>
        </Reveal>

        <Reveal delay={0.34}>
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cocoa text-cocoa-foreground mt-12 inline-flex items-center gap-2 rounded-full px-10 py-5 text-lg font-bold"
            whileHover={reduced ? undefined : { scale: 1.04, rotate: -1.5 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            Pode sim.
          </motion.a>
        </Reveal>

        <Reveal delay={0.42}>
          <p className="mt-6 text-sm font-medium opacity-80">
            Ou{" "}
            <a href="#hoje" className="underline decoration-2 underline-offset-4">
              veja onde estamos hoje
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
