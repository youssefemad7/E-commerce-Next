"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaSearch, FaStar, FaTrash } from "react-icons/fa";
import { useAddToWishlist } from "../../hooks/Wishlist/useAddToWishlist";
import { useRemoveFromWishlist } from "../../hooks/Wishlist/useRemoveFromWishlist";
import { useAddToCart } from "../../hooks/Cart/useAddToCart";

import { useUser } from "../../hooks/Auth/useUser";

// const dummyProducts = [
//   {
//     name: "Stylish Shoes",
//     price: 799,
//     discount: 20,
//     rating: 4,
//     imageUrl: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
//   },
//   {
//     name: "Smart Watch",
//     price: 1299,
//     discount: 15,
//     rating: 5,
//     imageUrl: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
//   },
//   {
//     name: "Wireless Headphones",
//     price: 599,
//     discount: 10,
//     rating: 3,
//     imageUrl: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
//   },
//   {
//     name: "Wireless Headphones",
//     price: 599,
//     discount: 10,
//     rating: 3,
//     imageUrl: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
//   },
// ];

export default function CardList({ products = [], hidden }) {
  const { data: user, isLoading: isUserLoading } = useUser();
  const { mutate: AddToWishlist } = useAddToWishlist(user?.uid || "");
  const { mutate: RemoveFromWishlist } = useRemoveFromWishlist(user?.uid || "");
  const { mutate: AddToCart } = useAddToCart(user?.uid || "");

  const handleAddToWishlist = (product) => {
    if (!user?.uid) {
      console.log("You must be logged in to add to wishlist");
      return;
    }
    AddToWishlist({ product });
  };
  const handleRemoveFromWishlist = (product) => {
    if (!user?.uid) {
      console.log("You must be logged in to add to wishlist");
      return;
    }
    RemoveFromWishlist({ productId: product.id });
  };
  const handleAddToCart = (product) => {
    if (!user?.uid) {
      console.log("You must be logged in to add to wishlist");
      return;
    }
    AddToCart({ product, quantity: 1 });
  };

  if (isUserLoading) {
    return <p>Loading user...</p>;
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10 my-card ">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col ">
          <div className="relative w-full h-[250px] bg-white rounded-sm shadow-md overflow-hidden group ">
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}

            <div className="absolute top-[5%] left-[5%] bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-20 w-[24%] text-center">
              -{product.discount}%
            </div>

            <div className="absolute top-[5%] left-[80%] grid justify-end space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 opcicon">
              {/* Heart */}
              {hidden?.includes("Heart") && (
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="bg-foreground text-background p-2 rounded-full shadow hover:text-red-500 transition cursor-pointer mb-3 w-8 h-8"
                >
                  <FaHeart size={18} />
                </button>
              )}

              {/* Search */}
              {hidden?.includes("Search") && (
                <Link href={`/productdetails/${product.id}`}>
                  <button className="bg-foreground text-background p-2 rounded-full shadow hover:text-red-500 transition cursor-pointer mb-3 w-8 h-8">
                    <FaSearch size={18} />
                  </button>
                </Link>
              )}

              {/* Trash */}
              {hidden?.includes("Trash") && (
                <button
                  onClick={() => handleRemoveFromWishlist(product)}
                  className="bg-foreground text-background p-2 rounded-full shadow hover:text-red-500 transition cursor-pointer mb-3 w-8 h-8"
                >
                  <FaTrash size={18} />
                </button>
              )}
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[15%] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#000] opcicon">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-black text-white py-2 transition font-semibold mt-1 cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          </div>

          <div className="mt-4 ps-[2%]">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.price} EGP</p>
            <div className="flex  mt-1">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  size={14}
                  className={
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
