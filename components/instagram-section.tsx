import Image from "next/image"
import { InstagramGlyph } from "@/components/instagram-glyph"
import { FEED_IMAGES, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/social"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function InstagramSection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="instagram-title">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-rose text-xs font-bold uppercase tracking-[0.22em]">
              {INSTAGRAM_HANDLE}
            </p>
            <h2
              id="instagram-title"
              className="font-serif text-cocoa mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] font-black leading-[0.9] tracking-tight text-balance"
            >
              Vai uma fatia <span className="text-rose italic font-light">no feed também?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cocoa text-cocoa-foreground hover:bg-rose inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-colors"
            >
              <InstagramGlyph className="size-4" />
              Acompanhar no Instagram
            </a>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" gap={0.07}>
          {FEED_IMAGES.map((image, i) => (
            <StaggerItem
              key={image.src + i}
              className={cn(i === 2 && "col-span-2", i === 5 && "col-span-2 md:col-span-1")}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-[1.25rem]",
                  i === 2 ? "aspect-[2/1]" : "aspect-square",
                )}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
