
const ContactUs = () => {
    return (
      <div>
        <div className="bg-gray-300 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 text-center">
              Have questions or need more information? Get in touch with us.
            </p>
            <div className="mt-8 max-w-lg mx-auto">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full shadow-sm p-2 sm:text-sm border-gray-300 rounded-md"
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
                    className="block w-full shadow-sm p-2 sm:text-sm border-gray-300 rounded-md"
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
                    className="block w-full shadow-sm p-2 sm:text-sm border-gray-300 rounded-md"
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
}

export default ContactUs;