import React from "react";

//buat class functional component  typescript

const SubscribeComponent: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeComponent;
