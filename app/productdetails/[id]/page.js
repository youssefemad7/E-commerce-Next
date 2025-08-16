// pages/product/[id].jsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Relateditem from "../../components/layout/RealtedItem";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

import { FaHeart, FaStar, FaTruck, FaUndoAlt } from "react-icons/fa";
import Loading from "../../components/ui/Loading";
import { useAddToWishlist } from "../../hooks/Wishlist/useAddToWishlist";
import { useUser } from "../../hooks/Auth/useUser";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: user, isLoading: isUserLoading } = useUser();

  const { mutate: AddToWishlist } = useAddToWishlist(user?.uid || "");
  const handleAddToWishlist = (product) => {
    if (!user?.uid) {
      console.log("You must be logged in to add to wishlist");
      return;
    }
    AddToWishlist({ product });
  };

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);
  const sizes = ["XS", "S", "M", "L", "XL"];

  // ✅ هات بيانات المنتج مرة واحدة
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const ref = doc(db, "products", String(id));
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setProduct({ id: snap.id, ...snap.data() });
        } else {
          setProduct(null);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;
  if (!product) return <div>المنتج غير موجود</div>;

  return (
    <div className="p-10  mt-[10%] productmartop">
      {/* Breadcrumb */}
      <p className="text-sm mb-5 pl-[13%] ">
        Account / {product.category} /
        <span className="font-bold">{product.name}</span>
      </p>

      <div className="grid grid-cols-2 gap-10 pl-[13%] pt-4 productpage">
        {/* Left Images */}
        <div className="flex gap-4 ">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, i) => (
              <Image
                key={i}
                src={product.imageUrl}
                alt="Gamepad"
                width={150}
                height={150}
                className="border rounded cursor-pointer bg-[#F5F5F5]"
              />
            ))}
          </div>
          <Image
            src={product.imageUrl}
            alt="Main Gamepad"
            width={450}
            height={400}
            className="border rounded bg-[#F5F5F5] image"
          />
        </div>

        {/* Right Info */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-yellow-500">
            <span className="flex  mt-1">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  size={22}
                  className={
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
              <span className="pl-5 text-gray-500">
                ({product.rating} Reviews)
              </span>
            </span>
          </p>
          <p className="text-green-600 font-semibold mb-2">
            {product.availabilityStatus}
          </p>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <p className="mb-4 w-[60%] p">{product.description}</p>
          <hr className="mt-5 mb-5 w-[70%]"></hr>
          {/* Colors */}
          <div className="mb-4">
            <span className="mr-2 font-semibold">Colours:</span>
            <label>
              <input
                type="radio"
                name="color"
                value="blue"
                checked={selectedColor === "blue"}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 inline-block rounded-full border  cursor-pointer ${
                  selectedColor === "blue" ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ backgroundColor: "blue" }}
              ></span>
            </label>

            <label className="ml-2">
              <input
                type="radio"
                name="color"
                value="red"
                checked={selectedColor === "red"}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 inline-block rounded-full border cursor-pointer  ${
                  selectedColor === "red" ? "ring-2 ring-red-500" : ""
                }`}
                style={{ backgroundColor: "red" }}
              ></span>
            </label>
          </div>
          {/* Sizes */}
          <div className="mb-4">
            <span className="mr-2 font-semibold">Size:</span>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`border px-3 py-1 rounded mr-2 cursor-pointer ${
                  selectedSize === s
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden w-[20%] btn">
              {/* زرار - */}
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-10 flex items-center justify-center text-black text-lg font-bold hover:bg-gray-100 border-r border-gray-300 cursor-pointer"
              >
                -
              </button>

              <span className="w-14 text-center ">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-10 flex items-center justify-center bg-red-500 text-white text-lg font-bold hover:bg-red-600  cursor-pointer"
              >
                +
              </button>
            </div>

            <button className="bg-red-500 text-white px-6 py-1 rounded cursor-pointer hover:bg-red-600 w-[25%]">
              Buy Now
            </button>

            <button
              onClick={() => handleAddToWishlist(product)}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
            >
              <FaHeart size={18} className="text-gray-600 " />
            </button>
          </div>

          <div className="border p-4 rounded-md space-y-3 bg-white shadow-sm w-[70%] icons">
            {/* Free Delivery */}
            <div className="flex items-center gap-3">
              <FaTruck size={35} className="text-foreground text-xl" />
              <div>
                <span className="font-medium">Free Delivery</span>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Return Delivery */}
            <div className="flex items-center gap-3">
              <FaUndoAlt size={35} className="text-foreground text-xl" />
              <div>
                <span className="font-medium">Return Delivery</span>

                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div>
        <Relateditem />
      </div>
    </div>
  );
}
