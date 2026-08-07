"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { PRODUCTS, SLICE_PRICE, type Product } from "@/data/products"
import { INSTAGRAM_URL } from "@/data/social"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function ProductsSection() {
  const reduced = useReducedMotion()

  return (
    <section id="sabores" className="bg-blush/45 py-20 md:py-28" aria-labelledby="sabores-title">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-rose text-xs font-bold uppercase tracking-[0.22em]">Sabores</p>
            <h2
              id="sabores-title"
              className="font-serif text-cocoa mt-4 text-[clamp(2.4rem,7vw,4.5rem)] font-black leading-[0.9] tracking-tight text-balance"
            >
              O que vai ser <span className="text-rose italic font-light">hoje?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed md:text-right">
              Uma seleção visual dos sabores identificados nas fotos da marca.
            </p>
          </Reveal>
        </div>

        <motion.ul
          initial={reduced ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="no-scrollbar mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-14 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-7"
        >
          {PRODUCTS.map((product, index) => (
            <li
              key={product.id}
              className={cn(
                "w-[78vw] shrink-0 snap-center sm:w-[52vw] md:w-auto",
                index === 1 ? "md:mt-10" : "",
                index === 2 ? "md:-mt-3" : "",
              )}
            >
              <ProductCard product={product} priority={index === 0} />
            </li>
          ))}
        </motion.ul>

        <Reveal delay={0.05}>
          <div className="border-cocoa/10 mt-12 flex flex-col gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed text-pretty">
              Os sabores são preparados em quantidades limitadas e podem acabar ao longo da noite.
              Toda fatia sai por <span className="text-cocoa font-bold">R$ {SLICE_PRICE}</span>.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-cocoa/20 text-cocoa hover:bg-cocoa hover:text-cocoa-foreground inline-flex shrink-0 items-center justify-center rounded-full border px-6 py-3.5 text-sm font-bold transition-colors"
            >
              Ver novidades no Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem]">
        <Image
          src={product.image}
          alt={`Fatia ${product.name}`}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 768px) 80vw, (max-width: 1400px) 46vw, 360px"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="font-serif text-cocoa text-2xl font-bold leading-tight tracking-tight md:text-3xl">
          {product.name}
        </h3>
        <p className="text-cocoa shrink-0 whitespace-nowrap text-sm font-bold">
          R$ {product.price}
          <span className="text-muted-foreground font-medium"> /fatia</span>
        </p>
      </div>
    </article>
  )
}
