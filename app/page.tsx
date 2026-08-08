import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TodayPanel } from "@/components/today-panel"
import { RouteSection } from "@/components/route-section"
import { ProductsSection } from "@/components/products-section"
import { SliceSection } from "@/components/slice-section"
import { CravingSection } from "@/components/craving-section"
import { HowItWorks } from "@/components/how-it-works"
import { AboutSection } from "@/components/about-section"
import { InstagramSection } from "@/components/instagram-section"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <section className="relative -mt-2 pb-2 md:-mt-4 md:pb-4" aria-label="Onde estamos hoje">
          <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:max-w-2xl">
            <TodayPanel />
          </div>
        </section>
        <RouteSection />
        <ProductsSection />
        <SliceSection />
        <CravingSection />
        <HowItWorks />
        <AboutSection />
        <InstagramSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
