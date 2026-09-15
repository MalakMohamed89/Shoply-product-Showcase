import techImg from "../../assets/tech.jpg";
import { Star1 } from "iconsax-react";

export default function ProductCard({ item, deleteFunction }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-300 transition-all duration-300 hover:border-[#432DD7]">

      {/* Image */}
      <div className="relative overflow-hidden">

        {/* Badge */}
        {item.badge && (
          <div className="absolute left-4 top-3 z-10 rounded-xl bg-[#432DD7] px-2 pb-1 text-white">
            <span className="text-[12px] font-semibold">
              {item.badge}
            </span>
          </div>
        )}

        {/* Image */}
        <img
          src={item.image || techImg}
          alt={item.name}
          className="h-64 w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Delete Button */}
        <button
          onClick={() => deleteFunction(item.id)}
          className="
            absolute
            right-3
            top-3
            z-10
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white
            text-gray-600
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
            hover:bg-red-50
            hover:text-red-600
          "
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Name + Price */}
        <div className="flex items-center justify-between gap-3 py-2">
          <p className="max-w-[60%] font-bold">
            {item.name}
          </p>

          <span className="font-bold text-[#432DD7]">
            ${item.price}
          </span>
        </div>

        {/* Description */}
        <p className="py-2 text-gray-600">
          {item.description}
        </p>

{/* Rating */}
<div className="flex items-center gap-2 py-2">
  {item.rating == 5 ? 
    <div className="flex gap-1 text-yellow-400">
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>
   : 
    <div className="flex gap-1">
      <i className="fa-solid fa-star text-yellow-400"></i>
      <i className="fa-solid fa-star text-yellow-400"></i>
      <i className="fa-solid fa-star text-yellow-400"></i>
      <i className="fa-solid fa-star text-yellow-400"></i>
      <i className="fa-solid fa-star text-gray-300"></i>
    </div>
  }

  <span className="text-xs text-gray-600">
    ({item.reviews})
  </span>
</div>

        {/* Add to cart */}
        <button
          className="
            mt-3
            w-full
            rounded-lg
            border
            border-[#432DD7]
            px-2
            py-2
            text-[#432DD7]
            transition-all
            duration-300
            hover:bg-indigo-50
          "
        >
          Add to cart
        </button>

      </div>
    </div>
  );
}