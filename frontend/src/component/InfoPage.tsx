import  { useState } from 'react';

const infoItems = [
  {
    title: 'Size & Fit',
    content: 'This item fits true to size. We recommend you order your regular size.',
  },
  {
    title: 'Delivery & Returns',
    content: 'We offer free shipping and returns on all orders. Delivery typically takes 3-5 business days.',
  },
  {
    title: 'How This Was Made',
    content: 'Crafted with sustainable fabrics, this item was produced in a facility powered by renewable energy.',
  },
];

export default function Info() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-8">
      <div className="w-full max-w-3xl">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
            aria-expanded={openIndex === index}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleIndex(index);
              }
            }}
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-xl font-light">{item.title}</span>
              <span
                className={`text-xl transition-transform duration-300 select-none ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
              >
                ▼
              </span>
            </div>
            <div
              className={`mt-4 text-sm text-gray-400 max-w-2xl overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{ transitionProperty: 'max-height, opacity' }}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
