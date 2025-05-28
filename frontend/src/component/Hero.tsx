

const Hero = () => (
  <div className="pt-20 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center text-white">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-baseline gap-1 mb-4 sm:mb-0">
      Eclypse
      <span
        className="text-xs border border-white rounded-full w-6 h-6 flex items-center justify-center relative -top-3"
      >
        R
      </span>
    </h1>
    
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 flex items-center justify-center border border-white rounded-full text-xs">
        c
      </div>
      <p className="text-white text-sm">2025</p>
    </div>
  </div>
);

export default Hero;
