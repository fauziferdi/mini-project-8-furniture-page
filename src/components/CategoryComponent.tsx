import React, { useRef, useEffect } from "react";
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import ItemCatagoryComponent from "./ItemCatagoryComponent";
import { AppDispatch, RootState } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/slices/CategorySlice";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.category);
  const sliderRef = useRef<HTMLDivElement>(null);
  let slider: KeenSliderInstance | null = null;

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    if (sliderRef.current) {
      slider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 4,
          spacing: 10,
        },
      });
    }

    return () => {
      if (slider) slider.destroy();
    };
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-max px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-lg text-start ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              New In <br /> Store Now
            </h2>
            <p className="my-4 sm:my-10 text-gray-700">
              Get the latest items immediately with promo prices
            </p>
            <div className="flex gap-4">
              <Link className="underline" to="#">
                Check All
              </Link>
              <FaArrowRightLong className="mt-1" />
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {category.map((item, index) => (
                <div key={index} className="keen-slider__slide">
                  <ItemCatagoryComponent category={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryComponent;
