import { Hero } from "./components/Hero";
import { ValueProps } from "./components/ValueProps";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { HowItWorks } from "./components/HowItWorks";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { SnapSection } from "./components/SnapSection";

export default function Home() {
    return (
        <main className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
            <SnapSection>
                <Hero />
            </SnapSection>
            <SnapSection>
                <ValueProps />
            </SnapSection>
            <SnapSection>
                <About />
            </SnapSection>
            <SnapSection>
                <Gallery />
            </SnapSection>
            <SnapSection>
                <Testimonials />
            </SnapSection>
            <SnapSection>
                <HowItWorks />
            </SnapSection>
            <SnapSection>
                <Contact />
            </SnapSection>
            <SnapSection>
                <CTA />
            </SnapSection>
            <Footer />
        </main>
    );
}
