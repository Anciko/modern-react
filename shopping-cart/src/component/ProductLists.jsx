import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function ProductLists() {
  const { products, isLoading, error } = useProducts()
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {isLoading && "Loading....."}
      {error && <p>{error}</p>}
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductLists;
