import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CoreExpertise from "@/components/CoreExpertise";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Software from "@/components/Software";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CoreExpertise />
        <ProjectShowcase />
        <About />
        <Skills />
        <Software />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
