import About from "@/components/About";
import ContactCta from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import Main from "@/components/Main";

import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Projects />
      <div className="relative z-20">
        <ContactCta />
        <Footer />
      </div>
    </main>
  );
}
