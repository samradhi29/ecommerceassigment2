import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [buyClicked, setBuyClicked] = useState<boolean>(false);
  const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
  const navigate = useNavigate();

  const handleBuyClick = () => {
    setBuyClicked(true);
    // You can pass data via state if needed
    navigate('/final', { state: { selectedSize } });
  };

  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-white ml-4 md:ml-7 pt-6 text-2xl md:text-3xl">
        Silhouette No. 1 – Vermilion
      </h1>

      <div className="flex flex-col md:flex-row mt-6 md:mt-10 h-auto md:h-[600px] w-full px-4 md:px-8">
        {/* Left: Video Section */}
        <div className="w-full md:w-1/2 h-64 md:h-full bg-black flex items-center justify-center mb-4 md:mb-0">
          <video
            src="/Advideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 bg-white text-black p-6 md:p-8 flex flex-col justify-between rounded-lg">
          {/* Description */}
          <p className="text-sm leading-relaxed mb-4">
            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem,
            this piece captures presence without force. Worn here in the stillness of a city in motion.
          </p>

          {/* Thumbnails */}
          <div className="flex gap-4 mb-6 overflow-x-auto">
            <img src="/demoback.jpg" alt="Back" className="w-[90px] h-[120px] object-cover rounded-md border" />
            <img src="/demofull.jpg" alt="Front" className="w-[90px] h-[120px] object-cover rounded-md border" />
            <img src="/demoside.jpg" alt="Side" className="w-[90px] h-[120px] object-cover rounded-md border" />
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">₹ 7,999</h3>
            <p className="text-sm text-gray-600">MRP incl. of all taxes</p>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">
              Please select a size
              <span className="underline text-gray-500 ml-2 cursor-pointer hover:text-black">
                Size chart
              </span>
            </p>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 rounded text-sm transition ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'border-gray-400 text-black hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="flex-1 border border-black py-3 rounded hover:bg-black hover:text-white transition">
              Add to Cart
            </button>
            <button
              onClick={handleBuyClick}
              className={`flex-1 py-3 rounded transition ${
                buyClicked ? 'bg-orange-500 text-white' : 'bg-black text-white hover:opacity-90'
              }`}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
