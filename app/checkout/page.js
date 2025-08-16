import CheckoutPayment from "../components/layout/CheckoutPayment";

export const metadata = {
  title: "Checkout",
  description: "Checkout page for the e-commerce application",
};
function checkout() {
  return (
    <div className="">
      <div className="flex items-center gap-4 mb-6 pl-[9%] pr-[7%] pt-[8%] ">
        Account / <span>My Account</span> /
        <span className="font-bold">Checkout</span>
      </div>
      <div className="grid grid-cols-4 w-[90%] mx-auto gap-6 mycheck ">
        <div className="col-span-2 pl-[9%] pr-[7%] pt-[6%]">
          <h2 className="text-4xl font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full bg-border border-muted rounded-md shadow-sm focus:border-foreground focus:ring-foreground"
                placeholder=""
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Company Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full bg-border border-muted rounded-md shadow-sm focus:border-foreground focus:ring-foreground"
                placeholder=" "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Street Address
              </label>
              <input
                type="text"
                className="mt-1 block w-full bg-border border-muted rounded-md shadow-sm focus:border-foreground focus:ring-foreground"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="number"
                className="mt-1 block w-full bg-border border-muted rounded-md shadow-sm focus:border-foreground focus:ring-foreground"
                placeholder=" "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Town/City
              </label>
              <input
                type="text"
                className="mt-1 block w-full bg-border border-muted rounded-md shadow-sm focus:border-foreground focus:ring-foreground"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Phone Number
              </label>
              <input
                type="number"
                className="mt-1 block w-full bg-border border-muted rounded-md shadow-sm focus:border-foreground focus:ring-foreground"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Email Address*
              </label>
              <input
                type="email"
                className="mt-1 block w-full bg-border border-muted rounded-md shadow-sm focus:border-foreground focus:ring-foreground"
                placeholder=" "
                required
              />
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-2 appearance-none focus:outline-none checked:bg-red-500 "
                id="save-info"
                name="save-info"
                required
              />
              <h2 className="inline-block text-sm font-medium text-foreground">
                Save this information for faster check-out next time
              </h2>
            </div>
          </form>
        </div>
        <CheckoutPayment />
      </div>
    </div>
  );
}

export default checkout;
