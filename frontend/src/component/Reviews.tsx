import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

const testimonials = [
  {
    quote: "Understated, but unforgettable. It feels like it was made for me",
    name: "Random Woman",
    location: "NY, USA",
    avatar: "/usagirl.jpg"
  },
  {
    quote: "The quality is exceptional and the fit is perfect. I've never felt more confident",
    name: "Sarah Chen",
    location: "CA, USA", 
    avatar: "/boy.jpg"
  },
  {
    quote: "Minimalist design with maximum impact. This piece transformed my entire wardrobe",
    name: "Emma Johnson",
    location: "London, UK",
    avatar: "/girl.jpg"
  },
];

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm font-light tracking-[0.3em] text-gray-400 uppercase mb-8">
            Our Customers
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Testimonial Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Quote */}
            <div className="mb-12">
              <div className="text-4xl lg:text-5xl font-light leading-tight mb-2">
                <span className="text-6xl lg:text-7xl leading-none">"</span>
                {currentTestimonial.quote}
              </div>
            </div>

            {/* Customer Info */}
            <div>
              <div className="text-lg font-light mb-1">
                {currentTestimonial.name}
              </div>
              <div className="text-sm text-gray-400 tracking-wide">
                {currentTestimonial.location}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 hover:bg-gray-900 rounded-full transition-colors duration-200 touch-manipulation"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-400" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 hover:bg-gray-900 rounded-full transition-colors duration-200 touch-manipulation"
              aria-label="Next testimonial"
            >
              <ChevronLeft size={24} className="text-gray-400 rotate-180" />
            </button>
          </div>

          {/* Navigation Avatars */}
          <div className="flex space-x-4 overflow-x-auto md:flex-col md:space-x-0 md:space-y-4 md:overflow-visible">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                  index === currentIndex
                    ? 'border-white scale-110'
                    : 'border-gray-600 hover:border-gray-400 opacity-70 hover:opacity-100'
                }`}
                aria-label={`View testimonial from ${testimonial.name}`}
              >
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

       
        <div className="flex justify-center space-x-2 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Select testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
