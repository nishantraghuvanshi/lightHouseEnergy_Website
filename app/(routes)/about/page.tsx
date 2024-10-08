import React from "react";
import Image from "next/image";
import TeamSection from "@/app/_components/aboutUs-components/team";

const AboutUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-[url('/windfarmone.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative bg-slate-200 bg-opacity-60 p-20">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 py-5">
                  About Us
                </h1>
                <p className="mt-4 text-lg text-white">
                  Learn about our mission, values, and commitment to
                  sustainability.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="aspect-w-1 aspect-h-1">
                  <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-lg shadow-black shadow-sm">
                    <Image
                      className="rounded-lg overflow-hidden"
                      src="/windfarmone.jpg"
                      alt="Wind Farm"
                      width={700}
                      height={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TeamSection />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              viverra risus et lobortis blandit. Donec et tortor at metus
              vehicula tincidunt vel sit amet urna. Nulla facilisi. Donec vel
              elit vel nisi eleifend tristique.
            </p>
            <h2 className="mt-10 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Curabitur ac purus id nisl consequat efficitur. Etiam id velit ut
              nisi gravida pellentesque. Fusce vitae mi nec mi hendrerit
              pharetra. Proin imperdiet ligula vitae dolor iaculis, eget
              fermentum justo varius.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Vestibulum feugiat ligula nec nulla varius, sit amet venenatis
              turpis eleifend. Suspendisse potenti. Phasellus volutpat, elit id
              tincidunt mollis, justo mauris eleifend leo, ut sagittis dui augue
              eu elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
