import React from "react";
import ItemProductComponent from "./ItemProductComponent";
import { AppDispatch, RootState } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/ProductSlice";

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
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <div className="mt-5 lg:px-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {product.map((product, index) => (
              <div key={index} className="rounded-lg">
                <ItemProductComponent product={product} />
              </div>
            ))}
          </div>
          {/* BUATKAN PAGINATION DISINI */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductComponent;
