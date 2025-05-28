

const MediaGrid: React.FC = () => (
  <div className="px-4 sm:px-6 lg:px-8 py-8">
    {/* Top Row */}
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
      {/* Video */}
      <div className="flex-1 h-[350px]">
        <video
          className="w-full h-full object-cover rounded-lg border border-white transition duration-300 ease-in-out"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/gridvideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top Image */}
      <div className="relative group flex-1 h-[350px]">
        <img
          className="w-full h-full object-cover rounded-[5px] transition duration-300 ease-in-out group-hover:blur-sm"
          src="/top.jpg"
          alt="Top"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300 pb-6">
          <span className="text-white text-2xl lg:text-3xl font-semibold text-center px-2">
            Premium wool blend in signature vermilion
          </span>
        </div>
      </div>
    </div>

    {/* Bottom Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* Jacket Image */}
      <div className="relative group h-[300px]">
        <img
          className="w-full h-full object-cover rounded-[5px] transition duration-300 ease-in-out group-hover:blur-sm"
          src="/jacket.jpg"
          alt="Jacket"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300 pb-4">
          <span className="text-white text-xl lg:text-2xl font-semibold text-center px-2">
            Discreet side pockets with clean finish
          </span>
        </div>
      </div>

      {/* Cut Image */}
      <div className="relative group h-[300px]">
        <img
          className="w-full h-full object-cover rounded-[5px] transition duration-300 ease-in-out group-hover:blur-sm"
          src="/cut.jpg"
          alt="Cut"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300 pb-4">
          <span className="text-white text-xl lg:text-2xl font-semibold text-center px-2">
            Hand-cut and assembled in small batches
          </span>
        </div>
      </div>

      {/* Logo Image */}
      <div className="relative group h-[300px]">
        <img
          className="w-full h-full object-cover rounded-[5px] transition duration-300 ease-in-out group-hover:blur-[1px]"
          src="/logo.jpg"
          alt="Logo Design"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <span className="text-white text-3xl font-bold text-center">Elapse</span>
        </div>
      </div>
    </div>
  </div>
);

export default MediaGrid;
