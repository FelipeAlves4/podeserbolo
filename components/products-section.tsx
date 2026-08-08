"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { FEATURED_FLAVORS, FLAVORS, SLICE_PRICE, type Flavor } from "@/data/flavors"
import { INSTAGRAM_URL } from "@/data/social"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function ProductsSection() {
  const reduced = useReducedMotion()

  return (
    <section id="sabores" className="bg-blush/45 overflow-hidden py-20 md:py-28" aria-labelledby="sabores-title">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-3xl">
            <p className="text-rose text-xs font-bold uppercase tracking-[0.22em]">Sabores</p>
            <h2 id="sabores-title" className="font-serif text-cocoa mt-4 text-[clamp(2.4rem,7vw,4.5rem)] font-black leading-[0.9] tracking-tight text-balance">
              Tem sabor para todo tipo de <span className="text-rose italic font-light">vontade.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed md:text-right">
              Conheça alguns sabores da Pode Ser Bolo?. A seleção pode variar ao longo da semana.
            </p>
          </Reveal>
        </div>

        <motion.ul
          initial={reduced ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="no-scrollbar mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
        >
          {FEATURED_FLAVORS.map((flavor, index) => (
            <li key={flavor.id} className={cn("w-[78vw] shrink-0 snap-center sm:w-[52vw] md:w-auto", index === 1 ? "md:mt-10" : "", index === 2 ? "md:-mt-3" : "")}>
              <FlavorFeature flavor={flavor} priority={index === 0} />
            </li>
          ))}
        </motion.ul>

        <Reveal delay={0.1}>
          <div className="bg-cocoa mt-12 rounded-[2rem] px-6 py-8 text-cocoa-foreground sm:px-8 sm:py-10 md:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-turquoise text-xs font-bold uppercase tracking-[0.22em]">Um cardápio de possibilidades</p>
                <h3 className="font-serif mt-3 text-4xl font-black leading-none tracking-tight sm:text-5xl">Qual seria a sua?</h3>
              </div>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-cocoa-foreground text-cocoa hover:bg-turquoise inline-flex w-full shrink-0 items-center justify-center rounded-full px-6 py-3.5 text-center text-sm font-bold transition-colors sm:w-auto">
                Ver sabores de hoje no Instagram
              </a>
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Sabores já preparados pela Pode Ser Bolo?">
              {FLAVORS.map((flavor) => (
                <li key={flavor.id}>
                  <span className="group inline-flex cursor-default items-center gap-2 py-1 font-serif text-xl font-bold leading-tight text-cocoa-foreground/80 transition-colors hover:text-turquoise sm:text-2xl">
                    <span className="bg-rose size-1.5 shrink-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    {flavor.name}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-9 border-t border-cocoa-foreground/15 pt-5 text-sm leading-relaxed text-cocoa-foreground/70">
              Os sabores do dia podem variar. Toda fatia sai por <span className="font-bold text-cocoa-foreground">R$ {SLICE_PRICE} / fatia</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FlavorFeature({ flavor, priority }: { flavor: Flavor; priority?: boolean }) {
  if (!flavor.image) return null

  return (
    <article className="group">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem]">
        <Image src={flavor.image} alt={`Fatia ${flavor.name}`} fill priority={priority} loading={priority ? undefined : "lazy"} sizes="(max-width: 768px) 80vw, (max-width: 1400px) 32vw, 440px" className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]" />
      </div>
      <h3 className="font-serif text-cocoa mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">{flavor.name}</h3>
    </article>
  )
}
