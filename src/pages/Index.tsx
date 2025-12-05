import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { DossierCard } from "@/components/DossierCard";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navigation />
      <Hero />
      <Gallery />
      <DossierCard />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
