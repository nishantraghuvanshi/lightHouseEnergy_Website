import Image from "next/image";
import styles from "./components.module.css";

const HomePage = () => {
  return (
    <div >
      {/* First Hero Section */}
      <div className="relative bg-cover bg-center bg-[url('/windfarmone.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
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

      {/* About Section */}
      <div className="bg-gradient-to-r from-zinc-500 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Light House Energy is dedicated to providing sustainable energy
                solutions through cutting-edge wind turbine technology. Our
                commitment to the environment drives our innovation, ensuring a
                greener future for everyone.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:pl-8">
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

      {/* Features Section */}
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

      {/* Testimonials Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by Organizations Worldwide for Sustainable Energy
              Solutions
            </h2>
            <div className="mt-4">
              <button className="bg-white text-black px-4 py-2 rounded-md text-lg font-medium">
                All testimonials
              </button>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-white">
                “Light House Energy helped us reduce our environmental impact
                while saving money on our energy bills. Their customized
                renewable energy solutions have made a significant impact on our
                bottom line.”
              </p>
              <div className="mt-4 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="/windfarmone.jpg"
                  alt="Brian Davis"
                />
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Brian Davis</p>
                  <p className="text-sm text-gray-400">
                    CMO, Trendsetter Styles
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-white">
                “We were impressed with their expertise in renewable energy
                engineering and their commitment to sustainability. Their wind
                turbine solutions have helped us harness the power of wind
                energy, providing a cost-effective and sustainable alternative
                to traditional energy sources.”
              </p>
              <div className="mt-4 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="/windfarmone.jpg"
                  alt="Michael Lee"
                />
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Michael Lee</p>
                  <p className="text-sm text-gray-400">
                    Director, The Online Emporium
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-white">
                “The team at Light House Energy worked closely with us to
                develop a customized solution that met our unique needs. Their
                expertise in renewable solutions has made a significant impact
                on our business, reducing our environmental impact and
                increasing our bottom line.”
              </p>
              <div className="mt-4 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="/windfarmone.jpg"
                  alt="Mark Johnson"
                />
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Mark Johnson</p>
                  <p className="text-sm text-gray-400">
                    Marketing Director, Acme Solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-white">
                “Their commitment to sustainability and environmental
                responsibility is evident in everything they do. We are proud to
                partner with Light House Energy in our efforts to reduce our
                environmental impact and promote renewable energy solutions.”
              </p>
              <div className="mt-4 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="/windfarmone.jpg"
                  alt="Sarah Wilson"
                />
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Sarah Wilson</p>
                  <p className="text-sm text-gray-400">
                    Founder, Greenly Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*FAQ Section*/}

      {/* CTA Section */}
      <div className="bg-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Join the Clean Energy Revolution Today
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Sign up for our newsletter to receive updates on our latest
              projects and initiatives.
            </p>
            <div className="mt-6">
              <button className="bg-white text-black px-4 py-2 rounded-md text-lg font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-center">
            Have questions or need more information? Get in touch with us.
          </p>
          <div className="mt-8 max-w-lg mx-auto">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                   <textarea
                  id="message"
                  name="message"
                  rows={4}  
                  className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
