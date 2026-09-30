import { Atelier } from "@/components/site/Atelier";
import { Categories } from "@/components/site/Categories";
import { Footer } from "@/components/site/Footer";
import { Gifts } from "@/components/site/Gifts";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { InstagramCta } from "@/components/site/InstagramCta";
import { Manifesto } from "@/components/site/Manifesto";
import { ProductRail } from "@/components/site/ProductRail";
import { Services } from "@/components/site/Services";
import { SignatureFeature } from "@/components/site/SignatureFeature";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory text-ink">
        <Hero />
        <Manifesto />
        <ProductRail />
        <SignatureFeature />
        <Categories />
        <Atelier />
        <Gifts />
        <Services />
        <InstagramCta />
      </main>
      <Footer />
    </>
  );
}
