import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
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
