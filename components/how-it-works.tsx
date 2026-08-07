import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const STEPS = [
  { n: "1", title: "Veja onde estamos hoje", href: "#hoje" },
  { n: "2", title: "Escolha sua fatia", href: "#sabores" },
  { n: "3", title: "Passe por lá", href: "#rota" },
  { n: "4", title: "Aproveite", href: null },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="como-title">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <h2
            id="como-title"
            className="font-serif text-cocoa text-[clamp(2rem,5.5vw,3.5rem)] font-black leading-[0.95] tracking-tight text-balance"
          >
            Como funciona
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.09}>
          {STEPS.map((step) => (
            <StaggerItem key={step.n}>
              <div className="border-cocoa/15 flex flex-col border-t pt-5">
                <span className="font-serif text-rose text-5xl font-black leading-none">
                  {step.n}
                </span>
                <h3 className="text-cocoa mt-4 text-xl font-semibold leading-snug text-pretty">
                  {step.title}
                </h3>
                {step.href ? (
                  <a
                    href={step.href}
                    className="text-turquoise-foreground hover:text-rose mt-3 text-sm font-bold underline decoration-2 underline-offset-4 transition-colors"
                  >
                    Ir para essa parte
                  </a>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
