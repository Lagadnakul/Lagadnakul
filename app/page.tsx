import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Research } from "@/components/sections/Research";
import { Skills } from "@/components/sections/Skills";
import { Background } from "@/components/sections/Background";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Dock } from "@/components/ui/dock";

export default function Home() {
  return (
    <div className="pb-28">
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Work />
        <Research />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </div>
  );
}
