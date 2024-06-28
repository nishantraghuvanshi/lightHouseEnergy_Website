import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      {/* First Hero Section */}
      <div className="relative bg-cover bg-center bg-[url('/windfarmone.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent "></div>
        <div className="relative bg-slate-200 bg-opacity-60 p-20">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 py-5">
                  Powering the Future with Sustainable Wind Energy
                </h1>
                <p className="mt-4 text-lg text-white">
                  Join our waitlist to be part of the clean energy revolution.
                </p>
                <div className="mt-6">
                  <button className="bg-black text-white px-4 py-2 rounded-md text-lg font-medium mr-4">
                    Join
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium">
                    Learn More
                  </button>
                </div>
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

      {/* Second Hero Section */}
      <div className="max-w-full mx-auto py-16 px-4 sm:px-6 lg:px-12 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto p-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:pr-8">
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
            <div className="mt-10 lg:mt-0 lg:pl-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Leading the way in renewable energy, committed to a sustainable
                future.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our mission is to provide clean and reliable wind energy
                solutions that power communities while preserving the
                environment. With a focus on innovation and sustainability, we
                are dedicated to creating a greener future for generations to
                come.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="max-w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24 bg-slate-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            Sustainable Energy: Harness the power of wind to generate clean,
            renewable electricity.
          </h2>
          <div className="grid mt-16 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
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
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Economic Impact: Drive local job creation and stimulate economic
                growth in the community.
              </h3>
              <p className="mt-2 text-gray-500">
                Our wind farm provides sustainable energy, creating jobs and
                boosting the local economy while reducing carbon emissions.
              </p>
              <a href="#" className="mt-4 text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="aspect-w-1 aspect-h-1">
                <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-lg overflow-hidden">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/windfarmone.jpg"
                    alt="Wind Farm"
                    width={700}
                    height={1000}
                  />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Technological Innovation: Embrace cutting-edge wind turbine
                technology for efficient energy production.
              </h3>
              <p className="mt-2 text-gray-500">
                By leveraging advanced wind turbine technology, we ensure
                optimal energy production and environmental sustainability.
              </p>
              <a href="#" className="mt-4 text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="aspect-w-1 aspect-h-1">
                <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-lg overflow-hidden">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/windfarmone.jpg"
                    alt="Wind Farm"
                    width={700}
                    height={1000}
                  />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Community Engagement: Collaborate with local stakeholders to
                foster positive relationships.
              </h3>
              <p className="mt-2 text-gray-500">
                We actively engage with the local community, working together to
                address concerns and maximize the benefits of our wind farm.
              </p>
              <a href="#" className="mt-4 text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default HomePage;
