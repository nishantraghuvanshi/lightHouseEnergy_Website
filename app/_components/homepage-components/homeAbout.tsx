import Image from 'next/image'

const HomeAbout = () => {
    return (
      <div className="home-about">
        <div className="bg-gradient-to-r from-zinc-500 to-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:pr-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  About Us
                </h2>
                <p className="mt-4 text-lg text-white">
                  Light House Energy is dedicated to providing sustainable
                  energy solutions through cutting-edge wind turbine technology.
                  Our commitment to the environment drives our innovation,
                  ensuring a greener future for everyone.
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
      </div>
    );
}

export default HomeAbout