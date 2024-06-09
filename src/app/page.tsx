import About from "@/containers/home-page/About";
import ContactCta from "@/containers/home-page/ContactCta";
import { Footer } from "@/components/Footer";
import Main from "@/containers/home-page/Main";

import Projects from "@/containers/home-page/Projects";

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Projects />
      <div className="md:relative md:z-20">
        <ContactCta />
        <Footer />
      </div>
    </main>
  );
}
