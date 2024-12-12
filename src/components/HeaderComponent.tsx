import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeader } from "../redux/slices/HeaderSlice";
import { AppDispatch, RootState } from "../redux";
import HeaderDataComponent from "./HeaderDataComponent";

const HeaderComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { header, loading, error } = useSelector(
    (state: RootState) => state.header
  );

  useEffect(() => {
    dispatch(getHeader());
  }, [dispatch]);

  return (
    <header>
      {loading ? (
        <p>Loading header...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <section
            className={`bg-[url(https://ik.imagekit.io/lumoshiveAcademy/Furniture/8f82d2c087c3c1808660cf2b4c6dc4a5.webp)] bg-cover bg-center bg-no-repeat`}
          >
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className=" text-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  {header.title}
                  {/* <span className="sm:block"> Increase Conversion. </span> */}
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-white sm:text-xl/relaxed">
                  {header.description}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="#"
                    className="relative inline-block w-full sm:w-auto"
                  >
                    <span className="absolute inset-0 bg-gray-400 blur-sm"></span>
                    <span className="relative block w-full rounded px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                      Get Started
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full ">
                <HeaderDataComponent />
              </div>
            </div>
          </section>
        </>
      )}
    </header>
  );
};

export default HeaderComponent;
