//buat class functional component
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux";
import { getHeaderData } from "../redux/slices/DataHeaderSlice";

const HeaderDataComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { headerData, loading, error } = useSelector(
    (state: RootState) => state.headerData
  );

  useEffect(() => {
    dispatch(getHeaderData());
  }, [dispatch]);

  return (
    <header>
      {loading ? (
        <p>Loading header...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {/* <p>{headerData.experience}</p>
          <p>{headerData.country}</p>
          <p>{headerData.sold}</p>
          <p>{headerData.variant}</p> */}
          <div className="mx-auto max-w-screen-xl bg-greenCstm px-4 py-3 rounded-3xl ">
            <dl className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100  sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-white">
                  Year Experience
                </dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">
                  {headerData.experience}
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-white">
                  Opened in the country
                </dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">
                  {headerData.country}
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-white">
                  Furniture sold
                </dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">
                  {headerData.sold}
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-white">
                  Variant Furniture
                </dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">
                  {headerData.variant}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </header>
  );
};
export default HeaderDataComponent;
