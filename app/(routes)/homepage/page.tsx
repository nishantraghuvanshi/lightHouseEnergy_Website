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
import StatsComponent from "@/app/_components/homepage-components/statcomponent";
import DonutModel from "@/app/_components/donut-module";

const HomePage = () => {
  return (
    <div>
      {/* First Hero Section */}
      <Hero />

      {/*Logo Section */}
      <LogoSection />

      <div>
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl font-bold mb-8">3D Model Integration</h1>
          <div className="w-full flex">
            <DonutModel />
            <div className="bg-slate-600 w-1/2 md:w-1/2 sm:w-1/3 text-white rounded-md p-2 m-1">
              PLaceholder Text
            </div>
          </div>
        </main>
      </div>

      <hr className="border-2 border-black my-8" />

      <div className="w-full flex">
        <Image
          alt="3D Cartoon"
          height={100}
          width={500}
          src="/3D-Cartoon.png"
        />
        <div className="bg-slate-600 w-1/2 md:w-1/2 sm:w-1/3 text-white rounded-md p-2 m-1">
          PLaceholder Text
        </div>
      </div>

      {/* Second Hero Section */}
      <Sechero />

      {/* About Section */}
      <HomeAbout />

      <StatsComponent />

      {/* Features Section */}
      <Features />

      <Testimonials />

      {/* Testimonials Section
      <HomeTestimonials /> */}

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
