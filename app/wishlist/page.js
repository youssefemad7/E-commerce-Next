import Foryou from "../components/layout/Foryou";
import Wishlist from "../components/layout/Wishlist";
import CardList from "../components/ui/CardList";
export const metadata = {
  title: "Wishlist",
  description: "View and manage your wishlist items",
};

function wishlist() {
  return (
    <div className="bg-background">
      <div>
        <Wishlist />
      </div>
      <div>
        <Foryou />
      </div>
    </div>
  );
}

export default wishlist;
