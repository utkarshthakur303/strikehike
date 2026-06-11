import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ProductsSection } from "@/components/ProductsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { AISection } from "@/components/AISection";
import { LeadingFinancial } from "@/components/LeadingFinancial";
import { Testimonials } from "@/components/Testimonials";
import { BuildIntegrate } from "@/components/BuildIntegrate";
import { NewsSection } from "@/components/NewsSection";
import { MakeGreat } from "@/components/MakeGreat";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ProductsSection />
        <SolutionsSection />
        <AISection />
        <LeadingFinancial />
        <Testimonials />
        <BuildIntegrate />
        <NewsSection />
        <MakeGreat />
      </main>
      <Footer />
    </>
  );
}
