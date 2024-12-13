import React from "react";
import imgFitures from "../assets/image/imgFirstFeatures.jpg";

const ServiceFirstComponent: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:mt-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="flex justify-center">
            <div className="flex justify-center max-h-80">
              <img
                src={imgFitures}
                className="rounded w-3/4 object-cover"
                alt="img features"
              />
            </div>
          </div>
          <div className="max-w-lg md:max-w-none ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We Create Your Home <br />
              More Aestetic
            </h2>

            <p className="my-4 max-w-md">
              Furnitre power is a software as services for multiperpose business
              management system,
            </p>
            <div>
              <ul className="list-none">
                <li className="flex items-start">
                  <svg
                    className="w-7 h-7 mr-2 mt-1"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Ic_chechlist">
                      <path
                        id="Shape"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.55469 16.0001C3.55469 9.12723 9.12626 3.55566 15.9991 3.55566C19.2996 3.55566 22.4649 4.86677 24.7987 7.20056C27.1325 9.53434 28.4436 12.6996 28.4436 16.0001C28.4436 22.873 22.872 28.4446 15.9991 28.4446C9.12626 28.4446 3.55469 22.873 3.55469 16.0001ZM15.6379 20.617L21.8602 14.3948C22.3481 13.9068 22.3481 13.1157 21.8602 12.6277C21.3722 12.1397 20.581 12.1397 20.093 12.6277L14.7544 17.9788L11.9046 15.1166C11.5889 14.8009 11.1289 14.6776 10.6976 14.7932C10.2664 14.9087 9.92963 15.2455 9.81409 15.6767C9.69855 16.1079 9.82183 16.568 10.1375 16.8837L13.8708 20.617C14.1045 20.8526 14.4226 20.9851 14.7544 20.9851C15.0862 20.9851 15.4043 20.8526 15.6379 20.617Z"
                        fill="#23262F"
                      />
                    </g>
                  </svg>
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Valuation Services
                    </h3>
                    <p>
                      Sometimes features require a short description. This can
                      be detailed description
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-7 h-7 mr-2 mt-1"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Ic_chechlist">
                      <path
                        id="Shape"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.55469 16.0001C3.55469 9.12723 9.12626 3.55566 15.9991 3.55566C19.2996 3.55566 22.4649 4.86677 24.7987 7.20056C27.1325 9.53434 28.4436 12.6996 28.4436 16.0001C28.4436 22.873 22.872 28.4446 15.9991 28.4446C9.12626 28.4446 3.55469 22.873 3.55469 16.0001ZM15.6379 20.617L21.8602 14.3948C22.3481 13.9068 22.3481 13.1157 21.8602 12.6277C21.3722 12.1397 20.581 12.1397 20.093 12.6277L14.7544 17.9788L11.9046 15.1166C11.5889 14.8009 11.1289 14.6776 10.6976 14.7932C10.2664 14.9087 9.92963 15.2455 9.81409 15.6767C9.69855 16.1079 9.82183 16.568 10.1375 16.8837L13.8708 20.617C14.1045 20.8526 14.4226 20.9851 14.7544 20.9851C15.0862 20.9851 15.4043 20.8526 15.6379 20.617Z"
                        fill="#23262F"
                      />
                    </g>
                  </svg>
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Development of Furniture Modelss
                    </h3>
                    <p>
                      Sometimes features require a short description. This can
                      be detailed description
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFirstComponent;
