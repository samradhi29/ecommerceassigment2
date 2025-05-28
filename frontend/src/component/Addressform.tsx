import React, { useState } from 'react';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Addressform = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNo: '',
    state: '',
    zip: '',
  });
const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/address', formData);
      alert('Address saved successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        streetAddress: '',
        aptNo: '',
        state: '',
        zip: '',
      });
    } catch (err) {
      alert('Failed to save address.');
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mt-10">
          <button className="flex items-center justify-center w-8 h-8 hover:bg-blue-50 transition-colors" onClick={()=>navigate("/")}>
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Shipping Address</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-4 lg:p-10">
        {/* Address Form */}
        <form
          onSubmit={handleSubmit}
          className="border rounded-md p-6 w-full max-w-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
            </div>
            <h2 className="font-semibold text-lg">Add New Address</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Apt Number</label>
              <input
                type="text"
                name="aptNo"
                value={formData.aptNo}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Zip</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="border px-6 py-2 rounded w-full sm:w-auto"
              onClick={() =>
                setFormData({
                  firstName: '',
                  lastName: '',
                  streetAddress: '',
                  aptNo: '',
                  state: '',
                  zip: '',
                })
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto hover:bg-gray-800"
            >
              Save This Address
            </button>
          </div>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-md p-6 w-full max-w-md text-sm text-gray-800 mt-8 lg:mt-0">
          <p className="mb-4 text-xs">
            By placing your order, you agree to our company{' '}
            <span className="underline cursor-pointer">Privacy policy</span> and{' '}
            <span className="underline cursor-pointer">Conditions of use</span>.
          </p>

          <div className="border-t border-gray-300 my-4" />

          <div className="space-y-2 mb-6">
            <h3 className="font-semibold text-base">Order Summary</h3>
            <div className="flex justify-between">
              <span>Items - Silhouette No. 1 – Vermilion</span>
              <span>7,999</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping and handling:</span>
              <span>200</span>
            </div>
            <div className="flex justify-between">
              <span>Before tax:</span>
              <span>6,599</span>
            </div>
            <div className="flex justify-between">
              <span>Tax Collected:</span>
              <span>1,400</span>
            </div>
          </div>

          <div className="border-t border-gray-300 my-4" />

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>

          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Addressform;
