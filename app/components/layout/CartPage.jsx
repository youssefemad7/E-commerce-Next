"use client";
import Link from "next/link";
import Loading from "../ui/Loading";
import { useCart } from "../../hooks/Cart/useCart";
import { useUser } from "../../hooks/Auth/useUser";
import { useRemoveFromCart } from "../../hooks/Cart/useremoveFromCart";
import { useUpdateCartQuantity } from "../../hooks/Cart/useUpdateCartQuantity";
import { useEffect, useState } from "react";

function CartTable() {
  const [localCart, setLocalCart] = useState([]);

  const { data: user, isLoading: userLoading } = useUser();

  const {
    data: cart,
    isLoading: cartLoading,
    isError,
  } = useCart(user?.uid, {
    enabled: !!user?.uid,
  });

  useEffect(() => {
    if (cart) {
      setLocalCart(cart.map((p) => ({ ...p })));
    }
  }, [cart]);

  const { mutate: removeFromCart } = useRemoveFromCart(user?.uid || "");
  const { mutate: UpdateQuantityCart } = useUpdateCartQuantity(user?.uid || "");

  const handleRemoveFromCart = (productId) => {
    if (!user?.uid) return;
    removeFromCart({ productId });
  };

  const handleQuantityChange = (productId, quantity) => {
    setLocalCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity } : p))
    );
  };

  const handleUpdateCart = () => {
    if (!user?.uid) return;

    UpdateQuantityCart({
      products: localCart.map((p) => ({
        productId: p.id,
        quantity: p.quantity,
      })),
    });
  };

  const Subtotal = Math.floor(
    localCart?.reduce((total, product) => {
      return total + product.price * (product.quantity || 1);
    }, 0)
  );
  const Shipping = Math.floor(Subtotal * 0.03);
  const Total = Subtotal + Shipping;

  if (userLoading || cartLoading) return <Loading />;

  return (
    <div>
      <table className="w-[80%] sm:w-[80%] text-sm text-left border-separate border-spacing-y-[30px] mx-auto">
        <thead className="text-xs uppercase shadow-xl border-b-2 ring-2 ring-white">
          <tr>
            <th className="px-2 py-3 sm:px-6">Product</th>
            <th className="px-2 py-3 sm:px-6">Price</th>
            <th className="px-2 py-3 sm:px-6">Quantity</th>
            <th className="px-2 py-3 sm:px-6">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {localCart?.map((product, index) => (
            <tr
              key={index}
              className="bg-background shadow-xl ring-2 ring-white"
            >
              <td className="px-2 py-4 sm:px-6 flex items-center gap-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                />
                {product.name}
              </td>
              <td className="px-2 py-4 sm:px-6">
                ${Math.floor(product.price)}
              </td>
              <td className="px-2 py-4 sm:px-6">
                <input
                  value={product.quantity || 1}
                  type="number"
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(product.id, Number(e.target.value))
                  }
                  className="w-12 sm:w-[15%] rounded-sm bg-background focus:border-foreground focus:ring-foreground"
                />
              </td>
              <td className="px-2 py-4 sm:px-6">
                ${Math.floor(product.price * (product.quantity || 1))}
              </td>
              <td className="px-2 py-4 sm:px-6">
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <div className="flex w-[80%] sm:w-[80%] mx-auto justify-between">
          <div className="mr-2">
            <Link href="/products">
              <button className="px-8 py-3 bg-background border-2 border-foreground rounded-sm cursor-pointer hover:bg-foreground hover:text-background">
                Return To Shop
              </button>
            </Link>
          </div>
          <div className="ml-2">
            <button
              onClick={handleUpdateCart}
              className="px-8 py-3 bg-background border-2 border-foreground rounded-sm cursor-pointer hover:bg-foreground hover:text-background"
            >
              Update Cart
            </button>
          </div>
        </div>

        <div className="flex w-[80%] sm:w-[80%] mx-auto justify-between mt-[7%] my-card">
          <div className="mr-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="px-6 py-4 mr-5 rounded-sm bg-background border-2 border-foreground mb-2"
            />
            <button className="px-8 py-4 text-background bg-red-500 rounded-sm cursor-pointer hover:bg-foreground hover:text-background mb-2">
              Apply Coupon
            </button>
          </div>
          <div className="w-full max-w-sm bg-background p-6 rounded-sm shadow-lg border-2 border-foreground">
            <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <span className="text-foreground">Subtotal:</span>
              <span className="font-medium">${Subtotal}</span>
            </div>
            <hr className="mt-3 mb-3" />
            <div className="flex justify-between mb-2">
              <span className="text-foreground">Shipping:</span>
              <span className="font-medium">${Shipping}</span>
            </div>
            <hr className="mt-3 mb-3" />
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">${Total}</span>
            </div>
            <Link href="/checkout">
              <button className="ml-[15%] w-[70%] px-4 py-4 bg-red-500 hover:bg-red-600 text-white rounded-sm transition cursor-pointer">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
