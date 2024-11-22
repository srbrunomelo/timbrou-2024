import { CTAOnlyCenterText } from "@/ui/widget/landing/cta-only-center-text";
import { FeaturedProducts } from "@/ui/widget/landing/featured-products";
import { Features } from "@/ui/widget/landing/features";
import { Footer } from "@/ui/widget/landing/footer";
import { HeroSection } from "@/ui/widget/landing/hero-section";
import { ImageText } from "@/ui/widget/landing/image-text";
import { Stats } from "@/ui/widget/landing/stats";
import Testimonials from "@/ui/widget/landing/testimonials";
import { TextLeft } from "@/ui/widget/landing/text-left";

export default function Landing() {
  return (
    <main>
    <HeroSection />
    <CTAOnlyCenterText />
    <ImageText />
    <TextLeft />
    <Stats />
    <Features />
    <Testimonials />
    <FeaturedProducts />
    <Footer />
    </main>
  )
}
