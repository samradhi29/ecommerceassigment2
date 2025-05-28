

const HeroVideo: React.FC = () => (
  <div className="mt-10 px-6 flex justify-center">
    <div className="relative w-full max-w-[950px] aspect-[950/360] rounded-lg border border-white overflow-hidden">
      <video
        className="w-[1200px] h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/eco.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-4 right-4 text-white text-xl sm:text-2xl md:text-[30.62px] leading-tight tracking-tight font-normal">
        A silhouette worth remembering
      </div>
    </div>
  </div>
);

export default HeroVideo;
