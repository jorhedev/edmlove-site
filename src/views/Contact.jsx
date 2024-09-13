export default function Contact() {
    return (
      <div className="relative isolate bg-white px-6 py-16 sm:py-20 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-lg text-center py-16 sm:py-20 lg:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
            Contact Us
          </h2>
          <p className="text-lg leading-8 text-gray-600 mb-4">
            PREMIERE PRENSA TOURS
          </p>
          <p className="text-lg leading-8 text-gray-600 mb-4">
            <a
              href="mailto:contact.edmlove@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              contact.edmlove@gmail.com
            </a>
          </p>
          <div className="mt-4">
            <a
              href="https://wa.me/5215652866325"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-600"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }
  