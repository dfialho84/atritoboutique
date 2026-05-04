import { Hero } from "./components/Hero";
import { ValueProps } from "./components/ValueProps";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { HowItWorks } from "./components/HowItWorks";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <ValueProps />
      <About />
      <Gallery />
      <Testimonials />
      <HowItWorks />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
