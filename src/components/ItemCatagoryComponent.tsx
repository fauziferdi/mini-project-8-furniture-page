import React from "react";

interface ItemCatagoryComponentProps {
  category: {
    title: string;
    image: string;
  };
}

const ItemCatagoryComponent: React.FC<ItemCatagoryComponentProps> = ({
  category,
}) => {
  return (
    <blockquote className="flex h-full flex-col justify-between bg-white shadow-sm">
      <div>
        <a href="#" className="group relative block bg-black">
          <img
            alt={category.title}
            src={category.image}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative flex flex-col justify-center h-full p-32 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"></div>
            </div>
            <p className="text-md text-center uppercase tracking-widest text-white font-bold">
              {category.title}
            </p>
          </div>
        </a>
      </div>
    </blockquote>
  );
};

export default ItemCatagoryComponent;
