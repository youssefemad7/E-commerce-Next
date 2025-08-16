"use client";

import { useProducts } from "../../hooks/Products/useProducts";
import CardList from "../ui/CardList";
import Loading from "../ui/Loading";

function Products() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <Loading />;

  if (isError) return <p>Failed to load products</p>;
  return (
    <div className="w-[85%] pl-[13%] pt-[3%]">
      <div key={products.id} className=" ">
        <CardList products={products} hidden={["Heart", "Search"]} />
      </div>
    </div>
  );
}

export default Products;
