import CartTable from "../components/layout/CartPage";
import CartPage from "../components/layout/CartPage";

export const metadata = {
  title: "Cart",
  description: "View and manage items in your cart",
};

function cart() {
  return (
    <div className="">
      <div className="flex items-center gap-4 mb-6 pl-[9%] pr-[7%] pt-[6%]">
        Home / <span className="font-bold">Cart</span>
      </div>
      <CartTable />
    </div>
  );
}

export default cart;
