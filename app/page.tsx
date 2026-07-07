import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <WhatsAppButton />

      <Navbar />

      <Hero />

      <Stats />

      <Services />

      <WhyUs />

      <Process />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />
    </main>
  );
}