"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

export function CravingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", reduced ? "-6%" : "6%"])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[88svh] items-center overflow-hidden py-24"
      aria-label="Tem dias que pedem bolo"
    >
      <motion.div style={{ y }} className="absolute inset-[-8%]" aria-hidden="true">
        <Image
          src="/images/brigadeiro-de-panela.png"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="bg-cocoa/55 absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="font-serif text-cocoa-foreground space-y-2 leading-[0.88] tracking-[-0.03em]">
          <Line delay={0} className="text-[clamp(2.6rem,9vw,7rem)] font-black">
            Tem dias que pedem bolo.
          </Line>
          <Line delay={0.12} className="text-turquoise text-[clamp(1.8rem,6vw,4.5rem)] font-light italic">
            Na verdade…
          </Line>
          <Line delay={0.24} className="text-[clamp(3rem,11vw,9rem)] font-black">
            quase todos.
          </Line>
        </div>
      </div>
    </section>
  )
}

function Line({
  children,
  delay,
  className,
}: {
  children: string
  delay: number
  className?: string
}) {
  const reduced = useReducedMotion()

  return (
    <motion.p
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18% 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  )
}
