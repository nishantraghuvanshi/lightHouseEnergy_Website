import Image from "next/image";

const Sechero = () => {
    return (
      <div>
        <div className="max-w-full mx-auto py-16 px-4 sm:px-6 lg:px-12 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto p-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:pr-8">
                <div className="w-full bg-gray-200 flex justify-center items-center rounded-lg shadow-black shadow-sm">
                  <Image
                    className="rounded-lg overflow-hidden object-cover"
                    src="/windfarmone.jpg"
                    alt="Wind Farm"
                    layout="responsive"
                    width={700}
                    height={1000}
                  />
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:pl-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Leading the way in renewable energy, committed to a
                  sustainable future.
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
      </div>
    );
    }

export default Sechero;