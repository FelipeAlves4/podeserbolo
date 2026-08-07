import { Wordmark } from "@/components/wordmark"
import { CITY } from "@/data/schedule"
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/social"

const LINKS = [
  { label: "Hoje", href: "#hoje" },
  { label: "Sabores", href: "#sabores" },
  { label: "Nossa Rota", href: "#rota" },
  { label: "Sobre", href: "#sobre" },
]

export function SiteFooter() {
  return (
    <footer className="bg-cocoa text-cocoa-foreground py-14">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Wordmark className="h-16 w-16" />
            <p className="text-cocoa-foreground/60 mt-3 text-sm font-medium uppercase tracking-[0.18em]">
              {CITY}
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cocoa-foreground/75 hover:text-turquoise text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cocoa-foreground/75 hover:text-turquoise text-sm font-semibold transition-colors"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="border-cocoa-foreground/15 mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-cocoa-foreground/45 text-xs leading-relaxed">
            Conceito não oficial desenvolvido para apresentação.
          </p>
          <p className="text-cocoa-foreground/45 text-xs">{INSTAGRAM_HANDLE}</p>
        </div>
      </div>
    </footer>
  )
}
