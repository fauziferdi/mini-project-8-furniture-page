import React, { useEffect, useState } from "react";
import { getTestimonial } from "../redux/slices/TestimonialSlice";
import { AppDispatch, RootState } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TestimonnialComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { testimonial, loading, error } = useSelector(
    (state: RootState) => state.testimonial
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getTestimonial(page));
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <Skeleton height={24} width="80%" />

                <div className="flex items-center gap-4 mt-5">
                  <Skeleton circle={true} height={56} width={56} />
                  <div>
                    <Skeleton height={16} width="60%" />
                    <Skeleton height={14} width="50%" />
                  </div>
                </div>

                <Skeleton count={4} height={14} />
              </div>
            </div>

            <div className="flex justify-center">
              <Skeleton height={380} width="80%" />
            </div>
          </div>
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-center text-gray-900 sm:text-3xl md:text-start">
                  What People Are Saying About Us
                </h2>
                <blockquote>
                  <div className="flex items-center gap-4 mt-5">
                    <img
                      alt={testimonial[0]?.name}
                      src={testimonial[0]?.image}
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        {testimonial[0]?.name}
                      </p>
                      <p className="mt-0.5 text-md font-normal text-gray-700">
                        {testimonial[0]?.title}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-md text-gray-700">
                    "{testimonial[0]?.message}"
                  </p>
                </blockquote>
                <div className="mt-8 flex gap-4 items-center justify-center md:justify-start">
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
                    className="rounded-full border p-3  transition hover:bg-green-600 hover:text-white"
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

            <div className="flex justify-center">
              <img
                src="../imgSecondFeatures.png"
                className="rounded w-3/4"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonnialComponent;
