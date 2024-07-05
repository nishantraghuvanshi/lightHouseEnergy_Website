import React from "react";
import Image from "next/image";

const ProjectsPage = () => {
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
                  Our Projects
                </h1>
                <p className="mt-4 text-lg text-white">
                  Explore our latest projects in renewable energy and
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="aspect-w-1 aspect-h-1">
              <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-lg shadow-black shadow-sm">
                <Image
                  className="rounded-lg overflow-hidden"
                  src="/windfarmone.jpg"
                  alt="Project 1"
                  width={700}
                  height={1000}
                />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Project Title 1
            </h3>
            <p className="mt-2 text-gray-500">
              Description of Project 1. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <a href="#" className="mt-4 text-blue-600 hover:underline">
              Learn More
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="aspect-w-1 aspect-h-1">
              <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-lg overflow-hidden">
                <Image
                  className="rounded-lg overflow-hidden"
                  src="/windfarmone.jpg"
                  alt="Project 2"
                  width={700}
                  height={1000}
                />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Project Title 2
            </h3>
            <p className="mt-2 text-gray-500">
              Description of Project 2. Fusce vitae mi nec mi hendrerit
              pharetra.
            </p>
            <a href="#" className="mt-4 text-blue-600 hover:underline">
              Learn More
            </a>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="aspect-w-1 aspect-h-1">
              <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-lg overflow-hidden">
                <Image
                  className="rounded-lg overflow-hidden"
                  src="/windfarmone.jpg"
                  alt="Project 3"
                  width={700}
                  height={1000}
                />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Project Title 3
            </h3>
            <p className="mt-2 text-gray-500">
              Description of Project 3. Curabitur ac purus id nisl consequat
              efficitur.
            </p>
            <a href="#" className="mt-4 text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
