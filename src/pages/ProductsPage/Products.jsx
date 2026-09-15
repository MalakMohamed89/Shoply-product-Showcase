import { Refresh } from "iconsax-react";
import ProductCard from "../../components/ProductCard/Card";
import { useState } from "react";

export default function Products() {
  const originalProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium sound quality with 30-hour battery life.",
      price: 149.99,
      rating: 5,
      reviews: 284,
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    },
    {
      id: 2,
      name: "Leather Watch",
      description:
        "Crafted from genuine Italian leather with sapphire crystal.",
      price: 219.0,
      rating: 4,
      reviews: 157,
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Waterproof IPX7, 360° sound, built for adventure.",
      price: 89.95,
      rating: 4,
      reviews: 412,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    },
    {
      id: 4,
      name: "Desk Lamp",
      description:
        "Adjustable color temperature and USB-C charging port.",
      price: 64.0,
      rating: 5,
      reviews: 96,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      description:
        "Compact TKL layout, Cherry MX switches, RGB lighting.",
      price: 129.99,
      rating: 5,
      reviews: 531,
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80",
    },
    {
      id: 6,
      name: "Smart Water Bottle",
      description:
        "Tracks hydration goals, LED reminders, 24h cold.",
      price: 45.5,
      rating: 4,
      reviews: 73,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    },
  ];

  const [products, setProducts] = useState(originalProducts);

  function deleteFunction(deleteIndex) {
    const newList = [];

    for (const item of products) {
      if (deleteIndex !== item.id) {
        newList.push(item);
      }
    }

    setProducts(newList);
  }

  function restore() {
    setProducts(originalProducts);
  }

  return (
    <main className="py-5">
      <div className="mx-auto w-[90%] px-4">

        {/* Header */}
        <header className="flex items-center justify-between">

          {/* Left */}
          <div>
            <span className="font-bold text-indigo-700">
              Featured
            </span>

            <p className="py-1 text-2xl font-bold">
              Our Products
            </p>

            <span className="text-gray-600">
              {products.length} of 6 items shown

              {products.length === 0 && (
                <span className="text-gray-400">
                  {" "}— refresh to restore all
                </span>
              )}
            </span>
          </div>

          {/* Right */}
          <button
            onClick={restore}
            className="
              flex
              items-center
              gap-2
              text-gray-600
              transition-all
              duration-300
              hover:text-indigo-600
            "
          >
            <Refresh size="16" color="currentColor" />
            <span>Restore all</span>
          </button>

        </header>

        {/* Products / Empty State */}
        {products.length !== 0 ? (

          <section>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  deleteFunction={deleteFunction}
                />
              ))}
            </div>
          </section>

        ) : (

          /* Empty State */
          <div className="flex min-h-105 flex-col items-center justify-center text-center">

            {/* Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
              <i className="fa-solid fa-cube text-2xl text-gray-400"></i>
            </div>

            {/* Title */}
            <p className="mb-2 text-xl font-bold text-gray-800">
              No products left
            </p>

            {/* Description */}
            <span className="mb-7 text-gray-400">
              You've removed all items.
            </span>

            {/* Restore Button */}
            <button
              onClick={restore}
              className="
                rounded-lg
                border
                border-[#432DD7]
                px-6
                py-3
                text-[#432DD7]
                transition-all
                duration-300
                hover:bg-indigo-50
              "
            >
              Restore all products
            </button>

          </div>
        )}
      </div>
    </main>
  );
}