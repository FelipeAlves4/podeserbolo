"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Wordmark } from "@/components/wordmark"
import { INSTAGRAM_URL } from "@/data/social"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Hoje", href: "#hoje" },
  { label: "Sabores", href: "#sabores" },
  { label: "Nossa Rota", href: "#rota" },
  { label: "Sobre", href: "#sobre" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/85 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="shrink-0" aria-label="Pode ser bolo? — início">
          <Wordmark className="text-xl md:text-2xl" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-cocoa/70 hover:text-cocoa relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-rose after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cocoa/70 hover:text-cocoa text-sm font-medium tracking-wide transition-colors"
          >
            Instagram
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#hoje"
            className="bg-cocoa text-cocoa-foreground hover:bg-rose hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors md:inline-flex"
          >
            Onde estamos hoje?
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="border-cocoa/15 text-cocoa hover:bg-blush flex size-10 items-center justify-center rounded-full border bg-card/70 transition-colors lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-cream fixed inset-0 z-50 flex flex-col lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-8">
              <Wordmark className="text-xl" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="border-cocoa/15 text-cocoa flex size-10 items-center justify-center rounded-full border"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Navegação principal"
              className="flex flex-1 flex-col justify-center gap-2 px-5 pb-16"
            >
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-cocoa border-cocoa/10 border-b py-4 text-4xl font-bold tracking-tight"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.08, duration: 0.4 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-rose py-4 text-4xl font-bold tracking-tight"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
              >
                Instagram
              </motion.a>

              <a
                href="#hoje"
                onClick={() => setOpen(false)}
                className="bg-cocoa text-cocoa-foreground mt-8 rounded-full px-6 py-4 text-center text-base font-semibold"
              >
                Onde estamos hoje?
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
