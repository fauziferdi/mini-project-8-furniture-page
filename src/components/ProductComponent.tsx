import React from "react";
import ItemProductComponent from "./ItemProductComponent";
import { AppDispatch, RootState } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/ProductSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(getProduct(page));
  }, [dispatch, page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <section>
      {loading ? (
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <Skeleton height={24} width={200} />
            <Skeleton count={2} height={14} width={300} />
          </div>

          <div className="mt-5 lg:px-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="rounded-lg">
                <Skeleton height={200} />
                <Skeleton height={20} width="80%" />
                <Skeleton height={14} width="60%" />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Skeleton height={36} width={80} />
            <Skeleton height={36} width={80} />
          </div>
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Product
            </h1>

            <p className="mt-4 text-gray-500">
              The products we provide only for you as our service are selected
              from the best products with number 1 quality in the world
            </p>
          </div>

          <div className="mt-5 lg:px-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {product.map((product, index) => (
              <div key={index} className="rounded-lg">
                <ItemProductComponent product={product} />
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-center gap-4">
            <div className=" mt-8 flex gap-4">
              <button
                onClick={handlePrevPage}
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border p-3  transition hover:bg-green-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </button>

              <button
                onClick={handleNextPage}
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border p-3 transition hover:bg-green-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default ProductComponent;
