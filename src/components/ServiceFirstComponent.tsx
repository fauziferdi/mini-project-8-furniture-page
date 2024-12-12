import React from "react";

const ServiceFirstComponent: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="flex justify-center">
            <div className="flex justify-center max-h-80">
              <img
                src="../imgFirstFeatures.jpg"
                className="rounded w-3/4 object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="max-w-lg md:max-w-none ">
            <h2 className="text-2xl font-semibold sm:text-4xl">
              We Create your home more aestetic
            </h2>

            <p className="mt-4 ">
              Furnitre power is a software as services for multiperpose business
              management system,
            </p>
            <div>
              <h3 className="text-2xl font-semibold">Valuation Services</h3>
              <p className="">
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold l">
                Development of Furniture Modelss
              </h3>
              <p className="">
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFirstComponent;
