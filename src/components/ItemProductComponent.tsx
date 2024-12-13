import React from "react";
import { Link } from "react-router-dom";

interface ItemProductComponentProps {
  product: {
    id: number;
    title: string;
    image: string;
    price: number;
    price_after_discount: number | null;
  };
}

const ItemProductComponent: React.FC<ItemProductComponentProps> = ({
  product,
}) => {
  return (
    <div>
      <Link to="#" className="group relative block overflow-hidden">
        <div className="relative w-full h-64 overflow-hidden border border-gray-100 bg-white p-6 sm:h-72">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="relative bg-white p-6">
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            {product.title}
          </h3>
          <div className="flex gap-2">
            <p className="mt-1.5 text-sm text-gray-700">${product.price}</p>
            {product.price_after_discount && (
              <p className="mt-1.5 text-sm text-gray-500 line-through">
                ${product.price}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ItemProductComponent;
