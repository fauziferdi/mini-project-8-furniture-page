import React from "react";

const ServiceSecondComponent: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="flex justify-center">
            <div className="max-w-lg md:max-w-none ">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
                The Best Furniture Manufacturer of your choice
              </h2>

              <p className="mt-4 text-gray-700">
                Furnitre power is a software as services for multiperpose
                business management system, expecially for them who are running
                two or more business exploree the future Furnitre power is a
                software as services \
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="../imgSecondFeatures.png"
              className="rounded w-3/4"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSecondComponent;
