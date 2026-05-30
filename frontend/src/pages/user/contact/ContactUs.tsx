import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import PartnershipSection from "@/components/contact/PartnershipSection";
import FAQSection from "@/components/contact/FAQSection";
// import FinalCTA from "@/components/contact/FinalCTA";

export default function ContactUs() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {/* HERO */}
      <ContactHero />

      {/* CONTACT CARD */}
      <section className="-mt-5 relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <ContactForm />
      </section>

      {/* PARTNERSHIP + MISSION + LOCATION */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-5">
        <PartnershipSection />
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-5">
        <FAQSection />
      </section>

      {/* CTA */}
      {/* <section className="mt-10">
        <FinalCTA />
      </section> */}
    </div>
  );
}