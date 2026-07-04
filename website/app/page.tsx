import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import FrameworkSection from "./_components/FrameworkSection";
import WhyKamilyan from "./_components/WhyKamilyan";
import Industries from "./_components/Industries";
import CTABanner from "./_components/CTABanner";
import ContactForm from "./_components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FrameworkSection />
        <WhyKamilyan />
        <Industries />
        <CTABanner />
        <ContactForm />
      </main>
    </>
  );
}
