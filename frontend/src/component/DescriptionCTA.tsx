

const DescriptionCTA = () => {
  return (
    <div className="relative px-4 sm:px-6 py-10 sm:py-16 flex flex-col items-start">
      <div className="max-w-4xl">
        <div className="text-white space-y-6 sm:space-y-8">
          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light leading-snug">
            Rooted in a philosophy of <span className="italic font-extralight">quiet luxury</span>, our garments are designed to speak softly in cut, in movement, in presence.
          </h2>

          <div className="pt-2 sm:pt-4">
            <a
              href="#"
              className="group inline-flex items-center text-white text-base sm:text-lg font-light tracking-wide border-b border-white/30 pb-1 hover:border-white transition-all duration-300 ease-out"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                Learn more about Eclypse
              </span>
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </a>
          </div>
        </div>

        
        <div className="absolute top-1/4 right-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-white/3 to-transparent rounded-full blur-2xl opacity-30 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default DescriptionCTA;
