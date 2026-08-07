import Image from "next/image"
import { CITY } from "@/data/schedule"
import { Reveal } from "@/components/reveal"

export function AboutSection() {
  return (
    <section id="sobre" className="bg-cocoa text-cocoa-foreground py-20 md:py-28" aria-labelledby="sobre-title">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-turquoise text-xs font-bold uppercase tracking-[0.22em]">
                Sobre a gente
              </p>
              <h2
                id="sobre-title"
                className="font-serif mt-5 text-[clamp(2.4rem,7vw,5rem)] font-black leading-[0.88] tracking-[-0.03em] text-balance"
              >
                Pode ser bolo?
              </h2>
              <p className="font-serif text-turquoise mt-5 text-2xl font-light italic leading-snug text-pretty md:text-3xl">
                Uma pergunta que fica bem difícil responder com não.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-cocoa-foreground/75 mt-8 max-w-xl text-lg leading-relaxed text-pretty">
                Trabalhamos com fatias generosas, muito recheio e uma rota que leva bolo para
                diferentes pontos de {CITY} durante a semana. Tudo é preparado antes e vai com a
                gente até o ponto do dia.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tl-[7rem]">
              <Image
                src="/images/mousse-chocolate-nobre.png"
                alt="Camadas de chocolate da fatia Mousse de Chocolate Nobre"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
