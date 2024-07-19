import Image from "next/image";
import Hero from "@/app/_components/homepage-components/hero";
import HomeAbout from "@/app/_components/homepage-components/homeAbout";
import LogoSection from "@/app/_components/homepage-components/logosection";
import Testimonials from "@/app/_components/homepage-components/testimonials";
import Timeline from "@/app/_components/homepage-components/timeline";
import Sechero from "@/app/_components/homepage-components/sechero";
import Features from "@/app/_components/homepage-components/features";
import CTA from "@/app/_components/homepage-components/cta";
import ContactUs from "@/app/_components/homepage-components/contact";
import HomeTestimonials from "@/app/_components/homepage-components/hometestimonials";

const HomePage = () => {
  return (
    <div>
      {/* First Hero Section */}
      <Hero />

      {/*Logo Section */}
      <LogoSection />

      {/* Second Hero Section */}
      <Sechero />

      {/* About Section */}
        <HomeAbout />

      {/* Features Section */}
      <Features />

      <Testimonials />

      {/* Testimonials Section */}
      <HomeTestimonials/>

      <Timeline />

      {/*FAQ Section*/}

      {/* CTA Section */}
      <CTA />

      {/* Contact Section */}
      <ContactUs />

    </div>
  );
};

export default HomePage;
